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
const AutoClaimDeniedPennsylvania = () => {
  const meta = getMetaData('autoPA');
  const faqs = [
    {
      question: 'Who oversees auto insurers in Pennsylvania?',
      answer:
        'The Pennsylvania Insurance Department (PID) regulates insurers and handles consumer complaints about claim handling and denials.',
    },
    {
      question: 'Can I file a complaint if the insurer won’t explain the denial?',
      answer:
        'Yes. If you cannot get a clear, written explanation or the claim keeps stalling, you can submit a consumer complaint to the Pennsylvania Insurance Department.',
    },
    {
      question: 'What if the denial cites “late notice” or “no coverage”?',
      answer:
        'Ask for the exact policy provisions and the timeline the insurer relied on. Confirm policy status and the dates of notice and proof. Provide any missing documentation as soon as possible.',
    },
  ];

  const heroImageCanonical = new URL('/images/states/pennsylvania/auto-1600.webp', meta.canonical).toString();

  const articleSchema = generateArticleSchema({
    headline: meta.title,
    description: meta.description,
    canonicalUrl: meta.canonical, imageUrl: heroImageCanonical
  });

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

      <Breadcrumbs items={[{ label: 'Pennsylvania', link: '/' }, { label: 'Auto Claim Denials', link: null }]} />

      <main className="container">
        <h1>Auto Insurance Claims Denied in Pennsylvania</h1>
        <StateHeroImage stateSlug="pennsylvania" domain="auto" alt="Auto Insurance Claims Denied in Pennsylvania" />
        <p className="intro">
          If your auto claim was denied in Pennsylvania, focus on what the decision relied on—policy language, missing documents, or disputed facts—and respond in writing with evidence.
        </p>

        <p>
          Looking for health coverage instead? See our <Link to="/health-insurance-claims-denied-pennsylvania">Health Insurance Claims Denied in Pennsylvania</Link> guide.
        </p>

        <div className="ad-placeholder">
          <span className="ad-label">Advertisement</span>
          [AdSense Block 1]
        </div>

        <section>
          <h2>Intro: Why auto claims get denied</h2>
          <p>
            Denials often point to no coverage at the time of loss, exclusions, missed requirements, or unresolved liability questions. The fastest way forward is to pinpoint the exact reason and address the gap.
          </p>
        </section>

        <section>
          <h2>Common auto claim denial reasons (Pennsylvania)</h2>
          <p>Each link goes to a focused page with Pennsylvania context and a simple next-steps checklist.</p>
          <ul>
            <li><Link to="/auto-insurance-claims-denied-pennsylvania/no-coverage-at-time-of-loss">No coverage at time of loss</Link></li>
            <li><Link to="/auto-insurance-claims-denied-pennsylvania/policy-lapse-or-cancellation">Policy lapse or cancellation</Link></li>
            <li><Link to="/auto-insurance-claims-denied-pennsylvania/missed-reporting-deadline">Missed reporting deadline</Link></li>
            <li><Link to="/auto-insurance-claims-denied-pennsylvania/excluded-driver">Excluded driver</Link></li>
            <li><Link to="/auto-insurance-claims-denied-pennsylvania/misrepresentation-or-concealment">Misrepresentation or concealment</Link></li>
            <li><Link to="/auto-insurance-claims-denied-pennsylvania/non-covered-use">Non-covered use</Link></li>
            <li><Link to="/auto-insurance-claims-denied-pennsylvania/failure-to-cooperate">Failure to cooperate</Link></li>
            <li><Link to="/auto-insurance-claims-denied-pennsylvania/disputed-liability">Disputed liability or fault</Link></li>
          </ul>
        </section>

        <div className="ad-placeholder">
          <span className="ad-label">Advertisement</span>
          [AdSense Block 2]
        </div>

        <section>
          <h2>What to do immediately after a denial</h2>
          <ol>
            <li><strong>Get the reason in writing.</strong> Ask for the policy provisions and key facts the insurer relied on.</li>
            <li><strong>Request your claim file.</strong> Keep it concise; ask for the documents and notes used for the decision.</li>
            <li><strong>Fill the gaps.</strong> If something is missing—proof of loss, photos, estimates—send it with a short cover note.</li>
            <li><strong>Stay organized.</strong> Keep a dated timeline of who you spoke with and what was said.</li>
          </ol>
        </section>

        <CalloutBox title="If you can’t get clarity">
          <p>
            You can submit a consumer complaint to the Pennsylvania Insurance Department and ask for a formal review of claim handling.
          </p>
        </CalloutBox>

        <section>
          <h2>Appeals & complaints in Pennsylvania (PID)</h2>
          <p>
            The Pennsylvania Insurance Department provides consumer assistance and a complaint process for denied or delayed claims.
          </p>
        </section>

        <BlogTeasersByState state="pennsylvania" />
        <StateHubLinks currentState="Pennsylvania" />
      </main>

      <Footer />
    </>
  );
};

export default AutoClaimDeniedPennsylvania;

