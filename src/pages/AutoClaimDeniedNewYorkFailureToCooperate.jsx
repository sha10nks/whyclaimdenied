import { Helmet } from 'react-helmet-async'
import { Link } from '../components/Link'
import StateHubLinks from '../components/StateHubLinks'

export default function AutoClaimDeniedNewYorkFailureToCooperate() {
  return (
    <main className="container">
      <Helmet>
        <title>Failure to Cooperate (New York Auto Claims)</title>
        <meta name="description" content="What “failure to cooperate” means in New York auto claims and how to cure documentation or interview gaps." />
        <link rel="canonical" href="https://whyclaimdenied.com/auto-insurance-claims-denied-new-york/failure-to-cooperate" />
      </Helmet>
      <h1>Failure to Cooperate</h1>
      <p>Insurers expect reasonable cooperation in providing information, records, and statements. If cooperation is cited, ask for a list of requested items and deadlines.</p>
      <section aria-labelledby="ny-auto-coop-steps"><h2 id="ny-auto-coop-steps">Next steps</h2>
        <ul>
          <li>Request a written checklist of outstanding items.</li>
          <li>Provide documents promptly and confirm receipt.</li>
          <li>Appeal after curing the issue if the denial remains.</li>
        </ul>
        <p><a href="https://www.dfs.ny.gov/complaint">New York DFS Insurance Complaint Portal</a></p>
      </section>
      <p><Link to="/auto-insurance-claims-denied-new-york">Back to New York auto guide</Link></p>
      <StateHubLinks currentState="new-york" />
    </main>
  )
}
