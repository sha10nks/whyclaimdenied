import { Helmet } from 'react-helmet-async';
import { Link } from '../components/Link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import StateHubLinks from '../components/StateHubLinks';
import BlogTeasersByState from '../components/BlogTeasersByState';
import { getMetaData } from '../seo/meta';
import { generateArticleSchema, generateFAQSchema } from '../seo/schema';

import StateHeroImage from '../components/StateHeroImage'
const HealthClaimDeniedPennsylvania = () => {
  const meta = getMetaData('healthPA');
  const faqs = [
    {
      question: 'Who handles health plan complaints in Pennsylvania?',
      answer:
        'Start with your plan’s internal appeal. If you still disagree or the plan is not responsive, the Pennsylvania Insurance Department can assist consumers with complaints about claim denials and handling.',
    },
    {
      question: 'What are common health denial themes?',
      answer:
        'Missing prior authorization, “not medically necessary” decisions, out-of-network restrictions, and coding or documentation errors are typical patterns.',
    },
  ];

  const heroImageCanonical = new URL('/images/states/pennsylvania/health-1600.webp', meta.canonical).toString();

  const articleSchema = generateArticleSchema({ headline: meta.title, description: meta.description, canonicalUrl: meta.canonical, imageUrl: heroImageCanonical});
  const faqSchema = generateFAQSchema(faqs);

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={meta.canonical} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Header />

      <Breadcrumbs items={[{ label: 'Pennsylvania', link: '/' }, { label: 'Health Claim Denials', link: null }]} />

      <main className="container">
        <h1>Health Insurance Claims Denied in Pennsylvania</h1>
        <StateHeroImage stateSlug="pennsylvania" domain="health" alt="Health Insurance Claims Denied in Pennsylvania" />
        <p className="intro">Focus on what the denial relies on and answer it with specific records, policy language, and your provider’s support.</p>

        <p>
          Looking for auto claims? See <Link to="/auto-insurance-claims-denied-pennsylvania">Auto Insurance Claims Denied in Pennsylvania</Link>.
        </p>
<div className="ad-placeholder">
  <span className="ad-label">Advertisement</span>
        </div>

        <section>
          <h2>Common Pennsylvania health denial reasons</h2>
          <ul>
            <li><Link to="/health-insurance-claims-denied-pennsylvania/prior-authorization-missing">Prior authorization missing</Link></li>
            <li><Link to="/health-insurance-claims-denied-pennsylvania/not-medically-necessary">Not medically necessary</Link></li>
            <li><Link to="/health-insurance-claims-denied-pennsylvania/out-of-network-provider">Out-of-network provider</Link></li>
            <li><Link to="/health-insurance-claims-denied-pennsylvania/coding-or-documentation-error">Coding or documentation error</Link></li>
            <li><Link to="/health-insurance-claims-denied-pennsylvania/experimental-or-investigational">Experimental or investigational</Link></li>
            <li><Link to="/health-insurance-claims-denied-pennsylvania/benefit-or-service-excluded">Benefit or service excluded</Link></li>
            <li><Link to="/health-insurance-claims-denied-pennsylvania/timely-filing-issue">Timely filing issue</Link></li>
            <li><Link to="/health-insurance-claims-denied-pennsylvania/coordination-of-benefits">Coordination of benefits</Link></li>
          </ul>
        </section>
<div className="ad-placeholder">
  <span className="ad-label">Advertisement</span>
        </div>

        <section>
          <h2>Appeals & consumer help in Pennsylvania</h2>
          <p>
            File a clear appeal with your plan first. If you still disagree or the plan is not following its rules, the Pennsylvania Insurance Department offers consumer assistance and complaint intake.
          </p>
        </section>

        <BlogTeasersByState state="pennsylvania" />
        <StateHubLinks currentState="Pennsylvania" />
      </main>

      <Footer />
    </>
  );
};

export default HealthClaimDeniedPennsylvania;



