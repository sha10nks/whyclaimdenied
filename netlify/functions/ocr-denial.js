import {
  callOpenAIResponses,
  extractOutputText,
  getClientIp,
  json,
  rateLimit,
  sanitizeText,
} from './_shared.js'

const MODEL = 'gpt-4o-mini'

const LIMIT = 3
const WINDOW_MS = 15 * 60 * 1000
const TIMEOUT_MS = 35 * 1000

const MAX_FILE_BYTES = 8 * 1024 * 1024
const ALLOWED_MIME = new Set(['application/pdf', 'image/png', 'image/jpeg'])

const OCR_SCHEMA = {
  name: 'OcrExtraction',
  schema: {
    type: 'object',
    additionalProperties: false,
    required: ['text', 'confidenceFlags'],
    properties: {
      text: { type: 'string' },
      confidenceFlags: { type: 'array', items: { type: 'string' }, maxItems: 10 },
    },
  },
}

const OCR_SYSTEM_PROMPT =
  'Extract text from an insurance denial letter image for educational use. Return ONLY JSON matching schema. Preserve paragraphs and line breaks when possible. Do not add explanations. If any segment is unreadable, replace with [illegible].'

const detectFileType = async (buf) => {
  const mod = await import('file-type')
  const ft = await mod.fileTypeFromBuffer(buf).catch(() => null)
  return ft
}

const pdfExtractText = async (buf) => {
  const mod = await import('pdf-parse')
  const res = await mod.default(buf).catch(() => null)
  const text = res?.text ? String(res.text) : ''
  return sanitizeText(text)
}

const renderPdfFirstPage = async (buf) => {
  const sharpMod = await import('sharp')
  const sharp = sharpMod.default || sharpMod
  const png = await sharp(buf, { density: 200 }).png().toBuffer()
  return png
}

const callVisionOcr = async ({ apiKey, imageBuffer, hint }) => {
  const b64 = Buffer.from(imageBuffer).toString('base64')
  const imageUrl = `data:image/png;base64,${b64}`

  const userText =
    `Extract the denial letter text.\n` +
    `Hint (may be empty): ${hint || '—'}`

  const openai = await callOpenAIResponses({
    apiKey,
    model: MODEL,
    input: [
      { role: 'system', content: [{ type: 'input_text', text: OCR_SYSTEM_PROMPT }] },
      {
        role: 'user',
        content: [
          { type: 'input_text', text: userText },
          { type: 'input_image', image_url: imageUrl },
        ],
      },
    ],
    schema: OCR_SCHEMA,
    temperature: 0.0,
    maxOutputTokens: 1200,
    timeoutMs: TIMEOUT_MS,
  })

  if (!openai.ok) return { ok: false, error: openai.error || 'openai_failed' }

  const text = extractOutputText(openai.json)
  let value = null
  try {
    value = JSON.parse(text)
  } catch {
    value = null
  }
  if (!value?.text) return { ok: false, error: 'parse_failed' }
  return { ok: true, value }
}

export default async (req) => {
  if (req.method !== 'POST') return json(405, { message: 'Method not allowed.' })

  const apiKey = process.env.OPENAI_API_KEY_WCD
  if (!apiKey) return json(503, { message: 'Service is not configured yet. Please try again later.' })

  const ip = getClientIp(req)
  const rl = await rateLimit({ key: `ocr:${ip}`, limit: LIMIT, windowMs: WINDOW_MS })
  if (!rl.allowed) {
    const retryAfter = Math.max(1, Math.ceil(rl.resetMs / 1000))
    return json(429, { message: 'Rate limit exceeded. Please try again later.' }, { 'retry-after': String(retryAfter) })
  }

  let form
  try {
    form = await req.formData()
  } catch {
    return json(400, { message: 'Invalid form data.' })
  }

  const file = form.get('file')
  const hint = sanitizeText(form.get('hint'))

  if (!file || typeof file.arrayBuffer !== 'function') {
    return json(400, { message: 'Missing file.' })
  }

  const ab = await file.arrayBuffer().catch(() => null)
  if (!ab) return json(400, { message: 'Could not read file.' })
  const buf = Buffer.from(ab)
  if (buf.length > MAX_FILE_BYTES) {
    return json(400, { message: `File too large (max ${MAX_FILE_BYTES} bytes).` })
  }

  const declaredType = String(file.type || '')
  const detected = await detectFileType(buf)
  const mime = detected?.mime || declaredType

  if (!mime || !ALLOWED_MIME.has(mime)) {
    return json(400, { message: 'Unsupported file type. Upload PDF, PNG, or JPG.' })
  }

  if (mime === 'application/pdf') {
    const extracted = await pdfExtractText(buf)
    if (extracted && extracted.length >= 200) {
      return json(200, { text: extracted, confidenceFlags: ['pdf_text'] })
    }

    try {
      const png = await renderPdfFirstPage(buf)
      const ocr = await callVisionOcr({ apiKey, imageBuffer: png, hint })
      if (!ocr.ok) {
        return json(200, { text: extracted || '', confidenceFlags: ['low_confidence', 'pdf_scan_unresolved'] })
      }
      const cleaned = sanitizeText(ocr.value.text)
      const flags = Array.isArray(ocr.value.confidenceFlags) ? ocr.value.confidenceFlags : []
      return json(200, { text: cleaned, confidenceFlags: ['pdf_vision_ocr', ...flags].slice(0, 10) })
    } catch {
      return json(200, { text: extracted || '', confidenceFlags: ['low_confidence', 'pdf_scan_unresolved'] })
    }
  }

  const ocr = await callVisionOcr({ apiKey, imageBuffer: buf, hint })
  if (!ocr.ok) {
    const msg = ocr.error === 'timeout' ? 'OCR timed out. Please try again.' : 'We could not extract text right now. Please try again.'
    return json(503, { message: msg })
  }
  const cleaned = sanitizeText(ocr.value.text)
  const flags = Array.isArray(ocr.value.confidenceFlags) ? ocr.value.confidenceFlags : []
  return json(200, { text: cleaned, confidenceFlags: ['image_vision_ocr', ...flags].slice(0, 10) })
}
