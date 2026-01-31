import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import StateHubLinks from '../components/StateHubLinks';
import { getMetaData } from '../seo/meta';
import { generateArticleSchema } from '../seo/schema';

const HealthClaimDeniedCaliforniaBenefitOrServiceExcluded = () => {
  const meta = getMetaData('healthCA_excludedBenefit');
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
          { label: 'Benefit or Service Excluded', link: null },
        ]}
      />

      <main className="container">
        <h1>Benefit or Service Excluded (California Health Claims)</h1>

        <p className="intro">
          An “excluded benefit” denial means the plan says the service isn’t covered under the contract. This can be surprising when the care feels necessary. Coverage and necessity aren’t always treated the same.
        </p>

        <div className="ad-placeholder">
          <span className="ad-label">Advertisement</span>
          [AdSense Block]
        </div>

        <section>
          <h2>Why this denial happens</h2>
          <ul>
            <li>The plan contract excludes the service category.</li>
            <li>The service is covered only in limited situations, and the plan says you didn’t meet them.</li>
            <li>The service was billed under a code the plan maps to an excluded category.</li>
          </ul>
        </section>

        <section>
          <h2>What to do next</h2>
          <ol>
            <li>
              <strong>Ask for the exact contract language.</strong> The denial should point to the section in your Evidence of Coverage or policy.
            </li>
            <li>
              <strong>Check for exceptions.</strong> Some exclusions have carve-outs for emergencies, prior approvals, or specific diagnoses.
            </li>
            <li>
              <strong>Ask if a different code applies.</strong> Sometimes the service is covered, but the billing code was wrong.
            </li>
            <li>
              <strong>Appeal with a focused argument.</strong> Quote the contract section and explain why it does not apply.
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

export default HealthClaimDeniedCaliforniaBenefitOrServiceExcluded;
