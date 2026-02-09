import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from '../components/Link';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | WhyClaimDenied</title>
        <meta name="robots" content="noindex,follow" />
      </Helmet>

      <Header />

      <main className="container">
        <h1>Page not found</h1>
        <p className="intro">The page you’re looking for doesn’t exist or may have been moved.</p>

        <section>
          <h2>Go to a guide</h2>
          <ul>
            <li>
              <Link to="/">Homepage</Link>
            </li>
            <li>
              <Link to="/#guides-by-state">Browse Guides by State</Link>
            </li>
          </ul>
        </section>
      </main>

      <Footer />
    </>
  );
}
