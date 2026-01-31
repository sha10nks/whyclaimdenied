import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import StateHubLinks from '../components/StateHubLinks';
import { getMetaData } from '../seo/meta';
import { generateArticleSchema } from '../seo/schema';

const HealthClaimDeniedCaliforniaTimelyFilingIssue = () => {
  const meta = getMetaData('healthCA_timelyFiling');
  const articleSchema = generateArticleSchema({
    headline: meta.title,
    description: meta.description,
    canonicalUrl: meta.canonical,
  });

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={meta.canonical} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      <Header />

      <Breadcrumbs
        items={[
          { label: 'California', link: '/' },
          { label: 'Health Claim Denials', link: '/health-insurance-claims-denied-california' },
          { label: 'Timely Filing Issue', link: null },
        ]}
      />

      <main className="container">
        <h1>Timely Filing Issue (California Health Claims)</h1>

        <p className="intro">
          A timely filing denial means the plan says the claim was submitted too late. This is often a provider billing problem, but it can still affect what you owe.
        </p>

        <div className="ad-placeholder">
          <span className="ad-label">Advertisement</span>
          [AdSense Block]
        </div>

        <section>
          <h2>Why this denial happens</h2>
          <ul>
            <li>The provider’s office submitted the claim after the plan’s filing window.</li>
            <li>The claim bounced due to a missing member ID or incorrect payer, and wasn’t corrected in time.</li>
            <li>The plan says it needed additional documentation and the submission missed the deadline.</li>
          </ul>
        </section>

        <section>
          <h2>What to do next</h2>
          <ol>
            <li>
              <strong>Ask the provider for submission proof.</strong> Dates, confirmations, and rejection notices matter.
            </li>
            <li>
              <strong>Ask the plan for the timely filing rule.</strong> Get the contract section that sets the deadline.
            </li>
            <li>
              <strong>Request a reconsideration if the delay was not your fault.</strong> Explain what happened and attach proof of earlier attempts.
            </li>
            <li>
              <strong>Appeal when necessary.</strong> Even administrative denials can be appealed, and the plan should explain your options.
            </li>
          </ol>
        </section>

        <section>
          <h2>Back to the California health denial guide</h2>
          <p>
            <Link to="/health-insurance-claims-denied-california">Return to Health Insurance Claims Denied in California</Link>
          </p>
        </section>

        <StateHubLinks currentState="California" />
      </main>

      <Footer />
    </>
  );
};

export default HealthClaimDeniedCaliforniaTimelyFilingIssue;
