import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

import { BASE_URL } from '../src/seo/meta.js'
import { getCanonicalPathnames } from '../src/seo/canonicalRoutes.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname, '..')
const distDir = path.resolve(projectRoot, 'dist')
const ssrDir = path.resolve(projectRoot, 'dist-ssr')

const stripDefaultTitle = (html) => html.replace(/\s*<title>[\s\S]*?<\/title>\s*/i, '\n')

const stripHelmetRh = (html) => {
  let out = html
  out = out.replace(/<title\b[^>]*data-rh=["']true["'][^>]*>[\s\S]*?<\/title>\s*/gi, '')
  out = out.replace(/<meta\b[^>]*data-rh=["']true["'][^>]*\/?>\s*/gi, '')
  out = out.replace(/<link\b[^>]*data-rh=["']true["'][^>]*\/?>\s*/gi, '')
  out = out.replace(/<script\b[^>]*data-rh=["']true["'][^>]*>[\s\S]*?<\/script>\s*/gi, '')
  out = out.replace(/<noscript\b[^>]*data-rh=["']true["'][^>]*>[\s\S]*?<\/noscript>\s*/gi, '')
  out = out.replace(/<style\b[^>]*data-rh=["']true["'][^>]*>[\s\S]*?<\/style>\s*/gi, '')
  return out
}

const injectHead = (template, headHtml) => {
  const cleaned = stripHelmetRh(stripDefaultTitle(template))
  return cleaned.replace(/\s*<\/head>\s*/i, `\n${headHtml}\n</head>`)
}

const injectRoot = (template, appHtml) => {
  const placeholder = '<div id="root"></div>'
  if (template.includes(placeholder)) {
    return template.replace(placeholder, `<div id="root">${appHtml}</div>`)
  }

  const start = template.indexOf('<div id="root"')
  if (start === -1) return template

  const openEnd = template.indexOf('>', start)
  if (openEnd === -1) return template

  let depth = 1
  let i = openEnd + 1

  while (i < template.length) {
    const nextOpen = template.indexOf('<div', i)
    const nextClose = template.indexOf('</div>', i)

    if (nextClose === -1) break
    if (nextOpen !== -1 && nextOpen < nextClose) {
      depth += 1
      i = nextOpen + 4
      continue
    }

    depth -= 1
    if (depth === 0) {
      const closeStart = nextClose
      return `${template.slice(0, openEnd + 1)}${appHtml}${template.slice(closeStart)}`
    }

    i = nextClose + 6
  }

  return template
}

const ensureDir = async (dir) => {
  await fs.mkdir(dir, { recursive: true })
}

const canonicalPaths = () => getCanonicalPathnames()

const validateRenderedHtml = ({ pathname, canonicalUrl, html }) => {
  const errors = []
  if (!/<title\b[^>]*>[^<]+<\/title>/i.test(html)) errors.push('missing <title>')
  const canonicalTag = html.match(/<link\b[^>]*rel=["']canonical["'][^>]*>/i)?.[0] || ''
  if (!canonicalTag || !canonicalTag.includes(`href="${canonicalUrl}"`) && !canonicalTag.includes(`href='${canonicalUrl}'`)) {
    errors.push('missing or mismatched canonical')
  }
  if (!/<h1\b[\s\S]*?<\/h1>/i.test(html)) errors.push('missing <h1>')
  if (!/<a\b[^>]*href=/i.test(html)) errors.push('missing internal links')
  if (!/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>/i.test(html)) errors.push('missing JSON-LD schema')
  if (pathname !== '/' && !/class=["']breadcrumbs["']/.test(html)) errors.push('missing breadcrumbs')
  if (/>\s*Loading…\s*</i.test(html)) errors.push('contains loading fallback')
  if (errors.length) {
    const msg = `${pathname}: ${errors.join(', ')}`
    throw new Error(msg)
  }
}

const main = async () => {
  const templatePath = path.resolve(distDir, 'index.html')
  const template = await fs.readFile(templatePath, 'utf8')

  const ssrEntryCandidates = ['entry-server.js', 'entry-server.mjs']
  const ssrEntry = ssrEntryCandidates
    .map((f) => path.resolve(ssrDir, f))
    .find(async (p) => {
      try {
        await fs.access(p)
        return true
      } catch {
        return false
      }
    })

  const resolvedSsrEntry = await (async () => {
    for (const f of ssrEntryCandidates) {
      const p = path.resolve(ssrDir, f)
      try {
        await fs.access(p)
        return p
      } catch {
        // continue
      }
    }
    throw new Error('SSR bundle not found in dist-ssr')
  })()

  const { render } = await import(pathToFileURL(resolvedSsrEntry).href)
  if (typeof render !== 'function') throw new Error('SSR entry does not export render(url)')

  const paths = canonicalPaths()

  for (const pathname of paths) {
    const canonicalUrl = `${BASE_URL}${pathname === '/' ? '/' : pathname}`
    const { appHtml, headHtml } = await render(pathname)

    const withHead = injectHead(template, headHtml)
    const finalHtml = injectRoot(withHead, appHtml)

    const outPath = pathname === '/'
      ? path.resolve(distDir, 'index.html')
      : path.resolve(distDir, pathname.replace(/^\//, ''), 'index.html')

    await ensureDir(path.dirname(outPath))
    await fs.writeFile(outPath, finalHtml, 'utf8')
    validateRenderedHtml({ pathname, canonicalUrl, html: finalHtml })
  }
}

await main()
