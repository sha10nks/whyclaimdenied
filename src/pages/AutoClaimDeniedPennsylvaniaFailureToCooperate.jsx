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

const AutoClaimDeniedPennsylvaniaFailureToCooperate = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'pennsylvania', reasonKey: 'failure-to-cooperate' });
  return <DenialReasonTemplate page={page} />;

  const meta = getMetaData('autoPA_failureToCooperate');
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
      <Breadcrumbs items={[{ label: 'Pennsylvania', link: '/auto-insurance-claims-denied-pennsylvania' }, { label: 'Failure to Cooperate', link: null }]} />
      <main className="container">
        <h1>Failure to Cooperate — Pennsylvania Auto Claims</h1>
        <p className="intro">Identify the missed request and set dates to complete statements, EUO, or records promptly.</p>

        <div className="ad-placeholder"><span className="ad-label">Advertisement</span>[Ad]</div>

        <section>
          <h2>Common requests</h2>
          <ul>
            <li>Recorded statement or examination under oath.</li>
            <li>Photos, repair invoices, or ownership documents.</li>
            <li>Proof of loss and contact details for witnesses.</li>
          </ul>
        </section>

        <section>
          <h2>Fix the issue</h2>
          <ol>
            <li>Reply in writing with dates you can appear or submit records.</li>
            <li>Ask for a short list of all outstanding items to close the claim.</li>
            <li>Confirm receipt and keep a copy of everything you send.</li>
          </ol>
        </section>

        <p>Back to the overview: <Link to="/auto-insurance-claims-denied-pennsylvania">Auto Insurance Claims Denied in Pennsylvania</Link></p>
        <StateHubLinks currentState="Pennsylvania" />
      </main>
      <Footer />
    </>
  );
};

export default AutoClaimDeniedPennsylvaniaFailureToCooperate;
