import { Link } from '../../components/Link'

const RelatedGuides = ({ title, links }) => {
  if (!Array.isArray(links) || links.length === 0) return null

  return (
    <section>
      <h2>{title || 'Related Guides'}</h2>
      <ul className="link-list">
        {links.map((l) => (
          <li key={l.to}>
            <Link className="link-tile" to={l.to}>{l.label}</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default RelatedGuides

