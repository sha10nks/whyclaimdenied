import { Helmet } from 'react-helmet-async'
import { Link } from '../components/Link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import StateHubLinks from '../components/StateHubLinks'

export default function HealthClaimDeniedNewYorkOutOfNetworkProvider() {
  return (
    <>
    <Header />
    <main className="container">
      <Helmet>
        <title>Out-of-Network Provider (New York Health Claims)</title>
        <meta name="description" content="Out-of-network denials in New York health plans and ways to verify network status and appeal." />
        <link rel="canonical" href="https://whyclaimdenied.com/health-insurance-claims-denied-new-york/out-of-network-provider" />
      </Helmet>
      <h1>Out-of-Network Provider</h1>
      <p>Plans may limit coverage out of network. Verify directory listings, referrals, and any applicable exceptions or surprise billing protections.</p>
      <div className="ad-placeholder"><span className="ad-label">Advertisement</span>[AdSense Block]</div>
      <section aria-labelledby="ny-health-oon-steps"><h2 id="ny-health-oon-steps">Next steps</h2>
        <ul>
          <li>Request written confirmation of network status and benefits.</li>
          <li>Provide referral records or availability issues, if relevant.</li>
          <li>Appeal and consider DFS complaint if benefit application is unclear.</li>
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
