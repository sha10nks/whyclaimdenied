import { Helmet } from 'react-helmet-async'
import { Link } from '../components/Link'
import StateHubLinks from '../components/StateHubLinks'

export default function HealthClaimDeniedNewYorkTimelyFilingIssue() {
  return (
    <main className="container">
      <Helmet>
        <title>Timely Filing Issue (New York Health Claims)</title>
        <meta name="description" content="How timely filing rules affect New York health claims and ways to clarify submission timelines." />
        <link rel="canonical" href="https://whyclaimdenied.com/health-insurance-claims-denied-new-york/timely-filing-issue" />
      </Helmet>
      <h1>Timely Filing Issue</h1>
      <p>Plans set deadlines for claim submission. Ask for the policy timing requirements and evidence of submission dates from providers.</p>
      <section aria-labelledby="ny-health-tf-steps"><h2 id="ny-health-tf-steps">Next steps</h2>
        <ul>
          <li>Request the contract clause and plan timing rules.</li>
          <li>Provide proof of timely submission or reasons for delay.</li>
          <li>Appeal and request reconsideration with supporting documentation.</li>
        </ul>
        <p><a href="https://www.dfs.ny.gov/complaint">DFS Insurance Complaint Portal</a></p>
      </section>
      <p><Link to="/health-insurance-claims-denied-new-york">Back to New York health guide</Link></p>
      <StateHubLinks currentState="new-york" />
    </main>
  )
}
