import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import StateHubLinks from '../components/StateHubLinks';
import { getMetaData } from '../seo/meta';
import { generateArticleSchema } from '../seo/schema';

const HealthClaimDeniedFloridaTimelyFilingIssue = () => {
  const meta = getMetaData('healthFL_timelyFiling');
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
          { label: 'Florida', link: '/' },
          { label: 'Health Claim Denials', link: '/health-insurance-claims-denied-florida' },
          { label: 'Timely Filing Issue', link: null },
        ]}
      />

      <main className="container">
        <h1>Timely Filing Issue (Florida Health Claims)</h1>

        <p className="intro">
          A timely filing denial means the plan says the claim was submitted after the allowed filing window. This is often a provider billing issue, but it can still affect what you owe.
        </p>

        <div className="ad-placeholder">
          <span className="ad-label">Advertisement</span>
          [AdSense Block]
        </div>

        <section>
          <h2>What to do next</h2>
          <ol>
            <li>
              <strong>Ask the provider for proof of submission and any rejection notices.</strong>
            </li>
            <li>
              <strong>Ask the plan for the contract section that defines the timely filing window.</strong>
            </li>
            <li>
              <strong>Request reconsideration when the delay was caused by a processing issue.</strong> Attach the proof.
            </li>
            <li>
              <strong>Use the plan’s appeal process if needed.</strong>
            </li>
          </ol>
        </section>

        <section>
          <h2>Florida consumer help</h2>
          <p>
            If you need consumer insurance assistance for a Florida policy, DFS is a starting point.
            {' '}
            <a href="https://myfloridacfo.com/division/consumers/needourhelp" target="_blank" rel="noreferrer">
              DFS: Get Insurance Help
            </a>
          </p>
        </section>

        <section>
          <h2>Back to the Florida health denial guide</h2>
          <p>
            <Link to="/health-insurance-claims-denied-florida">Return to Health Insurance Claims Denied in Florida</Link>
          </p>
        </section>

        <StateHubLinks currentState="Florida" />
      </main>

      <Footer />
    </>
  );
};

export default HealthClaimDeniedFloridaTimelyFilingIssue;

