import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import StateHubLinks from '../components/StateHubLinks';
import { getMetaData } from '../seo/meta';
import { generateArticleSchema } from '../seo/schema';

const HealthClaimDeniedFloridaBenefitOrServiceExcluded = () => {
  const meta = getMetaData('healthFL_excludedBenefit');
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
          { label: 'Benefit or Service Excluded', link: null },
        ]}
      />

      <main className="container">
        <h1>Benefit or Service Excluded (Florida Health Claims)</h1>

        <p className="intro">
          An excluded-benefit denial means the plan says the service is not covered under the contract. That can be true even when the service feels necessary.
        </p>

        <div className="ad-placeholder">
          <span className="ad-label">Advertisement</span>
          [AdSense Block]
        </div>

        <section>
          <h2>What to do first</h2>
          <ol>
            <li>
              <strong>Ask for the exact contract section.</strong> The denial should point to where the exclusion is written.
            </li>
            <li>
              <strong>Check for exceptions.</strong> Some exclusions have carve-outs based on diagnosis, setting, or urgency.
            </li>
            <li>
              <strong>Confirm coding.</strong> Sometimes the service is covered but billed under a code the plan maps to an excluded category.
            </li>
          </ol>
        </section>

        <section>
          <h2>Florida escalation paths</h2>
          <p>
            For organizations under chapter 641, Florida’s grievance statute is a key reference.
            {' '}
            <a href="https://www.flsenate.gov/laws/statutes/2017/641.511" target="_blank" rel="noreferrer">
              Fla. Stat. § 641.511
            </a>
          </p>
          <p>
            For consumer insurance assistance on a Florida policy:
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

export default HealthClaimDeniedFloridaBenefitOrServiceExcluded;

