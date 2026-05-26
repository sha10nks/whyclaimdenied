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
const HealthClaimDeniedGeorgia = () => {
  const meta = getMetaData('healthGA');
  const faqs = [
    {
      question: 'Top reasons Georgia health claims get denied?',
      answer:
        'Missing prior authorization, medical necessity decisions, network restrictions, coding/documentation errors, and benefit exclusions are common denial drivers.',
    },
    {
      question: 'What should I ask for from the plan first?',
      answer:
        'Ask for the exact plan provision or medical policy criteria relied on, and a checklist of what is missing for reconsideration.',
    },
    {
      question: 'Where can I file a complaint in Georgia?',
      answer:
        'After using your plan’s appeal process, you can contact Georgia’s Office of the Commissioner of Insurance and Safety Fire for consumer assistance and complaints.',
    },
  ];

  const heroImageCanonical = new URL('/images/states/georgia/health-1600.webp', meta.canonical).toString();

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

      <Breadcrumbs items={[{ label: 'Georgia', link: '/' }, { label: 'Health Claim Denials', link: null }]} />

      <main className="container">
        <h1>Health Insurance Claims Denied in Georgia</h1>
        <StateHeroImage stateSlug="georgia" domain="health" alt="Health Insurance Claims Denied in Georgia" />
        <p className="intro">
          Strong appeals are criteria-based. Match your appeal headings to the denial reasons, request the plan’s medical policy or benefit
          provision, and submit documentation that answers each reason directly.
        </p>
        <p>
          Looking for auto claims? See <Link to="/auto-insurance-claims-denied-georgia">Auto Insurance Claims Denied in Georgia</Link>.
        </p>
<div className="ad-placeholder">
  <span className="ad-label">Advertisement</span>
        </div>

        <section>
          <h2>Common Georgia health denial reasons</h2>
          <ul>
            <li><Link to="/health-insurance-claims-denied-georgia/prior-authorization-missing">Prior authorization missing</Link></li>
            <li><Link to="/health-insurance-claims-denied-georgia/not-medically-necessary">Not medically necessary</Link></li>
            <li><Link to="/health-insurance-claims-denied-georgia/out-of-network-provider">Out-of-network provider</Link></li>
            <li><Link to="/health-insurance-claims-denied-georgia/coding-or-documentation-error">Coding or documentation error</Link></li>
            <li><Link to="/health-insurance-claims-denied-georgia/experimental-or-investigational">Experimental or investigational</Link></li>
            <li><Link to="/health-insurance-claims-denied-georgia/benefit-or-service-excluded">Benefit or service excluded</Link></li>
            <li><Link to="/health-insurance-claims-denied-georgia/timely-filing-issue">Timely filing issue</Link></li>
            <li><Link to="/health-insurance-claims-denied-georgia/coordination-of-benefits">Coordination of benefits</Link></li>
          </ul>
        </section>
<div className="ad-placeholder">
  <span className="ad-label">Advertisement</span>
        </div>

        <CalloutBox title="Make the denial concrete">
          <p>
            Ask the plan for the exact criteria used, then answer those criteria point-by-point. A short provider letter that tracks the plan’s
            language is usually more effective than a general letter.
          </p>
        </CalloutBox>

        <section>
          <h2>Appeals &amp; consumer help in Georgia</h2>
          <p>Use your plan’s internal appeal first. If you still disagree or need consumer help, Georgia’s OCI has a consumer complaint process.</p>
          <p>
            Official resource:{' '}
            <a href="https://oci.georgia.gov/file-consumer-insurance-complaint" target="_blank" rel="noreferrer">
              Georgia OCI — File a Consumer Insurance Complaint
            </a>
          </p>
        </section>

        <section>
          <h2>FAQs</h2>
          <div className="faq-section">
            {faqs.map((item) => (
              <div key={item.question} className="faq-item">
                <div className="faq-question" role="heading" aria-level={3}>
                  {item.question}
                </div>
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <BlogTeasersByState state="georgia" />
        <StateHubLinks currentState="Georgia" />
      </main>

      <Footer />
    </>
  );
};

export default HealthClaimDeniedGeorgia;




