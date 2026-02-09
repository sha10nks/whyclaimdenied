import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from '../components/Link';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>WhyClaimDenied | Insurance Claim Denial Guides</title>
        <meta
          name="description"
          content="Plain-language guides to common insurance claim denials, what to check, and how to respond—organized by state and claim type."
        />
        <link rel="canonical" href="https://whyclaimdenied.com/" />
      </Helmet>

      <Header />

      <main className="container">
        <h1>WhyClaimDenied</h1>

        <p className="intro">
          Clear, state-specific explainers for common insurance claim denial reasons—built to help you understand the language in a denial letter and the next questions to ask.
        </p>

        <section>
          <h2>Guides by State</h2>
          <ul>
            <li>
              <Link to="/auto-insurance-claims-denied-california">California Auto Claim Denials</Link>
              {' · '}
              <Link to="/health-insurance-claims-denied-california">California Health Claim Denials</Link>
            </li>
            <li>
              <Link to="/auto-insurance-claims-denied-florida">Florida Auto Claim Denials</Link>
              {' · '}
              <Link to="/health-insurance-claims-denied-florida">Florida Health Claim Denials</Link>
            </li>
            <li>
              <Link to="/auto-insurance-claims-denied-texas">Texas Auto Claim Denials</Link>
              {' · '}
              <Link to="/health-insurance-claims-denied-texas">Texas Health Claim Denials</Link>
            </li>
          </ul>
        </section>

        <section>
          <h2>Start Here</h2>
          <p>
            If you’re looking for a step-by-step process, start with the California denial guide (the process is similar in most states, even though the agencies and timelines differ).
          </p>
          <p>
            <Link to="/why-claims-get-denied-california">What to Do When Your Claim Is Denied</Link>
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
