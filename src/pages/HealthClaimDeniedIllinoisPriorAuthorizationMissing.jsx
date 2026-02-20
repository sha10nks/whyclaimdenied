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

const HealthClaimDeniedIllinoisPriorAuthorizationMissing = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'illinois', reasonKey: 'prior-authorization-missing' });
  return <DenialReasonTemplate page={page} />;

  const meta = getMetaData('healthIL_priorAuth');
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
      <Breadcrumbs items={[{ label: 'Illinois', link: '/health-insurance-claims-denied-illinois' }, { label: 'Prior Authorization Missing', link: null }]} />
      <main className="container">
        <h1>Prior Authorization Missing — Illinois Health Claims</h1>
        <p className="intro">Ask for the plan provision and prior auth records. Note emergencies or lack of access that may affect requirements.</p>

        <div className="ad-placeholder"><span className="ad-label">Advertisement</span>[Ad]</div>

        <section>
          <h2>Request</h2>
          <ul>
            <li>Plan language, call logs, and portal records.</li>
            <li>Provider statement on urgency and medical need.</li>
          </ul>
        </section>

        <p>Back to overview: <Link to="/health-insurance-claims-denied-illinois">Health Insurance Claims Denied in Illinois</Link></p>
        <StateHubLinks currentState="Illinois" />
      </main>
      <Footer />
    </>
  );
};

export default HealthClaimDeniedIllinoisPriorAuthorizationMissing;
