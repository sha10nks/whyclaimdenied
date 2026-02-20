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

const AutoClaimDeniedPennsylvaniaMissedReportingDeadline = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'pennsylvania', reasonKey: 'missed-reporting-deadline' });
  return <DenialReasonTemplate page={page} />;

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
        <p className="intro">Explain late notice and demonstrate that the facts can still be verified with timely records and statements.</p>

        <div className="ad-placeholder"><span className="ad-label">Advertisement</span>[Ad]</div>

        <section>
          <h2>What insurers look for</h2>
          <ul>
            <li>Notice dates compared to policy reporting language.</li>
            <li>Whether delay harmed the insurer’s ability to investigate.</li>
            <li>Whether you cooperated after learning of the requirement.</li>
          </ul>
        </section>

        <section>
          <h2>What to send</h2>
          <ol>
            <li>Police or incident reports, medical notes, and repair invoices with clear dates.</li>
            <li>A short explanation of why notice was delayed and how facts remain verifiable.</li>
            <li>Contact info for witnesses or shops that can confirm details quickly.</li>
          </ol>
        </section>

        <p>Back to the overview: <Link to="/auto-insurance-claims-denied-pennsylvania">Auto Insurance Claims Denied in Pennsylvania</Link></p>
        <StateHubLinks currentState="Pennsylvania" />
      </main>
      <Footer />
    </>
  );
};

export default AutoClaimDeniedPennsylvaniaMissedReportingDeadline;
