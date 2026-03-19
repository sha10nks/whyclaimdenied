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

const AutoClaimDeniedMichigan = () => {
  const meta = getMetaData('autoMI');
  const faqs = [
    {
      question: 'Who regulates auto insurers in Michigan?',
      answer:
        'Michigan’s Department of Insurance and Financial Services (DIFS) regulates insurers and provides consumer information and complaint intake.',
    },
    {
      question: 'What documents matter most after a denial?',
      answer:
        'Start with the denial letter, the exact policy provisions cited, and a clear list of what the insurer says is missing. Then gather only the records that directly answer those reasons—photos, estimates, statements, and dated paperwork.',
    },
    {
      question: 'How do I make an appeal easier to review?',
      answer:
        'Use the denial letter’s headings as your appeal headings, respond point-by-point, and label exhibits. A short, organized packet is easier to approve than a long narrative.',
    },
  ];

  const articleSchema = generateArticleSchema({ headline: meta.title, description: meta.description, canonicalUrl: meta.canonical });
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

      <Breadcrumbs items={[{ label: 'Michigan', link: '/' }, { label: 'Auto Claim Denials', link: null }]} />

      <main className="container">
        <h1>Auto Insurance Claims Denied in Michigan</h1>

        <p className="intro">
          When an auto claim is denied, the most productive next step is to turn the decision into a checklist. Ask for the exact reason in writing, the contract language cited, and the
          documents the insurer relied on. Then answer that reason directly with evidence.
        </p>

        <p>
          Looking for health coverage instead? See our{' '}
          <Link to="/health-insurance-claims-denied-michigan">Health Insurance Claims Denied in Michigan</Link> guide.
        </p>

        <div className="ad-placeholder">
          <span className="ad-label">Advertisement</span>
          [AdSense Block 1]
        </div>

        <section>
          <h2>Common denial patterns</h2>
          <p>
            Auto denials typically fall into a few buckets: coverage not in force on the loss date, an exclusion the insurer believes applies, a missing reporting or documentation requirement,
            or a liability dispute that keeps the claim from being paid promptly.
          </p>
          <p>
            Many disputes are solved by narrowing the issue. Instead of arguing the whole story, focus on the one reason the insurer states. If the denial is date-driven, build a timeline. If it is
            exclusion-driven, compare the facts to the specific exclusion language and endorsements.
          </p>
        </section>

        <section>
          <h2>Common auto claim denial reasons in Michigan</h2>
          <ul>
            <li><Link to="/auto-insurance-claims-denied-michigan/no-coverage-at-time-of-loss">No coverage at time of loss</Link></li>
            <li><Link to="/auto-insurance-claims-denied-michigan/policy-lapse-or-cancellation">Policy lapse or cancellation</Link></li>
            <li><Link to="/auto-insurance-claims-denied-michigan/missed-reporting-deadline">Missed reporting deadline</Link></li>
            <li><Link to="/auto-insurance-claims-denied-michigan/excluded-driver">Excluded driver</Link></li>
            <li><Link to="/auto-insurance-claims-denied-michigan/misrepresentation-or-concealment">Misrepresentation or concealment</Link></li>
            <li><Link to="/auto-insurance-claims-denied-michigan/non-covered-use">Non-covered use</Link></li>
            <li><Link to="/auto-insurance-claims-denied-michigan/failure-to-cooperate">Failure to cooperate</Link></li>
            <li><Link to="/auto-insurance-claims-denied-michigan/disputed-liability">Disputed liability or fault</Link></li>
          </ul>
        </section>

        <div className="ad-placeholder">
          <span className="ad-label">Advertisement</span>
          [AdSense Block 2]
        </div>

        <section>
          <h2>What to do immediately after a denial</h2>
          <ol>
            <li><strong>Request the claim file basics.</strong> Ask for the denial letter, the policy provisions cited, and the documents used to decide.</li>
            <li><strong>Write a short appeal.</strong> One heading per denial reason, in the same order as the letter.</li>
            <li><strong>Attach labeled exhibits.</strong> Photos, estimates, police report, proof of payment, witness statements, or other dated records.</li>
            <li><strong>Keep submission proof.</strong> Save portal receipts or delivery confirmation.</li>
            <li><strong>Follow up in writing.</strong> Ask for confirmation of receipt and a written decision timeline.
            </li>
          </ol>
        </section>

        <section>
          <h2>Consumer resources (Michigan DIFS)</h2>
          <p>
            If you cannot get a clear written explanation, or the claim stalls without specifics, Michigan’s Department of Insurance and Financial Services provides consumer information and
            a complaint process. Keep your request factual: claim number, dates, denial letters, and what you submitted.
          </p>
        </section>

        <CalloutBox title="Keep it narrow">
          <p>
            The best appeals do not try to prove everything. They prove the one fact that changes the decision. Identify the sentence that drives the denial and attach the one or two documents
            that directly answer it.
          </p>
        </CalloutBox>

        <section>
          <h2>Related guides</h2>
          <p>
            If you are comparing documentation and denial patterns across the region, these guides can help:
          </p>
          <ul>
            <li><Link to="/auto-insurance-claims-denied-ohio">Auto Insurance Claims Denied in Ohio</Link></li>
            <li><Link to="/auto-insurance-claims-denied-illinois">Auto Insurance Claims Denied in Illinois</Link></li>
            <li><Link to="/auto-insurance-claims-denied-pennsylvania">Auto Insurance Claims Denied in Pennsylvania</Link></li>
          </ul>
        </section>

        <BlogTeasersByState state="michigan" />
        <StateHubLinks currentState="Michigan" />
      </main>

      <Footer />
    </>
  );
};

export default AutoClaimDeniedMichigan;

