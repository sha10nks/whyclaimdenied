import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import StateHubLinks from '../components/StateHubLinks';
import { getMetaData } from '../seo/meta';
import { generateArticleSchema } from '../seo/schema';

const AutoClaimDeniedFloridaMisrepresentationOrOmission = () => {
  const meta = getMetaData('autoFL_misrep');
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
          { label: 'Auto Claim Denials', link: '/auto-insurance-claims-denied-florida' },
          { label: 'Misrepresentation or Omission', link: null },
        ]}
      />

      <main className="container">
        <h1>Misrepresentation or Omission (Florida Auto Claims)</h1>

        <p className="intro">
          If an insurer denies because of misrepresentation or omission, it is claiming something in the application or policy negotiations was inaccurate or incomplete, and that it matters.
        </p>

        <p>
          These denials can be serious. They sometimes lead to more than a single claim denial. The only safe way to respond is with documents: what the insurer asked, what was answered, what the insurer says is wrong, and why it affected coverage.
        </p>

        <div className="ad-placeholder">
          <span className="ad-label">Advertisement</span>
          [AdSense Block]
        </div>

        <section>
          <h2>Florida statute to know</h2>
          <p>
            Florida law addresses misrepresentation, omission, concealment of fact, or incorrect statements in an application or negotiations for a policy and when they may prevent recovery under the policy.
            {' '}
            <a href="https://www.flsenate.gov/Laws/Statutes/2012/627.409" target="_blank" rel="noreferrer">
              Fla. Stat. § 627.409
            </a>
          </p>
        </section>

        <section>
          <h2>What this usually looks like in auto insurance</h2>
          <ul>
            <li>
              <strong>Garaging address:</strong> The insurer claims the vehicle was primarily kept somewhere else.
            </li>
            <li>
              <strong>Driver information:</strong> The insurer claims a household driver was not disclosed.
            </li>
            <li>
              <strong>Use of the vehicle:</strong> The insurer claims it was used for business or delivery and that wasn’t disclosed.
            </li>
            <li>
              <strong>Prior losses:</strong> The insurer claims the application history was incomplete.
            </li>
          </ul>
          <p>
            Sometimes the insurer is correct. Sometimes the insurer is relying on a bad assumption or a mismatch between what a broker entered and what you provided.
          </p>
        </section>

        <section>
          <h2>What to do next</h2>
          <ol>
            <li>
              <strong>Ask for the full application and underwriting file.</strong> You need the exact questions and the exact recorded answers.
            </li>
            <li>
              <strong>Make the insurer identify the alleged false statement.</strong> One statement. One date. One reason it mattered.
            </li>
            <li>
              <strong>Collect proof that corrects the disputed fact.</strong> Lease, utility bill, registration address, work schedule, delivery logs.
            </li>
            <li>
              <strong>Respond in writing.</strong> Quote the question from the application and your evidence.
            </li>
            <li>
              <strong>Use DFS if you cannot get a clear response.</strong>
              {' '}
              <a href="https://myfloridacfo.com/division/consumers/needourhelp" target="_blank" rel="noreferrer">
                DFS: Get Insurance Help
              </a>
            </li>
          </ol>
        </section>

        <section>
          <h2>Back to the Florida auto denial guide</h2>
          <p>
            <Link to="/auto-insurance-claims-denied-florida">Return to Auto Insurance Claims Denied in Florida</Link>
          </p>
        </section>

        <StateHubLinks currentState="Florida" />
      </main>

      <Footer />
    </>
  );
};

export default AutoClaimDeniedFloridaMisrepresentationOrOmission;

