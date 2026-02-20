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

const AutoClaimDeniedPennsylvaniaMisrepresentationOrConcealment = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'pennsylvania', reasonKey: 'misrepresentation-or-concealment' });
  return <DenialReasonTemplate page={page} />;

  const meta = getMetaData('autoPA_misrep');
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
      <Breadcrumbs items={[{ label: 'Pennsylvania', link: '/auto-insurance-claims-denied-pennsylvania' }, { label: 'Misrepresentation or Concealment', link: null }]} />
      <main className="container">
        <h1>Misrepresentation or Concealment — Pennsylvania Auto Claims</h1>
        <p className="intro">Ask the insurer to specify the alleged misstatement and why it was material to underwriting or the claim decision.</p>

        <div className="ad-placeholder"><span className="ad-label">Advertisement</span>[Ad]</div>

        <section>
          <h2>Clarify the allegation</h2>
          <ul>
            <li>Is the insurer alleging application misrepresentation or claim-stage misstatement.</li>
            <li>What questions, dates, and documents they rely on.</li>
            <li>Whether the same decision would have been made without the disputed fact.</li>
          </ul>
        </section>

        <section>
          <h2>How to respond</h2>
          <ol>
            <li>Request the specific application or statement at issue.</li>
            <li>Provide corrected facts with documentation and a short chronology.</li>
            <li>Ask what evidence would resolve the materiality dispute.</li>
          </ol>
        </section>

        <p>Back to the overview: <Link to="/auto-insurance-claims-denied-pennsylvania">Auto Insurance Claims Denied in Pennsylvania</Link></p>
        <StateHubLinks currentState="Pennsylvania" />
      </main>
      <Footer />
    </>
  );
};

export default AutoClaimDeniedPennsylvaniaMisrepresentationOrConcealment;
