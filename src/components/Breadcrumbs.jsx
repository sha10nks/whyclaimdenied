import { Fragment, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Link } from './Link';
import { getBlogStateLabel, normalizeBlogState } from '../blog/registry';
import { BASE_URL } from '../seo/meta';
import { generateBreadcrumbSchema } from '../seo/schema';

const normalizeItems = (items, crumbs) => {
  const base = Array.isArray(items)
    ? items
    : Array.isArray(crumbs)
      ? crumbs.map((c) => ({ label: c.label, link: c.link ?? c.to ?? null }))
      : [];

  if (base.length === 0) return [];

  const first = base[0];
  const firstLabel = String(first?.label || '').toLowerCase();
  const firstLink = String(first?.link || first?.to || '');

  if (firstLabel === 'home' && firstLink === '/') return base.slice(1);
  return base;
};

const Breadcrumbs = ({ items, crumbs }) => {
  const location = useLocation();
  const normalized = normalizeItems(items, crumbs);
  const derived = useMemo(() => {
    if (normalized.length > 0) return normalized;
    const pathname = String(location?.pathname || '/');
    const segments = pathname.split('/').filter(Boolean);
    if (segments.length === 0) return [];

    const result = [];
    for (let i = 0; i < segments.length; i += 1) {
      const seg = segments[i];
      const isLast = i === segments.length - 1;
      const prev = i > 0 ? segments[i - 1] : null;

      if (seg === 'blog') {
        result.push({ label: 'Blog', link: isLast ? null : '/blog' });
        continue;
      }

      if (prev === 'blog') {
        const s = normalizeBlogState(seg);
        result.push({ label: getBlogStateLabel(s), link: isLast ? null : `/blog/${s}` });
        continue;
      }

      const label = seg
        .split('-')
        .filter(Boolean)
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ');
      const link = isLast ? null : `/${segments.slice(0, i + 1).join('/')}`;
      result.push({ label, link });
    }

    return result;
  }, [location?.pathname, normalized]);

  const schema = useMemo(() => {
    const pathname = String(location?.pathname || '/');
    const schemaItems = [
      { name: 'Home', path: '/' },
      ...derived.map((d, idx) => {
        const isLast = idx === derived.length - 1;
        const path = d.link || (isLast ? pathname : null) || pathname;
        return { name: d.label, path };
      }),
    ];

    return generateBreadcrumbSchema({ baseUrl: BASE_URL, items: schemaItems });
  }, [derived, location?.pathname]);

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <div className="container">
        <Link to="/">Home</Link>
        {derived.map((item, index) => (
          <Fragment key={index}>
            <span>&gt;</span>
            {item.link ? (
              <Link to={item.link}>{item.label}</Link>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </Fragment>
        ))}
      </div>
    </nav>
  );
};

export default Breadcrumbs;
