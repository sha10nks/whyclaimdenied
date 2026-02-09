import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { META } from '../src/seo/meta.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const routerPath = path.resolve(projectRoot, 'src', 'router.jsx');

const routerSource = await fs.readFile(routerPath, 'utf8');
const routerRouteMatches = Array.from(routerSource.matchAll(/path:\s*"([^"]+)"/g)).map((m) => m[1]);
const routerPaths = new Set(routerRouteMatches.map((p) => (p.startsWith('/') ? p : `/${p}`)));
routerPaths.add('/');
routerPaths.add('/about');
routerPaths.add('/contact');
routerPaths.add('/privacy');
routerPaths.add('/terms');

const canonicalPaths = Object.values(META)
  .map((m) => m?.canonical)
  .filter(Boolean)
  .map((canonical) => new URL(canonical).pathname);

const homeLinks = new Set();
homeLinks.add('/');
homeLinks.add('/#guides-by-state');
homeLinks.add('/about');
homeLinks.add('/contact');
homeLinks.add('/privacy');
homeLinks.add('/terms');

canonicalPaths.forEach((p) => {
  const isAutoHub = /^\/auto-insurance-claims-denied-[a-z-]+$/.test(p);
  const isHealthHub = /^\/health-insurance-claims-denied-[a-z-]+$/.test(p);
  const isAutoReason = /^\/auto-insurance-claims-denied-[a-z-]+\/[a-z0-9-]+$/.test(p);
  const isHealthReason = /^\/health-insurance-claims-denied-[a-z-]+\/[a-z0-9-]+$/.test(p);
  if (isAutoHub || isHealthHub || isAutoReason || isHealthReason) {
    homeLinks.add(p);
  }
});

const normalize = (href) => {
  if (!href) return null;
  if (href.startsWith('http://') || href.startsWith('https://')) {
    const u = new URL(href);
    return u.pathname;
  }
  if (href.startsWith('/')) {
    return href.split('#')[0];
  }
  return null;
};

const missing = [];
for (const href of homeLinks) {
  const p = normalize(href);
  if (!p) continue;
  if (p === '/') continue;
  if (!routerPaths.has(p)) {
    missing.push(p);
  }
}

if (missing.length) {
  console.error('Homepage link audit failed. Missing routes:');
  missing.sort().forEach((p) => console.error(`- ${p}`));
  process.exitCode = 1;
} else {
  console.log(`Homepage link audit passed (${homeLinks.size} links checked).`);
}
