import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import { getMetaData } from '../seo/meta';
import { generateArticleSchema } from '../seo/schema';
import { Link } from '../components/Link';

const AutoClaimDeniedPennsylvaniaNoCoverageAtTimeOfLoss = () => {
  const meta = getMetaData('autoPA_noCoverage');
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
      <Breadcrumbs items={[{ label: 'Pennsylvania', link: '/auto-insurance-claims-denied-pennsylvania' }, { label: 'No Coverage at Time of Loss', link: null }]} />
      <main className="container">
        <h1>No Coverage at Time of Loss — Pennsylvania Auto Claims</h1>
        <p className="intro">Confirm the policy period, cancellation status, and the timeline the insurer relied on. Ask for the exact documents used to reach the decision.</p>
        <ul>
          <li>Request policy declarations and any cancellation/notice letters.</li>
          <li>Verify payment history if nonpayment is cited.</li>
          <li>Ask what evidence would change the decision.</li>
        </ul>
        <p>Back to the overview: <Link to="/auto-insurance-claims-denied-pennsylvania">Auto Insurance Claims Denied in Pennsylvania</Link></p>
        <div className="ad-placeholder"><span className="ad-label">Advertisement</span>[Ad]</div>
      </main>
      <Footer />
    </>
  );
};

export default AutoClaimDeniedPennsylvaniaNoCoverageAtTimeOfLoss;

