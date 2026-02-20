import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import StateHubLinks from '../components/StateHubLinks';
import { getMetaData } from '../seo/meta';
import { generateArticleSchema } from '../seo/schema';
import { Link } from '../components/Link';

const HealthClaimDeniedIllinoisNotMedicallyNecessary = () => {
  const meta = getMetaData('healthIL_medNec');
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
      <Breadcrumbs items={[{ label: 'Illinois', link: '/health-insurance-claims-denied-illinois' }, { label: 'Not Medically Necessary', link: null }]} />
      <main className="container">
        <h1>Not Medically Necessary — Illinois Health Claims</h1>
        <p className="intro">Get the policy used and answer each criterion with a short provider letter and chart citations.</p>

        <div className="ad-placeholder"><span className="ad-label">Advertisement</span>[Ad]</div>

        <section>
          <h2>Gather</h2>
          <ul>
            <li>Medical policy name and date, reviewer notes.</li>
            <li>Relevant imaging, labs, and clinical notes.</li>
          </ul>
        </section>

        <p>Back to overview: <Link to="/health-insurance-claims-denied-illinois">Health Insurance Claims Denied in Illinois</Link></p>
        <StateHubLinks currentState="Illinois" />
      </main>
      <Footer />
    </>
  );
};

export default HealthClaimDeniedIllinoisNotMedicallyNecessary;
