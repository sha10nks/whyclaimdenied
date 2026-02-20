import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

const args = process.argv.slice(2)
const getArg = (name) => {
  const idx = args.indexOf(name)
  if (idx === -1) return null
  return args[idx + 1] || null
}

const state = getArg('--state')
const label = getArg('--label')

if (!state || !label) {
  console.error('Usage: npm run blog:add-state -- --state <stateSlug> --label "State Label"')
  process.exit(1)
}

const stateSlug = String(state).trim().toLowerCase()
const stateLabel = String(label).trim()

const root = process.cwd()
const postsDir = path.join(root, 'src', 'blog', 'posts', stateSlug)
await fs.mkdir(postsDir, { recursive: true })

const templates = [
  { slug: 'why-auto-claims-denied', factory: 'createWhyAutoDeniedPost' },
  { slug: 'how-appeal-auto-claim', factory: 'createHowAppealAutoPost' },
  { slug: 'case-auto-success', factory: 'createCaseAutoSuccessPost' },
  { slug: 'why-health-claims-denied', factory: 'createWhyHealthDeniedPost' },
  { slug: 'how-appeal-health-claim', factory: 'createHowAppealHealthPost' },
  { slug: 'case-health-success', factory: 'createCaseHealthSuccessPost' },
]

for (const t of templates) {
  const filePath = path.join(postsDir, `${t.slug}.js`)
  const content = [
    `import { ${t.factory} } from '../../postFactories.js'`,
    '',
    `export const post = ${t.factory}({ stateSlug: '${stateSlug}', stateLabel: '${stateLabel}' })`,
    '',
  ].join('\n')
  await fs.writeFile(filePath, content, 'utf8')
}

const registryPath = path.join(root, 'src', 'blog', 'registry.js')
let registry = await fs.readFile(registryPath, 'utf8')

const stateEntry = `{ slug: '${stateSlug}', label: '${stateLabel}' },`
if (!registry.includes(stateEntry) && !registry.includes(`slug: '${stateSlug}'`)) {
  registry = registry.replace(
    /export const BLOG_STATES = \[[\s\S]*?\];/m,
    (match) => {
      return match.replace(/\n\];\s*$/m, `\n  ${stateEntry}\n];`)
    },
  )
}

const today = new Date().toISOString().slice(0, 10)
const makePostEntry = ({ type, slug, title, description, readingTime }) => {
  return [
    '  {',
    `    type: '${type}',`,
    `    state: '${stateSlug}',`,
    `    slug: '${slug}',`,
    `    title: '${title}',`,
    `    description: '${description}',`,
    `    date: '${today}',`,
    `    readingTime: '${readingTime}',`,
    `    path: '/blog/${stateSlug}/${slug}',`,
    `    canonicalUrl: \`\${BASE_URL}/blog/${stateSlug}/${slug}\`,`,
    `    internalLinks: [\`\${BASE_URL}/blog/${stateSlug}\`, \`\${BASE_URL}/auto-insurance-claims-denied-${stateSlug}\`, \`\${BASE_URL}/health-insurance-claims-denied-${stateSlug}\`],`,
    `    module: './posts/${stateSlug}/${slug}.js',`,
    '  },',
  ].join('\n')
}

const entries = [
  makePostEntry({
    type: 'auto',
    slug: 'why-auto-claims-denied',
    title: `Why Auto Insurance Claims Get Denied in ${stateLabel}`,
    description: `Common ${stateLabel} auto denial reasons and what to do next.`,
    readingTime: '12 min',
  }),
  makePostEntry({
    type: 'auto',
    slug: 'how-appeal-auto-claim',
    title: `How to Appeal a Denied Auto Insurance Claim in ${stateLabel}`,
    description: `A step-by-step ${stateLabel} auto appeal checklist and evidence guide.`,
    readingTime: '14 min',
  }),
  makePostEntry({
    type: 'case-auto',
    slug: 'case-auto-success',
    title: `${stateLabel} Auto Claim Appeal Success Story`,
    description: `A case-style example of overturning an auto claim denial in ${stateLabel}.`,
    readingTime: '10 min',
  }),
  makePostEntry({
    type: 'health',
    slug: 'why-health-claims-denied',
    title: `Why Health Insurance Claims Get Denied in ${stateLabel}`,
    description: `Common ${stateLabel} health denial patterns and what to do next.`,
    readingTime: '14 min',
  }),
  makePostEntry({
    type: 'health',
    slug: 'how-appeal-health-claim',
    title: `How to Appeal a Denied Health Insurance Claim in ${stateLabel}`,
    description: `How to build a stronger ${stateLabel} health appeal with criteria-based documentation.`,
    readingTime: '16 min',
  }),
  makePostEntry({
    type: 'case-health',
    slug: 'case-health-success',
    title: `${stateLabel} Health Claim Appeal Success Story`,
    description: `A case-style example of appealing a ${stateLabel} health denial successfully.`,
    readingTime: '11 min',
  }),
].join('\n\n')

if (!registry.includes(`state: '${stateSlug}'`) && !registry.includes(`/blog/${stateSlug}/`)) {
  registry = registry.replace(
    /export const BLOG_POSTS = \[[\s\S]*?\n\];/m,
    (match) => {
      return match.replace(/\n\];\s*$/m, `\n\n  // ${stateLabel}\n${entries}\n];`)
    },
  )
}

await fs.writeFile(registryPath, registry, 'utf8')

console.log(`Added blog state: ${stateLabel} (${stateSlug})`) 

