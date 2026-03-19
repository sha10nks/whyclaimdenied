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

const AutoClaimDeniedNorthCarolina = () => {
  const meta = getMetaData('autoNC');
  const faqs = [
    {
      question: 'Who regulates auto insurers in North Carolina?',
      answer:
        'The North Carolina Department of Insurance (NCDOI) oversees insurance companies and provides consumer resources for claim questions and complaint intake.',
    },
    {
      question: 'What should I ask for after a denial?',
      answer:
        'Ask for the exact reason in writing, the policy provisions cited, and a checklist of what the insurer says is missing. That turns a confusing denial into specific items you can answer with documents.',
    },
    {
      question: 'Is a denial final?',
      answer:
        'Not always. Many denials come from missing information or a coverage assumption the insurer made early. A clear, evidence-based response often changes the outcome.',
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

      <Breadcrumbs items={[{ label: 'North Carolina', link: '/' }, { label: 'Auto Claim Denials', link: null }]} />

      <main className="container">
        <h1>Auto Insurance Claims Denied in North Carolina</h1>

        <p className="intro">
          A denied auto insurance claim is frustrating, but the denial letter is also useful: it tells you what the insurer thinks is missing or what contract language it is relying on.
          If you respond to that reason directly—in writing, with the right documents—you give the reviewer a clear path to reconsider the decision.
        </p>

        <p>
          Looking for health coverage instead? See our{' '}
          <Link to="/health-insurance-claims-denied-north-carolina">Health Insurance Claims Denied in North Carolina</Link> guide.
        </p>

        <div className="ad-placeholder">
          <span className="ad-label">Advertisement</span>
          [AdSense Block 1]
        </div>

        <section>
          <h2>Why auto insurance claims get denied (and what “denied” usually means)</h2>
          <p>
            Many denials are not “you are out of luck” decisions. They are often “we can’t pay until we have X” decisions. The insurer may believe coverage was not in force,
            a driver was excluded, the loss happened outside a covered use, or liability is still disputed. Sometimes the denial is based on a misunderstanding—wrong date,
            missing police report, incomplete proof of loss, or an assumption the adjuster made after an early phone call.
          </p>
          <p>
            Your goal is to find the single sentence in the denial letter that drives the decision, then build a short packet that answers that sentence. When your appeal headings match
            the denial headings, and your documents are labeled, review tends to move faster.
          </p>
        </section>

        <section>
          <h2>Common auto claim denial reasons in North Carolina</h2>
          <p>Each page below explains the denial pattern and a practical checklist for what to request and what to submit.</p>
          <ul>
            <li><Link to="/auto-insurance-claims-denied-north-carolina/no-coverage-at-time-of-loss">No coverage at time of loss</Link></li>
            <li><Link to="/auto-insurance-claims-denied-north-carolina/policy-lapse-or-cancellation">Policy lapse or cancellation</Link></li>
            <li><Link to="/auto-insurance-claims-denied-north-carolina/missed-reporting-deadline">Missed reporting deadline</Link></li>
            <li><Link to="/auto-insurance-claims-denied-north-carolina/excluded-driver">Excluded driver</Link></li>
            <li><Link to="/auto-insurance-claims-denied-north-carolina/misrepresentation-or-concealment">Misrepresentation or concealment</Link></li>
            <li><Link to="/auto-insurance-claims-denied-north-carolina/non-covered-use">Non-covered use</Link></li>
            <li><Link to="/auto-insurance-claims-denied-north-carolina/failure-to-cooperate">Failure to cooperate</Link></li>
            <li><Link to="/auto-insurance-claims-denied-north-carolina/disputed-liability">Disputed liability or fault</Link></li>
          </ul>
        </section>

        <div className="ad-placeholder">
          <span className="ad-label">Advertisement</span>
          [AdSense Block 2]
        </div>

        <section>
          <h2>What to do immediately after a denial</h2>
          <ol>
            <li><strong>Get the reason in writing.</strong> Ask for the policy provisions and the key facts the insurer used to deny.</li>
            <li><strong>Ask what would change the decision.</strong> Request a checklist of documents or facts needed for reconsideration.</li>
            <li><strong>Build a one-page timeline.</strong> Date of loss, report date, photos, estimates, letters, and what you submitted.</li>
            <li><strong>Submit a clean packet.</strong> Short cover letter + labeled exhibits beats a long narrative.</li>
            <li><strong>Keep proof of delivery.</strong> Save portal receipts, emails, or mailing confirmation.</li>
          </ol>
        </section>

        <section>
          <h2>Regulator context (NCDOI) and consumer resources</h2>
          <p>
            If communication breaks down—no clear written explanation, repeated delays without specifics, or unanswered written requests—North Carolina’s Department of Insurance provides
            consumer resources and complaint intake. Keep the focus on documented facts: dates, letters, claim numbers, and what you submitted.
          </p>
        </section>

        <CalloutBox title="A simple rule that helps">
          <p>
            Mirror the insurer’s structure. Use the denial letter’s headings as your appeal headings, and answer each item with one paragraph and one or two exhibits. Reviewers are more
            likely to reverse a denial when they can verify your documents quickly.
          </p>
        </CalloutBox>

        <section>
          <h2>Related guides</h2>
          <p>
            Comparing claim handling patterns across states can help you spot what is policy language versus what is documentation-related:
          </p>
          <ul>
            <li><Link to="/auto-insurance-claims-denied-georgia">Auto Insurance Claims Denied in Georgia</Link></li>
            <li><Link to="/auto-insurance-claims-denied-florida">Auto Insurance Claims Denied in Florida</Link></li>
            <li><Link to="/auto-insurance-claims-denied-pennsylvania">Auto Insurance Claims Denied in Pennsylvania</Link></li>
          </ul>
        </section>

        <BlogTeasersByState state="north-carolina" />
        <StateHubLinks currentState="North Carolina" />
      </main>

      <Footer />
    </>
  );
};

export default AutoClaimDeniedNorthCarolina;
