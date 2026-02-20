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

const AutoClaimDeniedPennsylvaniaNonCoveredUse = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'pennsylvania', reasonKey: 'non-covered-use' });
  return <DenialReasonTemplate page={page} />;

  const meta = getMetaData('autoPA_nonCoveredUse');
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
      <Breadcrumbs items={[{ label: 'Pennsylvania', link: '/auto-insurance-claims-denied-pennsylvania' }, { label: 'Non-Covered Use', link: null }]} />
      <main className="container">
        <h1>Non-Covered Use — Pennsylvania Auto Claims</h1>
        <p className="intro">Compare the alleged use with policy exclusions and any endorsements that change those exclusions.</p>

        <div className="ad-placeholder"><span className="ad-label">Advertisement</span>[Ad]</div>

        <section>
          <h2>Typical scenarios</h2>
          <ul>
            <li>Rideshare or delivery use when excluded without a specific endorsement.</li>
            <li>Business use beyond the scope of a personal auto policy.</li>
            <li>Unauthorized drivers or excluded vehicle classes.</li>
          </ul>
        </section>

        <section>
          <h2>Next steps</h2>
          <ol>
            <li>Request the exact exclusion language and any applicable endorsements.</li>
            <li>Explain the actual use and provide receipts or app logs if relevant.</li>
            <li>Ask what documentation would restore coverage under your contract.</li>
          </ol>
        </section>

        <p>Back to the overview: <Link to="/auto-insurance-claims-denied-pennsylvania">Auto Insurance Claims Denied in Pennsylvania</Link></p>
        <StateHubLinks currentState="Pennsylvania" />
      </main>
      <Footer />
    </>
  );
};

export default AutoClaimDeniedPennsylvaniaNonCoveredUse;
