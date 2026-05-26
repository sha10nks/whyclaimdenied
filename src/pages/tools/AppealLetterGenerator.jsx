import { Helmet } from 'react-helmet-async'
import { useContext, useEffect, useMemo, useRef, useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FAQ from '../../components/FAQ'
import Breadcrumbs from '../../components/Breadcrumbs'
import { Link } from '../../components/Link'
import ToolHero from '../../components/tools/ToolHero'
import { BASE_URL } from '../../seo/meta'
import { generateArticleSchema, generateFAQSchema } from '../../seo/schema'
import { clampTextLength, countWords, sanitizePastedText } from '../../utils/textSanitize'
import { trackEvent } from '../../utils/analytics'
import { ToolSessionContext } from '../../tools/ToolSessionContext.js'

const MAX_FACTS = 3000
const MAX_NOTES = 1200

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

const clampWords = (text, maxWords) => {
  const t = String(text || '').trim()
  if (!t) return ''
  const parts = t.split(/\s+/)
  if (parts.length <= maxWords) return t
  return `${parts.slice(0, maxWords).join(' ')}\n\n[Truncated]`
}

export default function AppealLetterGenerator() {
  const session = useContext(ToolSessionContext)
  const setupRef = useRef(null)
  const [claimType, setClaimType] = useState('auto')
  const [stateCode, setStateCode] = useState('')
  const [insurer, setInsurer] = useState('')
  const [denialReasons, setDenialReasons] = useState('')
  const [facts, setFacts] = useState('')
  const [requestedRemedy, setRequestedRemedy] = useState('')
  const [policyNumber, setPolicyNumber] = useState('')
  const [claimNumber, setClaimNumber] = useState('')
  const [denialDate, setDenialDate] = useState('')
  const [notes, setNotes] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [letter, setLetter] = useState('')
  const [checklist, setChecklist] = useState([])
  const [pdfBusy, setPdfBusy] = useState(false)

  const showStickyCta = useMemo(() => {
    if (busy || pdfBusy) return false
    if (letter) return false
    const prefilled = Boolean(session?.analysis)
    const started = Boolean(stateCode || insurer || denialReasons || facts || requestedRemedy || notes)
    return prefilled || started
  }, [
    busy,
    denialReasons,
    facts,
    insurer,
    letter,
    notes,
    pdfBusy,
    requestedRemedy,
    session?.analysis,
    stateCode,
  ])

  useEffect(() => {
    trackEvent('tool_open', { tool: 'appeal_letter_generator' })
  }, [])

  useEffect(() => {
    const a = session?.analysis
    if (!a) return

    if (!stateCode && a.state) setStateCode(String(a.state).toUpperCase().slice(0, 2))
    if (!insurer && a.insurer) setInsurer(a.insurer)
    if (!requestedRemedy && a.requestedRemedy) setRequestedRemedy(a.requestedRemedy)
    if (!denialReasons && Array.isArray(a.denialReasons) && a.denialReasons.length) {
      setDenialReasons(a.denialReasons.join('\n'))
    }
  }, [denialReasons, insurer, requestedRemedy, session?.analysis, stateCode])

  const faqs = useMemo(
    () => [
      {
        question: 'Do I need to create an account?',
        answer: 'No login required. You can generate a draft and copy/download it.',
      },
      {
        question: 'Is this tool legal advice?',
        answer:
          'No. It generates an educational draft based on what you enter. For legal advice or deadlines, consult a qualified professional in your state.',
      },
      {
        question: 'Will this cite laws or deadlines?',
        answer:
          'It avoids citing laws or deadlines unless you provide them. The focus is a factual, policy-sensitive request for reconsideration.',
      },
      {
        question: 'What should I include in “denial reasons”?',
        answer:
          'Use the insurer’s wording. One short reason per line is best (for example: “not medically necessary”, “out of network”, “missing documentation”).',
      },
      {
        question: 'What should I include in “facts / timeline”?',
        answer:
          'A short timeline with dates, what happened, what you submitted, and what documents support your position. Keep it factual and avoid unnecessary personal details.',
      },
      {
        question: 'Can I edit the generated letter?',
        answer:
          'Yes. Treat the output as a starting draft. Edit for accuracy, add specific policy language you have, and remove anything that does not match your situation.',
      },
      {
        question: 'What attachments are usually helpful?',
        answer:
          'Common attachments include denial letter pages, EOB or claim summaries, medical records or repair estimates, provider letters, photos, receipts, and any prior authorization documentation (if applicable).',
      },
      {
        question: 'How long will the letter be?',
        answer: 'Target length is 250–650 words for a clear, insurer-facing appeal draft.',
      },
      {
        question: 'Should I run the Denial Letter Analyzer first?',
        answer:
          'If you are not sure what to write or what the denial reason really means, the analyzer can help extract reasons, dates, and a requested remedy so you can draft faster.',
      },
    ],
    []
  )

  const canonical = `${BASE_URL}/tools/appeal-letter-generator`
  const title = 'Free Insurance Appeal Letter Generator (No Login Required) | WhyClaimDenied'
  const description =
    'Generate professional insurance appeal letters instantly using our free AI-powered tool. No login required. Supports auto and health insurance claim denials.'

  const articleSchema = useMemo(
    () => generateArticleSchema({ headline: title, description, canonicalUrl: canonical }),
    [canonical, description, title]
  )
  const faqSchema = useMemo(() => generateFAQSchema(faqs), [faqs])
  const webAppSchema = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Insurance Appeal Letter Generator Wizard',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'All',
      url: canonical,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    }),
    [canonical]
  )

  const onGenerate = async () => {
    setError('')
    setLetter('')
    setChecklist([])

    const reasonsFromUser = sanitizePastedText(denialReasons)
      .split(/\n+/)
      .map((r) => r.trim())
      .filter(Boolean)
      .slice(0, 12)

    const analysis = session?.analysis || null
    const reasons = reasonsFromUser.length
      ? reasonsFromUser
      : Array.isArray(analysis?.denialReasons)
        ? analysis.denialReasons.slice(0, 12)
        : []

    const cleanedFacts = clampTextLength(sanitizePastedText(facts), MAX_FACTS)
    const cleanedNotes = clampTextLength(sanitizePastedText(notes), MAX_NOTES)

    const inferredState = !stateCode && analysis?.state ? String(analysis.state).toUpperCase().slice(0, 2) : stateCode
    const inferredInsurer = insurer || analysis?.insurer || ''
    const inferredRequestedRemedy = sanitizePastedText(requestedRemedy) || analysis?.requestedRemedy || ''

    if (!inferredState || inferredState.length !== 2) {
      setError('Please enter your 2-letter state code (example: CA).')
      return
    }
    if (!reasons.length) {
      setError('Please add at least one denial reason (one per line).')
      return
    }
    if (cleanedFacts.length < 80) {
      setError('Please add a bit more detail in the facts section (at least ~80 characters).')
      return
    }
    if (sanitizePastedText(inferredRequestedRemedy).length < 10) {
      setError('Please describe what you want the insurer to do (requested remedy).')
      return
    }

    setBusy(true)
    trackEvent('tool_action_start', { tool: 'appeal_letter_generator', action: 'generate' })
    try {
      const res = await fetchWithTimeout(
        '/.netlify/functions/generate-appeal',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            claim_type: claimType,
            state: inferredState,
            insurer: inferredInsurer || null,
            denial_reasons: reasons,
            facts: cleanedFacts,
            requested_remedy: sanitizePastedText(inferredRequestedRemedy),
            policy_number: policyNumber ? '[REDACTED_BY_USER]' : null,
            claim_number: claimNumber ? '[REDACTED_BY_USER]' : null,
            denial_date: denialDate || null,
            notes: cleanedNotes || null,
            analysis,
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
        setError(data?.message || 'We could not generate your letter right now. Please try again.')
        return
      }

      const out = String(data.letter_text || '')
      const bounded = clampWords(out, 650)
      setLetter(bounded)
      setChecklist(Array.isArray(data.checklist) ? data.checklist : [])
      trackEvent('tool_action_success', { tool: 'appeal_letter_generator', action: 'generate' })
    } catch {
      setError('Network issue. Please try again.')
    } finally {
      setBusy(false)
    }
  }

  const onCopy = async () => {
    if (!letter) return
    try {
      await navigator.clipboard.writeText(letter)
      trackEvent('tool_action_success', { tool: 'appeal_letter_generator', action: 'copy' })
    } catch {
      // ignore
    }
  }

  const onDownloadTxt = () => {
    if (!letter) return
    const blob = new Blob([letter], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'insurance-appeal-letter.txt'
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
    trackEvent('tool_action_success', { tool: 'appeal_letter_generator', action: 'download_txt' })
  }

  const onDownloadPdf = async () => {
    if (!letter || pdfBusy) return
    setPdfBusy(true)
    setError('')
    try {
      const res = await fetchWithTimeout(
        '/.netlify/functions/render-appeal-pdf',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title: 'Insurance Appeal Letter',
            date_line: new Date().toISOString().slice(0, 10),
            letter_text: letter,
          }),
        },
        35000
      )

      if (res.status === 429) {
        setError('Rate limit reached. Please wait a bit and try again.')
        return
      }

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setError(data?.message || 'We could not generate the PDF right now. Please try again.')
        return
      }

      const blob = await res.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'insurance-appeal-letter.pdf'
      document.body.appendChild(a)
      a.click()
      a.remove()
      URL.revokeObjectURL(url)
      trackEvent('tool_action_success', { tool: 'appeal_letter_generator', action: 'download_pdf' })
    } catch {
      setError('Network issue. Please try again.')
    } finally {
      setPdfBusy(false)
    }
  }

  const donationVisible = useMemo(() => {
    const words = countWords(letter)
    return words >= 80
  }, [letter])

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
          { label: 'Appeal Letter Generator', link: null },
        ]}
      />
      <main className="container">
        <div className="tool-page">
          <ToolHero
            title="Insurance Appeal Letter Generator"
            description="Generate an insurer-ready appeal letter with clear sections, calm tone, and an attachment checklist."
            primaryCta={{ label: 'Generate Appeal Letter', href: '#alg-setup' }}
            secondaryCta={{ label: 'Analyze My Denial First', href: '/tools/denial-letter-analyzer' }}
          />

          {session?.analysis ? (
            <div className="tool-notice" role="status">
              Analyzer data detected for {session.analysis.state || 'your state'}{session.analysis.insurer ? ` · ${session.analysis.insurer}` : ''}. Fields below are auto-prefilled.
              {session.clear ? (
                <div className="tool-actions">
                  <button className="tool-btn tool-btn-secondary" type="button" onClick={session.clear}>
                    Reset session
                  </button>
                </div>
              ) : null}
            </div>
          ) : (
            <div className="tool-hint" role="note">
              If you want cleaner inputs before drafting, analyze your denial letter first, then come back here to generate the appeal.
            </div>
          )}

          <div className="ad-placeholder tool-ad" data-slot="below-hero" style={{ '--ad-min-h': '120px' }}>
            <span className="ad-label">Advertisement</span>
          </div>

        <section className="tool-card" aria-labelledby="alg-setup" ref={setupRef}>
          <div className="tool-section-title">
            <h2 id="alg-setup">Step 1: Letter details</h2>
            <span className="tool-chip">Required fields marked</span>
          </div>
          <div className="tool-subsection-title">Basics</div>
          <div className="tool-module">
            <div className="tool-grid">
              <label className="tool-label">
                <span className="tool-label-text">Insurance type</span>
                <select className="tool-input" value={claimType} onChange={(e) => setClaimType(e.target.value)}>
                  <option value="auto">Auto</option>
                  <option value="health">Health</option>
                </select>
              </label>
              <label className="tool-label">
                <span className="tool-label-text">State <span className="tool-chip">Required</span></span>
                <input
                  className="tool-input"
                  value={stateCode}
                  onChange={(e) => setStateCode(e.target.value.toUpperCase().slice(0, 2))}
                  placeholder="CA"
                />
              </label>
              <label className="tool-label tool-span-2">
                <span className="tool-label-text">Insurer / Plan (optional)</span>
                <input className="tool-input" value={insurer} onChange={(e) => setInsurer(e.target.value)} />
              </label>
            </div>
          </div>

          <div className="tool-subsection-title">Denial summary</div>
          <div className="tool-module">
            <label className="tool-label">
              <span className="tool-label-text">Denial reasons <span className="tool-chip">Required</span></span>
              <textarea
                className="tool-textarea"
                value={denialReasons}
                onChange={(e) => setDenialReasons(e.target.value)}
                rows={6}
                placeholder="One reason per line. Example:\nNot medically necessary\nOut of network\nMissing documentation"
              />
              <div className="tool-help">Keep these short and literal—mirror the letter’s wording when possible.</div>
            </label>
          </div>

          <div className="tool-subsection-title">Facts / timeline</div>
          <div className="tool-module">
            <label className="tool-label">
              <span className="tool-label-text">Facts / timeline <span className="tool-chip">Required</span></span>
              <textarea
                className="tool-textarea"
                value={facts}
                onChange={(e) => setFacts(e.target.value)}
                rows={8}
                placeholder="Brief timeline and key facts. Include dates, services/repairs, and what you already submitted. Redact sensitive identifiers."
              />
            </label>
          </div>

          <div className="tool-subsection-title">Requested remedy</div>
          <div className="tool-module">
            <label className="tool-label">
              <span className="tool-label-text">Requested remedy <span className="tool-chip">Required</span></span>
              <textarea
                className="tool-textarea"
                value={requestedRemedy}
                onChange={(e) => setRequestedRemedy(e.target.value)}
                rows={3}
                placeholder="Example: reconsider the denial and pay the claim, or reprocess per plan terms."
              />
            </label>
          </div>

          <div className="tool-subsection-title">Supporting details (optional)</div>
          <div className="tool-module">
            <div className="tool-grid">
              <label className="tool-label">
                <span className="tool-label-text">Policy # (optional)</span>
                <input className="tool-input" value={policyNumber} onChange={(e) => setPolicyNumber(e.target.value)} placeholder="Leave blank or redact" />
              </label>
              <label className="tool-label">
                <span className="tool-label-text">Claim # (optional)</span>
                <input className="tool-input" value={claimNumber} onChange={(e) => setClaimNumber(e.target.value)} placeholder="Leave blank or redact" />
              </label>
              <label className="tool-label tool-span-2">
                <span className="tool-label-text">Denial date (optional)</span>
                <input className="tool-input" value={denialDate} onChange={(e) => setDenialDate(e.target.value)} placeholder="YYYY-MM-DD" />
              </label>
              <label className="tool-label tool-span-2">
                <span className="tool-label-text">Supporting notes (optional)</span>
                <textarea
                  className="tool-textarea"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                  placeholder="Extra context you want included (redact personal details)."
                />
              </label>
            </div>
          </div>

          {error ? <div className="tool-alert" role="alert">{error}</div> : null}
          <div className="tool-actions">
            <button className="tool-btn tool-btn-primary" type="button" onClick={onGenerate} disabled={busy}>
              {busy ? 'Generating…' : 'Generate appeal letter'}
            </button>
            <button
              className="tool-btn tool-btn-secondary"
              type="button"
              onClick={() => {
                setError('')
                setLetter('')
                setChecklist([])
              }}
              disabled={busy}
            >
              Clear output
            </button>
          </div>
        </section>

        <div className="ad-placeholder tool-ad" data-slot="below-step-1" style={{ '--ad-min-h': '120px' }}>
          <span className="ad-label">Advertisement</span>
        </div>

        {busy ? (
          <section className="tool-card" aria-label="Generating">
            <div className="tool-section-title">
              <h2>Step 2: Draft letter</h2>
              <span className="tool-chip">Working…</span>
            </div>
            <div className="tool-skeleton tool-skeleton-block" aria-hidden="true">
              <div className="tool-skeleton-stack">
                <div className="tool-skeleton-line" style={{ width: '72%' }} />
                <div className="tool-skeleton-line" style={{ width: '96%' }} />
                <div className="tool-skeleton-line" style={{ width: '90%' }} />
                <div className="tool-skeleton-line" style={{ width: '84%' }} />
              </div>
            </div>
            <div className="ad-placeholder tool-ad" data-slot="during-generation" style={{ '--ad-min-h': '96px' }}>
              <span className="ad-label">Advertisement</span>
            </div>
          </section>
        ) : null}

        {letter ? (
          <section className="tool-card" aria-labelledby="alg-letter">
            <h2 id="alg-letter">Your appeal letter</h2>
            <p className="tool-muted">
              Tip: Replace placeholders like [CLAIM NUMBER] safely. Keep the tone factual and polite.
            </p>
            <textarea className="tool-textarea tool-letter" value={letter} onChange={(e) => setLetter(e.target.value)} rows={16} />
            <div className="tool-actions">
              <button className="tool-btn tool-btn-primary" type="button" onClick={onCopy}>
                Copy
              </button>
              <button className="tool-btn tool-btn-secondary" type="button" onClick={onDownloadTxt}>
                Download .txt
              </button>
              <button className="tool-btn tool-btn-secondary" type="button" onClick={onDownloadPdf} disabled={pdfBusy}>
                {pdfBusy ? 'Preparing PDF…' : 'Download PDF'}
              </button>
              <button className="tool-btn tool-btn-secondary" type="button" onClick={() => window.print()}>
                Print
              </button>
            </div>

            <div className="ad-placeholder tool-ad" data-slot="near-final-output" style={{ '--ad-min-h': '120px' }}>
              <span className="ad-label">Advertisement</span>
            </div>

            {donationVisible ? (
              <div className="tool-card tool-donation" aria-label="Donation">
                <h3>Support this free tool</h3>
                <p className="tool-muted">If this saved you time, consider a USDT donation to keep the tool free.</p>
                <button className="tool-btn tool-btn-primary" type="button" onClick={() => trackEvent('donation_click', { tool: 'appeal_letter_generator' })}>
                  Donate USDT
                </button>
              </div>
            ) : null}
          </section>
        ) : null}

        {checklist.length ? (
          <section className="tool-card" aria-labelledby="alg-checklist">
            <h2 id="alg-checklist">Suggested attachments</h2>
            <ul>
              {checklist.map((x, idx) => (
                <li key={idx}>{x}</li>
              ))}
            </ul>
          </section>
        ) : null}

        <section aria-labelledby="alg-about">
          <h2 id="alg-about">About this tool</h2>
          <p className="tool-muted">
            This appeal letter generator creates a structured draft you can copy, edit, and submit to an insurer or health plan. It organizes your denial reasons, facts, and requested remedy into a calmer, easier-to-review format.
          </p>
          <p className="tool-muted">
            For the cleanest results, use short denial reasons (one per line) and a dated timeline. Redact sensitive identifiers and verify deadlines in your denial letter and policy documents.
          </p>
        </section>

        <section aria-labelledby="alg-faq">
          <h2 id="alg-faq">FAQs</h2>
          <FAQ questions={faqs} />
        </section>

        <section aria-labelledby="alg-links">
          <h2 id="alg-links">Helpful links</h2>
          <ul>
            <li>
              <Link to="/tools/denial-letter-analyzer">Analyze your insurance denial letter</Link>
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

        <section aria-labelledby="alg-disclaimer">
          <h2 id="alg-disclaimer">Disclaimer</h2>
          <p className="tool-muted">
            Educational use only. This tool is not legal advice and does not create an attorney-client relationship. Confirm requirements and deadlines using your denial letter, policy, and plan documents before submitting.
          </p>
          <p className="tool-muted">
            Do not include sensitive identifiers (SSNs, full policy numbers, bank details). Redact personal data before use.
          </p>
        </section>

        {showStickyCta ? <div className="tool-sticky-spacer" aria-hidden="true" /> : null}
        </div>
      </main>

      {showStickyCta ? (
        <div className="tool-sticky-cta" role="region" aria-label="Quick actions">
          <div className="tool-sticky-cta-inner">
            <button
              className="tool-btn tool-btn-primary"
              type="button"
              onClick={() => {
                setupRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                onGenerate()
              }}
            >
              Generate Appeal Letter
            </button>
            <button
              className="tool-btn tool-btn-secondary"
              type="button"
              onClick={() => setupRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            >
              Review Form
            </button>
          </div>
        </div>
      ) : null}
      <div className="container">
        <div className="ad-placeholder tool-ad" data-slot="pre-footer" style={{ '--ad-min-h': '120px' }}>
          <span className="ad-label">Advertisement</span>
        </div>
      </div>
      <Footer />
    </>
  )
}
