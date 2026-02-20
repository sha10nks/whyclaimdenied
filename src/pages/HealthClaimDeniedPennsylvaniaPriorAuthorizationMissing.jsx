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

const HealthClaimDeniedPennsylvaniaPriorAuthorizationMissing = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'pennsylvania', reasonKey: 'prior-authorization-missing' });
  return <DenialReasonTemplate page={page} />;

  const meta = getMetaData('healthPA_priorAuth');
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
      <Breadcrumbs items={[{ label: 'Pennsylvania', link: '/health-insurance-claims-denied-pennsylvania' }, { label: 'Prior Authorization Missing', link: null }]} />
      <main className="container">
        <h1>Prior Authorization Missing — Pennsylvania Health Claims</h1>
        <p className="intro">Request the plan provision and any prior auth records. Note urgent or emergency circumstances that may waive advance authorization.</p>

        <div className="ad-placeholder"><span className="ad-label">Advertisement</span>[Ad]</div>

        <section>
          <h2>What to request</h2>
          <ul>
            <li>Plan section that requires authorization and any policy bulletins.</li>
            <li>Call logs or portal records showing authorization attempts.</li>
            <li>Provider note on urgency and medical need.</li>
          </ul>
        </section>

        <section>
          <h2>How to appeal</h2>
          <ol>
            <li>Ask your provider to submit a concise letter addressing necessity and timing.</li>
            <li>Include records proving emergent circumstances or lack of in-network access.</li>
            <li>Request reprocessing when criteria are met.</li>
          </ol>
        </section>

        <p>Back to the overview: <Link to="/health-insurance-claims-denied-pennsylvania">Health Insurance Claims Denied in Pennsylvania</Link></p>
        <StateHubLinks currentState="Pennsylvania" />
      </main>
      <Footer />
    </>
  );
};

export default HealthClaimDeniedPennsylvaniaPriorAuthorizationMissing;
