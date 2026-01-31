import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import StateHubLinks from '../components/StateHubLinks';
import { getMetaData } from '../seo/meta';
import { generateArticleSchema } from '../seo/schema';

const AutoClaimDeniedFloridaDisputedLiability = () => {
  const meta = getMetaData('autoFL_disputedLiability');
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
          { label: 'Disputed Liability', link: null },
        ]}
      />

      <main className="container">
        <h1>Disputed Liability or Fault (Florida Auto Claims)</h1>

        <p className="intro">
          A liability denial is often the insurer saying, “We don’t think our insured is responsible,” or “We don’t have enough proof to accept liability.” It can also show up as a low settlement offer that doesn’t match the evidence.
        </p>

        <p>
          These disputes are evidence-driven. The most useful thing you can do is turn a messy story into a clean packet: report, photos, witness information, and a short written explanation that addresses the insurer’s stated reasons.
        </p>

        <div className="ad-placeholder">
          <span className="ad-label">Advertisement</span>
          [AdSense Block]
        </div>

        <section>
          <h2>Florida claim-handling rule to know</h2>
          <p>
            Florida statutes define unfair claim settlement practices.
            {' '}
            <a href="https://www.flsenate.gov/laws/statutes/2017/626.9541" target="_blank" rel="noreferrer">
              Fla. Stat. § 626.9541
            </a>
          </p>
          <p>
            If you believe the insurer is ignoring evidence, failing to explain the position, or handling the claim in a way that does not match Florida’s standards, document the issue in writing and consider DFS consumer assistance.
          </p>
        </section>

        <section>
          <h2>What to gather</h2>
          <ul>
            <li>Crash report (if one exists).</li>
            <li>Photos/video of scene, damage, and road markings.</li>
            <li>Witness names and contact info.</li>
            <li>Repair estimate(s) and any inspection notes.</li>
            <li>A short timeline: before crash, crash, after crash.</li>
          </ul>
        </section>

        <section>
          <h2>What to do next</h2>
          <ol>
            <li>
              <strong>Ask the insurer what evidence would change the decision.</strong> Make them be specific.
            </li>
            <li>
              <strong>Send a written response with attachments.</strong> Address each point they raised.
            </li>
            <li>
              <strong>Keep communications organized.</strong> One email thread per claim issue helps.
            </li>
            <li>
              <strong>If communication breaks down, consider DFS assistance.</strong>
              {' '}
              <a href="https://myfloridacfo.com/division/consumers/needourhelp" target="_blank" rel="noreferrer">
                DFS: Get Insurance Help
              </a>
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

export default AutoClaimDeniedFloridaDisputedLiability;

