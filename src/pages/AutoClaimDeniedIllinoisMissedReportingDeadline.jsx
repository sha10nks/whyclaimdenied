import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import { getMetaData } from '../seo/meta';
import { generateArticleSchema } from '../seo/schema';
import { Link } from '../components/Link';

const AutoClaimDeniedIllinoisMissedReportingDeadline = () => {
  const meta = getMetaData('autoIL_missedReporting');
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
      <Breadcrumbs items={[{ label: 'Illinois', link: '/auto-insurance-claims-denied-illinois' }, { label: 'Missed Reporting Deadline', link: null }]} />
      <main className="container">
        <h1>Missed Reporting Deadline — Illinois Auto Claims</h1>
        <p className="intro">Explain late notice and show that the facts can still be verified with records and statements.</p>
        <p>Back to overview: <Link to="/auto-insurance-claims-denied-illinois">Auto Insurance Claims Denied in Illinois</Link></p>
        <div className="ad-placeholder"><span className="ad-label">Advertisement</span>[Ad]</div>
      </main>
      <Footer />
    </>
  );
};

export default AutoClaimDeniedIllinoisMissedReportingDeadline;

