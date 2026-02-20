import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import { getMetaData } from '../seo/meta';
import { generateArticleSchema } from '../seo/schema';
import { Link } from '../components/Link';

const HealthClaimDeniedPennsylvaniaCoordinationOfBenefits = () => {
  const meta = getMetaData('healthPA_cob');
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
      <Breadcrumbs items={[{ label: 'Pennsylvania', link: '/health-insurance-claims-denied-pennsylvania' }, { label: 'Coordination of Benefits', link: null }]} />
      <main className="container">
        <h1>Coordination of Benefits — Pennsylvania Health Claims</h1>
        <p className="intro">Provide current coverage details to both plans and ask for COB updates to release any holds on the claim.</p>
        <p>Back to the overview: <Link to="/health-insurance-claims-denied-pennsylvania">Health Insurance Claims Denied in Pennsylvania</Link></p>
        <div className="ad-placeholder"><span className="ad-label">Advertisement</span>[Ad]</div>
      </main>
      <Footer />
    </>
  );
};

export default HealthClaimDeniedPennsylvaniaCoordinationOfBenefits;

