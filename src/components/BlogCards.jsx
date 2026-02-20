import { Link } from 'react-router-dom';
import { getBlogStateLabel } from '../blog/registry';

// Specific colors for states
const STATE_COLOR_MAP = {
  'california': 'orange', // Golden State
  'texas': 'red',         // Lone Star / Red
  'florida': 'cyan',      // Sunshine / Water
  'new-york': 'indigo',   // Empire State / Deep Blue
  'illinois': 'blue',
  'pennsylvania': 'yellow',
  'ohio': 'rose',
  'georgia': 'emerald',
};

// Expanded palette for other/future states
const FALLBACK_COLORS = [
  'blue', 'green', 'purple', 'orange', 'teal', 'indigo', 
  'red', 'cyan', 'rose', 'emerald', 'amber', 'fuchsia'
];

// Deterministic color assignment based on string hash
const getStateColorClass = (slug) => {
  if (STATE_COLOR_MAP[slug]) {
    return `state-card-${STATE_COLOR_MAP[slug]}`;
  }
  
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = slug.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % FALLBACK_COLORS.length;
  return `state-card-${FALLBACK_COLORS[index]}`;
};

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
  const colorClass = getStateColorClass(state.slug);
  
  return (
    <Link to={`/blog/${state.slug}`} className={`state-card ${colorClass}`}>
      <h3 className="state-card-title">{state.label}</h3>
      <span className="state-card-arrow">View Guides →</span>
    </Link>
  );
};
