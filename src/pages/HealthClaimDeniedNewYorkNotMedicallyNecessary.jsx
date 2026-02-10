import { Helmet } from 'react-helmet-async'
import { Link } from '../components/Link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import StateHubLinks from '../components/StateHubLinks'

export default function HealthClaimDeniedNewYorkNotMedicallyNecessary() {
  return (
    <>
    <Header />
    <main className="container">
      <Helmet>
        <title>Not Medically Necessary (New York Health Claims)</title>
        <meta name="description" content="Medical necessity denials in New York health claims and evidence that may support an appeal." />
        <link rel="canonical" href="https://whyclaimdenied.com/health-insurance-claims-denied-new-york/not-medically-necessary" />
      </Helmet>
      <h1>Not Medically Necessary</h1>
      <p>Plans use clinical criteria to evaluate necessity. Request the criteria used and provide physician letters and guidelines references.</p>
      <div className="ad-placeholder"><span className="ad-label">Advertisement</span>[AdSense Block]</div>
      <section aria-labelledby="ny-health-mednec-steps"><h2 id="ny-health-mednec-steps">Next steps</h2>
        <ul>
          <li>Obtain the policy’s medical criteria and reviewer notes.</li>
          <li>Submit detailed physician support and records.</li>
          <li>Use internal appeals; consider DFS external appeal if eligible.</li>
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
