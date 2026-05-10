import { DENIAL_PAGES } from '../src/denials/registry.js'
import { BASE_URL } from '../src/seo/meta.js'

const words = (value) => {
  const s = Array.isArray(value) ? value.join(' ') : String(value || '')
  return s.trim().split(/\s+/).filter(Boolean).length
}

const pageWordCount = (p) => {
  return (
    words(p.intro) +
    words(p.why) +
    words(p.stateContext) +
    words(p.checklist) +
    words(p.steps) +
    words(p.mistakes) +
    words((p.faq || []).map((x) => `${x.q} ${x.a}`))
  )
}

const main = () => {
  const errors = []

  for (const p of DENIAL_PAGES) {
    const key = `${p.domain}:${p.stateSlug}:${p.reasonKey}`

    if (!p.canonicalUrl || !p.canonicalUrl.startsWith(BASE_URL)) errors.push(`${key}: invalid canonicalUrl`)
    if (p.canonicalUrl && /www\./i.test(p.canonicalUrl)) errors.push(`${key}: canonicalUrl must be non-www`)
    if (!p.metaTitle || String(p.metaTitle).trim().length < 20) errors.push(`${key}: short metaTitle`)
    if (!p.metaDescription || String(p.metaDescription).trim().length < 90) errors.push(`${key}: short metaDescription`)
    if (!p.h1 || String(p.h1).trim().length < 10) errors.push(`${key}: missing h1`)
    if (!Array.isArray(p.intro) || p.intro.length < 2) errors.push(`${key}: intro too short`)
    if (!Array.isArray(p.why) || p.why.length < 2) errors.push(`${key}: why too short`)
    if (!Array.isArray(p.checklist) || p.checklist.length < 6) errors.push(`${key}: checklist too short`)
    if (!Array.isArray(p.steps) || p.steps.length < 6) errors.push(`${key}: steps too short`)
    if (!Array.isArray(p.mistakes) || p.mistakes.length < 5) errors.push(`${key}: mistakes too short`)
    if (!Array.isArray(p.faq) || p.faq.length < 5) errors.push(`${key}: faq too short`)
    if (!Array.isArray(p.internalLinks) || p.internalLinks.length < 3) errors.push(`${key}: internalLinks too short`)
    if (!Array.isArray(p.stateContext) || p.stateContext.length < 2) errors.push(`${key}: missing stateContext`)
    if (!p.regulatorName || String(p.regulatorName).trim().length < 6) errors.push(`${key}: missing regulatorName`)

    const wc = pageWordCount(p)
    if (wc < 420) errors.push(`${key}: word count too low (${wc})`)
  }

  if (errors.length) {
    const msg = errors.map((e) => `- ${e}`).join('\n')
    throw new Error(`Denial validation failed:\n${msg}`)
  }

  console.log(`Denial validation passed: ${DENIAL_PAGES.length} pages.`)
}

main()
