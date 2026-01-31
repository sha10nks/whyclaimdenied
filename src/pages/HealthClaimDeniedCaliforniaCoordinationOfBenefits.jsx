import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import StateHubLinks from '../components/StateHubLinks';
import { getMetaData } from '../seo/meta';
import { generateArticleSchema } from '../seo/schema';

const HealthClaimDeniedCaliforniaCoordinationOfBenefits = () => {
  const meta = getMetaData('healthCA_cob');
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
          { label: 'Coordination of Benefits', link: null },
        ]}
      />

      <main className="container">
        <h1>Coordination of Benefits (California Health Claims)</h1>

        <p className="intro">
          Coordination of benefits (COB) issues happen when a plan believes another insurer should pay first. This can cause delays or denials until the coverage order is clarified.
        </p>

        <div className="ad-placeholder">
          <span className="ad-label">Advertisement</span>
          [AdSense Block]
        </div>

        <section>
          <h2>Why this denial happens</h2>
          <ul>
            <li>The plan thinks you have other active coverage (spouse plan, employer plan, Medicare).</li>
            <li>The plan needs an updated COB form and hasn’t received it.</li>
            <li>A provider billed the wrong plan as primary.</li>
          </ul>
        </section>

        <section>
          <h2>What to do next</h2>
          <ol>
            <li>
              <strong>Confirm what coverage is active.</strong> Get letters or screenshots showing start/end dates.
            </li>
            <li>
              <strong>Submit the plan’s COB form promptly.</strong> Many plans pause claims until this is updated.
            </li>
            <li>
              <strong>Ask the provider to rebill correctly.</strong> If the wrong plan was billed first, that can be fixed.
            </li>
            <li>
              <strong>Appeal if the plan is refusing without explaining the COB rule.</strong>
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

export default HealthClaimDeniedCaliforniaCoordinationOfBenefits;
