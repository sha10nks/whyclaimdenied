import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { pathToFileURL } from 'node:url'

const root = process.cwd()
const pagesDir = path.join(root, 'src', 'pages')

const globFiles = async (dir) => {
  const out = []
  const walk = async (d) => {
    const entries = await fs.readdir(d, { withFileTypes: true })
    for (const e of entries) {
      const p = path.join(d, e.name)
      if (e.isDirectory()) await walk(p)
      else out.push(p)
    }
  }
  await walk(dir)
  return out
}

const isDenialReasonPage = (file) => {
  const base = path.basename(file)
  if (!base.endsWith('.jsx')) return false
  if (!base.startsWith('AutoClaimDenied') && !base.startsWith('HealthClaimDenied')) return false

  const pillars = new Set([
    'AutoClaimDeniedCalifornia.jsx',
    'AutoClaimDeniedFlorida.jsx',
    'AutoClaimDeniedTexas.jsx',
    'AutoClaimDeniedNewYork.jsx',
    'AutoClaimDeniedPennsylvania.jsx',
    'AutoClaimDeniedIllinois.jsx',
    'HealthClaimDeniedCalifornia.jsx',
    'HealthClaimDeniedFlorida.jsx',
    'HealthClaimDeniedTexas.jsx',
    'HealthClaimDeniedNewYork.jsx',
    'HealthClaimDeniedPennsylvania.jsx',
    'HealthClaimDeniedIllinois.jsx',
  ])

  return !pillars.has(base)
}

const extractParams = (source) => {
  const stateMatch = source.match(/stateSlug:\s*'([^']+)'/)
  const reasonMatch = source.match(/reasonKey:\s*'([^']+)'/)
  const domainMatch = source.match(/domain:\s*'([^']+)'/)

  if (!stateMatch || !reasonMatch || !domainMatch) return null
  return { stateSlug: stateMatch[1], reasonKey: reasonMatch[1], domain: domainMatch[1] }
}

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
const { getDenialPage } = await import(registryUrl)

const files = (await globFiles(pagesDir)).filter(isDenialReasonPage)

const failures = []
const skipped = []

for (const file of files) {
  const src = await fs.readFile(file, 'utf8')
  const params = extractParams(src)
  if (!params) {
    skipped.push(path.relative(root, file))
    continue
  }

  const page = getDenialPage(params)
  const errs = validatePageData({ page, pathLabel: path.relative(root, file) })
  if (errs.length) failures.push(errs.join('\n'))
}

if (skipped.length) {
  console.log(`Skipped ${skipped.length} denial reason pages not yet on structured registry.`)
}

if (failures.length) {
  console.error(`\nContent validation failed: ${failures.length} page(s) invalid.\n`)
  for (const f of failures) console.error(f + '\n')
  process.exit(1)
}

console.log(`Content validation passed for ${files.length - skipped.length} denial reason pages.`)

