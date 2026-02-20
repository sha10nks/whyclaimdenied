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

const AutoClaimDeniedIllinoisMissedReportingDeadline = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'illinois', reasonKey: 'missed-reporting-deadline' });
  return <DenialReasonTemplate page={page} />;

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
        <p className="intro">Explain late notice, show the facts remain verifiable, and offer cooperation dates.</p>

        <div className="ad-placeholder"><span className="ad-label">Advertisement</span>[Ad]</div>

        <section>
          <h2>What insurers consider</h2>
          <ul>
            <li>Policy reporting language versus your notice date.</li>
            <li>Whether delay harmed investigation capability.</li>
          </ul>
        </section>

        <section>
          <h2>Provide</h2>
          <ol>
            <li>Police/incident reports, medical notes, shop records with dates.</li>
            <li>Short explanation and witness/shop contact info.</li>
          </ol>
        </section>

        <p>Back to overview: <Link to="/auto-insurance-claims-denied-illinois">Auto Insurance Claims Denied in Illinois</Link></p>
        <StateHubLinks currentState="Illinois" />
      </main>
      <Footer />
    </>
  );
};

export default AutoClaimDeniedIllinoisMissedReportingDeadline;
