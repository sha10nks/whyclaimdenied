import { Helmet } from 'react-helmet-async';
import { Search, BookOpen } from 'lucide-react';
import Breadcrumbs from '../../components/Breadcrumbs';
import BlogLayout from '../../layouts/BlogLayout';
import { Link } from '../../components/Link';
import { BLOG_STATES } from '../../blog/registry';
import { BlogCard, StateCard } from '../../components/BlogCards';
import { useBlogFilters } from '../../hooks/useBlogFilters';
import ToolCtaSection from '../../components/tools/ToolCtaSection';

export default function BlogIndex() {
  const { search, setSearch, activeFilter, setFilter, filteredPosts, counts } = useBlogFilters();

  return (
    <BlogLayout>
      <Helmet>
        <title>Blog | WhyClaimDenied</title>
        <meta name="description" content="State-by-state guides and case examples for appealing insurance claim denials." />
        <link rel="canonical" href="https://whyclaimdenied.com/blog" />
      </Helmet>

      <Breadcrumbs items={[{ label: 'Blog', link: null }]} />

      {/* Hero Section */}
      <section className="blog-hero">
        <h1 className="hero-title">Insurance Appeal Resource Hub</h1>
        <p className="hero-desc">
          Authoritative guides, real-world case studies, and state-specific strategies to help you overturn unfair claim denials.
        </p>
        <div className="hero-stats">
          <div className="stat-pill">
            <BookOpen size={16} />
            <span>{counts.all} Articles</span>
          </div>
          <div className="stat-pill">
            <span>{BLOG_STATES.length} States Covered</span>
          </div>
        </div>
      </section>

      {/* Start Here / Featured Foundation */}
      <section className="start-here-section">
        <div className="section-header">
          <h2>Start Here: Foundation Guides</h2>
          <p className="section-sub">Essential reading before you file an appeal.</p>
        </div>
        <div className="grid-2">
          <Link to="/reasons/auto-insurance-claim-denied" className="foundation-card auto">
            <h3>Auto Insurance Denials</h3>
            <p>Master guide to the top 10 reasons auto claims get rejected and how to fight back.</p>
            <span className="link-arrow">Read Guide →</span>
          </Link>
          <Link to="/reasons/health-insurance-claim-denied" className="foundation-card health">
            <h3>Health Insurance Denials</h3>
            <p>Comprehensive breakdown of medical necessity, prior auth, and network denials.</p>
            <span className="link-arrow">Read Guide →</span>
          </Link>
        </div>
      </section>

      {/* Browse by State */}
      <section className="state-grid-section">
        <div className="section-header">
          <h2>Browse by State</h2>
        </div>
        <div className="state-grid">
          {BLOG_STATES.map((s) => (
            <StateCard key={s.slug} state={s} />
          ))}
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="filter-bar">
        <div className="search-wrapper">
          <Search className="search-icon" size={18} />
          <input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
        </div>
        <div className="filter-pills">
          {['All', 'Auto', 'Health', 'Case Studies'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`filter-pill ${activeFilter === f ? 'active' : ''}`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      <div className="ad-placeholder my-12">
        <span className="ad-label">Advertisement</span>
      </div>

      {/* Posts Grid */}
      <section className="posts-grid-section">
        <div className="section-header">
          <h2>Latest Articles {activeFilter !== 'All' && `— ${activeFilter}`}</h2>
          <span className="count-badge">{filteredPosts.length} posts</span>
        </div>
        
        {filteredPosts.length > 0 ? (
          <div className="posts-grid">
            {filteredPosts.map((p) => (
              <BlogCard key={`${p.state}/${p.slug}`} post={p} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>No articles found matching your criteria.</p>
            <button onClick={() => { setSearch(''); setFilter('All'); }} className="reset-btn">
              Reset Filters
            </button>
          </div>
        )}
      </section>

      <ToolCtaSection
        title="Next Step After Reading These Guides"
        intro="Analyze your denial letter first, then generate your appeal letter when ready to submit."
      />
    </BlogLayout>
  );
}
