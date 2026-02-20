import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import StateHubLinks from '../components/StateHubLinks';
import { getMetaData } from '../seo/meta';
import { generateArticleSchema } from '../seo/schema';
import { Link } from '../components/Link';

const AutoClaimDeniedPennsylvaniaNoCoverageAtTimeOfLoss = () => {
  const meta = getMetaData('autoPA_noCoverage');
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
      <Breadcrumbs items={[{ label: 'Pennsylvania', link: '/auto-insurance-claims-denied-pennsylvania' }, { label: 'No Coverage at Time of Loss', link: null }]} />
      <main className="container">
        <h1>No Coverage at Time of Loss — Pennsylvania Auto Claims</h1>
        <p className="intro">Confirm the policy period, vehicles and drivers listed, any cancellation status, and the exact timeline the insurer relied on.</p>

        <div className="ad-placeholder"><span className="ad-label">Advertisement</span>[Ad]</div>

        <section>
          <h2>Why this denial happens</h2>
          <ul>
            <li>The policy was cancelled for nonpayment before the incident date.</li>
            <li>The vehicle or driver wasn’t covered under the policy form in force.</li>
            <li>The policy effective date started after the loss or is otherwise in dispute.</li>
          </ul>
        </section>

        <section>
          <h2>Documents to request</h2>
          <ol>
            <li>Declarations page and any endorsements in force on the loss date.</li>
            <li>All cancellation or nonrenewal notices with mailing dates.</li>
            <li>Claim denial letter citing policy provisions and timeline.</li>
            <li>Payment ledger if nonpayment is alleged.</li>
          </ol>
        </section>

        <section>
          <h2>Build your response</h2>
          <ul>
            <li>Point out date conflicts and attach bank statements or receipts as proof of payment.</li>
            <li>If a vehicle or driver was omitted, explain how the use fit within your contract or endorsements.</li>
            <li>Ask the adjuster what specific document would change the decision.</li>
          </ul>
        </section>

        <section>
          <h2>When to escalate</h2>
          <p>If you cannot obtain a clear explanation or records, you can submit a consumer complaint to the Pennsylvania Insurance Department for help with claim handling.</p>
        </section>

        <section>
          <h2>Back to the Pennsylvania auto guide</h2>
          <p><Link to="/auto-insurance-claims-denied-pennsylvania">Auto Insurance Claims Denied in Pennsylvania</Link></p>
        </section>

        <StateHubLinks currentState="Pennsylvania" />
      </main>
      <Footer />
    </>
  );
};

export default AutoClaimDeniedPennsylvaniaNoCoverageAtTimeOfLoss;
