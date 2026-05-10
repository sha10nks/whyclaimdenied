import { BASE_URL, META } from '../src/seo/meta.js'
import { DENIAL_PAGES } from '../src/denials/registry.js'
import { BLOG_POSTS } from '../src/blog/registry.js'
import { GUIDES } from '../src/guides/registry.js'

const normalizeCanonical = (value) => {
  if (!value) return null
  try {
    const u = new URL(String(value))
    if (u.search || u.hash) return null
    if (u.origin !== BASE_URL) return null
    const p = u.pathname
    if (p !== '/' && p.endsWith('/')) return null
    return u.toString()
  } catch {
    return null
  }
}

const die = (errors) => {
  if (!errors.length) return
  const msg = errors.map((e) => `- ${e}`).join('\n')
  throw new Error(`SEO validation failed:\n${msg}`)
}

const validateCollection = (label, entries, { minTitle = 12, minDescription = 60 } = {}) => {
  const errors = []
  const canonicals = new Map()

  for (const e of entries) {
    const canonical = normalizeCanonical(e.canonical)
    if (!canonical) {
      errors.push(`${label}:${e.key} has invalid canonical: ${e.canonical}`)
      continue
    }

    if (!e.title || String(e.title).trim().length < minTitle) errors.push(`${label}:${e.key} missing/short title`)
    if (!e.description || String(e.description).trim().length < minDescription) errors.push(`${label}:${e.key} missing/short description`)

    canonicals.set(canonical, (canonicals.get(canonical) || []).concat(e.key))
  }

  for (const [canonical, owners] of canonicals.entries()) {
    if (owners.length > 1) errors.push(`${label} duplicate canonical ${canonical}: ${owners.join(', ')}`)
  }

  return errors
}

const main = () => {
  const errors = []

  const metaEntries = Object.entries(META).map(([key, m]) => ({ key, canonical: m?.canonical, title: m?.title, description: m?.description }))
  errors.push(...validateCollection('meta', metaEntries, { minDescription: 60 }))

  const guideEntries = GUIDES.map((g) => ({ key: g.slug, canonical: `${BASE_URL}${g.canonicalPath}`, title: `${g.title} | WhyClaimDenied`, description: g.description }))
  errors.push(...validateCollection('guides', guideEntries, { minDescription: 60 }))

  const denialEntries = DENIAL_PAGES.map((p) => ({ key: `${p.domain}:${p.stateSlug}:${p.reasonKey}`, canonical: p.canonicalUrl, title: p.metaTitle, description: p.metaDescription }))
  errors.push(...validateCollection('denials', denialEntries, { minDescription: 60 }))

  const blogEntries = BLOG_POSTS.map((p) => {
    const stateSlug = p.stateSlug || p.state || p.state_code || 'unknown'
    return ({ key: `post:${stateSlug}:${p.slug}`, canonical: p.canonicalUrl || `${BASE_URL}${p.path}`, title: p.metaTitle || p.title, description: p.metaDescription || p.description })
  })
  errors.push(...validateCollection('blog', blogEntries, { minDescription: 20 }))

  const homeCanonical = normalizeCanonical(META?.home?.canonical)
  if (homeCanonical !== `${BASE_URL}/`) errors.push(`META.home.canonical must be ${BASE_URL}/ (got ${META?.home?.canonical})`)

  die(errors)
}

main()
