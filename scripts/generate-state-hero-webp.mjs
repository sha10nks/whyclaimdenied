import fs from 'fs/promises'
import path from 'path'
import sharp from 'sharp'
import { createRequire } from 'module'
import { feature } from 'topojson-client'
import { geoAlbersUsa, geoPath } from 'd3-geo'

const require = createRequire(import.meta.url)

const STATES = [
  { slug: 'california', name: 'California' },
  { slug: 'florida', name: 'Florida' },
  { slug: 'texas', name: 'Texas' },
  { slug: 'new-york', name: 'New York' },
  { slug: 'pennsylvania', name: 'Pennsylvania' },
  { slug: 'illinois', name: 'Illinois' },
  { slug: 'ohio', name: 'Ohio' },
  { slug: 'georgia', name: 'Georgia' },
  { slug: 'north-carolina', name: 'North Carolina' },
  { slug: 'michigan', name: 'Michigan' },
  { slug: 'new-jersey', name: 'New Jersey' },
  { slug: 'virginia', name: 'Virginia' },
]

const LANDMARKS = {
  california: { label: 'Bridge', svg: '<path d="M40 84V54c0-10 8-18 18-18h84c10 0 18 8 18 18v30" stroke="currentColor" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M40 60h120" stroke="currentColor" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M58 36v48M142 36v48" stroke="currentColor" stroke-width="6" fill="none" stroke-linecap="round"/>' },
  florida: { label: 'Palm', svg: '<path d="M100 160v-48" stroke="currentColor" stroke-width="7" stroke-linecap="round" fill="none"/><path d="M100 112c-8-20-30-32-52-30 10 10 20 20 26 34" stroke="currentColor" stroke-width="7" stroke-linecap="round" fill="none"/><path d="M100 112c10-18 34-30 58-26-12 10-22 20-30 34" stroke="currentColor" stroke-width="7" stroke-linecap="round" fill="none"/><path d="M100 112c-2-22-18-44-42-56 2 16 6 28 18 42" stroke="currentColor" stroke-width="7" stroke-linecap="round" fill="none"/><path d="M100 112c2-22 18-44 42-56-2 16-6 28-18 42" stroke="currentColor" stroke-width="7" stroke-linecap="round" fill="none"/>' },
  texas: { label: 'Derrick', svg: '<path d="M60 160h80" stroke="currentColor" stroke-width="7" stroke-linecap="round" fill="none"/><path d="M70 160l30-120 30 120" stroke="currentColor" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M82 112h36M76 136h48" stroke="currentColor" stroke-width="7" stroke-linecap="round" fill="none"/><path d="M84 72h32" stroke="currentColor" stroke-width="7" stroke-linecap="round" fill="none"/>' },
  'new-york': { label: 'Skyline', svg: '<path d="M56 160V96l18-16v80" stroke="currentColor" stroke-width="7" stroke-linejoin="round" fill="none"/><path d="M92 160V60l18-20v120" stroke="currentColor" stroke-width="7" stroke-linejoin="round" fill="none"/><path d="M128 160V84l18-12v88" stroke="currentColor" stroke-width="7" stroke-linejoin="round" fill="none"/><path d="M50 160h112" stroke="currentColor" stroke-width="7" stroke-linecap="round" fill="none"/>' },
  pennsylvania: { label: 'Bell', svg: '<path d="M72 156c0-40 0-72 28-92 28 20 28 52 28 92" stroke="currentColor" stroke-width="7" fill="none" stroke-linejoin="round"/><path d="M70 156h60" stroke="currentColor" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M84 56c6-10 18-18 30-18 12 0 24 8 30 18" stroke="currentColor" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M100 156v-10" stroke="currentColor" stroke-width="7" fill="none" stroke-linecap="round"/>' },
  illinois: { label: 'Tower', svg: '<path d="M92 160V44h20v116" stroke="currentColor" stroke-width="7" fill="none" stroke-linejoin="round"/><path d="M102 44V28" stroke="currentColor" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M72 160V92h14v68" stroke="currentColor" stroke-width="7" fill="none" stroke-linejoin="round"/><path d="M126 160V104h14v56" stroke="currentColor" stroke-width="7" fill="none" stroke-linejoin="round"/><path d="M60 160h96" stroke="currentColor" stroke-width="7" fill="none" stroke-linecap="round"/>' },
  ohio: { label: 'Hall', svg: '<path d="M64 160l36-84 36 84" stroke="currentColor" stroke-width="7" fill="none" stroke-linejoin="round"/><path d="M76 128h48" stroke="currentColor" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M54 160h92" stroke="currentColor" stroke-width="7" fill="none" stroke-linecap="round"/>' },
  georgia: { label: 'Peach', svg: '<path d="M92 152c-18-2-34-18-34-38 0-18 12-32 28-36 4 18 16 30 34 38-6 22-14 36-28 36z" stroke="currentColor" stroke-width="7" fill="none" stroke-linejoin="round"/><path d="M92 152c18-2 34-18 34-38 0-18-12-32-28-36-4 18-16 30-34 38 6 22 14 36 28 36z" stroke="currentColor" stroke-width="7" fill="none" stroke-linejoin="round"/><path d="M92 74c6-18 16-26 34-30" stroke="currentColor" stroke-width="7" fill="none" stroke-linecap="round"/>' },
  'north-carolina': { label: 'Lighthouse', svg: '<path d="M88 160l14-112 14 112" stroke="currentColor" stroke-width="7" fill="none" stroke-linejoin="round"/><path d="M84 64h36" stroke="currentColor" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M78 92h48" stroke="currentColor" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M72 120h60" stroke="currentColor" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M70 160h64" stroke="currentColor" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M102 40l10 12h-20z" fill="currentColor"/>' },
  michigan: { label: 'Waves', svg: '<path d="M56 140c12 0 12-10 24-10s12 10 24 10 12-10 24-10 12 10 24 10" stroke="currentColor" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M56 160c12 0 12-10 24-10s12 10 24 10 12-10 24-10 12 10 24 10" stroke="currentColor" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M80 92l24-36 24 36" stroke="currentColor" stroke-width="7" fill="none" stroke-linejoin="round"/>' },
  'new-jersey': { label: 'Boardwalk', svg: '<path d="M60 160V120c0-20 16-36 36-36s36 16 36 36v40" stroke="currentColor" stroke-width="7" fill="none" stroke-linejoin="round"/><path d="M60 140h72" stroke="currentColor" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M80 84l16-18 16 18" stroke="currentColor" stroke-width="7" fill="none" stroke-linejoin="round"/>' },
  virginia: { label: 'Capitol', svg: '<path d="M64 160h96" stroke="currentColor" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M76 160V104h72v56" stroke="currentColor" stroke-width="7" fill="none" stroke-linejoin="round"/><path d="M88 104c0-24 16-44 36-44s36 20 36 44" stroke="currentColor" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M112 60V44" stroke="currentColor" stroke-width="7" fill="none" stroke-linecap="round"/>' },
}

