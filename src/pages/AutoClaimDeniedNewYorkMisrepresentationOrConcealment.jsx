import { Helmet } from 'react-helmet-async'
import { Link } from '../components/Link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import StateHubLinks from '../components/StateHubLinks'
import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

export default function AutoClaimDeniedNewYorkMisrepresentationOrConcealment() {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'new-york', reasonKey: 'misrepresentation-or-concealment' })
  return <DenialReasonTemplate page={page} />

  return (
    <>
    <Header />
    <main className="container">
      <Helmet>
        <title>Misrepresentation or Concealment (New York Auto Claims)</title>
        <meta name="description" content="What misrepresentation means in New York auto claims and how to request the facts and policy basis." />
        <link rel="canonical" href="https://whyclaimdenied.com/auto-insurance-claims-denied-new-york/misrepresentation-or-concealment" />
      </Helmet>
      <h1>Misrepresentation or Concealment</h1>
      <p>Insurers may deny when they believe facts were misstated or material information omitted. Ask for the records and statements relied on and the clause permitting denial.</p>
      <div className="ad-placeholder"><span className="ad-label">Advertisement</span>[AdSense Block]</div>
      <section aria-labelledby="ny-auto-misrep-steps"><h2 id="ny-auto-misrep-steps">Next steps</h2>
        <ul>
          <li>Request the investigation notes and policy provisions.</li>
          <li>Provide documentation that clarifies the facts.</li>
          <li>Appeal if the alleged misrepresentation is not material or not supported.</li>
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
