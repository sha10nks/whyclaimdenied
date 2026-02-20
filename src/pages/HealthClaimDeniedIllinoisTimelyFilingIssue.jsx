import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import { getMetaData } from '../seo/meta';
import { generateArticleSchema } from '../seo/schema';
import { Link } from '../components/Link';

const HealthClaimDeniedIllinoisTimelyFilingIssue = () => {
  const meta = getMetaData('healthIL_timelyFiling');
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
      <Breadcrumbs items={[{ label: 'Illinois', link: '/health-insurance-claims-denied-illinois' }, { label: 'Timely Filing Issue', link: null }]} />
      <main className="container">
        <h1>Timely Filing Issue — Illinois Health Claims</h1>
        <p className="intro">Confirm plan deadlines and whether exceptions apply. Ask your provider to correct and resubmit if appropriate.</p>
        <p>Back to overview: <Link to="/health-insurance-claims-denied-illinois">Health Insurance Claims Denied in Illinois</Link></p>
        <div className="ad-placeholder"><span className="ad-label">Advertisement</span>[Ad]</div>
      </main>
      <Footer />
    </>
  );
};

export default HealthClaimDeniedIllinoisTimelyFilingIssue;

