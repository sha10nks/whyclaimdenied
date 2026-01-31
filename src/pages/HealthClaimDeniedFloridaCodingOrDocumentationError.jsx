import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import StateHubLinks from '../components/StateHubLinks';
import { getMetaData } from '../seo/meta';
import { generateArticleSchema } from '../seo/schema';

const HealthClaimDeniedFloridaCodingOrDocumentationError = () => {
  const meta = getMetaData('healthFL_coding');
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
          { label: 'Coding or Documentation Error', link: null },
        ]}
      />

      <main className="container">
        <h1>Coding or Documentation Error (Florida Health Claims)</h1>

        <p className="intro">
          This is one of the most fixable denial types. The plan is often not saying the care is excluded. It is saying the claim submission doesn’t support payment.
        </p>

        <div className="ad-placeholder">
          <span className="ad-label">Advertisement</span>
          [AdSense Block]
        </div>

        <section>
          <h2>Common coding/documentation denial reasons</h2>
          <ul>
            <li>Code mismatch (procedure and diagnosis don’t align as submitted).</li>
            <li>Missing modifier.</li>
            <li>Missing medical records or referral documentation.</li>
            <li>Wrong member ID or wrong payer.</li>
          </ul>
        </section>

        <section>
          <h2>What to do next</h2>
          <ol>
            <li>
              <strong>Get a copy of the claim as submitted.</strong> Ask the provider’s billing office.
            </li>
            <li>
              <strong>Match the denial code to the claim.</strong> Identify the missing field or attachment.
            </li>
            <li>
              <strong>Correct and resubmit when allowed.</strong> Many plans resolve these faster through correction than through a long appeal.
            </li>
            <li>
              <strong>Keep proof of resubmission.</strong>
            </li>
          </ol>
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

export default HealthClaimDeniedFloridaCodingOrDocumentationError;

