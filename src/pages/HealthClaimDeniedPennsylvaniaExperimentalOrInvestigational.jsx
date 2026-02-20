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

const HealthClaimDeniedPennsylvaniaExperimentalOrInvestigational = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'pennsylvania', reasonKey: 'experimental-or-investigational' });
  return <DenialReasonTemplate page={page} />;

  const meta = getMetaData('healthPA_experimental');
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
      <Breadcrumbs items={[{ label: 'Pennsylvania', link: '/health-insurance-claims-denied-pennsylvania' }, { label: 'Experimental or Investigational', link: null }]} />
      <main className="container">
        <h1>Experimental or Investigational — Pennsylvania Health Claims</h1>
        <p className="intro">Ask for the policy and evidence used. Provide journal support and provider notes addressing criteria.</p>

        <div className="ad-placeholder"><span className="ad-label">Advertisement</span>[Ad]</div>

        <section>
          <h2>Get the policy</h2>
          <ul>
            <li>Medical policy title and version/date.</li>
            <li>Any technology assessment or evidence summary used.</li>
          </ul>
        </section>

        <section>
          <h2>Support your case</h2>
          <ol>
            <li>Targeted provider letter tying your case to policy criteria.</li>
            <li>Peer‑reviewed articles or guidelines supporting effectiveness.</li>
          </ol>
        </section>

        <p>Back to the overview: <Link to="/health-insurance-claims-denied-pennsylvania">Health Insurance Claims Denied in Pennsylvania</Link></p>
        <StateHubLinks currentState="Pennsylvania" />
      </main>
      <Footer />
    </>
  );
};

export default HealthClaimDeniedPennsylvaniaExperimentalOrInvestigational;
