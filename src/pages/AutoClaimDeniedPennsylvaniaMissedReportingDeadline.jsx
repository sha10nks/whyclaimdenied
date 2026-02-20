import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import { getMetaData } from '../seo/meta';
import { generateArticleSchema } from '../seo/schema';
import { Link } from '../components/Link';

const AutoClaimDeniedPennsylvaniaMissedReportingDeadline = () => {
  const meta = getMetaData('autoPA_missedReporting');
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
      <Breadcrumbs items={[{ label: 'Pennsylvania', link: '/auto-insurance-claims-denied-pennsylvania' }, { label: 'Missed Reporting Deadline', link: null }]} />
      <main className="container">
        <h1>Missed Reporting Deadline — Pennsylvania Auto Claims</h1>
        <p className="intro">If notice was delayed, explain the reason and show how it did not prejudice the insurer’s ability to evaluate the claim.</p>
        <ul>
          <li>Request the policy’s notice provision and the date the insurer says notice was received.</li>
          <li>Provide supporting documents (e.g., medical, police, or repair records) to show the facts can still be verified.</li>
        </ul>
        <p>Back to the overview: <Link to="/auto-insurance-claims-denied-pennsylvania">Auto Insurance Claims Denied in Pennsylvania</Link></p>
        <div className="ad-placeholder"><span className="ad-label">Advertisement</span>[Ad]</div>
      </main>
      <Footer />
    </>
  );
};

export default AutoClaimDeniedPennsylvaniaMissedReportingDeadline;

