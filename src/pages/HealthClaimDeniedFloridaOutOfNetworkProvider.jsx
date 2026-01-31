import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import StateHubLinks from '../components/StateHubLinks';
import { getMetaData } from '../seo/meta';
import { generateArticleSchema } from '../seo/schema';

const HealthClaimDeniedFloridaOutOfNetworkProvider = () => {
  const meta = getMetaData('healthFL_oON');
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
          { label: 'Out-of-Network Provider', link: null },
        ]}
      />

      <main className="container">
        <h1>Out-of-Network Provider (Florida Health Claims)</h1>

        <p className="intro">
          “Out of network” can mean a full denial, a partial payment, or a denial because you needed a referral or prior authorization. The fastest way forward is to identify which of those you’re dealing with.
        </p>

        <div className="ad-placeholder">
          <span className="ad-label">Advertisement</span>
          [AdSense Block]
        </div>

        <section>
          <h2>What to ask the plan</h2>
          <ol>
            <li>
              <strong>Is this a coverage denial or a pricing/benefit issue?</strong> Get the plan to label it.
            </li>
            <li>
              <strong>What rule applies?</strong> Ask for the exact contract section.
            </li>
            <li>
              <strong>Was an in-network option available?</strong> If the plan says yes, ask how it determined that.
            </li>
          </ol>
        </section>

        <section>
          <h2>Florida escalation paths</h2>
          <p>
            If your plan is an organization under chapter 641, Florida law describes grievance requirements.
            {' '}
            <a href="https://www.flsenate.gov/laws/statutes/2017/641.511" target="_blank" rel="noreferrer">
              Fla. Stat. § 641.511
            </a>
          </p>
          <p>
            If you need state consumer help for a Florida policy, DFS is a starting point.
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

export default HealthClaimDeniedFloridaOutOfNetworkProvider;

