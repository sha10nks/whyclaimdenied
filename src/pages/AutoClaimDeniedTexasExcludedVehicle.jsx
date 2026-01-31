import { Helmet } from 'react-helmet-async';
import StateHubLinks from '../components/StateHubLinks';

const AutoClaimDeniedTexasExcludedVehicle = () => {
  const sd = { "@context": "https://schema.org", "@type": "Article", "headline": "Excluded Vehicle — Texas Auto Insurance Denial", "description": "How excluded-vehicle denials arise in Texas and what documents to request." };
  return (
    <div className="page-container">
      <Helmet>
        <title>Excluded Vehicle — Texas Auto Insurance Denial</title>
        <meta name="description" content="How excluded-vehicle denials arise in Texas and what documents to request." />
        <link rel="canonical" href="https://whyclaimdenied.com/auto-insurance-claims-denied-texas/excluded-vehicle" />
        <script type="application/ld+json">{JSON.stringify(sd)}</script>
      </Helmet>
      <article className="insurance-guide">
        <header className="guide-header"><h1>Excluded Vehicle — Texas Auto Insurance Denial</h1></header>
        <nav className="breadcrumb-nav"><a href="/auto-insurance-claims-denied-texas">Texas Auto Insurance Denial Guide</a> &gt; Excluded Vehicle</nav>
        <section className="content-section">
          <h2>Why this denial happens</h2>
          <p>Some policies exclude certain vehicles or types of use. The insurer will reference the policy form and declarations to show the exclusion applies.</p>
        </section>
        <section className="content-section">
          <h2>What to request</h2>
          <ul>
            <li>Declarations page and any endorsements listing covered/excluded vehicles</li>
            <li>Policy form section cited in the denial</li>
            <li>Underwriting notes indicating why the vehicle is excluded</li>
          </ul>
        </section>
        <section className="content-section"><h2>Back to the Texas auto denial guide</h2><p><a href="/auto-insurance-claims-denied-texas">Return to Auto Insurance Claims Denied in Texas</a></p></section>
        <StateHubLinks currentState="Texas" />
      </article>
    </div>
  );
};

export default AutoClaimDeniedTexasExcludedVehicle;
