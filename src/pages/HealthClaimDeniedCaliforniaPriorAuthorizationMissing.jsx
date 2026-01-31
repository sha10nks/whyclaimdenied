import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import StateHubLinks from '../components/StateHubLinks';
import { getMetaData } from '../seo/meta';
import { generateArticleSchema } from '../seo/schema';

const HealthClaimDeniedCaliforniaPriorAuthorizationMissing = () => {
  const meta = getMetaData('healthCA_priorAuth');
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
          { label: 'Prior Authorization Missing', link: null },
        ]}
      />

      <main className="container">
        <h1>Prior Authorization Missing (California Health Claims)</h1>

        <p className="intro">
          Prior authorization denials are brutal because they often happen after care has already been scheduled, or even after it happened. The plan’s position is usually: “This needed approval first.”
        </p>

        <div className="ad-placeholder">
          <span className="ad-label">Advertisement</span>
          [AdSense Block]
        </div>

        <section>
          <h2>Why this denial happens</h2>
          <p>
            Plans commonly require prior authorization for higher-cost services, imaging, certain medications, procedures, and some specialty referrals. Denials typically happen when:
          </p>
          <ul>
            <li>The provider did not request authorization.</li>
            <li>The provider requested it, but used the wrong code or incomplete documentation.</li>
            <li>The plan approved something narrower than what was billed.</li>
            <li>The plan says the request came after the service date.</li>
          </ul>
        </section>

        <section>
          <h2>California rules to know</h2>
          <p>
            California’s consumer protections depend on who regulates your coverage. Many state-regulated plans use a grievance process, and DMHC regulations describe how grievances must be resolved.
            {' '}
            <a href="https://www.law.cornell.edu/regulations/california/28-CCR-1300.68" target="_blank" rel="noreferrer">
              28 CCR 1300.68
            </a>
          </p>
          <p>
            If you don’t know whether your coverage is DMHC- or CDI-regulated, start with these agency resources:
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
              <strong>Get the denial reason and the code.</strong> Ask for the authorization number they expected and what was missing.
            </li>
            <li>
              <strong>Ask the provider what was submitted.</strong> Many disputes are mismatches between what the provider requested and what was billed.
            </li>
            <li>
              <strong>Request a retro-authorization review if available.</strong> Some plans and providers will correct the process when the care was medically necessary.
            </li>
            <li>
              <strong>Appeal in writing.</strong> Attach clinical notes that support why the service was needed and why timing was not possible.
            </li>
            <li>
              <strong>Escalate if you’re not getting a fair review.</strong> If your plan is state-regulated, a complaint to the appropriate regulator can help move the file.
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

export default HealthClaimDeniedCaliforniaPriorAuthorizationMissing;
