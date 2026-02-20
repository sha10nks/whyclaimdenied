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

const AutoClaimDeniedIllinois = () => {
  const meta = getMetaData('autoIL');
  const faqs = [
    {
      question: 'Who regulates auto insurers in Illinois?',
      answer: 'The Illinois Department of Insurance (IDOI) oversees insurers and accepts consumer complaints about claim handling.'
    },
    {
      question: 'Can I complain if the insurer won’t explain the denial?',
      answer: 'Yes. If the decision isn’t clear or timelines slip, you can submit a complaint to the IDOI for review.'
    },
    {
      question: 'What documents should I request after a denial?',
      answer: 'Ask for the policy provisions relied on, the key facts used, and any documents the adjuster used to make the decision.'
    }
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

      <Breadcrumbs items={[{ label: 'Illinois', link: '/' }, { label: 'Auto Claim Denials', link: null }]} />

      <main className="container">
        <h1>Auto Insurance Claims Denied in Illinois</h1>
        <p className="intro">A clear, written denial is your starting point. Identify the exact reason and respond with short, specific evidence.</p>
        <p>Looking for health coverage? See <Link to="/health-insurance-claims-denied-illinois">Health Insurance Claims Denied in Illinois</Link>.</p>

        <div className="ad-placeholder"><span className="ad-label">Advertisement</span>[AdSense Block 1]</div>

        <section>
          <h2>Why auto claims get denied</h2>
          <p>Most denials point to no coverage at the time of loss, exclusions, missed requirements, or unresolved liability facts. Focus on specifics: what policy language and documents the adjuster used.</p>
        </section>

        <section>
          <h2>Common auto denial reasons (Illinois)</h2>
          <ul>
            <li><Link to="/auto-insurance-claims-denied-illinois/no-coverage-at-time-of-loss">No coverage at time of loss</Link></li>
            <li><Link to="/auto-insurance-claims-denied-illinois/policy-lapse-or-cancellation">Policy lapse or cancellation</Link></li>
            <li><Link to="/auto-insurance-claims-denied-illinois/missed-reporting-deadline">Missed reporting deadline</Link></li>
            <li><Link to="/auto-insurance-claims-denied-illinois/excluded-driver">Excluded driver</Link></li>
            <li><Link to="/auto-insurance-claims-denied-illinois/misrepresentation-or-concealment">Misrepresentation or concealment</Link></li>
            <li><Link to="/auto-insurance-claims-denied-illinois/non-covered-use">Non-covered use</Link></li>
            <li><Link to="/auto-insurance-claims-denied-illinois/failure-to-cooperate">Failure to cooperate</Link></li>
            <li><Link to="/auto-insurance-claims-denied-illinois/disputed-liability">Disputed liability or fault</Link></li>
          </ul>
        </section>

        <div className="ad-placeholder"><span className="ad-label">Advertisement</span>[AdSense Block 2]</div>

        <section>
          <h2>What to do immediately after a denial</h2>
          <ol>
            <li>Get the exact policy provisions and facts in writing.</li>
            <li>Request your claim file documents.</li>
            <li>Provide missing records with a brief cover note.</li>
            <li>Keep a dated communication log.</li>
          </ol>
        </section>

        <CalloutBox title="If the process stalls">
          <p>You can ask the Illinois Department of Insurance to review claim handling by submitting a consumer complaint.</p>
        </CalloutBox>

        <section>
          <h2>Appeals & complaints in Illinois (IDOI)</h2>
          <p>Appeal in writing to the insurer first. If you still disagree or can’t get clarity, contact the Illinois Department of Insurance consumer services.</p>
        </section>

        <BlogTeasersByState state="illinois" />
        <StateHubLinks currentState="Illinois" />
      </main>

      <Footer />
    </>
  );
};

export default AutoClaimDeniedIllinois;

