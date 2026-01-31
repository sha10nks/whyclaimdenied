import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import StateHubLinks from '../components/StateHubLinks';
import { getMetaData } from '../seo/meta';
import { generateArticleSchema } from '../seo/schema';

const AutoClaimDeniedCaliforniaNonCoveredUse = () => {
  const meta = getMetaData('autoCA_nonCoveredUse');
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
          { label: 'Non-Covered Use', link: null },
        ]}
      />

      <main className="container">
        <h1>Non-Covered Use (California Auto Claims)</h1>

        <p className="intro">
          A “non-covered use” denial means the insurer is saying the vehicle was being used in a way the policy does not cover. This often shows up around business use, delivery work, or rideshare driving.
        </p>

        <div className="ad-placeholder">
          <span className="ad-label">Advertisement</span>
          [AdSense Block]
        </div>

        <section>
          <h2>Why this denial happens</h2>
          <p>
            Auto policies are contracts with defined coverage. Many personal auto policies have limitations around commercial use, livery use, or use for hire. Sometimes the denial is legitimate. Sometimes the insurer is over-reading what happened.
          </p>
          <p>
            The key is the facts. Were you actually working? Was the app on? Were you transporting goods or passengers? A small detail can flip the outcome.
          </p>
        </section>

        <section>
          <h2>What to do next</h2>
          <ol>
            <li>
              <strong>Ask the insurer to cite the policy language.</strong> You want the exact exclusion or limitation.
            </li>
            <li>
              <strong>Write down the facts as they happened.</strong> Time, location, why you were driving, and whether any work app was active.
            </li>
            <li>
              <strong>Provide supporting proof.</strong> Screenshots, trip logs, delivery records, or employer notes can clarify.
            </li>
            <li>
              <strong>Appeal in writing.</strong> Keep it factual and tied to the policy words.
            </li>
            <li>
              <strong>Regulator option.</strong> If you can’t get a clear explanation, consider CDI’s consumer complaint process.
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

export default AutoClaimDeniedCaliforniaNonCoveredUse;
