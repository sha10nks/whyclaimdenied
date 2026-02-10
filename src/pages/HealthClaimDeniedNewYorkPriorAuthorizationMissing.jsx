import { Helmet } from 'react-helmet-async'
import { Link } from '../components/Link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import StateHubLinks from '../components/StateHubLinks'

export default function HealthClaimDeniedNewYorkPriorAuthorizationMissing() {
  return (
    <>
    <Header />
    <main className="container">
      <Helmet>
        <title>Prior Authorization Missing (New York Health Claims)</title>
        <meta name="description" content="New York health denial for missing prior authorization and steps to appeal or seek external review." />
        <link rel="canonical" href="https://whyclaimdenied.com/health-insurance-claims-denied-new-york/prior-authorization-missing" />
      </Helmet>
      <h1>Prior Authorization Missing</h1>
      <p>Plans often require prior authorization. Ask for the policy terms and criteria, and whether retro authorization or reconsideration is possible.</p>
      <div className="ad-placeholder"><span className="ad-label">Advertisement</span>[AdSense Block]</div>
      <section aria-labelledby="ny-health-prior-steps"><h2 id="ny-health-prior-steps">Next steps</h2>
        <ul>
          <li>Request the clinical policy and authorization records.</li>
          <li>Submit supporting medical documentation and letters.</li>
          <li>Appeal internally; if eligible, consider DFS external appeal.</li>
        </ul>
        <p><a href="https://www.dfs.ny.gov/consumers/health_insurance/External_Appeal">DFS External Appeal</a></p>
      </section>
      <p><Link to="/health-insurance-claims-denied-new-york">Back to New York health guide</Link></p>
      <StateHubLinks currentState="New York" />
    </main>
    <Footer />
    </>
  )
}
