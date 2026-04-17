import { Helmet } from 'react-helmet-async';
import { Link } from '../components/Link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import CalloutBox from '../components/CalloutBox';
import StateHubLinks from '../components/StateHubLinks';
import BlogTeasersByState from '../components/BlogTeasersByState';
import { getMetaData } from '../seo/meta';
import { generateArticleSchema, generateFAQSchema } from '../seo/schema';

import StateHeroImage from '../components/StateHeroImage'
const HealthClaimDeniedIllinois = () => {
  const meta = getMetaData('healthIL');
  const faqs = [
    {
      question: 'Who can help with health claim issues in Illinois?',
      answer: 'Start with your plan appeal. If you still disagree or the process stalls, contact the Illinois Department of Insurance consumer services.'
    },
    {
      question: 'Top reasons Illinois health claims get denied?',
      answer: 'Missing prior authorization, medical necessity decisions, network restrictions, and coding/documentation errors are the most common patterns.'
    }
  ];

  const heroImageCanonical = new URL('/images/states/illinois/health-1600.webp', meta.canonical).toString();

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

      <Breadcrumbs items={[{ label: 'Illinois', link: '/' }, { label: 'Health Claim Denials', link: null }]} />

      <main className="container">
        <h1>Health Insurance Claims Denied in Illinois</h1>
        <StateHeroImage stateSlug="illinois" domain="health" alt="Health Insurance Claims Denied in Illinois" />
        <p className="intro">Match your appeal to the denial reason. Use plan criteria, medical records, and a short provider letter that addresses those criteria directly.</p>
        <p>Looking for auto claims? See <Link to="/auto-insurance-claims-denied-illinois">Auto Insurance Claims Denied in Illinois</Link>.</p>

        <div className="ad-placeholder"><span className="ad-label">Advertisement</span>[AdSense Block 1]</div>

        <section>
          <h2>Common Illinois health denial reasons</h2>
          <ul>
            <li><Link to="/health-insurance-claims-denied-illinois/prior-authorization-missing">Prior authorization missing</Link></li>
            <li><Link to="/health-insurance-claims-denied-illinois/not-medically-necessary">Not medically necessary</Link></li>
            <li><Link to="/health-insurance-claims-denied-illinois/out-of-network-provider">Out-of-network provider</Link></li>
            <li><Link to="/health-insurance-claims-denied-illinois/coding-or-documentation-error">Coding or documentation error</Link></li>
            <li><Link to="/health-insurance-claims-denied-illinois/experimental-or-investigational">Experimental or investigational</Link></li>
            <li><Link to="/health-insurance-claims-denied-illinois/benefit-or-service-excluded">Benefit or service excluded</Link></li>
            <li><Link to="/health-insurance-claims-denied-illinois/timely-filing-issue">Timely filing issue</Link></li>
            <li><Link to="/health-insurance-claims-denied-illinois/coordination-of-benefits">Coordination of benefits</Link></li>
          </ul>
        </section>

        <div className="ad-placeholder"><span className="ad-label">Advertisement</span>[AdSense Block 2]</div>

        <section>
          <h2>Appeals & consumer help in Illinois</h2>
          <p>Use your plan’s internal appeal first. If you still disagree, the Illinois Department of Insurance offers consumer assistance and a complaint process.</p>
        </section>

        <BlogTeasersByState state="illinois" />
        <StateHubLinks currentState="Illinois" />
      </main>

      <Footer />
    </>
  );
};

export default HealthClaimDeniedIllinois;

