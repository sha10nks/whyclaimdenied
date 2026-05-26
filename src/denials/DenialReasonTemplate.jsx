import { Helmet } from 'react-helmet-async'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumbs from '../components/Breadcrumbs'
import StateHubLinks from '../components/StateHubLinks'
import { Link } from '../components/Link'
import { generateArticleSchema, generateFAQSchema } from '../seo/schema'
const DenialReasonTemplate = ({ page }) => {
  if (!page) return null

  const articleSchema = generateArticleSchema({
    headline: page.metaTitle,
    description: page.metaDescription,
    canonicalUrl: page.canonicalUrl,
  })

  const faqSchema = Array.isArray(page.faq) && page.faq.length
    ? generateFAQSchema(page.faq.map((qa) => ({ question: qa.q, answer: qa.a })))
    : null

  return (
    <>
      <Helmet>
        <title>{page.metaTitle}</title>
        <meta name="description" content={page.metaDescription} />
        <link rel="canonical" href={page.canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        {faqSchema ? <script type="application/ld+json">{JSON.stringify(faqSchema)}</script> : null}
      </Helmet>

      <Header />

      <Breadcrumbs items={page.breadcrumbs} />

      <main className="container">
        <h1>{page.h1}</h1>

        <p>
          <Link to={page.pillarPath}>Back to {page.domainLabel} Insurance Claims Denied in {page.stateLabel}</Link>
        </p>

        <p className="intro">{page.intro[0]}</p>
        {page.intro.slice(1).map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}

        <div className="ad-placeholder">
          <span className="ad-label">Advertisement</span>
        </div>

        <section>
          <h2>Why this denial happens</h2>
          {page.why.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </section>

        {Array.isArray(page.stateContext) && page.stateContext.length ? (
          <section>
            <h2>State-specific context ({page.stateLabel})</h2>
            {page.stateContext.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
            {page.regulatorName ? (
              <p>
                If the insurer will not provide a clear written basis for the denial, consumer assistance resources from {page.regulatorName} may help you request a more specific explanation.
              </p>
            ) : null}
          </section>
        ) : null}

        <section>
          <h2>What to request from the insurer</h2>
          <ul>
            {page.checklist.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>What to do next</h2>
          <p>
            If you already received the insurer&apos;s denial notice, you can{' '}
            <Link to="/tools/denial-letter-analyzer">analyze your insurance denial letter first</Link>{' '}
            before organizing the appeal points below.
          </p>
          <ol>
            {page.steps.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ol>
        </section>

        <section>
          <h2>Mistakes that weaken appeals</h2>
          <ul>
            {page.mistakes.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>FAQ</h2>
          {page.faq.map((qa, idx) => (
            <div key={idx} className="wcd-faq-item">
              <h3 className="wcd-faq-q">{qa.q}</h3>
              <p className="wcd-faq-a">{qa.a}</p>
            </div>
          ))}
        </section>

        <section>
          <h2>Back to the {page.stateLabel} {page.domainLabel} denial guide</h2>
          <p>
            <Link to={page.pillarPath}>Return to {page.domainLabel} Insurance Claims Denied in {page.stateLabel}</Link>
          </p>
          <ul>
            {page.internalLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </section>

        <StateHubLinks currentState={page.stateLabel} />
      </main>

      <Footer />
    </>
  )
}

export default DenialReasonTemplate
