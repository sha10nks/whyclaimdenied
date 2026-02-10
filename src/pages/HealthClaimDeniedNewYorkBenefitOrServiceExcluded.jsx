import { Helmet } from 'react-helmet-async'
import { Link } from '../components/Link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import StateHubLinks from '../components/StateHubLinks'

export default function HealthClaimDeniedNewYorkBenefitOrServiceExcluded() {
  return (
    <>
    <Header />
    <main className="container">
      <Helmet>
        <title>Benefit or Service Excluded (New York Health Claims)</title>
        <meta name="description" content="Excluded benefit denials in New York health plans and how to verify contract terms and exceptions." />
        <link rel="canonical" href="https://whyclaimdenied.com/health-insurance-claims-denied-new-york/benefit-or-service-excluded" />
      </Helmet>
      <h1>Benefit or Service Excluded</h1>
      <p>Plans may exclude certain services. Verify the contract section and any exceptions or medical necessity pathways that could apply.</p>
      <div className="ad-placeholder"><span className="ad-label">Advertisement</span>[AdSense Block]</div>
      <section aria-labelledby="ny-health-excl-steps"><h2 id="ny-health-excl-steps">Next steps</h2>
        <ul>
          <li>Request the exact exclusion text and supporting rationale.</li>
          <li>Provide clinical support for coverage under policy provisions.</li>
          <li>Appeal internally and consider DFS complaint if needed.</li>
        </ul>
        <p><a href="https://www.dfs.ny.gov/complaint">DFS Insurance Complaint Portal</a></p>
      </section>
      <p><Link to="/health-insurance-claims-denied-new-york">Back to New York health guide</Link></p>
      <StateHubLinks currentState="New York" />
    </main>
    <Footer />
    </>
  )
}
