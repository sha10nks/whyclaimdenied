import fs from 'fs/promises'
import path from 'path'
import sharp from 'sharp'

const buildSvg = ({ width, height }) => {
  const cx = Math.round(width / 2)
  const cy = Math.round(height / 2)

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <!-- Background Gradient -->
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#fdfdfe"/>
      <stop offset="0.4" stop-color="#f4f7fb"/>
      <stop offset="0.8" stop-color="#eaf1f7"/>
      <stop offset="1" stop-color="#e0edf5"/>
    </linearGradient>

    <!-- Center Light Radial Gradient (Creates the text-safe clear zone) -->
    <radialGradient id="centerLight" cx="50%" cy="50%" r="60%">
      <stop offset="0" stop-color="#ffffff" stop-opacity="0.95"/>
      <stop offset="0.3" stop-color="#ffffff" stop-opacity="0.85"/>
      <stop offset="0.6" stop-color="#ffffff" stop-opacity="0.2"/>
      <stop offset="1" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>

    <!-- Blueprint Grid Pattern -->
    <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
      <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#0f766e" stroke-width="1.5" stroke-opacity="0.04"/>
      <path d="M 40 0 L 40 80 M 0 40 L 80 40" fill="none" stroke="#2b6cb0" stroke-width="0.5" stroke-opacity="0.02"/>
    </pattern>

    <!-- Blueprint Dot Pattern -->
    <pattern id="dots" width="40" height="40" patternUnits="userSpaceOnUse">
      <circle cx="20" cy="20" r="1.5" fill="#0b4f6c" fill-opacity="0.05"/>
    </pattern>

    <!-- Crisp Drop Shadows -->
    <filter id="crispShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="8" dy="16" stdDeviation="4" flood-color="#0b1630" flood-opacity="0.06"/>
    </filter>
    
    <filter id="lightShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="4" dy="8" stdDeviation="2" flood-color="#0b1630" flood-opacity="0.04"/>
    </filter>

    <!-- Card Gradients -->
    <linearGradient id="cardGrad1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#ffffff" stop-opacity="0.98"/>
      <stop offset="1" stop-color="#f8fafc" stop-opacity="0.90"/>
    </linearGradient>

    <linearGradient id="cardGrad2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#f1f5f9" stop-opacity="0.95"/>
      <stop offset="1" stop-color="#e2e8f0" stop-opacity="0.80"/>
    </linearGradient>

    <!-- Colored Accents -->
    <linearGradient id="accentBlue" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#3b82f6" stop-opacity="0.08"/>
      <stop offset="1" stop-color="#2563eb" stop-opacity="0.03"/>
    </linearGradient>
    <linearGradient id="accentTeal" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#14b8a6" stop-opacity="0.08"/>
      <stop offset="1" stop-color="#0f766e" stop-opacity="0.03"/>
    </linearGradient>
  </defs>

  <!-- Base Background -->
  <rect x="0" y="0" width="${width}" height="${height}" fill="url(#bgGrad)"/>
  
  <!-- Grid & Dot Patterns -->
  <rect x="0" y="0" width="${width}" height="${height}" fill="url(#grid)"/>
  <rect x="0" y="0" width="${width}" height="${height}" fill="url(#dots)"/>

  <!-- Left/Top Geometric Elements -->
  <path d="M 0 0 L ${Math.round(width * 0.3)} 0 L ${Math.round(width * 0.15)} ${Math.round(height * 0.4)} L 0 ${Math.round(height * 0.3)} Z" fill="url(#accentBlue)" stroke="#3b82f6" stroke-opacity="0.1" stroke-width="2"/>
  <path d="M 0 ${Math.round(height * 0.1)} L ${Math.round(width * 0.25)} 0 L 0 0 Z" fill="url(#accentTeal)"/>
  <rect x="${Math.round(-width * 0.05)}" y="${Math.round(height * 0.2)}" width="${Math.round(width * 0.25)}" height="${Math.round(height * 0.6)}" transform="rotate(15, 0, ${Math.round(height * 0.2)})" fill="url(#cardGrad2)" filter="url(#crispShadow)" rx="16"/>
  <rect x="${Math.round(width * 0.05)}" y="${Math.round(height * 0.3)}" width="${Math.round(width * 0.18)}" height="${Math.round(height * 0.4)}" transform="rotate(-5, ${Math.round(width * 0.05)}, ${Math.round(height * 0.3)})" fill="url(#cardGrad1)" filter="url(#lightShadow)" rx="12"/>
  
  <!-- Small UI Cards on Left -->
  <g transform="translate(${Math.round(width * 0.08)}, ${Math.round(height * 0.45)})">
    <rect x="0" y="0" width="${Math.round(width * 0.12)}" height="${Math.round(height * 0.15)}" fill="#ffffff" filter="url(#lightShadow)" rx="8"/>
    <rect x="${Math.round(width * 0.01)}" y="${Math.round(height * 0.03)}" width="${Math.round(width * 0.08)}" height="${Math.round(height * 0.015)}" fill="#e2e8f0" rx="4"/>
    <rect x="${Math.round(width * 0.01)}" y="${Math.round(height * 0.06)}" width="${Math.round(width * 0.06)}" height="${Math.round(height * 0.015)}" fill="#e2e8f0" rx="4"/>
    <rect x="${Math.round(width * 0.01)}" y="${Math.round(height * 0.09)}" width="${Math.round(width * 0.04)}" height="${Math.round(height * 0.015)}" fill="#cbd5e1" rx="4"/>
    <rect x="${Math.round(width * 0.09)}" y="${Math.round(height * 0.03)}" width="${Math.round(width * 0.02)}" height="${Math.round(width * 0.02)}" fill="url(#accentTeal)" rx="4"/>
  </g>

  <!-- Right/Bottom Geometric Elements -->
  <path d="M ${width} ${height} L ${Math.round(width * 0.7)} ${height} L ${Math.round(width * 0.85)} ${Math.round(height * 0.6)} L ${width} ${Math.round(height * 0.7)} Z" fill="url(#accentBlue)" stroke="#3b82f6" stroke-opacity="0.1" stroke-width="2"/>
  <path d="M ${width} ${Math.round(height * 0.9)} L ${Math.round(width * 0.75)} ${height} L ${width} ${height} Z" fill="url(#accentTeal)"/>
  <rect x="${Math.round(width * 0.8)}" y="${Math.round(height * 0.2)}" width="${Math.round(width * 0.25)}" height="${Math.round(height * 0.6)}" transform="rotate(-15, ${width}, ${Math.round(height * 0.2)})" fill="url(#cardGrad2)" filter="url(#crispShadow)" rx="16"/>
  <rect x="${Math.round(width * 0.77)}" y="${Math.round(height * 0.3)}" width="${Math.round(width * 0.18)}" height="${Math.round(height * 0.4)}" transform="rotate(5, ${Math.round(width * 0.77)}, ${Math.round(height * 0.3)})" fill="url(#cardGrad1)" filter="url(#lightShadow)" rx="12"/>

  <!-- Small UI Cards on Right -->
  <g transform="translate(${Math.round(width * 0.8)}, ${Math.round(height * 0.35)})">
    <rect x="0" y="0" width="${Math.round(width * 0.12)}" height="${Math.round(height * 0.12)}" fill="#ffffff" filter="url(#lightShadow)" rx="8"/>
    <circle cx="${Math.round(width * 0.03)}" cy="${Math.round(height * 0.06)}" r="${Math.round(width * 0.015)}" fill="url(#accentBlue)"/>
    <rect x="${Math.round(width * 0.055)}" y="${Math.round(height * 0.04)}" width="${Math.round(width * 0.05)}" height="${Math.round(height * 0.015)}" fill="#e2e8f0" rx="4"/>
    <rect x="${Math.round(width * 0.055)}" y="${Math.round(height * 0.07)}" width="${Math.round(width * 0.03)}" height="${Math.round(height * 0.015)}" fill="#cbd5e1" rx="4"/>
  </g>

  <!-- Additional floating structural lines/blueprints -->
  <g stroke="#0ea5e9" stroke-opacity="0.15" stroke-width="2" fill="none">
    <circle cx="${Math.round(width * 0.15)}" cy="${Math.round(height * 0.8)}" r="${Math.round(height * 0.1)}"/>
    <circle cx="${Math.round(width * 0.15)}" cy="${Math.round(height * 0.8)}" r="${Math.round(height * 0.15)}" stroke-dasharray="8 8"/>
    <path d="M ${Math.round(width * 0.05)} ${Math.round(height * 0.8)} L ${Math.round(width * 0.25)} ${Math.round(height * 0.8)}"/>
    <path d="M ${Math.round(width * 0.15)} ${Math.round(height * 0.65)} L ${Math.round(width * 0.15)} ${Math.round(height * 0.95)}"/>
  </g>
  <g stroke="#14b8a6" stroke-opacity="0.15" stroke-width="2" fill="none">
    <rect x="${Math.round(width * 0.82)}" y="${Math.round(height * 0.75)}" width="${Math.round(width * 0.1)}" height="${Math.round(height * 0.15)}" rx="8"/>
    <rect x="${Math.round(width * 0.84)}" y="${Math.round(height * 0.72)}" width="${Math.round(width * 0.06)}" height="${Math.round(height * 0.21)}" rx="4" stroke-dasharray="6 6"/>
  </g>

  <!-- Center Text-Safe Masking (Strong white gradient overlay to ensure text contrast) -->
  <rect x="0" y="0" width="${width}" height="${height}" fill="url(#centerLight)"/>

</svg>`
}

const renderWebp = async ({ svg, width, height, quality }) => {
  return sharp(Buffer.from(svg))
    .resize(width, height, { fit: 'cover' })
    .webp({ quality, effort: 6 })
    .toBuffer()
}

const writeOptimizedWebp = async ({ svg, outPath, width, height }) => {
  let quality = 80
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
  const svg = buildSvg({ width: 3840, height: 2160 })
  const outDir = path.join(process.cwd(), 'public', 'images', 'hero')

  const outputs = [
    { w: 3840, h: 2160, name: 'hero-bg-3840.webp' },
    { w: 1920, h: 1080, name: 'hero-bg-1920.webp' },
    { w: 1280, h: 720, name: 'hero-bg-1280.webp' },
  ]

  for (const o of outputs) {
    const outPath = path.join(outDir, o.name)
    const res = await writeOptimizedWebp({ svg, outPath, width: o.w, height: o.h })
    process.stdout.write(`${o.name}: ${Math.round(res.bytes / 1024)}KB (q${res.quality})\n`)
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
