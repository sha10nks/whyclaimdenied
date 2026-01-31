import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import StateHubLinks from '../components/StateHubLinks';
import { getMetaData } from '../seo/meta';
import { generateArticleSchema } from '../seo/schema';

const HealthClaimDeniedFloridaPriorAuthorizationMissing = () => {
  const meta = getMetaData('healthFL_priorAuth');
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
          { label: 'Prior Authorization Missing', link: null },
        ]}
      />

      <main className="container">
        <h1>Prior Authorization Missing (Florida Health Claims)</h1>

        <p className="intro">
          A prior authorization denial often sounds like a technicality, but it has real consequences. The plan’s position is usually: “This service needed approval first.” Sometimes the issue is the provider’s workflow. Sometimes it’s a mismatch between what was authorized and what was billed.
        </p>

        <div className="ad-placeholder">
          <span className="ad-label">Advertisement</span>
          [AdSense Block]
        </div>

        <section>
          <h2>What to check first</h2>
          <ol>
            <li>
              <strong>The denial notice.</strong> Get the exact reason code and the service date.
            </li>
            <li>
              <strong>Whether an authorization existed.</strong> If it did, get the authorization number.
            </li>
            <li>
              <strong>Whether the authorized service matches what was billed.</strong> This mismatch is common.
            </li>
          </ol>
        </section>

        <section>
          <h2>Florida grievance options (plan-type dependent)</h2>
          <p>
            If your coverage is through an organization regulated under Florida’s chapter 641, Florida law describes a grievance procedure available to subscribers.
            {' '}
            <a href="https://www.flsenate.gov/laws/statutes/2017/641.511" target="_blank" rel="noreferrer">
              Fla. Stat. § 641.511
            </a>
          </p>
          <p>
            Florida statutes also describe a Subscriber Assistance Program that can apply in certain state-regulated managed care disputes after completing the internal grievance process, with exceptions.
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
              <strong>Ask the provider for submission proof.</strong> What was requested, when, and what response came back.
            </li>
            <li>
              <strong>Request reconsideration with the correct documentation.</strong> If the plan says it needed something specific, provide that.
            </li>
            <li>
              <strong>Appeal in writing.</strong> Keep it short and attach the authorization records.
            </li>
            <li>
              <strong>Use Florida consumer assistance if you can’t get traction.</strong>
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

export default HealthClaimDeniedFloridaPriorAuthorizationMissing;

