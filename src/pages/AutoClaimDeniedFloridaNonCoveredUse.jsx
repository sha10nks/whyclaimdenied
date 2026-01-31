import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import StateHubLinks from '../components/StateHubLinks';
import { getMetaData } from '../seo/meta';
import { generateArticleSchema } from '../seo/schema';

const AutoClaimDeniedFloridaNonCoveredUse = () => {
  const meta = getMetaData('autoFL_nonCoveredUse');
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
          { label: 'Non-Covered Use', link: null },
        ]}
      />

      <main className="container">
        <h1>Non-Covered Use (Florida Auto Claims)</h1>

        <p className="intro">
          A “non-covered use” denial means the insurer is saying the vehicle was being used in a way the policy does not cover. Personal auto policies often have limitations around business use, delivery work, or transporting passengers for pay.
        </p>

        <p>
          The only way to handle this is to get the exact policy language and then document what the car was actually being used for at the time of the loss.
        </p>

        <div className="ad-placeholder">
          <span className="ad-label">Advertisement</span>
          [AdSense Block]
        </div>

        <section>
          <h2>Why these denials happen</h2>
          <ul>
            <li>Rideshare app running or a passenger in the car.</li>
            <li>Delivery or courier work (food, packages, medical deliveries).</li>
            <li>Work vehicle used in a way not disclosed when the policy was priced.</li>
            <li>A misunderstanding: the insurer assumes commercial use because of where the crash happened or what you do for work.</li>
          </ul>
        </section>

        <section>
          <h2>What to request</h2>
          <ol>
            <li>
              <strong>The exact exclusion or limitation.</strong> Ask the insurer to cite the paragraph and endorsement.
            </li>
            <li>
              <strong>The factual basis.</strong> Ask what evidence the insurer is using to claim the vehicle was used outside coverage.
            </li>
            <li>
              <strong>Your recorded statement.</strong> If the insurer is relying on a statement, ask for a copy.
            </li>
          </ol>
        </section>

        <section>
          <h2>What to do next</h2>
          <ol>
            <li>
              <strong>Write down the facts as they happened.</strong> Time, purpose of the trip, whether an app was on, whether a delivery was in progress.
            </li>
            <li>
              <strong>Gather supporting proof.</strong> Screenshots, trip logs, work schedules, receipts.
            </li>
            <li>
              <strong>Appeal in writing.</strong> Quote the policy wording and explain why it does not apply.
            </li>
            <li>
              <strong>Escalate if needed.</strong> If the insurer won’t provide a clear explanation, DFS consumer assistance is an option.
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

export default AutoClaimDeniedFloridaNonCoveredUse;

