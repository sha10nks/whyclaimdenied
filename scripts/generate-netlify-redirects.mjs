import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { META } from '../src/seo/meta.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, '..');
const redirectsPath = path.resolve(projectRoot, 'public', '_redirects');

const extraRoutes = ['/', '/about', '/contact', '/privacy', '/terms'];

const ezoicAdsTxtTarget = 'https://srv.adstxtmanager.com/19390/whyclaimdenied.com';

const adsTxtRedirects = [
  `http://whyclaimdenied.com/ads.txt ${ezoicAdsTxtTarget} 301!`,
  `http://www.whyclaimdenied.com/ads.txt ${ezoicAdsTxtTarget} 301!`,
  `https://www.whyclaimdenied.com/ads.txt ${ezoicAdsTxtTarget} 301!`,
  `/ads.txt ${ezoicAdsTxtTarget} 301!`,
];

const canonicalDomainRedirects = [
  'http://whyclaimdenied.com/* https://whyclaimdenied.com/:splat 301!',
  'http://www.whyclaimdenied.com/* https://whyclaimdenied.com/:splat 301!',
  'https://www.whyclaimdenied.com/* https://whyclaimdenied.com/:splat 301!',
];

const canonicalPaths = Object.values(META)
  .map((m) => m?.canonical)
  .filter(Boolean)
  .map((canonical) => new URL(canonical).pathname);

const routes = Array.from(new Set([...extraRoutes, ...canonicalPaths]))
  .filter((p) => p.startsWith('/'))
  .sort((a, b) => a.localeCompare(b));

const routeRewrites = routes.map((p) => `${p} /index.html 200`);

const output = [...adsTxtRedirects, '', ...canonicalDomainRedirects, '', ...routeRewrites, '', '/* /404.html 404', ''].join('\n');

await fs.writeFile(redirectsPath, output, 'utf8');
