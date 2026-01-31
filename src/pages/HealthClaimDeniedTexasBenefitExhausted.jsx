import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '../components/Breadcrumbs';
import Footer from '../components/Footer';
import Header from '../components/Header';
import StateHubLinks from '../components/StateHubLinks';

const HealthClaimDeniedTexasBenefitExhausted = () => {
  const sd = { "@context": "https://schema.org", "@type": "Article", "headline": "Benefits Exhausted — Texas Health Insurance Denial", "description": "When plan limits are reached in Texas health coverage and what alternative options to ask about." };
  return (
    <>
      <Helmet>
        <title>Benefits Exhausted — Texas Health Insurance Denial</title>
        <meta name="description" content="When plan limits are reached in Texas health coverage and what alternative options to ask about." />
        <link rel="canonical" href="https://whyclaimdenied.com/health-insurance-claims-denied-texas/benefits-exhausted" />
        <script type="application/ld+json">{JSON.stringify(sd)}</script>
      </Helmet>

      <Header />

      <Breadcrumbs
        items={[
          { label: 'Texas', link: '/health-insurance-claims-denied-texas' },
          { label: 'Health Claim Denials', link: '/health-insurance-claims-denied-texas' },
          { label: 'Benefits Exhausted', link: null },
        ]}
      />

      <main className="container">
        <h1>Benefits Exhausted — Texas Health Insurance Denial</h1>
        <section className="content-section"><h2>What this means</h2><p>The plan has reached a limit for a service or benefit category. The EOB should show the limit and usage.</p></section>
        <section className="content-section"><h2>Next steps</h2><ul><li>Confirm the limit in the plan contract</li><li>Ask about alternative covered services or exceptions</li><li>Appeal if the usage calculation is wrong</li></ul></section>
        <section className="content-section"><h2>Back to the Texas health denial guide</h2><p><a href="/health-insurance-claims-denied-texas">Return to Health Insurance Claims Denied in Texas</a></p></section>
        <StateHubLinks currentState="Texas" />
      </main>

      <Footer />
    </>
  );
};

export default HealthClaimDeniedTexasBenefitExhausted;
