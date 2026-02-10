import { Helmet } from 'react-helmet-async'
import { Link } from '../components/Link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import StateHubLinks from '../components/StateHubLinks'

export default function HealthClaimDeniedNewYorkCoordinationOfBenefits() {
  return (
    <>
    <Header />
    <main className="container">
      <Helmet>
        <title>Coordination of Benefits (New York Health Claims)</title>
        <meta name="description" content="How COB holds affect New York health claims and how to resolve primary/secondary coverage questions." />
        <link rel="canonical" href="https://whyclaimdenied.com/health-insurance-claims-denied-new-york/coordination-of-benefits" />
      </Helmet>
      <h1>Coordination of Benefits</h1>
      <p>When multiple plans may apply, claims can be held for COB. Verify primary coverage, provide requested information, and ask for the plan’s determination in writing.</p>
      <div className="ad-placeholder"><span className="ad-label">Advertisement</span>[AdSense Block]</div>
      <section aria-labelledby="ny-health-cob-steps"><h2 id="ny-health-cob-steps">Next steps</h2>
        <ul>
          <li>Provide enrollment proof and policy details for each plan.</li>
          <li>Ask for the COB rule used and the outcome of the determination.</li>
          <li>Appeal if payment is unresolved after COB clarification.</li>
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
