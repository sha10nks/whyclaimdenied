import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import StateHubLinks from '../components/StateHubLinks';
import { getMetaData } from '../seo/meta';
import { generateArticleSchema } from '../seo/schema';

const AutoClaimDeniedCaliforniaDisputedLiability = () => {
  const meta = getMetaData('autoCA_disputedLiability');
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
          { label: 'Disputed Liability', link: null },
        ]}
      />

      <main className="container">
        <h1>Disputed Liability or Fault (California Auto Claims)</h1>

        <p className="intro">
          When liability is disputed, the insurer may not deny that the accident happened. They deny that their insured is responsible, or they deny that your requested payment matches what the evidence supports.
        </p>

        <div className="ad-placeholder">
          <span className="ad-label">Advertisement</span>
          [AdSense Block]
        </div>

        <section>
          <h2>Why this denial happens</h2>
          <p>
            Liability disputes often come from limited evidence: no independent witnesses, conflicting statements, or unclear photos. The insurer may also rely on vehicle damage patterns that don’t match the story.
          </p>
          <p>
            The good news is that liability denials can be challenged with better documentation. The bad news is that it’s usually slow.
          </p>
        </section>

        <section>
          <h2>What to do next</h2>
          <ol>
            <li>
              <strong>Get the police report.</strong> If one exists, it’s often the anchor document.
            </li>
            <li>
              <strong>Gather photos and videos.</strong> Include road markings, signs, and vehicle positions.
            </li>
            <li>
              <strong>Request the insurer’s reasoning.</strong> Ask what evidence they relied on and what evidence would change the decision.
            </li>
            <li>
              <strong>Send a focused written response.</strong> Address each point and attach proof.
            </li>
            <li>
              <strong>Consider CDI if handling is unfair.</strong> CDI can review complaints about claim handling, even if they don’t decide fault like a court.
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

export default AutoClaimDeniedCaliforniaDisputedLiability;
