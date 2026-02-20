import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import StateHubLinks from '../components/StateHubLinks';
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
        <p className="intro">Ask for the cancellation notice, mailing method, and effective date. Compare the notice window to your payment records.</p>

        <div className="ad-placeholder"><span className="ad-label">Advertisement</span>[Ad]</div>

        <section>
          <h2>Why this denial happens</h2>
          <ul>
            <li>Nonpayment cancellation effective before the loss.</li>
            <li>Nonrenewal or rescission alleged by the insurer.</li>
            <li>Policy reinstated after the loss date.</li>
          </ul>
        </section>

        <section>
          <h2>What to request</h2>
          <ol>
            <li>All cancellation or nonrenewal notices with proof of mailing.</li>
            <li>Premium ledger and payment processing records.</li>
            <li>The exact policy provisions the adjuster relied on.</li>
          </ol>
        </section>

        <section>
          <h2>How to respond</h2>
          <ul>
            <li>Provide bank or card statements showing timely payment when applicable.</li>
            <li>Point out any defects in notice timing or address information you provided.</li>
            <li>Ask what documentation would reverse the denial.</li>
          </ul>
        </section>

        <p>Back to the overview: <Link to="/auto-insurance-claims-denied-pennsylvania">Auto Insurance Claims Denied in Pennsylvania</Link></p>
        <StateHubLinks currentState="Pennsylvania" />
      </main>
      <Footer />
    </>
  );
};

export default AutoClaimDeniedPennsylvaniaPolicyLapseOrCancellation;
