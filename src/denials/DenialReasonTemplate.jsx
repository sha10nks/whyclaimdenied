import { Helmet } from 'react-helmet-async'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumbs from '../components/Breadcrumbs'
import StateHubLinks from '../components/StateHubLinks'
import { Link } from '../components/Link'
import { generateArticleSchema } from '../seo/schema'

const DenialReasonTemplate = ({ page }) => {
  if (!page) return null

  const articleSchema = generateArticleSchema({
    headline: page.metaTitle,
    description: page.metaDescription,
    canonicalUrl: page.canonicalUrl,
  })

  return (
    <>
      <Helmet>
        <title>{page.metaTitle}</title>
        <meta name="description" content={page.metaDescription} />
        <link rel="canonical" href={page.canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      <Header />

      <Breadcrumbs items={page.breadcrumbs} />

      <main className="container">
        <h1>{page.h1}</h1>

        <p className="intro">{page.intro[0]}</p>
        {page.intro.slice(1).map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}

        <div className="ad-placeholder">
          <span className="ad-label">Advertisement</span>
          [AdSense Block]
        </div>

        <section>
          <h2>Why this denial happens</h2>
          {page.why.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </section>

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

