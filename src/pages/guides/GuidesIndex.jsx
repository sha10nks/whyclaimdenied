import { Helmet } from 'react-helmet-async'
import { useMemo, useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Breadcrumbs from '../../components/Breadcrumbs'
import { Link } from '../../components/Link'
import { BASE_URL } from '../../seo/meta'
import { GUIDE_CATEGORIES, GUIDES } from '../../guides/registry.js'

const byTitle = (a, b) => a.title.localeCompare(b.title)

const normalizeQuery = (value) => String(value || '').trim().toLowerCase()

export default function GuidesIndex() {
  const [query, setQuery] = useState('')
  const [claimType, setClaimType] = useState('all')
  const [category, setCategory] = useState('all')

  const q = normalizeQuery(query)

  const guides = useMemo(() => {
    const list = GUIDES.slice().sort(byTitle)
    return list.filter((g) => {
      if (claimType !== 'all' && !g.claimTypes.includes(claimType)) return false
      if (category !== 'all' && !g.categories.includes(category)) return false
      if (!q) return true

      const hay = `${g.title} ${g.description}`.toLowerCase()
      return hay.includes(q)
    })
  }, [q, claimType, category])

  const title = 'Insurance Claim Denial Guides'
  const description = 'Browse step-by-step guides for denied insurance claims: appeals, paperwork, deadlines, and common denial reasons.'
  const canonical = `${BASE_URL}/guides`

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
      </Helmet>

      <Header />
      <Breadcrumbs />

      <main className="container">
        <header className="guides-header">
          <h1>Insurance Claim Denial Guides</h1>
          <p className="intro">
            Practical, step-by-step guides for people dealing with real claim denials. Use filters to find the fastest next step.
          </p>
        </header>

        <section className="guides-filters" aria-label="Guide filters">
          <label className="guides-filter">
            <span className="guides-filter-label">Search</span>
            <input
              className="guides-filter-input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Appeal letter, deadlines, out-of-network…"
              inputMode="search"
            />
          </label>

          <label className="guides-filter">
            <span className="guides-filter-label">Claim type</span>
            <select className="guides-filter-input" value={claimType} onChange={(e) => setClaimType(e.target.value)}>
              <option value="all">All</option>
              <option value="auto">Auto</option>
              <option value="health">Health</option>
            </select>
          </label>

          <label className="guides-filter">
            <span className="guides-filter-label">Topic</span>
            <select className="guides-filter-input" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="all">All topics</option>
              {Object.entries(GUIDE_CATEGORIES).map(([key, value]) => (
                <option key={key} value={key}>
                  {value.label}
                </option>
              ))}
            </select>
          </label>

          <button
            type="button"
            className="guides-filter-clear"
            onClick={() => {
              setQuery('')
              setClaimType('all')
              setCategory('all')
            }}
          >
            Clear
          </button>
        </section>

        <section aria-label="Guides">
          {guides.length === 0 ? (
            <p>No guides match your filters.</p>
          ) : (
            <div className="guides-grid">
              {guides.map((g) => (
                <article key={g.slug} className="guide-card">
                  <h2 className="guide-card-title">
                    <Link to={g.canonicalPath}>{g.title}</Link>
                  </h2>
                  <p className="guide-card-description">{g.description}</p>
                  <ul className="guide-card-tags" aria-label="Guide tags">
                    <li>{g.claimTypes.includes('auto') && g.claimTypes.includes('health') ? 'Auto + Health' : g.claimTypes[0]}</li>
                    <li>{g.categories.map((c) => GUIDE_CATEGORIES[c]?.label).filter(Boolean).slice(0, 1).join(', ')}</li>
                  </ul>
                  <p className="guide-card-cta">
                    <Link to={g.canonicalPath}>Read the guide</Link>
                  </p>
                </article>
              ))}
            </div>
          )}
        </section>

        <section className="guides-state-entry" aria-label="State-specific guides">
          <h2>Prefer state-specific pages?</h2>
          <p>
            If you already know your state, browse our denial hubs for localized context and reason-specific pages.
          </p>
          <p>
            <Link to="/#guides-by-state">Browse guides by state</Link>
          </p>
        </section>
      </main>

      <Footer />
    </>
  )
}
