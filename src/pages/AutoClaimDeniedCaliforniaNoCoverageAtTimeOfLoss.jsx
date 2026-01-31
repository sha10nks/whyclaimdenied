import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import StateHubLinks from '../components/StateHubLinks';
import { getMetaData } from '../seo/meta';
import { generateArticleSchema } from '../seo/schema';

const AutoClaimDeniedCaliforniaNoCoverageAtTimeOfLoss = () => {
  const meta = getMetaData('autoCA_noCoverage');
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
          { label: 'Auto Claim Denials', link: '/auto-insurance-claims-denied-california' },
          { label: 'No Coverage at Time of Loss', link: null },
        ]}
      />

      <main className="container">
        <h1>No Coverage at Time of Loss (California Auto Claims)</h1>

        <p className="intro">
          “No coverage at time of loss” is one of the most stressful denial reasons because it can sound like the insurer is saying you were uninsured. Sometimes that’s true. Sometimes it’s a paperwork and timing problem.
        </p>

        <p>
          This page explains the most common ways this comes up in California auto claims and what to check before you accept the denial.
        </p>

        <div className="ad-placeholder">
          <span className="ad-label">Advertisement</span>
          [AdSense Block]
        </div>

        <section>
          <h2>Why this denial happens</h2>
          <p>
            Insurers use this reason when they believe the policy was not active, not in force for the vehicle, or not in force for the driver at the time of the accident. Common scenarios include:
          </p>
          <ul>
            <li>The policy was cancelled for nonpayment and the cancellation date is before the crash.</li>
            <li>The policy was issued, but the vehicle involved was not listed or not covered under that policy form.</li>
            <li>The driver was excluded or the policy has a condition that the insurer says wasn’t met.</li>
            <li>The effective date is in dispute (for example, a new policy started after the accident).</li>
          </ul>
        </section>

        <section>
          <h2>California rules to know</h2>
          <h3>Cancellation notice rules can matter</h3>
          <p>
            If the insurer says your policy was cancelled for nonpayment, California Insurance Code section 662 covers cancellation notice rules for many auto policies and includes a specific notice period for cancellation due to nonpayment.
            {' '}
            <a
              href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=INS&sectionNum=662"
              target="_blank"
              rel="noreferrer"
            >
              Insurance Code 662
            </a>
          </p>

          <h3>Claims handling still has timelines</h3>
          <p>
            Even when an insurer believes there is no coverage, California’s Fair Claims Settlement Practices Regulations still matter for communication and decision timing.
            {' '}
            <a href="https://www.insurance.ca.gov/01-consumers/130-laws-regs-hearings/05-CCR/fair-claims-regs.cfm" target="_blank" rel="noreferrer">
              CDI Fair Claims regs
            </a>
            {' · '}
            <a href="https://www.law.cornell.edu/regulations/california/10-CCR-2695.7" target="_blank" rel="noreferrer">
              10 CCR 2695.7
            </a>
          </p>
        </section>

        <section>
          <h2>What to do next</h2>
          <ol>
            <li>
              <strong>Get the declarations page and the full denial letter.</strong> Confirm the policy number, effective dates, vehicles listed, and the name of the insured.
            </li>
            <li>
              <strong>Ask for proof of cancellation.</strong> Request the cancellation notice, the mailing date, and the reason stated.
            </li>
            <li>
              <strong>Check payment records.</strong> Look for confirmation numbers, bank statements, or other proof you paid and when.
            </li>
            <li>
              <strong>Respond in writing.</strong> If the insurer’s dates or facts are wrong, state that clearly and attach your proof.
            </li>
            <li>
              <strong>Use the regulator if you’re stuck.</strong> If you can’t get a clear explanation or the insurer won’t respond, you can submit a consumer complaint to the California Department of Insurance.
              {' '}
              <a href="https://www.insurance.ca.gov/01-consumers/101-help/" target="_blank" rel="noreferrer">
                CDI File a complaint
              </a>
            </li>
          </ol>
        </section>

        <section>
          <h2>Back to the California auto denial guide</h2>
          <p>
            <Link to="/auto-insurance-claims-denied-california">Return to Auto Insurance Claims Denied in California</Link>
          </p>
        </section>

        <StateHubLinks currentState="California" />
      </main>

      <Footer />
    </>
  );
};

export default AutoClaimDeniedCaliforniaNoCoverageAtTimeOfLoss;
