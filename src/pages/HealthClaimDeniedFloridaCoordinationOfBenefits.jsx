import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import StateHubLinks from '../components/StateHubLinks';
import { getMetaData } from '../seo/meta';
import { generateArticleSchema } from '../seo/schema';

const HealthClaimDeniedFloridaCoordinationOfBenefits = () => {
  const meta = getMetaData('healthFL_cob');
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
          { label: 'Coordination of Benefits', link: null },
        ]}
      />

      <main className="container">
        <h1>Coordination of Benefits (Florida Health Claims)</h1>

        <p className="intro">
          Coordination of benefits (COB) issues happen when a plan believes another insurer should pay first. Claims can be delayed or denied until the coverage order is clarified.
        </p>

        <div className="ad-placeholder">
          <span className="ad-label">Advertisement</span>
          [AdSense Block]
        </div>

        <section>
          <h2>What to do next</h2>
          <ol>
            <li>
              <strong>Confirm what coverage is active.</strong> Get start/end dates for each plan.
            </li>
            <li>
              <strong>Submit the plan’s COB form.</strong> Many plans pause claims until it is updated.
            </li>
            <li>
              <strong>Ask the provider to rebill correctly.</strong> Wrong primary/secondary billing is common.
            </li>
            <li>
              <strong>Appeal if the plan won’t explain the COB rule it is applying.</strong>
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

export default HealthClaimDeniedFloridaCoordinationOfBenefits;

