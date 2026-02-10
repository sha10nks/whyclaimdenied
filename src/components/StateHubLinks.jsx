import { Link } from './Link';
import { META } from '../seo/meta';

const slugToLabel = (slug) =>
  slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

const buildStates = () => {
  const states = new Map();
  Object.values(META).forEach((m) => {
    if (!m?.canonical) return;
    const p = new URL(m.canonical).pathname;
    const autoMatch = p.match(/^\/auto-insurance-claims-denied-([a-z-]+)$/);
    const healthMatch = p.match(/^\/health-insurance-claims-denied-([a-z-]+)$/);
    if (autoMatch) {
      const slug = autoMatch[1];
      const entry = states.get(slug) || { name: slugToLabel(slug) };
      entry.autoPath = p;
      states.set(slug, entry);
    }
    if (healthMatch) {
      const slug = healthMatch[1];
      const entry = states.get(slug) || { name: slugToLabel(slug) };
      entry.healthPath = p;
      states.set(slug, entry);
    }
  });
  return Array.from(states.values()).filter((s) => s.autoPath && s.healthPath).sort((a, b) => a.name.localeCompare(b.name));
};

export default function StateHubLinks({ currentState }) {
  const allStates = buildStates();
  const otherStates = allStates.filter((s) => s.name.toLowerCase() !== String(currentState || '').toLowerCase());

  return (
    <section>
      <h2>Insurance Claim Denial Guides by State</h2>
      {otherStates.length === 0 ? (
        <p>No other state guides are published yet.</p>
      ) : (
        <ul>
          {otherStates.map((s) => (
            <li key={s.name}>
              <Link to={s.autoPath}>Auto Insurance Claims Denied in {s.name}</Link>
              {' · '}
              <Link to={s.healthPath}>Health Insurance Claims Denied in {s.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
