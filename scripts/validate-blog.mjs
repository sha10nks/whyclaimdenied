import path from 'node:path'
import process from 'node:process'
import { pathToFileURL } from 'node:url'

const root = process.cwd()
const registryUrl = pathToFileURL(path.join(root, 'src', 'blog', 'registry.js')).href
const { BLOG_POSTS } = await import(registryUrl)

const isCasePost = (type) => String(type || '').includes('case')

const wordCount = (value) => {
  const text = String(value || '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
  if (!text) return 0
  return text.split(' ').length
}

const countWordsInPost = (post) => {
  let total = 0
  total += wordCount(post.title)
  total += wordCount(post.description)
  total += wordCount(post.heroSummary)
  total += (post.takeaways || []).reduce((acc, s) => acc + wordCount(s), 0)
  total += (post.stateMeaning || []).reduce((acc, s) => acc + wordCount(s), 0)
  total += (post.steps || []).reduce((acc, s) => acc + wordCount(s), 0)
  total += (post.insurerRequests || []).reduce((acc, s) => acc + wordCount(s), 0)
  total += (post.commonDenialReasons || []).reduce((acc, r) => acc + wordCount(r.title) + wordCount(r.description), 0)
  total += (post.mistakes || []).reduce((acc, s) => acc + wordCount(s), 0)
  total += (post.timeline || []).reduce((acc, s) => acc + wordCount(s), 0)
  total += (post.sampleAppealStructure || []).reduce((acc, s) => acc + wordCount(s), 0)
  total += (post.faq || []).reduce((acc, qa) => acc + wordCount(qa.question) + wordCount(qa.answer), 0)
  return total
}

const validatePost = (post, meta) => {
  const errors = []

  const requiredString = [
    'stateSlug',
    'stateLabel',
    'slug',
    'type',
    'title',
    'description',
    'canonicalUrl',
    'heroSummary',
  ]
  for (const k of requiredString) {
    if (!post || typeof post[k] !== 'string' || post[k].trim().length === 0) {
      errors.push(`missing or empty \`${k}\``)
    }
  }

  const takeawaysCount = Array.isArray(post.takeaways) ? post.takeaways.length : 0
  if (takeawaysCount < 4 || takeawaysCount > 6) errors.push('Key Takeaways must be 4–6 bullets')

  const meaningCount = Array.isArray(post.stateMeaning) ? post.stateMeaning.length : 0
  if (meaningCount < 2 || meaningCount > 4) errors.push('What This Means section must be 2–4 paragraphs')

  const stepsCount = Array.isArray(post.steps) ? post.steps.length : 0
  if (stepsCount < 6 || stepsCount > 10) errors.push('Step-by-Step must be 6–10 steps')

  const reqCount = Array.isArray(post.insurerRequests) ? post.insurerRequests.length : 0
  if (reqCount < 5) errors.push('What to Request From the Insurer must be at least 5 items')

  const denialCount = Array.isArray(post.commonDenialReasons) ? post.commonDenialReasons.length : 0
  if (denialCount < 5 || denialCount > 8) errors.push('Common Denial Reasons must be 5–8 items')
  if (Array.isArray(post.commonDenialReasons)) {
    for (const r of post.commonDenialReasons) {
      if (!r || !String(r.title || '').trim() || !String(r.description || '').trim()) {
        errors.push('Common Denial Reasons items must include title + short explanation')
        break
      }
    }
  }

  const mistakesCount = Array.isArray(post.mistakes) ? post.mistakes.length : 0
  if (mistakesCount < 5 || mistakesCount > 8) errors.push('Mistakes must be 5–8 bullets')

  const timelineCount = Array.isArray(post.timeline) ? post.timeline.length : 0
  if (timelineCount < 2) errors.push('Timeline & Deadlines must include general guidance paragraphs')

  const sampleCount = Array.isArray(post.sampleAppealStructure) ? post.sampleAppealStructure.length : 0
  if (sampleCount < 6) errors.push('Sample Appeal Structure must include an outline with placeholders')

  const faqCount = Array.isArray(post.faq) ? post.faq.length : 0
  if (faqCount < 6 || faqCount > 10) errors.push('FAQ must be 6–10 Q/A')

  const internalLinks = Array.isArray(post.internalLinks) ? [...new Set(post.internalLinks)] : []
  if (internalLinks.length < 5) errors.push('Internal links must be at least 5')

  const words = countWordsInPost(post)
  if (words < 800) {
    errors.push(`Word count too low: ${words} (< 800)`)
  } else {
    const guideTargetLow = isCasePost(meta.type) ? 900 : 1200
    const guideTargetHigh = isCasePost(meta.type) ? 1400 : 2000
    if (words < guideTargetLow) errors.push(`Word count below target: ${words} (< ${guideTargetLow})`)
    if (words > guideTargetHigh) errors.push(`Word count above target: ${words} (> ${guideTargetHigh})`)
  }

  if (!String(post.canonicalUrl || '').startsWith('https://whyclaimdenied.com/blog/')) {
    errors.push('canonicalUrl must be an absolute blog URL')
  }

  if (post.path !== meta.path) errors.push('post.path must match registry path')

  return { errors, words }
}

const failures = []
for (const meta of BLOG_POSTS) {
  const moduleKey = meta.module
  const moduleRel = String(moduleKey || '')
  const modulePath = moduleRel.startsWith('./') ? moduleRel.slice(2) : moduleRel
  const moduleAbs = path.join(root, 'src', 'blog', modulePath)
  const modUrl = pathToFileURL(moduleAbs).href

  let post
  try {
    const mod = await import(modUrl)
    post = mod?.post
  } catch (e) {
    failures.push({ meta, errors: [`failed to import module: ${moduleKey}`, String(e?.message || e)] })
    continue
  }

  const { errors, words } = validatePost(post, meta)
  if (errors.length) failures.push({ meta, errors, words })
}

if (failures.length) {
  console.error(`\nBlog validation failed: ${failures.length} invalid post(s).\n`)
  for (const f of failures) {
    console.error(`- ${f.meta.path} (${f.meta.type})`)
    if (typeof f.words === 'number') {
      console.error(`  words: ${f.words}`)
    }
    for (const err of f.errors) {
      console.error(`  - ${err}`)
    }
  }
  console.error('')
  process.exit(1)
}

console.log(`Blog validation passed: ${BLOG_POSTS.length} posts.`)
