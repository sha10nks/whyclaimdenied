import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import StateHubLinks from '../components/StateHubLinks';
import { getMetaData } from '../seo/meta';
import { generateArticleSchema } from '../seo/schema';

const AutoClaimDeniedCaliforniaExcludedDriver = () => {
  const meta = getMetaData('autoCA_excludedDriver');
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
          { label: 'Auto Claim Denials', link: '/auto-insurance-claims-denied-california' },
          { label: 'Excluded Driver', link: null },
        ]}
      />

      <main className="container">
        <h1>Excluded Driver (California Auto Claims)</h1>

        <p className="intro">
          When an insurer denies because of an excluded driver, it usually means the policy has a written exclusion endorsement that names a specific person. If that person was driving, the insurer may treat the loss as outside coverage.
        </p>

        <div className="ad-placeholder">
          <span className="ad-label">Advertisement</span>
          [AdSense Block]
        </div>

        <section>
          <h2>Why this denial happens</h2>
          <p>
            Exclusions are often added to keep premiums lower when someone in the household has a high-risk driving history. The tradeoff is that the excluded person is not covered under that policy.
          </p>
          <p>
            Where disputes happen is in the details: whether the person was actually excluded in writing, whether the insurer can produce the endorsement, and whether the denial matches the policy language.
          </p>
        </section>

        <section>
          <h2>What to do next</h2>
          <ol>
            <li>
              <strong>Request the endorsement.</strong> Ask the insurer for the exact excluded-driver endorsement and the date it became effective.
            </li>
            <li>
              <strong>Confirm who was driving.</strong> If the driver identity is wrong, correct it with documentation.
            </li>
            <li>
              <strong>Check which coverage is being denied.</strong> A driver exclusion can affect liability and collision coverage differently depending on the contract.
            </li>
            <li>
              <strong>Appeal in writing.</strong> Quote the policy language and explain why it doesn’t apply (or what fact the insurer has wrong).
            </li>
            <li>
              <strong>Regulator option.</strong> If you can’t get the endorsement or the insurer won’t explain, consider a complaint to CDI.
              {' '}
              <a href="https://www.insurance.ca.gov/01-consumers/101-help/" target="_blank" rel="noreferrer">
                CDI File a complaint
              </a>
            </li>
          </ol>
        </section>

        <section>
          <h2>Back to the California auto denial guide</h2>
          <p>
            <Link to="/auto-insurance-claims-denied-california">Return to Auto Insurance Claims Denied in California</Link>
          </p>
        </section>

        <StateHubLinks currentState="California" />
      </main>

      <Footer />
    </>
  );
};

export default AutoClaimDeniedCaliforniaExcludedDriver;
