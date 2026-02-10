import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { META } from '../src/seo/meta.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname, '..')
const sitemapPath = path.resolve(projectRoot, 'public', 'sitemap.xml')

const isoNow = new Date().toISOString().replace(/\.\d{3}Z$/, '+00:00')

const canonicalPaths = Object.values(META)
  .map(m => m?.canonical)
  .filter(Boolean)

const sitemap = await fs.readFile(sitemapPath, 'utf8')
const existing = new Set(Array.from(sitemap.matchAll(/<loc>\s*([^<]+)\s*<\/loc>/g)).map(m => m[1].trim()))

let append = ''
for (const loc of canonicalPaths) {
  if (!existing.has(loc)) {
    append += `\n<url>\n  <loc>${loc}</loc>\n  <lastmod>${isoNow}</lastmod>\n</url>\n`
  }
}

if (append) {
  const updated = sitemap.replace(/\s*<\/urlset>\s*$/i, `${append}</urlset>`)
  await fs.writeFile(sitemapPath, updated, 'utf8')
  console.log('Sitemap updated.')
} else {
  console.log('Sitemap already up to date.')
}
