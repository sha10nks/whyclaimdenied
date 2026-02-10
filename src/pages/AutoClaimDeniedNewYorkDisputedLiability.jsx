import { Helmet } from 'react-helmet-async'
import { Link } from '../components/Link'
import StateHubLinks from '../components/StateHubLinks'

export default function AutoClaimDeniedNewYorkDisputedLiability() {
  return (
    <main className="container">
      <Helmet>
        <title>Disputed Liability (New York Auto Claims)</title>
        <meta name="description" content="How liability disputes affect New York auto claims and evidence that may help clarify fault." />
        <link rel="canonical" href="https://whyclaimdenied.com/auto-insurance-claims-denied-new-york/disputed-liability" />
      </Helmet>
      <h1>Disputed Liability</h1>
      <p>Insurers may deny or limit payment when fault is unclear. Gather documentation and request the insurer’s liability analysis.</p>
      <section aria-labelledby="ny-auto-liab-steps"><h2 id="ny-auto-liab-steps">Next steps</h2>
        <ul>
          <li>Provide photos, repair estimates, police reports, and witness statements.</li>
          <li>Ask for the adjuster’s written liability evaluation.</li>
          <li>Escalate internally if key facts were overlooked.</li>
        </ul>
        <p><a href="https://www.dfs.ny.gov/complaint">New York DFS Insurance Complaint Portal</a></p>
      </section>
      <p><Link to="/auto-insurance-claims-denied-new-york">Back to New York auto guide</Link></p>
      <StateHubLinks currentState="new-york" />
    </main>
  )
}
