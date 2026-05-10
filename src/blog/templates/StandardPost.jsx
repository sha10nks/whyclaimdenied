import { Helmet } from 'react-helmet-async'
import Breadcrumbs from '../../components/Breadcrumbs'
import { Link } from '../../components/Link'
import Takeaways from '../components/Takeaways'
import Steps from '../components/Steps'
import Checklist from '../components/Checklist'
import FAQ from '../components/FAQ'
import RelatedGuides from '../components/RelatedGuides'
import Callout from '../components/Callout'
import { generateArticleSchema, generateFAQSchema } from '../../seo/schema'
import { BASE_URL } from '../../seo/meta'
import { buildRelatedGuides } from '../relatedGuides'
import EditorialBlock from '../../components/EditorialBlock'

const StandardPost = ({ post }) => {
  if (!post) return null

  const state = post.stateSlug
  const stateLabel = post.stateLabel

  const relatedGuides = Array.isArray(post.relatedGuides) && post.relatedGuides.length > 0
    ? post.relatedGuides
    : buildRelatedGuides({ stateSlug: state, currentSlug: post.slug, type: post.type })

  const articleSchema = generateArticleSchema({
    headline: post.metaTitle || post.title,
    description: post.metaDescription || post.description,
    canonicalUrl: post.canonicalUrl,
  })

  const faqSchema = Array.isArray(post.faq) && post.faq.length > 0 ? generateFAQSchema(post.faq) : null

  return (
    <>
      <Helmet>
        <title>{post.metaTitle || post.title}</title>
        <meta name="description" content={post.metaDescription || post.description} />
        <link rel="canonical" href={post.canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.metaTitle || post.title} />
        <meta property="og:description" content={post.metaDescription || post.description} />
        <meta property="og:url" content={post.canonicalUrl} />
        <meta property="og:site_name" content="WhyClaimDenied" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={post.metaTitle || post.title} />
        <meta name="twitter:description" content={post.metaDescription || post.description} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        {faqSchema ? <script type="application/ld+json">{JSON.stringify(faqSchema)}</script> : null}
      </Helmet>

      <Breadcrumbs
        items={[
          { label: 'Blog', link: '/blog' },
          { label: stateLabel, link: `/blog/${state}` },
          { label: post.title, link: null },
        ]}
      />

      <article className="wcd-post">
        <header className="wcd-post-hero">
          <h1>{post.title}</h1>
          <p className="wcd-post-summary">{post.heroSummary}</p>
        </header>

        <Takeaways items={post.takeaways} />

        <section>
          <h2>What This Means in {stateLabel}</h2>
          {post.stateMeaning?.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </section>

        <Steps items={post.steps} />

        <Checklist title="What to Request From the Insurer" items={post.insurerRequests} />

        <section>
          <h2>Common Denial Reasons</h2>
          <div className="wcd-two-col">
            {post.commonDenialReasons?.map((r) => (
              <div key={r.title} className="wcd-mini-card">
                <h3 className="wcd-mini-card-title">{r.title}</h3>
                <p className="wcd-mini-card-body">{r.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>Mistakes That Weaken Appeals</h2>
          <ul>
            {post.mistakes?.map((m, idx) => (
              <li key={idx}>{m}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Timeline & Deadlines</h2>
          {post.timeline?.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
          <Callout title="Important">
            Always verify deadlines using your policy, denial letter, and plan documents. This site is educational and does not provide legal advice.
          </Callout>
        </section>

        <section>
          <h2>Sample Appeal Structure</h2>
          <p>Use this outline to organize your appeal. Replace bracketed text with your specific facts and documents.</p>
          <div className="wcd-card">
            <ul className="wcd-tight-list">
              {post.sampleAppealStructure?.map((line, idx) => (
                <li key={idx}>{line}</li>
              ))}
            </ul>
          </div>
        </section>

        <FAQ items={post.faq} />

        <RelatedGuides title="Related Guides" links={relatedGuides} />

        <section className="wcd-cta">
          <h2>Browse {stateLabel} Resources</h2>
          <ul className="wcd-tight-list">
            <li><Link to={`/blog/${state}`}>Browse {stateLabel} blog posts</Link></li>
            <li><Link to={`/auto-insurance-claims-denied-${state}`}>Auto Insurance Claims Denied in {stateLabel}</Link></li>
            <li><Link to={`/health-insurance-claims-denied-${state}`}>Health Insurance Claims Denied in {stateLabel}</Link></li>
          </ul>
        </section>

        <EditorialBlock />
      </article>
    </>
  )
}

export default StandardPost
