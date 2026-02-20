import { Helmet } from 'react-helmet-async';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumbs from '../../components/Breadcrumbs';
import { Link } from '../../components/Link';
import { BLOG_POSTS, BLOG_STATES, getBlogStateLabel } from '../../blog/registry';

export default function BlogIndex() {
  const latest = [...BLOG_POSTS]
    .sort((a, b) => String(b.date).localeCompare(String(a.date)))
    .slice(0, 12);

  return (
    <>
      <Helmet>
        <title>Blog | WhyClaimDenied</title>
        <meta name="description" content="State-by-state guides and case examples for appealing insurance claim denials." />
        <link rel="canonical" href="https://whyclaimdenied.com/blog" />
      </Helmet>

      <Header />

      <Breadcrumbs items={[{ label: 'Blog', link: null }]} />

      <main className="container">
        <h1>Blog</h1>
        <p className="intro">
          Browse state-specific appeal guides and case examples. Start with your state, then drill down into the post you need.
        </p>

        <section>
          <h2>Browse by State</h2>
          <ul>
            {BLOG_STATES.map((s) => (
              <li key={s.slug}>
                <Link to={`/blog/${s.slug}`}>{s.label} Blog</Link>
              </li>
            ))}
          </ul>
        </section>

        <div className="ad-placeholder">
          <span className="ad-label">Advertisement</span>
          [AdSense Block]
        </div>

        <section>
          <h2>Latest Posts</h2>
          <ul>
            {latest.map((p) => (
              <li key={`${p.state}/${p.slug}`}>
                <Link to={p.path}>{p.title}</Link>
                <div className="muted">
                  {getBlogStateLabel(p.state)} · {p.readingTime}
                </div>
              </li>
            ))}
          </ul>
        </section>

        <p>
          If you’re looking for the foundation pages first, use <Link to="/">Browse Guides by State</Link>.
        </p>
      </main>

      <Footer />
    </>
  );
}

