import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import StateHubLinks from '../components/StateHubLinks';
import { getMetaData } from '../seo/meta';
import { generateArticleSchema } from '../seo/schema';

const HealthClaimDeniedFloridaExperimentalOrInvestigational = () => {
  const meta = getMetaData('healthFL_experimental');
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
          { label: 'Experimental or Investigational', link: null },
        ]}
      />

      <main className="container">
        <h1>Experimental or Investigational (Florida Health Claims)</h1>

        <p className="intro">
          When a plan calls a service “experimental” or “investigational,” it is usually relying on its medical policy and evidence standards. These denials are hard because they mix medicine, policy wording, and documentation.
        </p>

        <div className="ad-placeholder">
          <span className="ad-label">Advertisement</span>
          [AdSense Block]
        </div>

        <section>
          <h2>What to request</h2>
          <ul>
            <li>The plan’s medical policy used for the denial.</li>
            <li>Any evidence summary the plan relied on.</li>
            <li>The plan’s appeal instructions and deadline.</li>
          </ul>
        </section>

        <section>
          <h2>Florida grievance options</h2>
          <p>
            For organizations under chapter 641, Florida’s grievance statute includes requirements for handling grievances and adverse determinations.
            {' '}
            <a href="https://www.flsenate.gov/laws/statutes/2017/641.511" target="_blank" rel="noreferrer">
              Fla. Stat. § 641.511
            </a>
          </p>
          <p>
            Florida also describes a Subscriber Assistance Program for certain unresolved grievances after internal review, with exceptions.
            {' '}
            <a href="https://www.flsenate.gov/laws/statutes/2017/408.7056" target="_blank" rel="noreferrer">
              Fla. Stat. § 408.7056
            </a>
          </p>
        </section>

        <section>
          <h2>What to do next</h2>
          <ol>
            <li>
              <strong>Ask your doctor to write to the criteria.</strong> Not a general letter. A letter that matches the plan’s policy points.
            </li>
            <li>
              <strong>Attach supporting literature if the plan requests it.</strong> Keep it short and relevant.
            </li>
            <li>
              <strong>Appeal in writing and keep proof.</strong>
            </li>
            <li>
              <strong>Use DFS if you need consumer help for a Florida policy.</strong>
              {' '}
              <a href="https://myfloridacfo.com/division/consumers/needourhelp" target="_blank" rel="noreferrer">
                DFS: Get Insurance Help
              </a>
            </li>
          </ol>
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

export default HealthClaimDeniedFloridaExperimentalOrInvestigational;

