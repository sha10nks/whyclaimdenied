import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '../components/Breadcrumbs';
import Footer from '../components/Footer';
import Header from '../components/Header';
import StateHubLinks from '../components/StateHubLinks';

const HealthClaimDeniedTexasCoverageExclusion = () => {
  const sd = { "@context": "https://schema.org", "@type": "Article", "headline": "Coverage Exclusions — Texas Health Insurance Denial", "description": "Understanding benefit exclusions in Texas health plans and how to check contract language." };
  return (
    <>
      <Helmet>
        <title>Coverage Exclusions — Texas Health Insurance Denial</title>
        <meta name="description" content="Understanding benefit exclusions in Texas health plans and how to check contract language." />
        <link rel="canonical" href="https://whyclaimdenied.com/health-insurance-claims-denied-texas/coverage-exclusions" />
        <script type="application/ld+json">{JSON.stringify(sd)}</script>
      </Helmet>

      <Header />

      <Breadcrumbs
        items={[
          { label: 'Texas', link: '/health-insurance-claims-denied-texas' },
          { label: 'Health Claim Denials', link: '/health-insurance-claims-denied-texas' },
          { label: 'Coverage Exclusions', link: null },
        ]}
      />

      <main className="container">
        <h1>Coverage Exclusions — Texas Health Insurance Denial</h1>
        <section className="content-section"><h2>Why this denial happens</h2><p>Plans exclude certain services by contract. The denial cites the specific exclusion wording.</p></section>
        <section className="content-section"><h2>What to do</h2><ol><li>Request the full plan contract and the exclusion clause</li><li>Check for exceptions or alternative benefits</li><li>Use appeal routes if the clause is misapplied</li></ol></section>
        <section className="content-section"><h2>Back to the Texas health denial guide</h2><p><a href="/health-insurance-claims-denied-texas">Return to Health Insurance Claims Denied in Texas</a></p></section>
        <StateHubLinks currentState="Texas" />
      </main>

      <Footer />
    </>
  );
};

export default HealthClaimDeniedTexasCoverageExclusion;
