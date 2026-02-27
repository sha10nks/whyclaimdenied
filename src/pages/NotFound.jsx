import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from '../components/Link';
import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

export default function NotFound() {
  const { pathname } = useLocation()

  const denialPage = useMemo(() => {
    const match = String(pathname || '').match(/^\/(auto|health)-insurance-claims-denied-([a-z-]+)\/([a-z0-9-]+)$/)
    if (!match) return null

    const domain = match[1]
    const stateSlug = match[2]
    const reasonKey = match[3]
    return getDenialPage({ domain, stateSlug, reasonKey }) || null
  }, [pathname])

  if (denialPage) {
    return <DenialReasonTemplate page={denialPage} />
  }

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
