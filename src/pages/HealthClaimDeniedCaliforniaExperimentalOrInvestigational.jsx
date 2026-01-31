import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import StateHubLinks from '../components/StateHubLinks';
import { getMetaData } from '../seo/meta';
import { generateArticleSchema } from '../seo/schema';

const HealthClaimDeniedCaliforniaExperimentalOrInvestigational = () => {
  const meta = getMetaData('healthCA_experimental');
  const articleSchema = generateArticleSchema({
    headline: meta.title,
    description: meta.description,
    canonicalUrl: meta.canonical,
  });

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={meta.canonical} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      <Header />

      <Breadcrumbs
        items={[
          { label: 'California', link: '/' },
          { label: 'Health Claim Denials', link: '/health-insurance-claims-denied-california' },
          { label: 'Experimental or Investigational', link: null },
        ]}
      />

      <main className="container">
        <h1>Experimental or Investigational (California Health Claims)</h1>

        <p className="intro">
          When a plan labels treatment “experimental” or “investigational,” it’s usually saying the treatment is not proven enough under its policy criteria. This is common with newer procedures, certain therapies, and off-label uses.
        </p>

        <div className="ad-placeholder">
          <span className="ad-label">Advertisement</span>
          [AdSense Block]
        </div>

        <section>
          <h2>Why this denial happens</h2>
          <p>
            Plans typically maintain internal medical policies. If the plan’s policy doesn’t list the treatment as covered for your diagnosis, the claim can be denied even when a doctor believes it is appropriate.
          </p>
          <p>
            These denials are documentation-heavy. Appeals usually succeed when they are built around published evidence and an explanation that matches the plan’s criteria.
          </p>
        </section>

        <section>
          <h2>California rules to know</h2>
          <p>
            If your plan is DMHC-regulated, the complaint and review structure is described in DMHC resources, including when and how you can contact the regulator after working through the plan’s process.
            {' '}
            <a href="https://www.dmhc.ca.gov/fileacomplaint/frequentlyaskedquestions.aspx" target="_blank" rel="noreferrer">
              DMHC FAQ
            </a>
          </p>
        </section>

        <section>
          <h2>What to do next</h2>
          <ol>
            <li>
              <strong>Ask for the plan’s medical policy.</strong> Don’t guess what they used.
            </li>
            <li>
              <strong>Ask your provider for supporting evidence.</strong> A short packet of studies and a clinician statement can be more persuasive than a long narrative.
            </li>
            <li>
              <strong>Appeal in writing and stay organized.</strong> Refer to the plan’s criteria and explain why you meet it.
            </li>
            <li>
              <strong>Consider regulator review if the plan won’t apply its own process fairly.</strong> Which agency depends on your plan type.
            </li>
          </ol>
        </section>

        <section>
          <h2>Back to the California health denial guide</h2>
          <p>
            <Link to="/health-insurance-claims-denied-california">Return to Health Insurance Claims Denied in California</Link>
          </p>
        </section>

        <StateHubLinks currentState="California" />
      </main>

      <Footer />
    </>
  );
};

export default HealthClaimDeniedCaliforniaExperimentalOrInvestigational;
