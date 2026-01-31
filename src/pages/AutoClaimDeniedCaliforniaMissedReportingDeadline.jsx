import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import StateHubLinks from '../components/StateHubLinks';
import { getMetaData } from '../seo/meta';
import { generateArticleSchema } from '../seo/schema';

const AutoClaimDeniedCaliforniaMissedReportingDeadline = () => {
  const meta = getMetaData('autoCA_missedReporting');
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
          { label: 'Missed Reporting Deadline', link: null },
        ]}
      />

      <main className="container">
        <h1>Missed Reporting Deadline (California Auto Claims)</h1>

        <p className="intro">
          Many auto policies require “prompt” notice. When reporting is delayed, insurers sometimes deny by claiming they couldn’t investigate the accident fairly. This is a common fight because “prompt” can be vague.
        </p>

        <div className="ad-placeholder">
          <span className="ad-label">Advertisement</span>
          [AdSense Block]
        </div>

        <section>
          <h2>Why this denial happens</h2>
          <p>
            Reporting delays happen for normal reasons: injuries, a car in the shop, not realizing damage was serious, or thinking the other driver would pay. The denial typically shows up when:
          </p>
          <ul>
            <li>The insurer says the delay prevented them from inspecting damage or interviewing witnesses.</li>
            <li>The insurer suggests the delay increased the chance of fraud or changed the facts.</li>
            <li>The insurer claims the policy requires notice within a specific timeframe in the contract.</li>
          </ul>
        </section>

        <section>
          <h2>California rules to know</h2>
          <p>
            California’s Fair Claims Settlement Practices Regulations set expectations for insurer communications and claim handling. They don’t eliminate policy duties, but they do matter when an insurer is slow to respond, vague in explanations, or inconsistent.
            {' '}
            <a href="https://www.insurance.ca.gov/01-consumers/130-laws-regs-hearings/05-CCR/fair-claims-regs.cfm" target="_blank" rel="noreferrer">
              CDI Fair Claims regs
            </a>
          </p>
        </section>

        <section>
          <h2>What to do next</h2>
          <ol>
            <li>
              <strong>Find your policy’s notice language.</strong> Quote the actual “notice” clause in your appeal.
            </li>
            <li>
              <strong>Explain the delay with dates.</strong> One paragraph, factual, with a simple timeline.
            </li>
            <li>
              <strong>Show what evidence still exists.</strong> Photos, repair estimates, phone records, and medical notes can reduce the “we couldn’t investigate” argument.
            </li>
            <li>
              <strong>Ask what investigation step was prevented.</strong> Make the insurer identify what they say they lost.
            </li>
            <li>
              <strong>Escalate if the insurer won’t explain.</strong> Consider a consumer complaint to CDI if you can’t get a clear, consistent explanation.
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

export default AutoClaimDeniedCaliforniaMissedReportingDeadline;
