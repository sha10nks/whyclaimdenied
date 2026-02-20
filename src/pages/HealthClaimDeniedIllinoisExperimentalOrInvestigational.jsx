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

const HealthClaimDeniedIllinoisExperimentalOrInvestigational = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'illinois', reasonKey: 'experimental-or-investigational' });
  return <DenialReasonTemplate page={page} />;

  const meta = getMetaData('healthIL_experimental');
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
      <Breadcrumbs items={[{ label: 'Illinois', link: '/health-insurance-claims-denied-illinois' }, { label: 'Experimental or Investigational', link: null }]} />
      <main className="container">
        <h1>Experimental or Investigational — Illinois Health Claims</h1>
        <p className="intro">Ask for the policy used and provide journal support and provider notes addressing the criteria.</p>

        <div className="ad-placeholder"><span className="ad-label">Advertisement</span>[Ad]</div>

        <section>
          <h2>Target the criteria</h2>
          <ul>
            <li>Medical policy title/date and reviewer notes.</li>
            <li>Guidelines or position statements relevant to your case.</li>
          </ul>
        </section>

        <p>Back to overview: <Link to="/health-insurance-claims-denied-illinois">Health Insurance Claims Denied in Illinois</Link></p>
        <StateHubLinks currentState="Illinois" />
      </main>
      <Footer />
    </>
  );
};

export default HealthClaimDeniedIllinoisExperimentalOrInvestigational;
