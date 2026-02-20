import { Helmet } from 'react-helmet-async'
import { Link } from '../components/Link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import StateHubLinks from '../components/StateHubLinks'
import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

export default function AutoClaimDeniedNewYorkExcludedDriver() {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'new-york', reasonKey: 'excluded-driver' })
  return <DenialReasonTemplate page={page} />

  return (
    <>
    <Header />
    <main className="container">
      <Helmet>
        <title>Excluded Driver (New York Auto Claims)</title>
        <meta name="description" content="How excluded-driver provisions affect New York auto claims and what to confirm in policy language." />
        <link rel="canonical" href="https://whyclaimdenied.com/auto-insurance-claims-denied-new-york/excluded-driver" />
      </Helmet>
      <h1>Excluded Driver</h1>
      <p>Some policies list drivers excluded from coverage. Verify the endorsement, dates, and whether the driver operated the vehicle at the time.</p>
      <div className="ad-placeholder"><span className="ad-label">Advertisement</span>[AdSense Block]</div>
      <section aria-labelledby="ny-auto-excl-steps"><h2 id="ny-auto-excl-steps">Next steps</h2>
        <ul>
          <li>Request the exclusion endorsement and proof of delivery.</li>
          <li>Confirm who operated the vehicle and the facts of the loss.</li>
          <li>Appeal if the endorsement does not match the facts.</li>
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
