import { BASE_URL, META } from './meta.js'
import { GUIDES } from '../guides/registry.js'
import { DENIAL_PAGES } from '../denials/registry.js'
import { BLOG_POSTS, BLOG_STATES } from '../blog/registry.js'

const toPathname = (canonical) => {
  if (!canonical) return null
  try {
    const u = new URL(String(canonical))
    if (u.origin !== BASE_URL) return null
    if (u.search || u.hash) return null
    return u.pathname
  } catch {
    return null
  }
}

export const getCanonicalPathnames = () => {
  const urls = []

  for (const m of Object.values(META)) {
    if (m?.canonical) urls.push(m.canonical)
  }

  for (const g of GUIDES) {
    urls.push(`${BASE_URL}${g.canonicalPath}`)
  }

  for (const p of DENIAL_PAGES) {
    if (p?.canonicalUrl) urls.push(p.canonicalUrl)
    if (p?.pillarPath) urls.push(`${BASE_URL}${p.pillarPath}`)
  }

  urls.push(`${BASE_URL}/blog`)
  for (const s of BLOG_STATES) urls.push(`${BASE_URL}/blog/${s.slug}`)
  for (const p of BLOG_POSTS) urls.push(p.canonicalUrl || `${BASE_URL}${p.path}`)

  const unique = Array.from(new Set(urls.map(toPathname).filter(Boolean)))
  return unique.sort((a, b) => a.localeCompare(b))
}

export const getCanonicalUrls = () => {
  return getCanonicalPathnames().map((p) => `${BASE_URL}${p}`)
}
