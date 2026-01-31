import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '../components/Breadcrumbs';
import Footer from '../components/Footer';
import Header from '../components/Header';
import StateHubLinks from '../components/StateHubLinks';

const AutoClaimDeniedTexasCoverageLimits = () => {
  const sd = { "@context": "https://schema.org", "@type": "Article", "headline": "Coverage Limits Exceeded — Texas Auto Insurance Denial", "description": "What to know when claim amounts exceed Texas auto policy limits and possible options." };
  return (
    <>
      <Helmet>
        <title>Coverage Limits Exceeded — Texas Auto Insurance Denial</title>
        <meta name="description" content="What to know when claim amounts exceed Texas auto policy limits and possible options." />
        <link rel="canonical" href="https://whyclaimdenied.com/auto-insurance-claims-denied-texas/coverage-limits-exceeded" />
        <script type="application/ld+json">{JSON.stringify(sd)}</script>
      </Helmet>

      <Header />

      <Breadcrumbs
        items={[
          { label: 'Texas', link: '/auto-insurance-claims-denied-texas' },
          { label: 'Auto Claim Denials', link: '/auto-insurance-claims-denied-texas' },
          { label: 'Coverage Limits Exceeded', link: null },
        ]}
      />

      <main className="container">
        <h1>Coverage Limits Exceeded — Texas Auto Insurance Denial</h1>
        <section className="content-section">
          <h2>What this means</h2>
          <p>Insurers pay up to the limits shown on your declarations page. If damages exceed limits, you may need to use other coverages or pursue the at-fault party.</p>
        </section>
        <section className="content-section">
          <h2>Next steps</h2>
          <ul>
            <li>Confirm limits and coverages on your declarations page</li>
            <li>Ask about underinsured motorist or collision coverage if applicable</li>
            <li>Seek written explanations for any reductions or offsets</li>
          </ul>
        </section>
        <section className="content-section"><h2>Back to the Texas auto denial guide</h2><p><a href="/auto-insurance-claims-denied-texas">Return to Auto Insurance Claims Denied in Texas</a></p></section>
        <StateHubLinks currentState="Texas" />
      </main>

      <Footer />
    </>
  );
};

export default AutoClaimDeniedTexasCoverageLimits;
