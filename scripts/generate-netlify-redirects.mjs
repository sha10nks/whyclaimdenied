import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { META } from '../src/seo/meta.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, '..');
const redirectsPath = path.resolve(projectRoot, 'public', '_redirects');

const extraRoutes = ['/', '/about', '/contact', '/privacy', '/terms', '/blog'];

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

import { BLOG_POSTS, BLOG_STATES } from '../src/blog/registry.js'

const canonicalPaths = Object.values(META)
  .map((m) => m?.canonical)
  .filter(Boolean)
  .map((canonical) => new URL(canonical).pathname);

// Add blog state roots and post paths explicitly
const blogStateRoots = BLOG_STATES.map((s) => `/blog/${s.slug}`);
const blogPostPaths = BLOG_POSTS.map((p) => new URL(p.canonicalUrl || p.path, 'https://whyclaimdenied.com').pathname);

const routes = Array.from(new Set([...extraRoutes, ...canonicalPaths, ...blogStateRoots, ...blogPostPaths]))
  .filter((p) => p.startsWith('/'))
  .sort((a, b) => a.localeCompare(b));

const routeRewrites = [
  // Canonicalize New York to new-york
  '/blog/newyork /blog/new-york 301!',
  '/blog/newyork/* /blog/new-york/:splat 301!',
  // Catch-all blog SPA rewrite
  '/blog/* /index.html 200',
  '/blog /index.html 200',
  // Explicit known routes
  ...routes.map((p) => `${p} /index.html 200`),
];

const output = [...adsTxtRedirects, '', ...canonicalDomainRedirects, '', ...routeRewrites, '', '/* /404.html 404', ''].join('\n');

await fs.writeFile(redirectsPath, output, 'utf8');
