import { Helmet } from 'react-helmet-async'
import { Link } from '../components/Link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import StateHubLinks from '../components/StateHubLinks'

export default function HealthClaimDeniedNewYorkExperimentalOrInvestigational() {
  return (
    <>
    <Header />
    <main className="container">
      <Helmet>
        <title>Experimental or Investigational (New York Health Claims)</title>
        <meta name="description" content="What experimental/investigational means in New York health coverage and appeal options including DFS external appeal." />
        <link rel="canonical" href="https://whyclaimdenied.com/health-insurance-claims-denied-new-york/experimental-or-investigational" />
      </Helmet>
      <h1>Experimental or Investigational</h1>
      <p>Plans may deny when a treatment is considered experimental. Request criteria, supporting citations, and your clinician’s evidence.</p>
      <div className="ad-placeholder"><span className="ad-label">Advertisement</span>[AdSense Block]</div>
      <section aria-labelledby="ny-health-exp-steps"><h2 id="ny-health-exp-steps">Next steps</h2>
        <ul>
          <li>Ask for the policy standard used and reviewer rationale.</li>
          <li>Submit clinical literature and specialist letters.</li>
          <li>Consider DFS external appeal when eligible.</li>
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
