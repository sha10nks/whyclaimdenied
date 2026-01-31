import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import StateHubLinks from '../components/StateHubLinks';
import { getMetaData } from '../seo/meta';
import { generateArticleSchema } from '../seo/schema';

const AutoClaimDeniedCaliforniaPolicyLapseOrCancellation = () => {
  const meta = getMetaData('autoCA_lapse');
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
          { label: 'Policy Lapse or Cancellation', link: null },
        ]}
      />

      <main className="container">
        <h1>Policy Lapse or Cancellation (California Auto Claims)</h1>

        <p className="intro">
          If your insurer says your policy lapsed or was cancelled, the first question is simple: did the policy actually end before the accident? The second question is just as important: did the cancellation happen under the rules that apply in California?
        </p>

        <div className="ad-placeholder">
          <span className="ad-label">Advertisement</span>
          [AdSense Block]
        </div>

        <section>
          <h2>Why this denial happens</h2>
          <p>
            These denials usually come down to timing. The insurer believes your coverage ended because a payment was missed, a policy wasn’t renewed, or the policy was cancelled.
          </p>
          <p>
            Sometimes the insured did miss a payment. Other times, the dispute is about whether the insurer sent the notice correctly, whether the effective date is correct, or whether the premium was cured in time.
          </p>
        </section>

        <section>
          <h2>California rules to know</h2>
          <p>
            California Insurance Code section 662 addresses notice of cancellation for many auto policies. It includes a general notice period and a shorter notice period for cancellation due to nonpayment of premium, and it also explains how a nonpayment cancellation works if the insured cures the nonpayment during the notice period.
            {' '}
            <a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=INS&sectionNum=662" target="_blank" rel="noreferrer">
              Insurance Code 662
            </a>
          </p>
        </section>

        <section>
          <h2>What to do next</h2>
          <ol>
            <li>
              <strong>Ask for the cancellation notice and proof of mailing.</strong> You want the exact cancellation date and the stated reason.
            </li>
            <li>
              <strong>Collect payment proof.</strong> Bank statements, confirmation emails, or receipts matter more than memory.
            </li>
            <li>
              <strong>Confirm the policy type and named insured.</strong> Mix-ups happen when there are multiple vehicles, family members, or policy numbers.
            </li>
            <li>
              <strong>Respond with dates.</strong> A denial based on the wrong effective date can be corrected quickly if you hand the insurer a clear timeline.
            </li>
            <li>
              <strong>If you’re stuck, file a complaint.</strong> California’s Department of Insurance has a consumer complaint process.
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

export default AutoClaimDeniedCaliforniaPolicyLapseOrCancellation;
