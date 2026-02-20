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
const slug = getArg('--slug')
const type = getArg('--type')
const label = getArg('--label')

if (!state || !slug || !type || !label) {
  console.error('Usage: npm run blog:add-post -- --state <stateSlug> --slug <slug> --type <auto|health|case-auto|case-health> --label "State Label"')
  process.exit(1)
}

const stateSlug = String(state).trim().toLowerCase()
const stateLabel = String(label).trim()
const postSlug = String(slug).trim().toLowerCase()
const postType = String(type).trim().toLowerCase()

const factoryByType = {
  'auto': { factory: 'createWhyAutoDeniedPost', title: `Why Auto Insurance Claims Get Denied in ${stateLabel}`, description: `Common ${stateLabel} auto denial reasons and what to do next.`, readingTime: '12 min' },
  'health': { factory: 'createWhyHealthDeniedPost', title: `Why Health Insurance Claims Get Denied in ${stateLabel}`, description: `Common ${stateLabel} health denial patterns and what to do next.`, readingTime: '14 min' },
  'case-auto': { factory: 'createCaseAutoSuccessPost', title: `${stateLabel} Auto Claim Appeal Success Story`, description: `A case-style example of overturning an auto claim denial in ${stateLabel}.`, readingTime: '10 min' },
  'case-health': { factory: 'createCaseHealthSuccessPost', title: `${stateLabel} Health Claim Appeal Success Story`, description: `A case-style example of appealing a ${stateLabel} health denial successfully.`, readingTime: '11 min' },
}

const selected = factoryByType[postType]
if (!selected) {
  console.error('Invalid --type. Use auto, health, case-auto, or case-health.')
  process.exit(1)
}

const root = process.cwd()
const postsDir = path.join(root, 'src', 'blog', 'posts', stateSlug)
await fs.mkdir(postsDir, { recursive: true })

const filePath = path.join(postsDir, `${postSlug}.js`)
const content = [
  `import { ${selected.factory} } from '../../postFactories.js'`,
  '',
  `export const post = ${selected.factory}({ stateSlug: '${stateSlug}', stateLabel: '${stateLabel}' })`,
  '',
].join('\n')
await fs.writeFile(filePath, content, 'utf8')

const registryPath = path.join(root, 'src', 'blog', 'registry.js')
let registry = await fs.readFile(registryPath, 'utf8')

if (!registry.includes(`{ slug: '${stateSlug}',`)) {
  registry = registry.replace(
    /export const BLOG_STATES = \[[\s\S]*?\];/m,
    (match) => match.replace(/\n\];\s*$/m, `\n  { slug: '${stateSlug}', label: '${stateLabel}' },\n];`),
  )
}

const today = new Date().toISOString().slice(0, 10)

const entry = [
  '  {',
  `    type: '${postType}',`,
  `    state: '${stateSlug}',`,
  `    slug: '${postSlug}',`,
  `    title: '${selected.title}',`,
  `    description: '${selected.description}',`,
  `    date: '${today}',`,
  `    readingTime: '${selected.readingTime}',`,
  `    path: '/blog/${stateSlug}/${postSlug}',`,
  `    canonicalUrl: \`\${BASE_URL}/blog/${stateSlug}/${postSlug}\`,`,
  `    internalLinks: [\`\${BASE_URL}/blog/${stateSlug}\`, \`\${BASE_URL}/auto-insurance-claims-denied-${stateSlug}\`, \`\${BASE_URL}/health-insurance-claims-denied-${stateSlug}\`],`,
  `    module: './posts/${stateSlug}/${postSlug}.js',`,
  '  },',
].join('\n')

if (!registry.includes(`path: '/blog/${stateSlug}/${postSlug}'`)) {
  registry = registry.replace(
    /export const BLOG_POSTS = \[[\s\S]*?\n\];/m,
    (match) => match.replace(/\n\];\s*$/m, `\n\n${entry}\n];`),
  )
}

await fs.writeFile(registryPath, registry, 'utf8')

console.log(`Added blog post: /blog/${stateSlug}/${postSlug}`)

