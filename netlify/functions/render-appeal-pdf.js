import { getClientIp, json, rateLimit, readJson, sanitizeText } from './_shared.js'

const LIMIT = 3
const WINDOW_MS = 15 * 60 * 1000

const MAX_CHARS = 12000

const buildPdf = async ({ title, dateLine, letterText }) => {
  const mod = await import('pdfkit')
  const PDFDocument = mod.default || mod

  const doc = new PDFDocument({
    size: 'LETTER',
    margins: { top: 54, bottom: 54, left: 54, right: 54 },
    info: {
      Title: title,
      Author: 'WhyClaimDenied',
    },
  })

  const chunks = []
  doc.on('data', (c) => chunks.push(c))

  const done = new Promise((resolve, reject) => {
    doc.on('end', () => resolve(Buffer.concat(chunks)))
    doc.on('error', reject)
  })

  doc.font('Helvetica-Bold').fontSize(16).text(title, { align: 'left' })
  if (dateLine) {
    doc.moveDown(0.5)
    doc.font('Helvetica').fontSize(10).fillColor('#334155').text(dateLine)
    doc.fillColor('#000000')
  }

  doc.moveDown(1)

  const paragraphs = String(letterText)
    .replace(/\r\n/g, '\n')
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean)

  doc.font('Helvetica').fontSize(11)
  for (const p of paragraphs) {
    doc.text(p, { align: 'left', lineGap: 3 })
    doc.moveDown(0.8)
  }

  doc.end()
  return done
}

export default async (req) => {
  if (req.method !== 'POST') return json(405, { message: 'Method not allowed.' })

  const ip = getClientIp(req)
  const rl = await rateLimit({ key: `pdf:${ip}`, limit: LIMIT, windowMs: WINDOW_MS })
  if (!rl.allowed) {
    const retryAfter = Math.max(1, Math.ceil(rl.resetMs / 1000))
    return json(429, { message: 'Rate limit exceeded. Please try again later.' }, { 'retry-after': String(retryAfter) })
  }

  const parsed = await readJson(req)
  if (!parsed.ok) return json(400, { message: 'Invalid JSON.' })

  const letterText = sanitizeText(parsed.data?.letter_text)
  if (!letterText || letterText.length < 80) {
    return json(400, { message: 'letter_text is required.' })
  }
  if (letterText.length > MAX_CHARS) {
    return json(400, { message: `letter_text is too long (max ${MAX_CHARS} characters).` })
  }

  const title = sanitizeText(parsed.data?.title) || 'Insurance Appeal Letter'
  const dateLine = sanitizeText(parsed.data?.date_line) || ''

  try {
    const pdf = await buildPdf({ title, dateLine, letterText })
    return new Response(pdf, {
      status: 200,
      headers: {
        'content-type': 'application/pdf',
        'content-disposition': 'attachment; filename="insurance-appeal-letter.pdf"',
        'cache-control': 'no-store',
      },
    })
  } catch {
    return json(503, { message: 'We could not generate the PDF right now. Please try again.' })
  }
}
