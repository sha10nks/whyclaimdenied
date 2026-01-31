import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import StateHubLinks from '../components/StateHubLinks';
import { getMetaData } from '../seo/meta';
import { generateArticleSchema } from '../seo/schema';

const HealthClaimDeniedCaliforniaNotMedicallyNecessary = () => {
  const meta = getMetaData('healthCA_medNec');
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
          { label: 'Not Medically Necessary', link: null },
        ]}
      />

      <main className="container">
        <h1>Not Medically Necessary (California Health Claims)</h1>

        <p className="intro">
          A “medical necessity” denial is the plan saying the service wasn’t needed under its clinical criteria. This is one of the most common denial types for imaging, procedures, and some prescriptions.
        </p>

        <div className="ad-placeholder">
          <span className="ad-label">Advertisement</span>
          [AdSense Block]
        </div>

        <section>
          <h2>Why this denial happens</h2>
          <p>
            Medical necessity disputes often come down to documentation. The plan may agree the condition exists but say the records don’t show the required severity, prior treatment steps, or objective findings.
          </p>
          <p>
            You might notice the denial letter uses a few repeated phrases. “Insufficient documentation” and “does not meet criteria” are not explanations by themselves. You can ask for the criteria.
          </p>
        </section>

        <section>
          <h2>California rules to know</h2>
          <p>
            For many state-regulated plans, the grievance process and regulator options are part of the consumer protection structure. DMHC’s complaint FAQ explains the relationship between internal plan grievances and filing a complaint with the regulator.
            {' '}
            <a href="https://www.dmhc.ca.gov/fileacomplaint/frequentlyaskedquestions.aspx" target="_blank" rel="noreferrer">
              DMHC FAQ
            </a>
          </p>
          <p>
            DMHC regulations also describe grievance timelines.
            {' '}
            <a href="https://www.law.cornell.edu/regulations/california/28-CCR-1300.68" target="_blank" rel="noreferrer">
              28 CCR 1300.68
            </a>
          </p>
        </section>

        <section>
          <h2>What to do next</h2>
          <ol>
            <li>
              <strong>Ask for the exact criteria used.</strong> Request the medical policy, guideline, or criteria applied.
            </li>
            <li>
              <strong>Get a short provider letter that matches the criteria.</strong> The best appeal letters respond to the plan’s checklist point by point.
            </li>
            <li>
              <strong>Attach records, not just opinions.</strong> Progress notes, test results, and prior treatment history carry weight.
            </li>
            <li>
              <strong>Appeal promptly.</strong> The denial notice usually contains the appeal deadline.
            </li>
            <li>
              <strong>Escalate when appropriate.</strong> If you believe the plan isn’t applying its process fairly, consider a complaint to the regulator that oversees your plan.
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

export default HealthClaimDeniedCaliforniaNotMedicallyNecessary;
