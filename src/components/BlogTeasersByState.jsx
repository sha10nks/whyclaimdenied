import { Link } from './Link'
import { getBlogPostsByState, normalizeBlogState, getBlogStateLabel } from '../blog/registry'

const order = ['auto', 'health', 'case-auto', 'case-health']

const BlogTeasersByState = ({ state }) => {
  const s = normalizeBlogState(state)
  const label = getBlogStateLabel(s)
  const posts = getBlogPostsByState(s)
    .sort((a,b)=> order.indexOf(a.type) - order.indexOf(b.type))

  if (!posts.length) return null

  return (
    <section>
      <h2>From our Blog – {label}</h2>
      <ul>
        {posts.map((p) => (
          <li key={`${p.state}/${p.slug}`}>
            <Link to={p.path}>{p.title}</Link>
            <span className="muted"> {p.readingTime}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default BlogTeasersByState

