import process from 'node:process'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const root = process.cwd()

const wordCount = (s) => String(s || '').trim().split(/\s+/).filter(Boolean).length

const guideWordCount = (guide) => {
  const parts = []
  parts.push(guide.title, guide.description, guide.quickAnswer)

  for (const section of guide.sections || []) {
    parts.push(
      section.heading,
      ...(section.paragraphs || []),
      ...(section.steps || []),
      ...(section.checklist || []),
      ...(section.bullets || [])
    )
  }

  for (const ex of guide.examples || []) {
    parts.push(ex.title, ex.text)
  }

  for (const faq of guide.faqs || []) {
    parts.push(faq.q, faq.a)
  }

  return wordCount(parts.join(' '))
}

const validateGuide = (guide) => {
  const errors = []

  if (!guide?.slug) errors.push('Missing slug')
  if (!guide?.title) errors.push('Missing title')
  if (!guide?.description) errors.push('Missing description')
  if (!guide?.canonicalPath) errors.push('Missing canonicalPath')
  if (!guide?.quickAnswer) errors.push('Missing quickAnswer')

  const sections = Array.isArray(guide?.sections) ? guide.sections : []
  if (sections.length < 6) errors.push(`Sections too few (found ${sections.length})`)

  const requiredSectionIds = ['triage', 'denial-letter', 'workflow', 'evidence', 'escalation', 'mistakes']
  for (const id of requiredSectionIds) {
    if (!sections.some((s) => s?.id === id)) errors.push(`Missing required section id: ${id}`)
  }

  const examplesCount = Array.isArray(guide?.examples) ? guide.examples.length : 0
  if (examplesCount < 2) errors.push(`Must include 2 scenarios/examples (found ${examplesCount})`)

  const faqCount = Array.isArray(guide?.faqs) ? guide.faqs.length : 0
  if (faqCount < 5) errors.push(`FAQ must have at least 5 Q/A (found ${faqCount})`)

  const wc = guideWordCount(guide)
  if (wc < 1200) errors.push(`Word count too low: ${wc} (min 1200)`) 
  if (wc > 1800) errors.push(`Word count too high: ${wc} (max 1800)`) 

  const linksCount = Array.isArray(guide?.relatedStateLinks) ? guide.relatedStateLinks.length : 0
  if (linksCount < 3 || linksCount > 5) errors.push(`relatedStateLinks must be 3–5 (found ${linksCount})`)

  return errors
}

const registryUrl = pathToFileURL(path.join(root, 'src', 'guides', 'registry.js')).href
const { GUIDES } = await import(registryUrl)

const failures = []

for (const guide of GUIDES) {
  const errs = validateGuide(guide)
  if (errs.length) failures.push({ slug: guide?.slug, errs })
}

if (failures.length) {
  console.error(`\nGuide validation failed: ${failures.length} guide(s) invalid.\n`)
  for (const f of failures) {
    console.error(`${f.slug || '(missing slug)'}`)
    for (const e of f.errs) console.error(`  - ${e}`)
    console.error('')
  }
  process.exit(1)
}

console.log(`Guides validation passed for ${GUIDES.length} guides.`)

