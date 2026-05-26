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
const AutoClaimDeniedGeorgia = () => {
  const meta = getMetaData('autoGA');
  const faqs = [
    {
      question: 'Who regulates auto insurers in Georgia?',
      answer:
        'Georgia’s Office of the Commissioner of Insurance and Safety Fire regulates insurers and provides consumer services, including a complaint process for claim handling issues.',
    },
    {
      question: 'What should I request after a Georgia auto claim denial?',
      answer:
        'Ask for the exact policy language relied on, the key facts used, and a written list of what documents would change the decision.',
    },
    {
      question: 'Can I complain if the insurer keeps changing the reason?',
      answer:
        'Yes. Keep copies of the denial letters and communications and submit a complaint if you can’t get a consistent, policy-based explanation.',
    },
  ];

  const heroImageCanonical = new URL('/images/states/georgia/auto-1600.webp', meta.canonical).toString();

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

      <Breadcrumbs items={[{ label: 'Georgia', link: '/' }, { label: 'Auto Claim Denials', link: null }]} />

      <main className="container">
        <h1>Auto Insurance Claims Denied in Georgia</h1>
        <StateHeroImage stateSlug="georgia" domain="auto" alt="Auto Insurance Claims Denied in Georgia" />
        <p className="intro">
          A denial often sounds final, but many are driven by missing information or a mismatch between the insurer’s assumptions and what you can
          document. Your job is to respond to the denial reasons in the same order, with targeted evidence.
        </p>
        <p>
          Looking for health coverage denials? See <Link to="/health-insurance-claims-denied-georgia">Health Insurance Claims Denied in Georgia</Link>.
        </p>
        <div className="ad-placeholder" data-slot="mid-1">
          <span className="ad-label">Advertisement</span>
        </div>

        <section>
          <h2>Why auto claims get denied</h2>
          <p>
            Most denials come down to coverage being inactive, an exclusion the insurer believes applies, a reporting/cooperation issue, or a
            disagreement about fault and evidence. The fastest progress usually comes from getting the policy language in writing and building a
            short, document-backed timeline.
          </p>
        </section>

        <section>
          <h2>Common auto denial reasons (Georgia)</h2>
          <ul>
            <li><Link to="/auto-insurance-claims-denied-georgia/no-coverage-at-time-of-loss">No coverage at time of loss</Link></li>
            <li><Link to="/auto-insurance-claims-denied-georgia/policy-lapse-or-cancellation">Policy lapse or cancellation</Link></li>
            <li><Link to="/auto-insurance-claims-denied-georgia/missed-reporting-deadline">Missed reporting deadline</Link></li>
            <li><Link to="/auto-insurance-claims-denied-georgia/excluded-driver">Excluded driver</Link></li>
            <li><Link to="/auto-insurance-claims-denied-georgia/misrepresentation-or-concealment">Misrepresentation or concealment</Link></li>
            <li><Link to="/auto-insurance-claims-denied-georgia/non-covered-use">Non-covered use</Link></li>
            <li><Link to="/auto-insurance-claims-denied-georgia/failure-to-cooperate">Failure to cooperate</Link></li>
            <li><Link to="/auto-insurance-claims-denied-georgia/disputed-liability">Disputed liability or fault</Link></li>
          </ul>
        </section>
        <div className="ad-placeholder" data-slot="mid-2">
          <span className="ad-label">Advertisement</span>
        </div>

        <section>
          <h2>What to do immediately after a denial</h2>
          <ol>
            <li>Get the reason and policy provisions in writing.</li>
            <li>Request claim file documents and any photos, statements, or reports relied on.</li>
            <li>Answer each denial reason in order with a short paragraph and labeled exhibits.</li>
            <li>Keep proof of submission and a communication log.</li>
          </ol>
        </section>

        <CalloutBox title="If you need consumer help">
          <p>
            If you can’t get a clear explanation or the insurer is not responding, Georgia’s insurance regulator has a consumer complaint process.
          </p>
        </CalloutBox>

        <section>
          <h2>Appeals &amp; complaints in Georgia (OCI)</h2>
          <p>Start with your insurer’s internal appeal process. If you still disagree, you can file a consumer complaint with Georgia’s OCI.</p>
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

export default AutoClaimDeniedGeorgia;




