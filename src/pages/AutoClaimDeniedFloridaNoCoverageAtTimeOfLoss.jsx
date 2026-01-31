import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import StateHubLinks from '../components/StateHubLinks';
import { getMetaData } from '../seo/meta';
import { generateArticleSchema } from '../seo/schema';

const AutoClaimDeniedFloridaNoCoverageAtTimeOfLoss = () => {
  const meta = getMetaData('autoFL_noCoverage');
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
          { label: 'Florida', link: '/' },
          { label: 'Auto Claim Denials', link: '/auto-insurance-claims-denied-florida' },
          { label: 'No Coverage at Time of Loss', link: null },
        ]}
      />

      <main className="container">
        <h1>No Coverage at Time of Loss (Florida Auto Claims)</h1>

        <p className="intro">
          “No coverage at time of loss” can mean the insurer believes your policy wasn’t active on the date of the crash, or that coverage didn’t apply to the driver, vehicle, or use. It’s one of the most common denial labels, and it’s also one of the easiest to misunderstand.
        </p>

        <p>
          Your goal is to pin down what “no coverage” actually means in the insurer’s file. Is it a cancellation issue? A wrong effective date? A driver exclusion? A misrepresentation claim? Those are very different problems with different fixes.
        </p>

        <div className="ad-placeholder">
          <span className="ad-label">Advertisement</span>
          [AdSense Block]
        </div>

        <section>
          <h2>Why this denial happens</h2>
          <ul>
            <li>
              <strong>Policy cancelled or nonrenewed:</strong> The insurer shows an end date before the crash.
            </li>
            <li>
              <strong>Nonpayment dispute:</strong> You believe you paid, but the insurer shows a missed payment or returned payment.
            </li>
            <li>
              <strong>Wrong policy or wrong vehicle:</strong> The claim was opened under the wrong policy number or the vehicle wasn’t listed the way the insurer expects.
            </li>
            <li>
              <strong>Driver/use issue:</strong> Coverage exists, but the insurer says it doesn’t apply to what happened.
            </li>
          </ul>
        </section>

        <section>
          <h2>Florida rules to check</h2>
          <h3>Motor vehicle policy cancellation notice</h3>
          <p>
            Florida’s motor vehicle insurance cancellation statute includes notice requirements. For many policies, it provides that cancellation generally requires advance notice, and when cancellation is for nonpayment of premium, at least 10 days’ notice accompanied by the reason is required.
            {' '}
            <a href="https://www.flsenate.gov/laws/statutes/2024/627.728" target="_blank" rel="noreferrer">
              Fla. Stat. § 627.728
            </a>
          </p>

          <h3>Misrepresentation and recovery under the policy</h3>
          <p>
            If the insurer is saying the policy never should have been issued (or should not cover this loss) because of misrepresentation, Florida law addresses when a misrepresentation, omission, concealment of fact, or incorrect statement may prevent recovery under the policy.
            {' '}
            <a href="https://www.flsenate.gov/Laws/Statutes/2012/627.409" target="_blank" rel="noreferrer">
              Fla. Stat. § 627.409
            </a>
          </p>

          <h3>DFS consumer assistance</h3>
          <p>
            If you can’t get the insurer to explain the basis for “no coverage,” Florida’s Department of Financial Services provides insurance consumer assistance.
            {' '}
            <a href="https://myfloridacfo.com/division/consumers/needourhelp" target="_blank" rel="noreferrer">
              DFS: Get Insurance Help
            </a>
          </p>
        </section>

        <section>
          <h2>What to do next (a practical checklist)</h2>
          <ol>
            <li>
              <strong>Get the declarations page for the date of loss.</strong> Confirm effective dates, named insured, listed vehicles, and coverages.
            </li>
            <li>
              <strong>Request the cancellation or nonrenewal paperwork.</strong> Ask for the notice and the mailing date, and ask which statute the insurer is relying on.
            </li>
            <li>
              <strong>Collect payment proof.</strong> Bank statements, confirmation emails, or receipts. If premium finance is involved, get those records too.
            </li>
            <li>
              <strong>Ask for the exact “no coverage” theory.</strong> Is it cancellation? Driver? Use? Misrepresentation? Make them choose.
            </li>
            <li>
              <strong>Respond in writing with dates.</strong> A one-page timeline with attachments often gets a faster re-review than a phone call.
            </li>
            <li>
              <strong>Escalate when communication fails.</strong> If the insurer won’t provide the notice or won’t answer the core questions, submit a consumer assistance request to DFS with the denial letter and your documents.
            </li>
          </ol>
        </section>

        <section>
          <h2>Back to the Florida auto denial guide</h2>
          <p>
            <Link to="/auto-insurance-claims-denied-florida">Return to Auto Insurance Claims Denied in Florida</Link>
          </p>
        </section>

        <StateHubLinks currentState="Florida" />
      </main>

      <Footer />
    </>
  );
};

export default AutoClaimDeniedFloridaNoCoverageAtTimeOfLoss;

