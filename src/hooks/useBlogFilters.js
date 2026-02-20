import { useState, useMemo } from 'react';
import { BLOG_POSTS } from '../blog/registry';

export function useBlogFilters() {
  const [search, setSearch] = useState('');
  const [activeFilter, setFilter] = useState('All');

  const filteredPosts = useMemo(() => {
    let posts = [...BLOG_POSTS];

    // Filter by type
    if (activeFilter === 'Auto') {
      posts = posts.filter((p) => p.type.includes('auto'));
    } else if (activeFilter === 'Health') {
      posts = posts.filter((p) => p.type.includes('health'));
    } else if (activeFilter === 'Case Studies') {
      posts = posts.filter((p) => p.type.includes('case'));
    }

    // Search filter
    if (search.trim()) {
      const q = search.toLowerCase();
      posts = posts.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.state.toLowerCase().includes(q)
      );
    }

    // Sort by date desc (default)
    return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [search, activeFilter]);

  return {
    search,
    setSearch,
    activeFilter,
    setFilter,
    filteredPosts,
    counts: {
      all: BLOG_POSTS.length,
      auto: BLOG_POSTS.filter((p) => p.type.includes('auto')).length,
      health: BLOG_POSTS.filter((p) => p.type.includes('health')).length,
      cases: BLOG_POSTS.filter((p) => p.type.includes('case')).length,
    },
  };
}
