import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import StateHubLinks from '../components/StateHubLinks';
import { getMetaData } from '../seo/meta';
import { generateArticleSchema } from '../seo/schema';

const HealthClaimDeniedCaliforniaOutOfNetworkProvider = () => {
  const meta = getMetaData('healthCA_oON');
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
          { label: 'Out-of-Network Provider', link: null },
        ]}
      />

      <main className="container">
        <h1>Out-of-Network Provider (California Health Claims)</h1>

        <p className="intro">
          Out-of-network denials can mean different things: the plan won’t pay at all, the plan will only pay a lower amount, or the plan will only pay after certain rules are met.
        </p>

        <div className="ad-placeholder">
          <span className="ad-label">Advertisement</span>
          [AdSense Block]
        </div>

        <section>
          <h2>Why this denial happens</h2>
          <ul>
            <li>The provider is not contracted with your plan.</li>
            <li>You needed a referral or authorization before using that provider.</li>
            <li>The plan believes an in-network option was available.</li>
            <li>The claim was processed under the wrong benefit category (for example, billed as out-of-network when it should have been treated differently).</li>
          </ul>
        </section>

        <section>
          <h2>California rules to know</h2>
          <p>
            Start by identifying whether the plan is regulated by DMHC or CDI. That affects your complaint path.
            {' '}
            <a href="https://www.dmhc.ca.gov/fileacomplaint/frequentlyaskedquestions.aspx" target="_blank" rel="noreferrer">
              DMHC FAQ
            </a>
            {' · '}
            <a
              href="https://www.insurance.ca.gov/01-consumers/105-type/95-guides/05-health/healthcareguidecomplaintprocess.cfm"
              target="_blank"
              rel="noreferrer"
            >
              CDI health complaint process
            </a>
          </p>
        </section>

        <section>
          <h2>What to do next</h2>
          <ol>
            <li>
              <strong>Get the denial reason and benefit type.</strong> “Out of network” can be a pricing issue or a coverage issue.
            </li>
            <li>
              <strong>Ask whether an exception applies.</strong> If you couldn’t access an in-network provider in time, say so and document it.
            </li>
            <li>
              <strong>Request the network directory information used.</strong> If the plan relies on a provider list, ask what they used at the time.
            </li>
            <li>
              <strong>Appeal with documentation.</strong> Include call logs, referral requests, and any notes about access issues.
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

export default HealthClaimDeniedCaliforniaOutOfNetworkProvider;
