import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import StateHubLinks from '../components/StateHubLinks';
import { getMetaData } from '../seo/meta';
import { generateArticleSchema } from '../seo/schema';

const AutoClaimDeniedFloridaFailureToCooperate = () => {
  const meta = getMetaData('autoFL_failureToCooperate');
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
          { label: 'Failure to Cooperate', link: null },
        ]}
      />

      <main className="container">
        <h1>Failure to Cooperate (Florida Auto Claims)</h1>

        <p className="intro">
          “Failure to cooperate” usually means the insurer believes you did not provide requested information, did not attend a required appointment, or did not make the vehicle available for inspection.
        </p>

        <p>
          These denials are often curable. The insurer may treat the file as “denied” because it is missing something. If you can identify what’s missing and provide it with proof, you can sometimes get the claim reopened.
        </p>

        <div className="ad-placeholder">
          <span className="ad-label">Advertisement</span>
          [AdSense Block]
        </div>

        <section>
          <h2>Common cooperation issues</h2>
          <ul>
            <li>Requests went to an old email address or mailing address.</li>
            <li>The insurer requested documents you didn’t understand or couldn’t access quickly.</li>
            <li>Appointments were scheduled, then missed due to work, injury, or travel.</li>
            <li>The insurer asked for broad information and you didn’t know what mattered.</li>
          </ul>
        </section>

        <section>
          <h2>What to do next</h2>
          <ol>
            <li>
              <strong>Ask for a written list of missing items.</strong> Don’t accept “you didn’t cooperate” as a complete explanation.
            </li>
            <li>
              <strong>Provide what you can and document it.</strong> Use upload confirmations or email receipts.
            </li>
            <li>
              <strong>Offer alternatives for hard-to-provide items.</strong> If a request is unclear, ask for a narrower request.
            </li>
            <li>
              <strong>Confirm the insurer’s next step.</strong> Ask whether the claim will be reopened after the missing items are received.
            </li>
          </ol>
          <p>
            If the insurer will not provide a list or will not respond, DFS consumer assistance is an option.
            {' '}
            <a href="https://myfloridacfo.com/division/consumers/needourhelp" target="_blank" rel="noreferrer">
              DFS: Get Insurance Help
            </a>
          </p>
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

export default AutoClaimDeniedFloridaFailureToCooperate;

