import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import StateHubLinks from '../components/StateHubLinks';
import { getMetaData } from '../seo/meta';
import { generateArticleSchema } from '../seo/schema';
import { Link } from '../components/Link';

const HealthClaimDeniedIllinoisOutOfNetworkProvider = () => {
  const meta = getMetaData('healthIL_oON');
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
      <Breadcrumbs items={[{ label: 'Illinois', link: '/health-insurance-claims-denied-illinois' }, { label: 'Out-of-Network Provider', link: null }]} />
      <main className="container">
        <h1>Out-of-Network Provider — Illinois Health Claims</h1>
        <p className="intro">Check in‑network access, referral rules, and exceptions for emergencies or limited access.</p>

        <div className="ad-placeholder"><span className="ad-label">Advertisement</span>[Ad]</div>

        <section>
          <h2>Provide</h2>
          <ul>
            <li>Directory search results and screenshots.</li>
            <li>Referral attempts and provider notes on access.</li>
          </ul>
        </section>

        <p>Back to overview: <Link to="/health-insurance-claims-denied-illinois">Health Insurance Claims Denied in Illinois</Link></p>
        <StateHubLinks currentState="Illinois" />
      </main>
      <Footer />
    </>
  );
};

export default HealthClaimDeniedIllinoisOutOfNetworkProvider;
