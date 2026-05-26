import { Helmet } from 'react-helmet-async'
import { useContext, useEffect, useMemo, useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FAQ from '../../components/FAQ'
import Breadcrumbs from '../../components/Breadcrumbs'
import { Link } from '../../components/Link'
import ToolHero from '../../components/tools/ToolHero'
import { BASE_URL } from '../../seo/meta'
import { generateArticleSchema, generateFAQSchema } from '../../seo/schema'
import { clampTextLength, sanitizePastedText } from '../../utils/textSanitize'
import { trackEvent } from '../../utils/analytics'
import { uploadFormDataWithProgress } from '../../utils/upload'
import { ToolSessionContext } from '../../tools/ToolSessionContext.js'

const MIN_LEN = 200
const MAX_LEN = 12000
const MAX_FILE_BYTES = 8 * 1024 * 1024
const ALLOWED_MIME = ['application/pdf', 'image/png', 'image/jpeg']

const fetchWithTimeout = async (url, options, timeoutMs) => {
  const controller = new AbortController()
  const id = setTimeout(() => controller.abort(), timeoutMs)
  try {
    const res = await fetch(url, { ...options, signal: controller.signal })
    return res
  } finally {
    clearTimeout(id)
  }
}

export default function DenialLetterAnalyzer() {
  const session = useContext(ToolSessionContext)
  const [rawText, setRawText] = useState('')
  const [claimType, setClaimType] = useState('')
  const [stateCode, setStateCode] = useState('')
  const [insurer, setInsurer] = useState('')
  const [extraContext, setExtraContext] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [result, setResult] = useState(null)
  const [uploadBusy, setUploadBusy] = useState(false)
  const [uploadPct, setUploadPct] = useState(0)
  const [uploadMsg, setUploadMsg] = useState('')

  useEffect(() => {
    trackEvent('tool_open', { tool: 'denial_letter_analyzer' })
  }, [])

  const faqs = useMemo(
    () => [
      {
        question: 'Is this legal advice?',
        answer:
          'No. This tool provides general, educational guidance based on what you paste. For legal advice, consult a qualified professional in your state.',
      },
      {
        question: 'What kinds of denial letters work best?',
        answer:
          'The best results come from a full written denial or adverse benefit determination that includes the stated reason, dates, and any requested documents.',
      },
      {
        question: 'Can it identify deadlines or timelines?',
        answer:
          'It can surface time-sensitive language it detects (like appeal windows or filing deadlines), but you must confirm deadlines in your policy, plan documents, and the denial letter itself.',
      },
      {
        question: 'What file types can I upload?',
        answer: 'PDF, JPG, and PNG are supported. If extraction looks incomplete, paste the missing lines manually.',
      },
      {
        question: 'Why does it ask for an optional state and insurer?',
        answer:
          'State and insurer context can help prioritize what to request next and how to interpret typical wording, but the analysis is still based on the text you provide.',
      },
      {
        question: 'What if my denial letter is very short?',
        answer:
          'If the letter is short, paste any attached pages, EOB language, claim notes, or the section that lists “reason codes” and what is needed to reconsider.',
      },
      {
        question: 'What should I avoid pasting?',
        answer:
          'Avoid SSNs, full policy numbers, bank details, and other sensitive identifiers. You can redact personal details before analyzing.',
      },
      {
        question: 'Will my letter be stored?',
        answer:
          'The tool does not permanently store your denial letter. It is processed to generate results and then discarded.',
      },
      {
        question: 'Can I use the results in the Appeal Letter Generator?',
        answer:
          'Yes. When you run an analysis, the key outputs can be used to speed up drafting in the Appeal Letter Generator.',
      },
    ],
    []
  )

  const canonical = `${BASE_URL}/tools/denial-letter-analyzer`
  const title = 'Free Insurance Denial Letter Analyzer | WhyClaimDenied'
  const description =
    'Upload or paste your insurance denial letter and instantly analyze the real denial reason, hidden issues, and possible appeal directions using AI.'

  const articleSchema = useMemo(
    () => generateArticleSchema({ headline: title, description, canonicalUrl: canonical }),
    [canonical, description, title]
  )
  const faqSchema = useMemo(() => generateFAQSchema(faqs), [faqs])
  const webAppSchema = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Insurance Denial Letter Analyzer',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'All',
      url: canonical,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    }),
    [canonical]
  )

  const onAnalyze = async () => {
    setError('')
    setResult(null)

    const cleaned = sanitizePastedText(rawText)
    const limited = clampTextLength(cleaned, MAX_LEN)

    if (limited.length < MIN_LEN) {
      setError(`Please paste at least ${MIN_LEN} characters from your denial letter.`)
      return
    }

    setBusy(true)
    trackEvent('tool_action_start', { tool: 'denial_letter_analyzer', action: 'analyze' })
    try {
      const res = await fetchWithTimeout(
        '/.netlify/functions/analyze-denial',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            denial_letter_text: limited,
            claim_type: claimType || null,
            state: stateCode || null,
            insurer: insurer || null,
            extra_context: extraContext || null,
          }),
        },
        35000
      )

      const data = await res.json().catch(() => ({}))

      if (res.status === 429) {
        setError('Rate limit reached. Please wait a bit and try again.')
        return
      }

      if (!res.ok) {
        setError(data?.message || 'We could not analyze your letter right now. Please try again.')
        return
      }

      setResult(data)
      if (session?.setAnalysis) {
        session.setAnalysis(data)
      }
      trackEvent('tool_action_success', { tool: 'denial_letter_analyzer', action: 'analyze' })
    } catch {
      setError('Network issue. Please try again.')
    } finally {
      setBusy(false)
    }
  }

  const onUploadFile = async (file) => {
    setUploadMsg('')
    setError('')
    setUploadPct(0)

    if (!file) return
    if (!ALLOWED_MIME.includes(file.type)) {
      setUploadMsg('Unsupported file type. Upload PDF, PNG, or JPG.')
      return
    }
    if (file.size > MAX_FILE_BYTES) {
      setUploadMsg('File too large. Max size is 8MB.')
      return
    }

    setUploadBusy(true)
    trackEvent('tool_action_start', { tool: 'denial_letter_analyzer', action: 'upload_ocr' })
    try {
      const fd = new FormData()
      fd.append('file', file)
      fd.append('hint', `${claimType || ''} ${stateCode || ''} ${insurer || ''}`.trim())

      const res = await uploadFormDataWithProgress({
        url: '/.netlify/functions/ocr-denial',
        formData: fd,
        timeoutMs: 35000,
        onProgress: setUploadPct,
      })

      if (res.status === 429) {
        setUploadMsg('Rate limit reached. Please wait a bit and try again.')
        return
      }

      if (!res.ok) {
        setUploadMsg(res.data?.message || 'We could not extract text right now. Please try again.')
        return
      }

      const extracted = sanitizePastedText(res.data?.text)
      if (!extracted) {
        setUploadMsg('We could not extract readable text. Please paste text manually.')
        return
      }

      setRawText(extracted)
      const flags = Array.isArray(res.data?.confidenceFlags) ? res.data.confidenceFlags : []
      if (flags.includes('low_confidence') || flags.includes('pdf_scan_unresolved')) {
        setUploadMsg('Extraction looks incomplete. Review the text and paste missing sections if needed.')
      } else {
        setUploadMsg('Text extracted. Review and run the analyzer when ready.')
      }
      trackEvent('tool_action_success', { tool: 'denial_letter_analyzer', action: 'upload_ocr' })
    } catch (e) {
      const msg = String(e?.message || '') === 'timeout' ? 'Upload timed out. Please try again.' : 'Network issue. Please try again.'
      setUploadMsg(msg)
    } finally {
      setUploadBusy(false)
    }
  }

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="WhyClaimDenied" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(webAppSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <Header />
      <Breadcrumbs
        hidden
        crumbs={[
          { label: 'Tools', link: null },
          { label: 'Denial Letter Analyzer', link: null },
        ]}
      />
      <main className="container">
        <div className="tool-page">
          <ToolHero
            title="Insurance Denial Letter Analyzer"
            description="Upload a PDF or image (or paste text) to get a clear breakdown of denial reasons, key dates, and next steps."
            primaryCta={{ label: 'Analyze My Denial', href: '#dla-input' }}
            secondaryCta={{ label: 'Generate Appeal Letter', href: '/tools/appeal-letter-generator' }}
          />

          <div className="ad-placeholder tool-ad" data-slot="below-hero" style={{ '--ad-min-h': '120px' }}>
            <span className="ad-label">Advertisement</span>
          </div>

          <section className="tool-card" aria-labelledby="dla-input">
            <div className="tool-section-title">
              <h2 id="dla-input">Step 1: Add your denial letter</h2>
              <span className="tool-chip">Required</span>
            </div>
            <div className="tool-subsection-title">Upload (optional)</div>
            <div className="tool-module">
              <div className="tool-upload">
                <label className="tool-label">
                  <span className="tool-label-text">
                    Upload a denial letter (optional) <span className="tool-chip">PDF · JPG · PNG</span>
                  </span>
                  <input
                    className="tool-input"
                    type="file"
                    accept=".pdf,.png,.jpg,.jpeg,application/pdf,image/png,image/jpeg"
                    disabled={busy || uploadBusy}
                    onChange={(e) => onUploadFile(e.target.files?.[0] || null)}
                  />
                </label>
                <div className="tool-help">If extraction looks incomplete, paste the missing lines manually below.</div>
                {uploadBusy ? (
                  <div className="tool-progress" aria-label="Upload progress">
                    <div className="tool-progress-bar" style={{ width: `${uploadPct}%` }} />
                  </div>
                ) : null}
                {uploadMsg ? <div className="tool-notice">{uploadMsg}</div> : null}
              </div>
            </div>

            <div className="tool-subsection-title">Denial letter text</div>
            <div className="tool-module">
              <label className="tool-label">
                <span className="tool-label-text">
                  Denial letter text <span className="tool-chip">Required</span>
                </span>
                <textarea
                  className="tool-textarea"
                  value={rawText}
                  onChange={(e) => setRawText(e.target.value)}
                  rows={12}
                  placeholder="Paste the key parts of your denial letter here. Tip: include the denial reason section, any listed dates, and what documents they say are missing."
                />
              </label>
            </div>

            <div className="tool-subsection-title">Optional context</div>
            <div className="tool-module">
              <div className="tool-grid" aria-label="Optional context">
                <label className="tool-label">
                  <span className="tool-label-text">Insurance type <span className="tool-chip">Optional</span></span>
                  <select className="tool-input" value={claimType} onChange={(e) => setClaimType(e.target.value)}>
                    <option value="">Auto or Health</option>
                    <option value="auto">Auto</option>
                    <option value="health">Health</option>
                  </select>
                </label>
                <label className="tool-label">
                  <span className="tool-label-text">State <span className="tool-chip">Optional</span></span>
                  <input
                    className="tool-input"
                    value={stateCode}
                    onChange={(e) => setStateCode(e.target.value.toUpperCase().slice(0, 2))}
                    placeholder="CA"
                  />
                </label>
                <label className="tool-label tool-span-2">
                  <span className="tool-label-text">Insurer / Plan <span className="tool-chip">Optional</span></span>
                  <input
                    className="tool-input"
                    value={insurer}
                    onChange={(e) => setInsurer(e.target.value)}
                    placeholder="Example: Blue Cross, GEICO, Aetna…"
                  />
                </label>
                <label className="tool-label tool-span-2">
                  <span className="tool-label-text">Extra context <span className="tool-chip">Optional</span></span>
                  <textarea
                    className="tool-textarea"
                    value={extraContext}
                    onChange={(e) => setExtraContext(e.target.value)}
                    rows={3}
                    placeholder="A few facts that matter (redact personal data). Example: timeline, treatment, repair estimate, adjuster notes…"
                  />
                </label>
              </div>
            </div>

            {error ? <div className="tool-alert" role="alert">{error}</div> : null}
            <div className="tool-actions">
            <button className="tool-btn tool-btn-primary" type="button" onClick={onAnalyze} disabled={busy}>
              {busy ? 'Analyzing…' : 'Analyze denial letter'}
            </button>
            <button
              className="tool-btn tool-btn-secondary"
              type="button"
              onClick={() => {
                setRawText('')
                setError('')
                setResult(null)
              }}
              disabled={busy}
            >
              Clear
            </button>
            </div>
          </section>

          <div className="ad-placeholder tool-ad" data-slot="below-step-1" style={{ '--ad-min-h': '120px' }}>
            <span className="ad-label">Advertisement</span>
          </div>

          {busy ? (
            <section className="tool-card" aria-label="Analyzing">
              <div className="tool-section-title">
                <h2>Step 2: Results</h2>
                <span className="tool-chip">Working…</span>
              </div>
              <div className="tool-skeleton tool-skeleton-block" aria-hidden="true">
                <div className="tool-skeleton-stack">
                  <div className="tool-skeleton-line" style={{ width: '64%' }} />
                  <div className="tool-skeleton-line" style={{ width: '92%' }} />
                  <div className="tool-skeleton-line" style={{ width: '80%' }} />
                  <div className="tool-skeleton-line" style={{ width: '88%' }} />
                </div>
              </div>
              <div className="ad-placeholder tool-ad" data-slot="during-analysis" style={{ '--ad-min-h': '96px' }}>
                <span className="ad-label">Advertisement</span>
              </div>
            </section>
          ) : null}

          {result ? (
            <section className="tool-card" aria-labelledby="dla-results">
              <div className="tool-section-title">
                <h2 id="dla-results">Step 2: Structured analysis</h2>
                <span className="tool-chip">Saved for generator</span>
              </div>
              <div className="tool-results">
              <h3>Denial reasons</h3>
              <ul>
                {(result.denialReasons || []).map((x, idx) => (
                  <li key={idx}>{x}</li>
                ))}
              </ul>

              <h3>Key dates</h3>
              <ul>
                {(result.keyDates || []).map((x, idx) => (
                  <li key={idx}>{x}</li>
                ))}
              </ul>

              <h3>Requested remedy</h3>
              <p>{result.requestedRemedy || '—'}</p>

              <h3>Recommended arguments</h3>
              <ul>
                {(result.recommendedArguments || []).map((x, idx) => (
                  <li key={idx}>{x}</li>
                ))}
              </ul>

              <h3>Supporting docs to gather</h3>
              <ul>
                {(result.supportingDocs || []).map((x, idx) => (
                  <li key={idx}>{x}</li>
                ))}
              </ul>

              <h3>Appeal outline</h3>
              <ol>
                {(result.appealOutline || []).map((x, idx) => (
                  <li key={idx}>{x}</li>
                ))}
              </ol>

              {Array.isArray(result.confidenceFlags) && result.confidenceFlags.length ? (
                <div className="tool-hint">
                  <strong>Confidence notes:</strong> {result.confidenceFlags.join(' · ')}
                </div>
              ) : null}

              <div className="ad-placeholder tool-ad" data-slot="below-results" style={{ '--ad-min-h': '120px' }}>
                <span className="ad-label">Advertisement</span>
              </div>

              <div className="tool-actions">
                <Link className="tool-btn tool-btn-primary" to="/tools/appeal-letter-generator">
                  Continue to Appeal Generator
                </Link>
                {session?.clear ? (
                  <button className="tool-btn tool-btn-secondary" type="button" onClick={session.clear}>
                    Reset session
                  </button>
                ) : null}
              </div>
              </div>
            </section>
          ) : null}

        <section aria-labelledby="dla-about">
          <h2 id="dla-about">About this tool</h2>
          <p className="tool-muted">
            This denial letter analyzer helps you translate insurer language into an actionable checklist: what the denial reason is, which documents may be missing, what questions to ask, and what to do next.
          </p>
          <p className="tool-muted">
            For best results, paste the denial reason section, any stated dates, and any requested records or forms. Redact sensitive identifiers before submitting.
          </p>
        </section>

        <section aria-labelledby="dla-faq">
          <h2 id="dla-faq">FAQs</h2>
          <FAQ questions={faqs} />
        </section>

        <section aria-labelledby="dla-links">
          <h2 id="dla-links">Helpful links</h2>
          <ul>
            <li>
              <Link to="/tools/appeal-letter-generator">Generate an insurance appeal letter</Link>
            </li>
            <li>
              <Link to="/guides/what-to-do-after-a-claim-denial">What to do after a claim denial</Link>
            </li>
            <li>
              <Link to="/guides/how-to-write-an-insurance-appeal-letter">How to write an insurance appeal letter</Link>
            </li>
            <li>
              <Link to="/guides/appeal-deadlines-and-timelines">Appeal deadlines and timelines</Link>
            </li>
            <li>
              <Link to="/blog">Insurance denial blog posts by state</Link>
            </li>
          </ul>
        </section>

        <section aria-labelledby="dla-disclaimer">
          <h2 id="dla-disclaimer">Disclaimer</h2>
          <p className="tool-muted">
            Educational use only. This tool is not legal advice and does not create an attorney-client relationship. Always verify coverage rules and deadlines using your policy, plan documents, and the insurer&apos;s written denial.
          </p>
          <p className="tool-muted">
            Do not paste sensitive identifiers (SSNs, full policy numbers, bank details). Redact personal data before use.
          </p>
        </section>

        </div>
      </main>
      <div className="container">
        <div className="ad-placeholder tool-ad" data-slot="pre-footer" style={{ '--ad-min-h': '120px' }}>
          <span className="ad-label">Advertisement</span>
        </div>
      </div>
      <Footer />
    </>
  )
}
