import process from 'node:process'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const root = process.cwd()

const wordCount = (s) => String(s || '').trim().split(/\s+/).filter(Boolean).length

const validatePageData = ({ page, pathLabel }) => {
  const errors = []

  if (!page) {
    errors.push('Missing registry page data')
    return errors
  }

  const introCount = Array.isArray(page.intro) ? page.intro.length : 0
  if (introCount < 2) errors.push('Intro must contain at least 2 paragraphs')
  if (introCount > 0 && wordCount(page.intro[0]) < 30) errors.push('Intro first paragraph is too short')

  const checklistCount = Array.isArray(page.checklist) ? page.checklist.length : 0
  if (checklistCount < 8) errors.push(`Checklist must have at least 8 bullets (found ${checklistCount})`)

  const stepsCount = Array.isArray(page.steps) ? page.steps.length : 0
  if (stepsCount < 8) errors.push(`Steps must have at least 8 numbered items (found ${stepsCount})`)

  const mistakesCount = Array.isArray(page.mistakes) ? page.mistakes.length : 0
  if (mistakesCount < 6) errors.push(`Mistakes must have at least 6 items (found ${mistakesCount})`)

  const faqCount = Array.isArray(page.faq) ? page.faq.length : 0
  if (faqCount < 6) errors.push(`FAQ must have at least 6 Q/A (found ${faqCount})`)

  const linksCount = Array.isArray(page.internalLinks) ? page.internalLinks.length : 0
  if (linksCount < 5) errors.push(`Internal links must be at least 5 (found ${linksCount})`)

  if (errors.length) {
    return [`${pathLabel}`, ...errors.map((e) => `  - ${e}`)]
  }
  return []
}

const registryUrl = pathToFileURL(path.join(root, 'src', 'denials', 'registry.js')).href
const { DENIAL_PAGES } = await import(registryUrl)

const failures = []

for (const page of DENIAL_PAGES) {
  const label = `src/denials/registry.js:${page.domain}:${page.stateSlug}:${page.reasonKey}`
  const errs = validatePageData({ page, pathLabel: label })
  if (errs.length) failures.push(errs.join('\n'))
}

if (failures.length) {
  console.error(`\nContent validation failed: ${failures.length} page(s) invalid.\n`)
  for (const f of failures) console.error(f + '\n')
  process.exit(1)
}

console.log(`Content validation passed for ${DENIAL_PAGES.length} denial reason pages.`)
