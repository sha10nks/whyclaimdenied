import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import StateHubLinks from '../components/StateHubLinks';
import { getMetaData } from '../seo/meta';
import { generateArticleSchema } from '../seo/schema';
import { Link } from '../components/Link';

const HealthClaimDeniedIllinoisCoordinationOfBenefits = () => {
  const meta = getMetaData('healthIL_cob');
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
      <Breadcrumbs items={[{ label: 'Illinois', link: '/health-insurance-claims-denied-illinois' }, { label: 'Coordination of Benefits', link: null }]} />
      <main className="container">
        <h1>Coordination of Benefits — Illinois Health Claims</h1>
        <p className="intro">Provide current coverage details to all plans so COB records can be updated and claim holds released.</p>

        <div className="ad-placeholder"><span className="ad-label">Advertisement</span>[Ad]</div>

        <section>
          <h2>Checklist</h2>
          <ul>
            <li>Identify primary and secondary plans with effective dates.</li>
            <li>Submit recent coverage changes and policy numbers.</li>
          </ul>
        </section>

        <p>Back to overview: <Link to="/health-insurance-claims-denied-illinois">Health Insurance Claims Denied in Illinois</Link></p>
        <StateHubLinks currentState="Illinois" />
      </main>
      <Footer />
    </>
  );
};

export default HealthClaimDeniedIllinoisCoordinationOfBenefits;
