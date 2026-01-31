import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import StateHubLinks from '../components/StateHubLinks';
import { getMetaData } from '../seo/meta';
import { generateArticleSchema } from '../seo/schema';

const HealthClaimDeniedFloridaNotMedicallyNecessary = () => {
  const meta = getMetaData('healthFL_medNec');
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
          { label: 'Not Medically Necessary', link: null },
        ]}
      />

      <main className="container">
        <h1>Not Medically Necessary (Florida Health Claims)</h1>

        <p className="intro">
          A medical necessity denial is the plan saying the service doesn’t meet its clinical criteria. You can’t win this by repeating that you’re in pain. You win by getting the criteria and matching the records to the criteria.
        </p>

        <div className="ad-placeholder">
          <span className="ad-label">Advertisement</span>
          [AdSense Block]
        </div>

        <section>
          <h2>What to request</h2>
          <ul>
            <li>The plan’s clinical guideline or medical policy used for the denial.</li>
            <li>The records the plan reviewed (or the list of records it says were missing).</li>
            <li>The written appeal instructions and deadline in your denial notice.</li>
          </ul>
        </section>

        <section>
          <h2>Florida grievance and review paths (plan-type dependent)</h2>
          <p>
            For organizations under Florida’s chapter 641, the subscriber grievance statute includes requirements for how grievances and adverse determinations are handled.
            {' '}
            <a href="https://www.flsenate.gov/laws/statutes/2017/641.511" target="_blank" rel="noreferrer">
              Fla. Stat. § 641.511
            </a>
          </p>
          <p>
            Florida also describes a Subscriber Assistance Program designed to help subscribers with certain unresolved grievances after completing an internal grievance procedure, with exceptions.
            {' '}
            <a href="https://www.flsenate.gov/laws/statutes/2017/408.7056" target="_blank" rel="noreferrer">
              Fla. Stat. § 408.7056
            </a>
          </p>
        </section>

        <section>
          <h2>How to build a strong appeal</h2>
          <ol>
            <li>
              <strong>Use the plan’s criteria as your outline.</strong> If the policy lists requirements A–D, address A–D.
            </li>
            <li>
              <strong>Attach the right records.</strong> Progress notes, imaging results, prior treatment history.
            </li>
            <li>
              <strong>Get a provider letter that is specific.</strong> One page that ties your case to the criteria.
            </li>
            <li>
              <strong>Submit early and keep proof.</strong> Don’t wait for the deadline.
            </li>
          </ol>
          <p>
            If you need consumer help for a Florida policy, DFS is a starting point.
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

export default HealthClaimDeniedFloridaNotMedicallyNecessary;

