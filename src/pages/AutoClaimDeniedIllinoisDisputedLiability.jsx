import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import StateHubLinks from '../components/StateHubLinks';
import { getMetaData } from '../seo/meta';
import { generateArticleSchema } from '../seo/schema';
import { Link } from '../components/Link';

const AutoClaimDeniedIllinoisDisputedLiability = () => {
  const meta = getMetaData('autoIL_disputedLiability');
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
      <Breadcrumbs items={[{ label: 'Illinois', link: '/auto-insurance-claims-denied-illinois' }, { label: 'Disputed Liability or Fault', link: null }]} />
      <main className="container">
        <h1>Disputed Liability or Fault — Illinois Auto Claims</h1>
        <p className="intro">Organize photos, repair estimates, and witness statements. Ask what specific evidence would resolve the dispute.</p>

        <div className="ad-placeholder"><span className="ad-label">Advertisement</span>[Ad]</div>

        <section>
          <h2>Evidence that helps</h2>
          <ul>
            <li>Scene photos, diagrams, and dashcam if available.</li>
            <li>Neutral witness statements with contacts.</li>
            <li>Repair estimates consistent with the mechanics of impact.</li>
          </ul>
        </section>

        <p>Back to overview: <Link to="/auto-insurance-claims-denied-illinois">Auto Insurance Claims Denied in Illinois</Link></p>
        <StateHubLinks currentState="Illinois" />
      </main>
      <Footer />
    </>
  );
};

export default AutoClaimDeniedIllinoisDisputedLiability;
