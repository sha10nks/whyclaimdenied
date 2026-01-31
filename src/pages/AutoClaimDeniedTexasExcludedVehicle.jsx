import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '../components/Breadcrumbs';
import Footer from '../components/Footer';
import Header from '../components/Header';
import StateHubLinks from '../components/StateHubLinks';

const AutoClaimDeniedTexasExcludedVehicle = () => {
  const sd = { "@context": "https://schema.org", "@type": "Article", "headline": "Excluded Vehicle — Texas Auto Insurance Denial", "description": "How excluded-vehicle denials arise in Texas and what documents to request." };
  return (
    <>
      <Helmet>
        <title>Excluded Vehicle — Texas Auto Insurance Denial</title>
        <meta name="description" content="How excluded-vehicle denials arise in Texas and what documents to request." />
        <link rel="canonical" href="https://whyclaimdenied.com/auto-insurance-claims-denied-texas/excluded-vehicle" />
        <script type="application/ld+json">{JSON.stringify(sd)}</script>
      </Helmet>

      <Header />

      <Breadcrumbs
        items={[
          { label: 'Texas', link: '/auto-insurance-claims-denied-texas' },
          { label: 'Auto Claim Denials', link: '/auto-insurance-claims-denied-texas' },
          { label: 'Excluded Vehicle', link: null },
        ]}
      />

      <main className="container">
        <h1>Excluded Vehicle — Texas Auto Insurance Denial</h1>
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
      </main>

      <Footer />
    </>
  );
};

export default AutoClaimDeniedTexasExcludedVehicle;
