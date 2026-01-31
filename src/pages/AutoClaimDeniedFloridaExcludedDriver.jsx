import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import StateHubLinks from '../components/StateHubLinks';
import { getMetaData } from '../seo/meta';
import { generateArticleSchema } from '../seo/schema';

const AutoClaimDeniedFloridaExcludedDriver = () => {
  const meta = getMetaData('autoFL_excludedDriver');
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
          { label: 'Excluded Driver', link: null },
        ]}
      />

      <main className="container">
        <h1>Excluded Driver (Florida Auto Claims)</h1>

        <p className="intro">
          An excluded-driver denial usually means the insurer believes your policy contains a written exclusion for a specific person and that the excluded person was driving (or otherwise involved in a way the insurer says triggers the exclusion).
        </p>

        <p>
          These denials are document disputes. You’re not arguing feelings. You’re asking the insurer to prove the exclusion exists, show its effective date, and show how it applies to the claim being denied.
        </p>

        <div className="ad-placeholder">
          <span className="ad-label">Advertisement</span>
          [AdSense Block]
        </div>

        <section>
          <h2>What to request immediately</h2>
          <ol>
            <li>
              <strong>The excluded-driver endorsement.</strong> Ask for the exact document and the date it became effective.
            </li>
            <li>
              <strong>The declarations page for the relevant policy period.</strong> Confirm the policy number and insured.
            </li>
            <li>
              <strong>The claim notes about driver identity.</strong> If the insurer is wrong about who was driving, correct it with evidence.
            </li>
          </ol>
        </section>

        <section>
          <h2>Common fact patterns</h2>
          <ul>
            <li>
              <strong>Household driver excluded to lower premiums:</strong> The exclusion is real, and the denial may be hard to reverse.
            </li>
            <li>
              <strong>Mistaken identity:</strong> The insurer is relying on an incorrect police report, an assumption, or a misunderstanding.
            </li>
            <li>
              <strong>Wrong document:</strong> The insurer can’t produce a signed endorsement, or the endorsement dates don’t match the loss.
            </li>
          </ul>
        </section>

        <section>
          <h2>Florida escalation options</h2>
          <p>
            If you can’t get the insurer to provide the exclusion endorsement or the denial explanation in writing, Florida’s Department of Financial Services provides consumer insurance assistance.
            {' '}
            <a href="https://myfloridacfo.com/division/consumers/needourhelp" target="_blank" rel="noreferrer">
              DFS: Get Insurance Help
            </a>
          </p>
          <p>
            If you submit a consumer complaint, Florida law includes a requirement for licensed entities to respond to the Division within 14 days after receipt of a written request for documents and information concerning a consumer complaint.
            {' '}
            <a href="https://www.flsenate.gov/Laws/Statutes/2024/624.307" target="_blank" rel="noreferrer">
              Fla. Stat. § 624.307
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

export default AutoClaimDeniedFloridaExcludedDriver;

