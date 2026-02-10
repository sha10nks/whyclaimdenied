import { Helmet } from 'react-helmet-async'
import { Link } from '../components/Link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import StateHubLinks from '../components/StateHubLinks'

export default function AutoClaimDeniedNewYorkNonCoveredUse() {
  return (
    <>
    <Header />
    <main className="container">
      <Helmet>
        <title>Non-Covered Use (New York Auto Claims)</title>
        <meta name="description" content="How non-covered use exclusions work in New York auto policies and steps to verify applicability." />
        <link rel="canonical" href="https://whyclaimdenied.com/auto-insurance-claims-denied-new-york/non-covered-use" />
      </Helmet>
      <h1>Non-Covered Use</h1>
      <p>Policies may exclude certain uses of a vehicle. Confirm the exact exclusion language, facts of the event, and whether an exception applies.</p>
      <div className="ad-placeholder"><span className="ad-label">Advertisement</span>[AdSense Block]</div>
      <section aria-labelledby="ny-auto-nonuse-steps"><h2 id="ny-auto-nonuse-steps">Next steps</h2>
        <ul>
          <li>Request the endorsement text and the insurer’s factual summary.</li>
          <li>Provide documentation of the actual use and circumstances.</li>
          <li>Appeal if the exclusion was misapplied.</li>
        </ul>
        <p><a href="https://www.dfs.ny.gov/complaint">New York DFS Insurance Complaint Portal</a></p>
      </section>
      <p><Link to="/auto-insurance-claims-denied-new-york">Back to New York auto guide</Link></p>
      <StateHubLinks currentState="New York" />
    </main>
    <Footer />
    </>
  )
}
