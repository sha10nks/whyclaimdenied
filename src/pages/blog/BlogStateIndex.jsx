import { Helmet } from 'react-helmet-async';
import { useMemo } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs';
import { Link } from '../../components/Link';
import { BLOG_STATES, getBlogPostsByState, getBlogStateLabel, normalizeBlogState } from '../../blog/registry';
import BlogLayout from '../../layouts/BlogLayout';

export default function BlogStateIndex() {
  const params = useParams();
  const rawState = params.state;
  const normalized = normalizeBlogState(rawState);

  const canonicalStateSlug = useMemo(() => {
    const fromStates = BLOG_STATES.find((s) => s.slug === normalized)?.slug;
    return fromStates || normalized;
  }, [normalized]);

  if (rawState && rawState.toLowerCase() !== canonicalStateSlug) {
    return <Navigate to={`/blog/${canonicalStateSlug}`} replace />;
  }

  const label = getBlogStateLabel(canonicalStateSlug);
  const posts = getBlogPostsByState(canonicalStateSlug);
  const known = BLOG_STATES.some((s) => s.slug === canonicalStateSlug);

  return (
    <BlogLayout>
      <Helmet>
        <title>{label} Blog | WhyClaimDenied</title>
        <meta name="description" content={`Blog posts and claim-denial case examples for ${label}.`} />
        <link rel="canonical" href={`https://whyclaimdenied.com/blog/${canonicalStateSlug}`} />
      </Helmet>

      <Breadcrumbs items={[{ label: 'Blog', link: '/blog' }, { label, link: null }]} />

      <div>
        <h1>{label} Blog</h1>

        {!known ? (
          <>
            <p className="intro">We don’t have a blog section for this state yet.</p>
            <p>
              <Link to="/blog">Go back to Blog</Link>
            </p>
          </>
        ) : (
          <>
            <p className="intro">Explore guides and real-world case examples for {label}.</p>

            <section>
              <h2>Posts</h2>
              {posts.length === 0 ? (
                <p>No posts published yet.</p>
              ) : (
                <ul>
                  {posts.map((p) => (
                    <li key={`${p.state}/${p.slug}`}>
                      <Link to={p.path}>{p.title}</Link>
                      <div className="muted">{p.type} · {p.readingTime}</div>
                    </li>
                  ))}
                </ul>
              )}
            </section>

            <div className="ad-placeholder">
              <span className="ad-label">Advertisement</span>
              [AdSense Block]
            </div>

            <section>
              <h2>Start With the State Guides</h2>
              <ul>
                <li>
                  <Link to={`/auto-insurance-claims-denied-${canonicalStateSlug}`}>Auto Insurance Claims Denied in {label}</Link>
                </li>
                <li>
                  <Link to={`/health-insurance-claims-denied-${canonicalStateSlug}`}>Health Insurance Claims Denied in {label}</Link>
                </li>
              </ul>
            </section>
          </>
        )}
      </div>
    </BlogLayout>
  );
}
