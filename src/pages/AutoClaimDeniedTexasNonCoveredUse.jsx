import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '../components/Breadcrumbs';
import Footer from '../components/Footer';
import Header from '../components/Header';
import StateHubLinks from '../components/StateHubLinks';

const AutoClaimDeniedTexasNonCoveredUse = () => {
  const sd = { "@context": "https://schema.org", "@type": "Article", "headline": "Non-Covered Use — Texas Auto Insurance Denial", "description": "Understand non-covered use denials in Texas (business use, racing, other exclusions) and next steps." };
  return (
    <>
      <Helmet>
        <title>Non-Covered Use — Texas Auto Insurance Denial</title>
        <meta name="description" content="Understand non-covered use denials in Texas (business use, racing, other exclusions) and next steps." />
        <link rel="canonical" href="https://whyclaimdenied.com/auto-insurance-claims-denied-texas/non-covered-use" />
        <script type="application/ld+json">{JSON.stringify(sd)}</script>
      </Helmet>

      <Header />

      <Breadcrumbs
        items={[
          { label: 'Texas', link: '/auto-insurance-claims-denied-texas' },
          { label: 'Auto Claim Denials', link: '/auto-insurance-claims-denied-texas' },
          { label: 'Non-Covered Use', link: null },
        ]}
      />

      <main className="container">
        <h1>Non-Covered Use — Texas Auto Insurance Denial</h1>
        <section className="content-section">
          <h2>Why this denial happens</h2>
          <p>Personal auto policies often exclude certain uses (commercial delivery, rideshare without proper endorsements, racing, off-road events). The insurer will point to the exclusion language and facts of use.</p>
        </section>
        <section className="content-section">
          <h2>What to do next</h2>
          <ol>
            <li>Request the exact exclusion language and facts relied on.</li>
            <li>Clarify your purpose of use with receipts, employment records, or trip details.</li>
            <li>Ask whether any endorsements or optional coverages apply.</li>
          </ol>
        </section>
        <section className="content-section"><h2>Back to the Texas auto denial guide</h2><p><a href="/auto-insurance-claims-denied-texas">Return to Auto Insurance Claims Denied in Texas</a></p></section>
        <StateHubLinks currentState="Texas" />
      </main>

      <Footer />
    </>
  );
};

export default AutoClaimDeniedTexasNonCoveredUse;
