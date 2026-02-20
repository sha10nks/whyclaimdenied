import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import StateHubLinks from '../components/StateHubLinks';
import { getMetaData } from '../seo/meta';
import { generateArticleSchema } from '../seo/schema';
import { Link } from '../components/Link';

const HealthClaimDeniedIllinoisCodingOrDocumentationError = () => {
  const meta = getMetaData('healthIL_coding');
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
      <Breadcrumbs items={[{ label: 'Illinois', link: '/health-insurance-claims-denied-illinois' }, { label: 'Coding or Documentation Error', link: null }]} />
      <main className="container">
        <h1>Coding or Documentation Error — Illinois Health Claims</h1>
        <p className="intro">Ask your provider to submit corrected billing and supporting notes, then request reprocessing.</p>

        <div className="ad-placeholder"><span className="ad-label">Advertisement</span>[Ad]</div>

        <section>
          <h2>Fix and follow up</h2>
          <ul>
            <li>Provider resubmits with correct coding and documents.</li>
            <li>Get confirmation a new claim number was created.</li>
          </ul>
        </section>

        <p>Back to overview: <Link to="/health-insurance-claims-denied-illinois">Health Insurance Claims Denied in Illinois</Link></p>
        <StateHubLinks currentState="Illinois" />
      </main>
      <Footer />
    </>
  );
};

export default HealthClaimDeniedIllinoisCodingOrDocumentationError;
