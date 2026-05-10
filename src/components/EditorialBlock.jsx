import { Link } from './Link'

const BUILD_DATE = typeof __BUILD_TIMESTAMP__ === 'string' ? __BUILD_TIMESTAMP__ : null

const formatDate = (iso) => {
  if (!iso) return null
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return null
  return d.toISOString().slice(0, 10)
}

export default function EditorialBlock({ showReview = true }) {
  const updated = formatDate(BUILD_DATE)

  return (
    <section className="editorial-block" aria-label="About this page">
      <h2>About this page</h2>
      <p>
        Updated{updated ? ` ${updated}` : ''}. Content is informational and written for people dealing with real claim denials.
      </p>
      {showReview ? (
        <p>
          Reviewed by the WhyClaimDenied editorial team. See <Link to="/about">About</Link> for scope and sourcing.
        </p>
      ) : null}
    </section>
  )
}
