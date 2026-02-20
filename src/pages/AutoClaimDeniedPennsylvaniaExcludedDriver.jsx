import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import StateHubLinks from '../components/StateHubLinks';
import { getMetaData } from '../seo/meta';
import { generateArticleSchema } from '../seo/schema';
import { Link } from '../components/Link';

const AutoClaimDeniedPennsylvaniaExcludedDriver = () => {
  const meta = getMetaData('autoPA_excludedDriver');
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
      <Breadcrumbs items={[{ label: 'Pennsylvania', link: '/auto-insurance-claims-denied-pennsylvania' }, { label: 'Excluded Driver', link: null }]} />
      <main className="container">
        <h1>Excluded Driver — Pennsylvania Auto Claims</h1>
        <p className="intro">Request the endorsement listing the excluded driver and confirm it applied on the loss date.</p>

        <div className="ad-placeholder"><span className="ad-label">Advertisement</span>[Ad]</div>

        <section>
          <h2>What to check</h2>
          <ul>
            <li>The exact name on the exclusion and the effective dates.</li>
            <li>Whether the driver was actually operating the vehicle and in what capacity.</li>
            <li>Any endorsements that modify exclusions for certain uses.</li>
          </ul>
        </section>

        <section>
          <h2>Next steps</h2>
          <ol>
            <li>Ask for the policy provision relied on and a copy of the exclusion endorsement.</li>
            <li>Provide a short statement clarifying who drove and why.</li>
            <li>Request what documentation would change the decision if facts differ.</li>
          </ol>
        </section>

        <p>Back to the overview: <Link to="/auto-insurance-claims-denied-pennsylvania">Auto Insurance Claims Denied in Pennsylvania</Link></p>
        <StateHubLinks currentState="Pennsylvania" />
      </main>
      <Footer />
    </>
  );
};

export default AutoClaimDeniedPennsylvaniaExcludedDriver;
