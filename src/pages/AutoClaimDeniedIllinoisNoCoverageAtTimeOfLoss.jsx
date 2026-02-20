import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import StateHubLinks from '../components/StateHubLinks';
import { getMetaData } from '../seo/meta';
import { generateArticleSchema } from '../seo/schema';
import { Link } from '../components/Link';

const AutoClaimDeniedIllinoisNoCoverageAtTimeOfLoss = () => {
  const meta = getMetaData('autoIL_noCoverage');
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
      <Breadcrumbs items={[{ label: 'Illinois', link: '/auto-insurance-claims-denied-illinois' }, { label: 'No Coverage at Time of Loss', link: null }]} />
      <main className="container">
        <h1>No Coverage at Time of Loss — Illinois Auto Claims</h1>
        <p className="intro">Confirm policy effective dates, listed vehicles and drivers, and any cancellation status the insurer relied on.</p>

        <div className="ad-placeholder"><span className="ad-label">Advertisement</span>[Ad]</div>

        <section>
          <h2>Why this happens</h2>
          <ul>
            <li>Cancellation for nonpayment before the incident.</li>
            <li>Vehicle or driver not covered under the policy form.</li>
            <li>Effective date disputes for new or reinstated policies.</li>
          </ul>
        </section>

        <section>
          <h2>What to request</h2>
          <ol>
            <li>Declarations page, endorsements, and denial letter.</li>
            <li>Cancellation notices with mailing dates, and premium ledger.</li>
            <li>The policy provisions quoted in the denial.</li>
          </ol>
        </section>

        <section>
          <h2>Respond with evidence</h2>
          <ul>
            <li>Attach bank/receipt proof if payment was made on time.</li>
            <li>Clarify driver/vehicle use and applicable endorsements.</li>
            <li>Ask what document would change the decision.</li>
          </ul>
        </section>

        <p>Back to overview: <Link to="/auto-insurance-claims-denied-illinois">Auto Insurance Claims Denied in Illinois</Link></p>
        <StateHubLinks currentState="Illinois" />
      </main>
      <Footer />
    </>
  );
};

export default AutoClaimDeniedIllinoisNoCoverageAtTimeOfLoss;
