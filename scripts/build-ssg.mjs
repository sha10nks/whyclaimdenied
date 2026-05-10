import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawnSync } from 'node:child_process'
import fs from 'node:fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname, '..')

const ts = new Date().toISOString()

const run = (cmd, args, extraEnv = {}) => {
  const res = spawnSync(cmd, args, {
    cwd: projectRoot,
    stdio: 'inherit',
    env: {
      ...process.env,
      ...extraEnv,
      BUILD_TIMESTAMP: ts,
    },
  })

  if (res.status !== 0) {
    process.exit(res.status || 1)
  }
}

const viteBinCandidates = [
  path.resolve(projectRoot, 'node_modules', 'vite', 'bin', 'vite.js'),
]

const viteBin = viteBinCandidates.find((p) => fs.existsSync(p))
if (!viteBin) {
  console.error('Vite binary not found. Ensure dependencies are installed.')
  process.exit(1)
}

run(process.execPath, [viteBin, 'build'])
run(process.execPath, [viteBin, 'build', '--ssr', 'src/entry-server.jsx', '--outDir', 'dist-ssr'])
run(process.execPath, ['scripts/prerender.mjs'])
