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

const AutoClaimDeniedPennsylvaniaDisputedLiability = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'pennsylvania', reasonKey: 'disputed-liability' });
  return <DenialReasonTemplate page={page} />;

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
        <p className="intro">Organize photos, repair estimates, witness statements, and police or incident reports. Ask what specific evidence would resolve the dispute.</p>

        <div className="ad-placeholder"><span className="ad-label">Advertisement</span>[Ad]</div>

        <section>
          <h2>Build the record</h2>
          <ul>
            <li>Scene photos, dashcam clips, and diagrams with directions of travel.</li>
            <li>Neutral witness statements with contact info.</li>
            <li>Shop estimates that align with the collision description.</li>
          </ul>
        </section>

        <section>
          <h2>Present it clearly</h2>
          <ol>
            <li>Send a short cover note tying evidence to the key facts in dispute.</li>
            <li>Ask for reconsideration and a written explanation if they still disagree.</li>
          </ol>
        </section>

        <p>Back to the overview: <Link to="/auto-insurance-claims-denied-pennsylvania">Auto Insurance Claims Denied in Pennsylvania</Link></p>
        <StateHubLinks currentState="Pennsylvania" />
      </main>
      <Footer />
    </>
  );
};

export default AutoClaimDeniedPennsylvaniaDisputedLiability;
