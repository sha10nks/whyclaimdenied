import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import { getMetaData } from '../seo/meta';
import { generateArticleSchema } from '../seo/schema';
import { Link } from '../components/Link';

const AutoClaimDeniedPennsylvaniaPolicyLapseOrCancellation = () => {
  const meta = getMetaData('autoPA_lapse');
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
      <Breadcrumbs items={[{ label: 'Pennsylvania', link: '/auto-insurance-claims-denied-pennsylvania' }, { label: 'Policy Lapse or Cancellation', link: null }]} />
      <main className="container">
        <h1>Policy Lapse or Cancellation — Pennsylvania Auto Claims</h1>
        <p className="intro">Ask for the cancellation notice, mailing method, and effective date. Verify whether payment was received during the notice window.</p>
        <ul>
          <li>Request proof of mailing for cancellation notices.</li>
          <li>Compare the cited dates with payment records and bank statements.</li>
          <li>Ask for the policy provision applied and how it fits your timeline.</li>
        </ul>
        <p>Back to the overview: <Link to="/auto-insurance-claims-denied-pennsylvania">Auto Insurance Claims Denied in Pennsylvania</Link></p>
        <div className="ad-placeholder"><span className="ad-label">Advertisement</span>[Ad]</div>
      </main>
      <Footer />
    </>
  );
};

export default AutoClaimDeniedPennsylvaniaPolicyLapseOrCancellation;

