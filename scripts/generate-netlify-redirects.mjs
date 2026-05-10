import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, '..');
const redirectsPath = path.resolve(projectRoot, 'public', '_redirects');

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

const routeRewrites = [
  // Canonicalize New York to new-york
  '/blog/newyork /blog/new-york 301!',
  '/blog/newyork/* /blog/new-york/:splat 301!',
];

const output = [...adsTxtRedirects, '', ...canonicalDomainRedirects, '', ...routeRewrites, '', '/* /404.html 404', ''].join('\n');

await fs.writeFile(redirectsPath, output, 'utf8');
