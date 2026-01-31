import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import StateHubLinks from '../components/StateHubLinks';
import { getMetaData } from '../seo/meta';
import { generateArticleSchema } from '../seo/schema';

const HealthClaimDeniedCaliforniaCodingOrDocumentationError = () => {
  const meta = getMetaData('healthCA_coding');
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
          { label: 'Health Claim Denials', link: '/health-insurance-claims-denied-california' },
          { label: 'Coding or Documentation Error', link: null },
        ]}
      />

      <main className="container">
        <h1>Coding or Documentation Error (California Health Claims)</h1>

        <p className="intro">
          This is one of the most fixable denial types. The plan is not always saying the care wasn’t covered. It’s often saying the claim paperwork doesn’t support payment.
        </p>

        <div className="ad-placeholder">
          <span className="ad-label">Advertisement</span>
          [AdSense Block]
        </div>

        <section>
          <h2>Why this denial happens</h2>
          <ul>
            <li>A billing code doesn’t match the procedure or diagnosis.</li>
            <li>A modifier is missing.</li>
            <li>Required documentation wasn’t attached.</li>
            <li>The claim was sent to the wrong payer or under the wrong member ID.</li>
          </ul>
          <p>
            You can usually identify this because the denial reason is administrative and the letter references codes, forms, or “documentation not received.”
          </p>
        </section>

        <section>
          <h2>What to do next</h2>
          <ol>
            <li>
              <strong>Ask the provider’s billing office for a copy of what was submitted.</strong>
            </li>
            <li>
              <strong>Compare the denial reason to the claim.</strong> Look for the missing code, modifier, or attachment.
            </li>
            <li>
              <strong>Submit a corrected claim when appropriate.</strong> Many issues are fixed faster this way than through a clinical appeal.
            </li>
            <li>
              <strong>Keep copies and confirmation.</strong> Every resubmission should be trackable.
            </li>
          </ol>
        </section>

        <section>
          <h2>Back to the California health denial guide</h2>
          <p>
            <Link to="/health-insurance-claims-denied-california">Return to Health Insurance Claims Denied in California</Link>
          </p>
        </section>

        <StateHubLinks currentState="California" />
      </main>

      <Footer />
    </>
  );
};

export default HealthClaimDeniedCaliforniaCodingOrDocumentationError;
