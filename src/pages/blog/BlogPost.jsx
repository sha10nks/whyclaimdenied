import { Helmet } from 'react-helmet-async';
import { Suspense, useMemo } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from '../../components/Link';
import { BLOG_STATES, getBlogPost, getBlogStateLabel, normalizeBlogState } from '../../blog/registry';
import { getBlogPostComponent } from '../../blog/postLoader';

export default function BlogPost() {
  const params = useParams();
  const rawState = params.state;
  const rawSlug = params.slug;

  const normalizedState = normalizeBlogState(rawState);
  const canonicalStateSlug = useMemo(() => {
    const fromStates = BLOG_STATES.find((s) => s.slug === normalizedState)?.slug;
    return fromStates || normalizedState;
  }, [normalizedState]);

  if (rawState && rawState.toLowerCase() !== canonicalStateSlug) {
    return <Navigate to={`/blog/${canonicalStateSlug}/${String(rawSlug || '').toLowerCase()}`} replace />;
  }

  const post = getBlogPost({ state: canonicalStateSlug, slug: rawSlug });
  const stateLabel = getBlogStateLabel(canonicalStateSlug);
  const PostComp = getBlogPostComponent(canonicalStateSlug, rawSlug);

  const title = post?.title || 'Blog Post Not Found';

  return (
    <>
      <Helmet>
        <title>{title} | WhyClaimDenied</title>
        {post?.description ? <meta name="description" content={post.description} /> : null}
        <link
          rel="canonical"
          href={post?.canonicalUrl || `https://whyclaimdenied.com/blog/${canonicalStateSlug}/${String(rawSlug || '').toLowerCase()}`}
        />
      </Helmet>

      <Header />
      {PostComp ? (
        <Suspense fallback={<main className="container"><p>Loading…</p></main>}>
          <PostComp />
        </Suspense>
      ) : (
        <main className="container">
          <h1>Post not found</h1>
          <p className="intro">This blog page doesn’t exist or may have been moved.</p>
          <ul>
            <li>
              <Link to="/blog">Back to Blog</Link>
            </li>
            <li>
              <Link to={`/blog/${canonicalStateSlug}`}>Browse {stateLabel} posts</Link>
            </li>
          </ul>
        </main>
      )}

      <Footer />
    </>
  );
}
