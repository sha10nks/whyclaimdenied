import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import { getMetaData } from '../seo/meta';
import { generateArticleSchema } from '../seo/schema';
import { Link } from '../components/Link';

const AutoClaimDeniedIllinoisExcludedDriver = () => {
  const meta = getMetaData('autoIL_excludedDriver');
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
      <Breadcrumbs items={[{ label: 'Illinois', link: '/auto-insurance-claims-denied-illinois' }, { label: 'Excluded Driver', link: null }]} />
      <main className="container">
        <h1>Excluded Driver — Illinois Auto Claims</h1>
        <p className="intro">Request the endorsement listing the excluded driver and confirm it was in force at the time of loss.</p>
        <p>Back to overview: <Link to="/auto-insurance-claims-denied-illinois">Auto Insurance Claims Denied in Illinois</Link></p>
        <div className="ad-placeholder"><span className="ad-label">Advertisement</span>[Ad]</div>
      </main>
      <Footer />
    </>
  );
};

export default AutoClaimDeniedIllinoisExcludedDriver;

