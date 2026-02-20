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

const HealthClaimDeniedPennsylvaniaBenefitOrServiceExcluded = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'pennsylvania', reasonKey: 'benefit-or-service-excluded' });
  return <DenialReasonTemplate page={page} />;

  const meta = getMetaData('healthPA_excludedBenefit');
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
      <Breadcrumbs items={[{ label: 'Pennsylvania', link: '/health-insurance-claims-denied-pennsylvania' }, { label: 'Benefit or Service Excluded', link: null }]} />
      <main className="container">
        <h1>Benefit or Service Excluded — Pennsylvania Health Claims</h1>
        <p className="intro">Confirm the exact contract exclusion and whether exceptions apply when criteria are met.</p>

        <div className="ad-placeholder"><span className="ad-label">Advertisement</span>[Ad]</div>

        <section>
          <h2>What to check</h2>
          <ul>
            <li>Definition of the excluded benefit and any carve‑outs.</li>
            <li>Medical policy that might override or clarify the exclusion.</li>
          </ul>
        </section>

        <section>
          <h2>Appeal strategies</h2>
          <ol>
            <li>Show how your case fits an exception or meets criteria.</li>
            <li>Provide targeted provider notes and relevant policy citations.</li>
          </ol>
        </section>

        <p>Back to the overview: <Link to="/health-insurance-claims-denied-pennsylvania">Health Insurance Claims Denied in Pennsylvania</Link></p>
        <StateHubLinks currentState="Pennsylvania" />
      </main>
      <Footer />
    </>
  );
};

export default HealthClaimDeniedPennsylvaniaBenefitOrServiceExcluded;
