import { Link } from 'react-router-dom';
import { getBlogStateLabel } from '../blog/registry';

export const BlogCard = ({ post }) => {
  const stateLabel = getBlogStateLabel(post.state);
  const typeLabel =
    post.type === 'auto'
      ? 'Auto Insurance'
      : post.type === 'health'
      ? 'Health Insurance'
      : post.type === 'case-auto'
      ? 'Auto Case Study'
      : 'Health Case Study';

  const typeColor =
    post.type.includes('auto') ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800';

  return (
    <div className="blog-card">
      <div className="blog-card-header">
        <span className={`badge ${typeColor}`}>{typeLabel}</span>
        <span className="state-badge">{stateLabel}</span>
      </div>
      <h3 className="blog-card-title">
        <Link to={post.path}>{post.title}</Link>
      </h3>
      <p className="blog-card-desc">{post.description}</p>
      <div className="blog-card-footer">
        <span className="reading-time">{post.readingTime} read</span>
        <Link to={post.path} className="read-more">
          Read Guide →
        </Link>
      </div>
    </div>
  );
};

export const StateCard = ({ state }) => {
  return (
    <Link to={`/blog/${state.slug}`} className="state-card">
      <h3 className="state-card-title">{state.label}</h3>
      <span className="state-card-arrow">View Guides →</span>
    </Link>
  );
};
