import { Helmet } from 'react-helmet-async';
import { CheckCircle2 } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from '../components/Link';
import { META } from '../seo/meta';
import { DENIAL_PAGES } from '../denials/registry';

const toTitleCase = (slug) => {
  return slug
    .split('-')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const slugToLabel = (slug) => {
  const label = toTitleCase(slug);
  return label.replace(/\bAnd\b/g, 'and');
};

const STATE_ACCENTS = [
  '#0B4F6C',
  '#2B6CB0',
  '#8B1E3F',
  '#2F855A',
  '#B7791F',
  '#6B46C1',
  '#0F766E',
  '#1F2937',
];

const hashString = (value) => {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
};

const stateAccent = (stateSlug) => {
  const idx = hashString(stateSlug) % STATE_ACCENTS.length;
  return STATE_ACCENTS[idx];
};

const buildGuidesIndex = () => {
  const states = new Map();

  Object.values(META).forEach((meta) => {
    if (!meta?.canonical) return;
    const url = new URL(meta.canonical);
    const path = url.pathname;

    const autoHubMatch = path.match(/^\/auto-insurance-claims-denied-([a-z-]+)$/);
    if (autoHubMatch) {
      const stateSlug = autoHubMatch[1];
      const entry = states.get(stateSlug) || { stateSlug, stateLabel: slugToLabel(stateSlug), autoReasons: [], healthReasons: [] };
      states.set(stateSlug, { ...entry, autoHubPath: path });
      return;
    }

    const healthHubMatch = path.match(/^\/health-insurance-claims-denied-([a-z-]+)$/);
    if (healthHubMatch) {
      const stateSlug = healthHubMatch[1];
      const entry = states.get(stateSlug) || { stateSlug, stateLabel: slugToLabel(stateSlug), autoReasons: [], healthReasons: [] };
      states.set(stateSlug, { ...entry, healthHubPath: path });
      return;
    }
  });

  DENIAL_PAGES.forEach((page) => {
    const stateSlug = page.stateSlug;
    const entry = states.get(stateSlug) || { stateSlug, stateLabel: slugToLabel(stateSlug), autoReasons: [], healthReasons: [] };
    const path = new URL(page.canonicalUrl).pathname;

    if (page.domain === 'auto') {
      if (!entry.autoReasons.some((r) => r.path === path)) {
        entry.autoReasons.push({ path, label: page.reasonTitle });
      }
    }

    if (page.domain === 'health') {
      if (!entry.healthReasons.some((r) => r.path === path)) {
        entry.healthReasons.push({ path, label: page.reasonTitle });
      }
    }

    states.set(stateSlug, entry);
  });

  return Array.from(states.values())
    .filter((s) => s.autoHubPath || s.healthHubPath)
    .sort((a, b) => a.stateLabel.localeCompare(b.stateLabel))
    .map((state) => ({
      ...state,
      autoReasons: state.autoReasons.sort((a, b) => a.label.localeCompare(b.label)),
      healthReasons: state.healthReasons.sort((a, b) => a.label.localeCompare(b.label)),
    }));
};

export default function Home() {
  const guides = buildGuidesIndex();

  return (
    <>
      <Helmet>
        <title>Why Insurance Claims Get Denied | State-Specific Guides</title>
        <meta
          name="description"
          content="Independent, state-specific explanations for why insurance claims are denied. Educational guides covering auto and health insurance claim denials across the U.S."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="WhyClaimDenied" />
        <meta name="publisher" content="WhyClaimDenied" />
        <meta name="content-type" content="educational" />
        <meta name="subject" content="Insurance claim denials, auto insurance, health insurance" />
        <meta
          name="summary"
          content="Educational reference explaining why insurance claims are denied, organized by U.S. state and insurance type."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Why Insurance Claims Get Denied" />
        <meta property="og:description" content="Clear, educational, state-specific guides explaining insurance claim denials." />
        <meta property="og:url" content="https://whyclaimdenied.com/" />
        <meta property="og:site_name" content="WhyClaimDenied" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Why Insurance Claims Get Denied" />
        <meta name="twitter:description" content="Independent educational guides explaining insurance claim denials by state." />
        <link rel="canonical" href="https://whyclaimdenied.com/" />
      </Helmet>

      <Header />

      <main className="container">
        <section className="home-hero" aria-labelledby="hero-title">
          <div className="home-hero-inner">
            <div className="home-hero-content home-hero-copy">
              <span className="hero-micro-badge">For educational purposes only</span>
              <h1 id="hero-title">Why Insurance Claims Get Denied</h1>
              <p className="home-hero-lede">
                Clear, state-specific explainers to help you understand denial letters and discover common next steps.
              </p>

              <ul className="trust-cues">
                <li><CheckCircle2 size={20} /> State-specific explanations</li>
                <li><CheckCircle2 size={20} /> Based on real denial reasons</li>
                <li><CheckCircle2 size={20} /> Independent informational resource</li>
              </ul>

              <div className="home-hero-actions">
                <a className="home-cta home-cta-primary" href="#guides-by-state">
                  Explore Claim Denial Guides by State
                </a>
                <a className="home-cta home-cta-secondary" href="#guides-by-state">
                  Understand Your Denial Letter
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="home-guides" aria-labelledby="guides-title" id="guides-by-state">
          <h2 id="guides-title">Guides by State</h2>
          <div className="home-guides-list">
            {guides.map((state) => (
              <details
                key={state.stateSlug}
                className="state-accordion"
                style={{ '--state-accent': stateAccent(state.stateSlug) }}
              >
                <summary className="state-accordion-summary">
                  <h3 className="state-accordion-title">{state.stateLabel}</h3>
                </summary>

                <div className="state-accordion-body">
                  {state.autoHubPath ? (
                    <details className="state-category" aria-label={`${state.stateLabel} auto claim denials`}>
                      <summary className="state-category-summary">Auto Claim Denials</summary>
                      <div className="state-category-body">
                        <p className="state-category-link">
                          <Link to={state.autoHubPath}>{state.stateLabel} Auto Claim Denials</Link>
                        </p>
                        {state.autoReasons.length ? (
                          <ul className="state-reasons-list" aria-label={`${state.stateLabel} auto denial reasons`}>
                            {state.autoReasons.map((reason) => (
                              <li key={reason.path}>
                                <Link to={reason.path}>{reason.label}</Link>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    </details>
                  ) : null}

                  {state.healthHubPath ? (
                    <details className="state-category" aria-label={`${state.stateLabel} health claim denials`}>
                      <summary className="state-category-summary">Health Claim Denials</summary>
                      <div className="state-category-body">
                        <p className="state-category-link">
                          <Link to={state.healthHubPath}>{state.stateLabel} Health Claim Denials</Link>
                        </p>
                        {state.healthReasons.length ? (
                          <ul className="state-reasons-list" aria-label={`${state.stateLabel} health denial reasons`}>
                            {state.healthReasons.map((reason) => (
                              <li key={reason.path}>
                                <Link to={reason.path}>{reason.label}</Link>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    </details>
                  ) : null}
                </div>
              </details>
            ))}
          </div>
        </section>

        <section aria-labelledby="authority-title">
          <h2 id="authority-title">Common Reasons Insurance Claims Are Denied</h2>
          <ul className="reasons">
            <li>Missing documentation</li>
            <li>Coverage exclusions</li>
            <li>Policy lapse</li>
            <li>Disputed liability</li>
            <li>Medical necessity reviews</li>
            <li>Timely filing issues</li>
          </ul>
        </section>

        <section aria-labelledby="about-guides-title">
          <h2 id="about-guides-title">How These Guides Are Organized</h2>
          <p>
            WhyClaimDenied is a reference library of state-specific explainers for common insurance claim denials. Each state guide starts with a simple overview and links to focused pages for individual denial reasons.
            The goal is to help you translate the wording in a denial letter into the questions that typically matter next—what coverage applies, what documents are missing, and what timelines or review steps may exist.
            The site is designed for educational use and does not provide legal or financial advice.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
