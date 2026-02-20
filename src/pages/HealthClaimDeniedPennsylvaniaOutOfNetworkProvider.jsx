import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import StateHubLinks from '../components/StateHubLinks';
import { getMetaData } from '../seo/meta';
import { generateArticleSchema } from '../seo/schema';
import { Link } from '../components/Link';

const HealthClaimDeniedPennsylvaniaOutOfNetworkProvider = () => {
  const meta = getMetaData('healthPA_oON');
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
      <Breadcrumbs items={[{ label: 'Pennsylvania', link: '/health-insurance-claims-denied-pennsylvania' }, { label: 'Out-of-Network Provider', link: null }]} />
      <main className="container">
        <h1>Out-of-Network Provider — Pennsylvania Health Claims</h1>
        <p className="intro">Check in-network access, referral rules, and exceptions for emergencies or lack of access.</p>

        <div className="ad-placeholder"><span className="ad-label">Advertisement</span>[Ad]</div>

        <section>
          <h2>What to gather</h2>
          <ul>
            <li>Network directory search results and screenshots.</li>
            <li>Referral or prior auth communications.</li>
            <li>Provider’s note on access issues and medical urgency.</li>
          </ul>
        </section>

        <section>
          <h2>Appeal points</h2>
          <ol>
            <li>Explain why in-network care wasn’t reasonably available.</li>
            <li>Attach referral attempts and provider’s support.</li>
          </ol>
        </section>

        <p>Back to the overview: <Link to="/health-insurance-claims-denied-pennsylvania">Health Insurance Claims Denied in Pennsylvania</Link></p>
        <StateHubLinks currentState="Pennsylvania" />
      </main>
      <Footer />
    </>
  );
};

export default HealthClaimDeniedPennsylvaniaOutOfNetworkProvider;
