import { Helmet } from 'react-helmet-async'
import { Link } from '../components/Link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import StateHubLinks from '../components/StateHubLinks'
import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

export default function AutoClaimDeniedNewYorkPolicyLapseOrCancellation() {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'new-york', reasonKey: 'policy-lapse-or-cancellation' })
  return <DenialReasonTemplate page={page} />

  return (
    <>
    <Header />
    <main className="container">
      <Helmet>
        <title>Policy Lapse or Cancellation (New York Auto Claims)</title>
        <meta name="description" content="How lapse or cancellation drives denials in New York auto claims and documents to request from the insurer." />
        <link rel="canonical" href="https://whyclaimdenied.com/auto-insurance-claims-denied-new-york/policy-lapse-or-cancellation" />
      </Helmet>
      <h1>Policy Lapse or Cancellation</h1>
      <p>Denials cite lapse or cancellation when coverage ended before the event. Verify notices, effective dates, reinstatement, and payment history.</p>
      <div className="ad-placeholder"><span className="ad-label">Advertisement</span>[AdSense Block]</div>
      <section aria-labelledby="ny-auto-lapse-steps"><h2 id="ny-auto-lapse-steps">Next steps</h2>
        <ul>
          <li>Ask for all cancellation notices and proof of mailing.</li>
          <li>Confirm reinstatement status and any gaps.</li>
          <li>Appeal in writing and consider DFS if records show continuous coverage.</li>
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
