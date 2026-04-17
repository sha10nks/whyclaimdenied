import fs from 'fs/promises'
import path from 'path'

const STATES = [
  { slug: 'california', label: 'California', pascal: 'California' },
  { slug: 'florida', label: 'Florida', pascal: 'Florida' },
  { slug: 'texas', label: 'Texas', pascal: 'Texas' },
  { slug: 'new-york', label: 'New York', pascal: 'NewYork' },
  { slug: 'pennsylvania', label: 'Pennsylvania', pascal: 'Pennsylvania' },
  { slug: 'illinois', label: 'Illinois', pascal: 'Illinois' },
  { slug: 'ohio', label: 'Ohio', pascal: 'Ohio' },
  { slug: 'georgia', label: 'Georgia', pascal: 'Georgia' },
  { slug: 'north-carolina', label: 'North Carolina', pascal: 'NorthCarolina' },
  { slug: 'michigan', label: 'Michigan', pascal: 'Michigan' },
  { slug: 'new-jersey', label: 'New Jersey', pascal: 'NewJersey' },
  { slug: 'virginia', label: 'Virginia', pascal: 'Virginia' },
]

const ensureImport = (content) => {
  if (content.includes("../components/StateHeroImage")) return content

  const anchor = /import\s+\{\s*generateArticleSchema\s*,\s*generateFAQSchema\s*\}\s+from\s+['"]\.\.\/seo\/schema['"];?\s*\n/
  if (anchor.test(content)) {
    return content.replace(anchor, (m) => `${m}import StateHeroImage from '../components/StateHeroImage'\n`)
  }

  const lines = content.split('\n')
  let lastImportIdx = -1
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('import ')) lastImportIdx = i
  }
  if (lastImportIdx >= 0) {
    lines.splice(lastImportIdx + 1, 0, "import StateHeroImage from '../components/StateHeroImage'")
    return lines.join('\n')
  }
  return content
}

const removeRemoteHeroUrl = (content) => {
  return content.replace(/\n\s*const\s+heroImageUrl\s*=\s*[\s\S]*?;\s*\n/gi, '\n')
}

const replaceHeroBlock = ({ content, stateSlug, domain, label }) => {
  const alt = `${domain === 'auto' ? 'Auto' : 'Health'} Insurance Claims Denied in ${label}`
  const hero = `        <StateHeroImage stateSlug="${stateSlug}" domain="${domain}" alt="${alt}" />`
  return content.replace(/\n\s*<div\s+className=\"state-hero-image-wrapper\">[\s\S]*?<\/div>\s*\n/gi, `\n${hero}\n`)
}

const upsertHeroCanonical = ({ content, stateSlug, domain }) => {
  const imgPath = `/images/states/${stateSlug}/${domain}-1600.webp`
  const constLine = `  const heroImageCanonical = new URL('${imgPath}', meta.canonical).toString();\n\n`

  if (!content.includes('const heroImageCanonical =')) {
    content = content.replace(/\n\s*const\s+articleSchema\s*=\s*generateArticleSchema\(/, `\n\n${constLine}  const articleSchema = generateArticleSchema(`)
  }

  content = content.replace(
    /canonicalUrl:\s*meta\.canonical(?:\s*,\s*imageUrl:\s*[^,\n}]+)?/g,
    'canonicalUrl: meta.canonical, imageUrl: heroImageCanonical'
  )

  return content
}

const main = async () => {
  const pagesDir = path.join(process.cwd(), 'src', 'pages')

  for (const s of STATES) {
    for (const domain of ['auto', 'health']) {
      const fileName = `${domain === 'auto' ? 'Auto' : 'Health'}ClaimDenied${s.pascal}.jsx`
      const filePath = path.join(pagesDir, fileName)

      let content
      try {
        content = await fs.readFile(filePath, 'utf8')
      } catch {
        continue
      }

      let updated = content
      updated = ensureImport(updated)
      updated = removeRemoteHeroUrl(updated)
      updated = upsertHeroCanonical({ content: updated, stateSlug: s.slug, domain })
      updated = replaceHeroBlock({ content: updated, stateSlug: s.slug, domain, label: s.label })

      if (updated !== content) {
        await fs.writeFile(filePath, updated)
        process.stdout.write(`Updated hero image: ${fileName}\n`)
      }
    }
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})