const buildContextIcon = (domain) => {
  if (domain === 'auto') {
    return '<path d="M54 140l18-44c4-10 12-16 22-16h44c10 0 18 6 22 16l18 44" stroke="currentColor" stroke-width="6" fill="none" stroke-linejoin="round"/><path d="M72 140v-16h96v16" stroke="currentColor" stroke-width="6" fill="none" stroke-linejoin="round"/><path d="M82 156a10 10 0 1 0 0.1 0" stroke="currentColor" stroke-width="6" fill="none"/><path d="M158 156a10 10 0 1 0 0.1 0" stroke="currentColor" stroke-width="6" fill="none"/>'
  }

  return '<path d="M120 66v26h26v24h-26v26h-24v-26H70V92h26V66z" fill="currentColor"/>'
}

const buildStamp = () => {
  return '<circle cx="120" cy="120" r="58" fill="none" stroke="rgba(210,55,55,0.35)" stroke-width="10"/><path d="M86 154l68-68" stroke="rgba(210,55,55,0.35)" stroke-width="10" stroke-linecap="round"/>'
}

const buildSvg = ({ statePath, stateName, stateSlug, domain }) => {
  const landmark = LANDMARKS[stateSlug]
  const contextIcon = buildContextIcon(domain)
  const stamp = buildStamp()

  const title = `${stateName} ${domain === 'auto' ? 'Auto' : 'Health'} Hero`

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" role="img" aria-label="${title}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#f7fbff"/>
      <stop offset="1" stop-color="#eef3ff"/>
    </linearGradient>
    <linearGradient id="stateFill" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#163a72"/>
      <stop offset="1" stop-color="#0b2551"/>
    </linearGradient>
    <filter id="shadow" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="18" stdDeviation="16" flood-color="#0b1630" flood-opacity="0.20"/>
    </filter>
    <filter id="soft" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="18"/>
    </filter>
    <mask id="tearMask">
      <rect x="0" y="0" width="1600" height="900" fill="white"/>
      <path d="M270 260c70-60 160-98 250-120 130-32 270-30 400 4 108 28 212 78 282 142 36 34 64 72 88 116 22 40 40 88 46 134 8 62-4 118-34 170-34 60-92 108-160 142-106 54-236 78-370 76-158-2-302-42-404-116-62-46-104-104-122-172-20-76-6-162 24-236z" fill="black"/>
    </mask>
  </defs>

  <rect x="0" y="0" width="1600" height="900" fill="url(#bg)"/>

  <g opacity="0.20">
    <path d="M140 220h1320" stroke="#1b2a4d" stroke-width="1" opacity="0.08"/>
    <path d="M140 320h1320" stroke="#1b2a4d" stroke-width="1" opacity="0.08"/>
    <path d="M140 420h1320" stroke="#1b2a4d" stroke-width="1" opacity="0.08"/>
    <path d="M140 520h1320" stroke="#1b2a4d" stroke-width="1" opacity="0.08"/>
    <path d="M140 620h1320" stroke="#1b2a4d" stroke-width="1" opacity="0.08"/>
    <path d="M140 720h1320" stroke="#1b2a4d" stroke-width="1" opacity="0.08"/>
  </g>

  <g mask="url(#tearMask)">
    <rect x="0" y="0" width="1600" height="900" fill="#ffffff" opacity="0.7"/>
  </g>

  <path d="M270 260c70-60 160-98 250-120 130-32 270-30 400 4 108 28 212 78 282 142 36 34 64 72 88 116 22 40 40 88 46 134 8 62-4 118-34 170-34 60-92 108-160 142-106 54-236 78-370 76-158-2-302-42-404-116-62-46-104-104-122-172-20-76-6-162 24-236z" fill="#ffffff" opacity="0.92"/>

  <path d="M270 260c70-60 160-98 250-120 130-32 270-30 400 4 108 28 212 78 282 142 36 34 64 72 88 116 22 40 40 88 46 134 8 62-4 118-34 170-34 60-92 108-160 142-106 54-236 78-370 76-158-2-302-42-404-116-62-46-104-104-122-172-20-76-6-162 24-236z" fill="#0b1630" opacity="0.10" filter="url(#soft)"/>

  <g transform="translate(0, 0)" filter="url(#shadow)">
    <path d="${statePath}" fill="url(#stateFill)" stroke="#e6f0ff" stroke-width="6"/>
  </g>

  <g transform="translate(1100, 86)" opacity="0.95">
    <rect x="0" y="0" width="420" height="88" rx="16" fill="#ffffff" stroke="#d7e3ff"/>
    <g transform="translate(22, 18)">
      <path d="M0 16h240" fill="none" stroke="#0b2551" stroke-width="6" stroke-linecap="round" opacity="0.18"/>
      <path d="M0 38h200" fill="none" stroke="#0b2551" stroke-width="6" stroke-linecap="round" opacity="0.12"/>
      <path d="M0 60h220" fill="none" stroke="#0b2551" stroke-width="6" stroke-linecap="round" opacity="0.10"/>
    </g>
    <g transform="translate(330, 10)" color="#0b2551">
      <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 220 220" fill="none" style="overflow:visible">
        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">${contextIcon}</g>
      </svg>
    </g>
  </g>

  <g transform="translate(170, 90)">${stamp}</g>

  <g transform="translate(1180, 620)" color="#0b2551" opacity="0.95">
    <rect x="0" y="0" width="340" height="220" rx="18" fill="#ffffff" stroke="#d7e3ff"/>
    <path d="M34 38h150" fill="none" stroke="#0b2551" stroke-width="6" stroke-linecap="round" opacity="0.16"/>
    <path d="M34 62h110" fill="none" stroke="#0b2551" stroke-width="6" stroke-linecap="round" opacity="0.12"/>
    <g transform="translate(84, 44)" color="#0b2551">
      <svg xmlns="http://www.w3.org/2000/svg" width="172" height="172" viewBox="0 0 200 200" fill="none" style="overflow:visible">
        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">${landmark.svg}</g>
      </svg>
    </g>
  </g>
</svg>`
}

const loadTopoStates = async () => {
  const topoPath = require.resolve('us-atlas/states-10m.json')
  const topoRaw = await fs.readFile(topoPath, 'utf8')
  const topo = JSON.parse(topoRaw)
  const geo = feature(topo, topo.objects.states)
  return geo.features
}

const buildStatePath = (stateFeature) => {
  const projection = geoAlbersUsa()
  projection.fitExtent(
    [
      [360, 220],
      [1240, 820],
    ],
    stateFeature
  )
  const p = geoPath(projection)
  return p(stateFeature)
}

const renderWebp = async ({ svg, width, height, quality }) => {
  return sharp(Buffer.from(svg))
    .resize(width, height, { fit: 'cover' })
    .webp({ quality, effort: 6 })
    .toBuffer()
}

const writeOptimizedWebp = async ({ svg, outPath, width, height }) => {
  let quality = 82
  let buffer = await renderWebp({ svg, width, height, quality })
  while (buffer.length > 500 * 1024 && quality >= 55) {
    quality -= 7
    buffer = await renderWebp({ svg, width, height, quality })
  }

  await fs.mkdir(path.dirname(outPath), { recursive: true })
  await fs.writeFile(outPath, buffer)
  return { bytes: buffer.length, quality }
}

const main = async () => {
  const features = await loadTopoStates()
  const byName = new Map(features.map((f) => [f.properties?.name, f]))

  const outputs = []
  for (const s of STATES) {
    const f = byName.get(s.name)
    if (!f) throw new Error(`State not found in topojson: ${s.name}`)

    const statePath = buildStatePath(f)
    for (const domain of ['auto', 'health']) {
      const svg = buildSvg({ statePath, stateName: s.name, stateSlug: s.slug, domain })

      const out1600 = path.join(process.cwd(), 'public', 'images', 'states', s.slug, `${domain}-1600.webp`)
      const out800 = path.join(process.cwd(), 'public', 'images', 'states', s.slug, `${domain}-800.webp`)

      const r1 = await writeOptimizedWebp({ svg, outPath: out1600, width: 1600, height: 900 })
      const r2 = await writeOptimizedWebp({ svg, outPath: out800, width: 800, height: 450 })

      outputs.push({ state: s.slug, domain, v1600: r1, v800: r2 })
      process.stdout.write(`Generated ${s.slug} ${domain}: 1600=${Math.round(r1.bytes / 1024)}KB(q${r1.quality}) 800=${Math.round(r2.bytes / 1024)}KB(q${r2.quality})\n`)
    }
  }

  const failures = outputs.filter((o) => o.v1600.bytes > 500 * 1024 || o.v800.bytes > 500 * 1024)
  if (failures.length) {
    process.stdout.write(`\nSize failures (>500KB): ${failures.map((f) => `${f.state}:${f.domain}`).join(', ')}\n`)
    process.exitCode = 1
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
