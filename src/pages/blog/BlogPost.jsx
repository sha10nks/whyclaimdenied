import { Suspense, useMemo } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { BLOG_STATES, normalizeBlogState } from '../../blog/registry';
import { getBlogPostComponent } from '../../blog/postLoader';
import BlogLayout from '../../layouts/BlogLayout';
import NotFound from '../NotFound';

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

  const PostComp = getBlogPostComponent(canonicalStateSlug, rawSlug);

  if (!PostComp) {
    return <NotFound />;
  }

  return (
    <BlogLayout>
      <Suspense fallback={<p>Loading…</p>}>
        <PostComp />
      </Suspense>
    </BlogLayout>
  );
}
