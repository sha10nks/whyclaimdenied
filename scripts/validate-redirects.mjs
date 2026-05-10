import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname, '..')
const redirectsPath = path.resolve(projectRoot, 'public', '_redirects')

const main = async () => {
  const raw = await fs.readFile(redirectsPath, 'utf8')
  const lines = raw.split(/\r?\n/).map((l) => l.trim()).filter(Boolean)

  const errors = []
  for (const l of lines) {
    if (l.startsWith('#')) continue
    if (/\s200(!)?\s*$/.test(l)) errors.push(`Disallowed 200 rewrite: ${l}`)
    if (/\s301\s*$/.test(l)) errors.push(`Use 301! for canonical redirects: ${l}`)
  }

  if (errors.length) {
    throw new Error(`Redirect validation failed:\n${errors.map((e) => `- ${e}`).join('\n')}`)
  }

  console.log('Redirect validation passed.')
}

await main()
