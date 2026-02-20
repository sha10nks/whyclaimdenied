import { Link } from './Link'

const LinkList = ({ items = [] }) => {
  return (
    <ul className="link-list">
      {items.map((it) => (
        <li key={it.to}>
          <Link to={it.to} className="link-tile">
            {it.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default LinkList

