import { useNavigate } from 'react-router-dom';

const CANONICAL_ORIGIN = 'https://whyclaimdenied.com';

const isAbsoluteUrl = (value) => /^https?:\/\//i.test(value);

const normalizeInternalPath = (value) => {
  if (!value) return '/';
  if (value.startsWith('/')) return value;
  return `/${value}`;
};

const toCanonicalHref = (to) => {
  if (typeof to !== 'string') return CANONICAL_ORIGIN;
  if (to.startsWith('#') || to.startsWith('mailto:') || to.startsWith('tel:')) return to;
  if (isAbsoluteUrl(to)) return to;
  return `${CANONICAL_ORIGIN}${normalizeInternalPath(to)}`;
};

const shouldClientNavigate = (event, target) => {
  if (event.defaultPrevented) return false;
  if (event.button !== 0) return false;
  if (target && target !== '_self') return false;
  if (event.metaKey || event.altKey || event.ctrlKey || event.shiftKey) return false;
  return true;
};

export const Link = ({ to, onClick, target, rel, ...props }) => {
  const navigate = useNavigate();
  const href = toCanonicalHref(to);
  const isInternal = typeof href === 'string' && href.startsWith(CANONICAL_ORIGIN);

  const handleClick = (event) => {
    onClick?.(event);
    if (!isInternal) return;
    if (!shouldClientNavigate(event, target)) return;

    event.preventDefault();
    const url = new URL(href);
    navigate(`${url.pathname}${url.search}${url.hash}`);
  };

  const finalRel = target === '_blank' ? rel || 'noopener noreferrer' : rel;

  return <a {...props} href={href} onClick={handleClick} target={target} rel={finalRel} />;
};

export default Link;
