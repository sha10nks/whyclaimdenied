import { Helmet } from 'react-helmet-async'
import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Breadcrumbs from '../../components/Breadcrumbs'
import { Link } from '../../components/Link'
import { BASE_URL } from '../../seo/meta'
import { generateArticleSchema, generateFAQSchema } from '../../seo/schema'
import { getGuideBySlug } from '../../guides/registry.js'
import EditorialBlock from '../../components/EditorialBlock'

const toTitle = (guideTitle) => `${guideTitle} | WhyClaimDenied`

const asFaqSchemaInput = (faqs) => {
  return (faqs || []).map((f) => ({
    question: f.q,
    answer: f.a,
  }))
}

const Section = ({ section }) => {
  return (
    <section className="guide-section" aria-labelledby={`sec-${section.id}`}>
      <h2 id={`sec-${section.id}`}>{section.heading}</h2>
      {Array.isArray(section.paragraphs)
        ? section.paragraphs.map((p, idx) => <p key={idx}>{p}</p>)
        : null}

      {Array.isArray(section.checklist) && section.checklist.length ? (
        <ul>
          {section.checklist.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      ) : null}

      {Array.isArray(section.steps) && section.steps.length ? (
        <ol>
          {section.steps.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ol>
      ) : null}

      {Array.isArray(section.bullets) && section.bullets.length ? (
        <ul>
          {section.bullets.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      ) : null}
    </section>
  )
}

export default function GuideDetail() {
  const params = useParams()
  const slug = String(params?.slug || '').trim()
  const guide = useMemo(() => getGuideBySlug(slug), [slug])

  if (!guide) {
    const title = 'Guide not found | WhyClaimDenied'
    const canonical = `${BASE_URL}/guides/${encodeURIComponent(slug || 'unknown')}`
    return (
      <>
        <Helmet>
          <title>{title}</title>
          <meta name="robots" content="noindex, follow" />
          <link rel="canonical" href={canonical} />
        </Helmet>
        <Header />
        <Breadcrumbs />
        <main className="container">
          <h1>Guide not found</h1>
          <p>
            This guide does not exist. Browse the <Link to="/guides">Guides hub</Link>.
          </p>
        </main>
        <Footer />
      </>
    )
  }

  const canonical = `${BASE_URL}${guide.canonicalPath}`
  const title = toTitle(guide.title)

  const articleSchema = generateArticleSchema({
    headline: guide.title,
    description: guide.description,
    canonicalUrl: canonical,
  })

  const hasFaq = Array.isArray(guide.faqs) && guide.faqs.length > 0
  const faqSchema = hasFaq ? generateFAQSchema(asFaqSchemaInput(guide.faqs)) : null

  const moreGuideLinks = [
    { path: '/guides/what-to-do-after-a-claim-denial', label: 'What to do after your claim is denied' },
    { path: '/guides/how-to-write-an-insurance-appeal-letter', label: 'Insurance appeal letter examples' },
    { path: '/guides/appeal-deadlines-and-timelines', label: 'Appeal deadlines and timelines' },
    { path: '/guides', label: 'Browse all guides' },
  ].filter((l) => l.path !== guide.canonicalPath)

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={guide.description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={guide.title} />
        <meta property="og:description" content={guide.description} />
        <meta property="og:url" content={canonical} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        {hasFaq ? <script type="application/ld+json">{JSON.stringify(faqSchema)}</script> : null}
      </Helmet>

      <Header />
      <Breadcrumbs />

      <main className="container">
        <article className="guide">
          <header className="guide-header">
            <h1>{guide.title}</h1>
            <p className="guide-summary">{guide.description}</p>
            <div className="guide-quick-answer" aria-label="Immediate answer">
              <h2>Quick answer</h2>
              <p>{guide.quickAnswer}</p>
            </div>
          </header>

          <section className="guide-next" aria-label="What to do next">
            <h2>What to do next (state-specific pages)</h2>
            <p>
              These pages include localized denial patterns and checklists. Start with the state and coverage type that matches your situation.
            </p>
            <ul>
              {guide.relatedStateLinks.map((l) => (
                <li key={l.path}>
                  <Link to={l.path}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </section>

          {guide.sections.map((s) => (
            <Section key={s.id} section={s} />
          ))}

          {Array.isArray(guide.examples) && guide.examples.length ? (
            <section className="guide-section" aria-label="Examples">
              <h2>Real-world examples</h2>
              {guide.examples.map((ex) => (
                <div key={ex.title} className="guide-example">
                  <h3>{ex.title}</h3>
                  <p>{ex.text}</p>
                </div>
              ))}
            </section>
          ) : null}

          {hasFaq ? (
            <section className="guide-section" aria-label="FAQ">
              <h2>FAQ</h2>
              {guide.faqs.map((qa, idx) => (
                <div key={idx} className="wcd-faq-item">
                  <h3 className="wcd-faq-q">{qa.q}</h3>
                  <p className="wcd-faq-a">{qa.a}</p>
                </div>
              ))}
            </section>
          ) : null}

          <section className="guide-section" aria-label="More guides">
            <h2>More high-intent guides</h2>
            <ul>
              {moreGuideLinks.map((l) => (
                <li key={l.path}>
                  <Link to={l.path}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </section>

          <EditorialBlock />
        </article>
      </main>

      <Footer />
    </>
  )
}
