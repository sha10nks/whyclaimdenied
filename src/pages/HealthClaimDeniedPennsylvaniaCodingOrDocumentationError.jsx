import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import StateHubLinks from '../components/StateHubLinks';
import { getMetaData } from '../seo/meta';
import { generateArticleSchema } from '../seo/schema';
import { Link } from '../components/Link';
import DenialReasonTemplate from '../denials/DenialReasonTemplate';
import { getDenialPage } from '../denials/registry';

const HealthClaimDeniedPennsylvaniaCodingOrDocumentationError = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'pennsylvania', reasonKey: 'coding-or-documentation-error' });
  return <DenialReasonTemplate page={page} />;

  const meta = getMetaData('healthPA_coding');
  const articleSchema = generateArticleSchema({ headline: meta.title, description: meta.description, canonicalUrl: meta.canonical });
  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={meta.canonical} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>
      <Header />
      <Breadcrumbs items={[{ label: 'Pennsylvania', link: '/health-insurance-claims-denied-pennsylvania' }, { label: 'Coding or Documentation Error', link: null }]} />
      <main className="container">
        <h1>Coding or Documentation Error — Pennsylvania Health Claims</h1>
        <p className="intro">Ask your provider to submit corrected billing and notes, then request reprocessing.</p>

        <div className="ad-placeholder"><span className="ad-label">Advertisement</span>[Ad]</div>

        <section>
          <h2>Fix the claim</h2>
          <ul>
            <li>Provider resubmits with correct CPT/ICD and supporting documentation.</li>
            <li>Include operative notes, pathology, or progress notes if relevant.</li>
          </ul>
        </section>

        <section>
          <h2>Follow up</h2>
          <ol>
            <li>Ask for claim status and the new claim number.</li>
            <li>Confirm the denial reason has been cleared.</li>
          </ol>
        </section>

        <p>Back to the overview: <Link to="/health-insurance-claims-denied-pennsylvania">Health Insurance Claims Denied in Pennsylvania</Link></p>
        <StateHubLinks currentState="Pennsylvania" />
      </main>
      <Footer />
    </>
  );
};

export default HealthClaimDeniedPennsylvaniaCodingOrDocumentationError;
