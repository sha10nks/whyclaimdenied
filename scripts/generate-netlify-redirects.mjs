import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, '..');
const redirectsPath = path.resolve(projectRoot, 'public', '_redirects');

const canonicalDomainRedirects = [
  'http://whyclaimdenied.com/* https://whyclaimdenied.com/:splat 301!',
  'http://www.whyclaimdenied.com/* https://whyclaimdenied.com/:splat 301!',
  'https://www.whyclaimdenied.com/* https://whyclaimdenied.com/:splat 301!',
];

const routeRewrites = [
  '/Blog /blog 301!',
  '/Blog/* /blog/:splat 301!',
  '/BLOG /blog 301!',
  '/BLOG/* /blog/:splat 301!',
  '/Guides /guides 301!',
  '/Guides/* /guides/:splat 301!',
  '/GUIDES /guides 301!',
  '/GUIDES/* /guides/:splat 301!',
  '/Tools /tools 301!',
  '/Tools/* /tools/:splat 301!',
  '/TOOLS /tools 301!',
  '/TOOLS/* /tools/:splat 301!',
  '/(.+)/ /$1 301!',
  // Canonicalize New York to new-york
  '/blog/newyork /blog/new-york 301!',
  '/blog/newyork/* /blog/new-york/:splat 301!',
];

const output = [...canonicalDomainRedirects, '', ...routeRewrites, '', '/* /404.html 404', ''].join('\n');

await fs.writeFile(redirectsPath, output, 'utf8');
