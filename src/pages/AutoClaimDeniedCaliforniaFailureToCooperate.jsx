import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import StateHubLinks from '../components/StateHubLinks';
import { getMetaData } from '../seo/meta';
import { generateArticleSchema } from '../seo/schema';

const AutoClaimDeniedCaliforniaFailureToCooperate = () => {
  const meta = getMetaData('autoCA_failureToCooperate');
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
          { label: 'Failure to Cooperate', link: null },
        ]}
      />

      <main className="container">
        <h1>Failure to Cooperate (California Auto Claims)</h1>

        <p className="intro">
          “Failure to cooperate” is a denial that usually means the insurer believes you did not provide requested information, did not attend a required appointment, or did not make the vehicle available for inspection.
        </p>

        <div className="ad-placeholder">
          <span className="ad-label">Advertisement</span>
          [AdSense Block]
        </div>

        <section>
          <h2>Why this denial happens</h2>
          <p>
            Most policies require the insured to cooperate with the investigation. In real life, cooperation issues often happen because:
          </p>
          <ul>
            <li>Requests were sent to an old address or missed in spam.</li>
            <li>The insurer asked for documents that were hard to get quickly.</li>
            <li>The insured was dealing with injuries or travel and missed an appointment.</li>
            <li>The insurer’s requests were broad and unclear, so the insured didn’t know what mattered.</li>
          </ul>
        </section>

        <section>
          <h2>What to do next</h2>
          <ol>
            <li>
              <strong>Ask for a list of what’s missing.</strong> Make the insurer spell out each item they say they didn’t receive.
            </li>
            <li>
              <strong>Provide what you can, quickly.</strong> If you can cure the issue, do it.
            </li>
            <li>
              <strong>Keep proof of delivery.</strong> Use email receipts, upload confirmations, or certified mail.
            </li>
            <li>
              <strong>If requests are unreasonable, say so.</strong> Be calm and specific. Offer a narrower alternative.
            </li>
            <li>
              <strong>Regulator option.</strong> If communication is breaking down, CDI can request a written response through its consumer complaint process.
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

export default AutoClaimDeniedCaliforniaFailureToCooperate;
