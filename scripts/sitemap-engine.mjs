import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { META, BASE_URL } from '../src/seo/meta.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname, '..')
const publicDir = path.resolve(projectRoot, 'public')

const ISO = () => new Date().toISOString().replace(/\.\d{3}Z$/, '+00:00')

const isCanonical = (url) => {
  try {
    const u = new URL(url)
    if (u.origin !== BASE_URL) return false
    if (u.search || u.hash) return false
    const p = u.pathname
    if (/[A-Z]/.test(p)) return false
    return true
  } catch { return false }
}

const kebabOk = (slug) => /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)

const pathSlugsOk = (p) => p.split('/').filter(Boolean).every(kebabOk)

const fetchStatus = async (url) => {
  const controller = new AbortController()
  const t = setTimeout(() => controller.abort(), 5000)
  try {
    const res = await fetch(url, { method: 'HEAD', signal: controller.signal })
    clearTimeout(t)
    return res.status
  } catch {
    clearTimeout(t)
    return 0
  }
}

const readExisting = async (sitemapPath) => {
  try {
    const xml = await fs.readFile(sitemapPath, 'utf8')
    const urls = Array.from(xml.matchAll(/<loc>\s*([^<]+)\s*<\/loc>/g)).map(m => m[1])
    const lastmods = new Map()
    for (const m of xml.matchAll(/<url>\s*<loc>\s*([^<]+)\s*<\/loc>[\s\S]*?<lastmod>([^<]+)<\/lastmod>[\s\S]*?<\/url>/g)) {
      lastmods.set(m[1], m[2])
    }
    return { urls: new Set(urls), lastmods }
  } catch { return { urls: new Set(), lastmods: new Map() } }
}

const formatUrlEntry = (loc, lastmod) => {
  return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`
}

const writeSitemap = async (urls, targetPath) => {
  const header = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
  const body = urls.map(u => formatUrlEntry(u.loc, u.lastmod)).join('\n')
  const xml = `${header}\n${body}\n</urlset>\n`
  await fs.writeFile(targetPath, xml, 'utf8')
}

const buildOrder = (canonicals) => {
  const byPath = canonicals.map(c => new URL(c).pathname)
  const set = new Set(byPath)
  const orderRoots = ['/', '/about', '/contact', '/privacy', '/terms']
  const roots = orderRoots.filter(p => set.has(p))

  const autoHubs = byPath.filter(p => /^\/auto-insurance-claims-denied-[a-z-]+$/.test(p)).sort()
  const healthHubs = byPath.filter(p => /^\/health-insurance-claims-denied-[a-z-]+$/.test(p)).sort()
  const autoReasons = byPath.filter(p => /^\/auto-insurance-claims-denied-[a-z-]+\//.test(p)).sort()
  const healthReasons = byPath.filter(p => /^\/health-insurance-claims-denied-[a-z-]+\//.test(p)).sort()
  return [...roots, ...autoHubs, ...healthHubs, ...autoReasons, ...healthReasons]
}

const main = async () => {
  const existing = await readExisting(path.resolve(publicDir, 'sitemap.xml'))
  const fromMeta = Object.values(META).map(m => m?.canonical).filter(Boolean)
  const canonicals = Array.from(new Set(fromMeta)).filter(isCanonical)
  const validated = []
  for (const loc of canonicals) {
    const p = new URL(loc).pathname
    if (!pathSlugsOk(p)) continue
    const status = await fetchStatus(loc)
    if (status === 200) validated.push(loc)
  }
  const ordered = buildOrder(validated)
  const entries = ordered.map(loc => ({ loc, lastmod: existing.lastmods.get(loc) || ISO() }))

  // split/index safeguards (unlikely needed now)
  const MAX = 50000
  if (entries.length > 40000) {
    const indexHeader = '<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
    const children = [
      { name: 'sitemaps/root.xml', list: entries.filter(e => ['/', '/about', '/contact', '/privacy', '/terms'].includes(new URL(e.loc).pathname)) },
      { name: 'sitemaps/states.xml', list: entries.filter(e => /^\/(auto|health)-insurance-claims-denied-[a-z-]+$/.test(new URL(e.loc).pathname)) },
      { name: 'sitemaps/auto.xml', list: entries.filter(e => /^\/auto-insurance-claims-denied-[a-z-]+\//.test(new URL(e.loc).pathname)) },
      { name: 'sitemaps/health.xml', list: entries.filter(e => /^\/health-insurance-claims-denied-[a-z-]+\//.test(new URL(e.loc).pathname)) },
    ]
    // write children
    await fs.mkdir(path.resolve(publicDir, 'sitemaps'), { recursive: true })
    for (const c of children) await writeSitemap(c.list, path.resolve(publicDir, c.name))
    const indexBody = children.map(c => `  <sitemap>\n    <loc>${BASE_URL}/${c.name}</loc>\n    <lastmod>${ISO()}</lastmod>\n  </sitemap>`).join('\n')
    const indexXml = `${indexHeader}\n${indexBody}\n</sitemapindex>\n`
    await fs.writeFile(path.resolve(publicDir, 'sitemap-index.xml'), indexXml, 'utf8')
  } else {
    await writeSitemap(entries, path.resolve(publicDir, 'sitemap.xml'))
  }
  console.log('Sitemap generation complete.')
}

await main()
