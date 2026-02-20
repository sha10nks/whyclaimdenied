import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import StateHubLinks from '../components/StateHubLinks';
import { getMetaData } from '../seo/meta';
import { generateArticleSchema } from '../seo/schema';
import { Link } from '../components/Link';

const HealthClaimDeniedPennsylvaniaTimelyFilingIssue = () => {
  const meta = getMetaData('healthPA_timelyFiling');
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
      <Breadcrumbs items={[{ label: 'Pennsylvania', link: '/health-insurance-claims-denied-pennsylvania' }, { label: 'Timely Filing Issue', link: null }]} />
      <main className="container">
        <h1>Timely Filing Issue — Pennsylvania Health Claims</h1>
        <p className="intro">Confirm plan deadlines and whether exceptions apply; ask your provider to correct and resubmit when possible.</p>

        <div className="ad-placeholder"><span className="ad-label">Advertisement</span>[Ad]</div>

        <section>
          <h2>Checklist</h2>
          <ul>
            <li>Plan deadline language and any exceptions.</li>
            <li>Proof of earlier submission attempts if any.</li>
            <li>Provider resubmission with corrected data.</li>
          </ul>
        </section>

        <p>Back to the overview: <Link to="/health-insurance-claims-denied-pennsylvania">Health Insurance Claims Denied in Pennsylvania</Link></p>
        <StateHubLinks currentState="Pennsylvania" />
      </main>
      <Footer />
    </>
  );
};

export default HealthClaimDeniedPennsylvaniaTimelyFilingIssue;
