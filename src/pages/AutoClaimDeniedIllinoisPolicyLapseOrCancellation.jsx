import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import StateHubLinks from '../components/StateHubLinks';
import { getMetaData } from '../seo/meta';
import { generateArticleSchema } from '../seo/schema';
import { Link } from '../components/Link';

const AutoClaimDeniedIllinoisPolicyLapseOrCancellation = () => {
  const meta = getMetaData('autoIL_lapse');
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
      <Breadcrumbs items={[{ label: 'Illinois', link: '/auto-insurance-claims-denied-illinois' }, { label: 'Policy Lapse or Cancellation', link: null }]} />
      <main className="container">
        <h1>Policy Lapse or Cancellation — Illinois Auto Claims</h1>
        <p className="intro">Ask for cancellation notice, mailing method, and effective date; compare to your payment records.</p>

        <div className="ad-placeholder"><span className="ad-label">Advertisement</span>[Ad]</div>

        <section>
          <h2>What to request</h2>
          <ol>
            <li>All notices with proof of mailing and reason stated.</li>
            <li>Premium ledger and transaction confirmations.</li>
            <li>Policy provision applied to your timeline.</li>
          </ol>
        </section>

        <section>
          <h2>Respond</h2>
          <ul>
            <li>Provide proof of payment within the window if applicable.</li>
            <li>Correct any date/address errors in writing with documents.</li>
          </ul>
        </section>

        <p>Back to overview: <Link to="/auto-insurance-claims-denied-illinois">Auto Insurance Claims Denied in Illinois</Link></p>
        <StateHubLinks currentState="Illinois" />
      </main>
      <Footer />
    </>
  );
};

export default AutoClaimDeniedIllinoisPolicyLapseOrCancellation;
