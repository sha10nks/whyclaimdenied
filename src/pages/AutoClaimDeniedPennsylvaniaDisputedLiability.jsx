import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import { getMetaData } from '../seo/meta';
import { generateArticleSchema } from '../seo/schema';
import { Link } from '../components/Link';

const AutoClaimDeniedPennsylvaniaDisputedLiability = () => {
  const meta = getMetaData('autoPA_disputedLiability');
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
      <Breadcrumbs items={[{ label: 'Pennsylvania', link: '/auto-insurance-claims-denied-pennsylvania' }, { label: 'Disputed Liability or Fault', link: null }]} />
      <main className="container">
        <h1>Disputed Liability or Fault — Pennsylvania Auto Claims</h1>
        <p className="intro">Organize photos, repair estimates, independent statements, and police or incident reports. Ask the adjuster exactly what evidence would resolve the dispute.</p>
        <p>Back to the overview: <Link to="/auto-insurance-claims-denied-pennsylvania">Auto Insurance Claims Denied in Pennsylvania</Link></p>
        <div className="ad-placeholder"><span className="ad-label">Advertisement</span>[Ad]</div>
      </main>
      <Footer />
    </>
  );
};

export default AutoClaimDeniedPennsylvaniaDisputedLiability;

