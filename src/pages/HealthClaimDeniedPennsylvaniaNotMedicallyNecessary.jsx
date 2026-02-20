import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import StateHubLinks from '../components/StateHubLinks';
import { getMetaData } from '../seo/meta';
import { generateArticleSchema } from '../seo/schema';
import { Link } from '../components/Link';

const HealthClaimDeniedPennsylvaniaNotMedicallyNecessary = () => {
  const meta = getMetaData('healthPA_medNec');
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
      <Breadcrumbs items={[{ label: 'Pennsylvania', link: '/health-insurance-claims-denied-pennsylvania' }, { label: 'Not Medically Necessary', link: null }]} />
      <main className="container">
        <h1>Not Medically Necessary — Pennsylvania Health Claims</h1>
        <p className="intro">Ask for the medical policy used and answer those criteria point by point with your provider.</p>

        <div className="ad-placeholder"><span className="ad-label">Advertisement</span>[Ad]</div>

        <section>
          <h2>Get the criteria</h2>
          <ul>
            <li>Medical policy name and version/date applied.</li>
            <li>Any utilization review notes or checklists.</li>
          </ul>
        </section>

        <section>
          <h2>Build the appeal</h2>
          <ol>
            <li>Provider letter addressing each criterion succinctly with chart citations.</li>
            <li>Attach key records only; keep it short and targeted.</li>
          </ol>
        </section>

        <p>Back to the overview: <Link to="/health-insurance-claims-denied-pennsylvania">Health Insurance Claims Denied in Pennsylvania</Link></p>
        <StateHubLinks currentState="Pennsylvania" />
      </main>
      <Footer />
    </>
  );
};

export default HealthClaimDeniedPennsylvaniaNotMedicallyNecessary;
