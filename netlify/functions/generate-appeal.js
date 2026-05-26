import {
  callOpenAIResponses,
  extractOutputText,
  getClientIp,
  json,
  rateLimit,
  readJson,
  sanitizeText,
} from './_shared.js'

const MODEL = 'gpt-4o-mini'

const APPEAL_GENERATOR_SYSTEM_PROMPT =
  'You draft a professional insurance appeal letter for educational purposes. The letter must be factual, policy-sensitive, and state-sensitive only in a general sense. Do not cite laws or deadlines unless explicitly provided. Do not hallucinate statutes, regulators, or promises. Use a calm business tone. Output must be valid JSON matching the schema.'

const OUTPUT_SCHEMA = {
  name: 'AppealLetter',
  schema: {
    type: 'object',
    additionalProperties: false,
    required: ['letter_text', 'checklist'],
    properties: {
      letter_text: { type: 'string' },
      checklist: { type: 'array', items: { type: 'string' }, maxItems: 12 },
    },
  },
}

const LIMIT = 3
const WINDOW_MS = 15 * 60 * 1000
const TIMEOUT_MS = 35 * 1000

const MAX_FACTS = 3000
const MAX_REASONS = 12
const MAX_ANALYSIS_TEXT = 6000

const normalizeAnalysis = (value) => {
  if (!value || typeof value !== 'object') return null
  const denialReasons = Array.isArray(value.denialReasons)
    ? value.denialReasons.map(sanitizeText).filter(Boolean).slice(0, MAX_REASONS)
    : []
  const keyDates = Array.isArray(value.keyDates) ? value.keyDates.map(sanitizeText).filter(Boolean).slice(0, 10) : []
  const supportingDocs = Array.isArray(value.supportingDocs)
    ? value.supportingDocs.map(sanitizeText).filter(Boolean).slice(0, 12)
    : []
  const recommendedArguments = Array.isArray(value.recommendedArguments)
    ? value.recommendedArguments.map(sanitizeText).filter(Boolean).slice(0, 10)
    : []
  const appealOutline = Array.isArray(value.appealOutline) ? value.appealOutline.map(sanitizeText).filter(Boolean).slice(0, 12) : []
  const confidenceFlags = Array.isArray(value.confidenceFlags)
    ? value.confidenceFlags.map(sanitizeText).filter(Boolean).slice(0, 10)
    : []
  const insurer = sanitizeText(value.insurer)
  const state = sanitizeText(value.state)
  const requestedRemedy = sanitizeText(value.requestedRemedy)

  const combinedLen =
    denialReasons.join(' ').length +
    keyDates.join(' ').length +
    supportingDocs.join(' ').length +
    recommendedArguments.join(' ').length +
    appealOutline.join(' ').length
  if (combinedLen > MAX_ANALYSIS_TEXT) return null

  if (!denialReasons.length) return null
  return { denialReasons, keyDates, requestedRemedy, insurer, state, supportingDocs, recommendedArguments, appealOutline, confidenceFlags }
}

const countWords = (text) => {
  const t = String(text || '').trim()
  if (!t) return 0
  return t.split(/\s+/).filter(Boolean).length
}

const clampWordCount = (text, maxWords) => {
  const t = String(text || '').trim()
  if (!t) return ''
  const parts = t.split(/\s+/)
  if (parts.length <= maxWords) return t
  return `${parts.slice(0, maxWords).join(' ')}\n\n[Truncated]`
}

export default async (req) => {
  if (req.method !== 'POST') return json(405, { message: 'Method not allowed.' })

  const apiKey = process.env.OPENAI_API_KEY_WCD
  if (!apiKey) return json(503, { message: 'Service is not configured yet. Please try again later.' })

  const ip = getClientIp(req)
  const rl = await rateLimit({ key: `generate:${ip}`, limit: LIMIT, windowMs: WINDOW_MS })
  if (!rl.allowed) {
    const retryAfter = Math.max(1, Math.ceil(rl.resetMs / 1000))
    return json(429, { message: 'Rate limit exceeded. Please try again later.' }, { 'retry-after': String(retryAfter) })
  }

  const parsed = await readJson(req)
  if (!parsed.ok) return json(400, { message: 'Invalid JSON.' })

  const claimType = sanitizeText(parsed.data?.claim_type)
  const state = sanitizeText(parsed.data?.state)
  const insurer = sanitizeText(parsed.data?.insurer)
  const facts = sanitizeText(parsed.data?.facts)
  const requestedRemedy = sanitizeText(parsed.data?.requested_remedy)
  const notes = sanitizeText(parsed.data?.notes)
  const denialDate = sanitizeText(parsed.data?.denial_date)
  const analysis = normalizeAnalysis(parsed.data?.analysis)

  const denialReasons = Array.isArray(parsed.data?.denial_reasons)
    ? parsed.data.denial_reasons.map(sanitizeText).filter(Boolean).slice(0, MAX_REASONS)
    : []

  const mergedReasons = denialReasons.length
    ? denialReasons
    : Array.isArray(analysis?.denialReasons)
      ? analysis.denialReasons
      : []

  const mergedRequestedRemedy = requestedRemedy || analysis?.requestedRemedy || ''
  const mergedInsurer = insurer || analysis?.insurer || ''
  const mergedState = state || analysis?.state || ''

  if (!['auto', 'health'].includes(claimType)) {
    return json(400, { message: 'claim_type must be "auto" or "health".' })
  }
  if (!mergedState || mergedState.length !== 2) {
    return json(400, { message: 'state must be a 2-letter code (example: CA).' })
  }
  if (!mergedReasons.length) {
    return json(400, { message: 'At least one denial reason is required.' })
  }
  if (!facts || facts.length < 80) {
    return json(400, { message: 'facts is required and must be at least ~80 characters.' })
  }
  if (facts.length > MAX_FACTS) {
    return json(400, { message: `facts is too long (max ${MAX_FACTS} characters).` })
  }
  if (!mergedRequestedRemedy || mergedRequestedRemedy.length < 10) {
    return json(400, { message: 'requested_remedy is required.' })
  }

  const userPrompt =
    `Draft a professional appeal letter (250–650 words).\n` +
    `Keep it factual, calm, and insurer-facing.\n` +
    `Do not include legal citations or deadlines unless provided below.\n\n` +
    `Claim type: ${claimType}\n` +
    `State: ${mergedState}\n` +
    `Insurer/Plan: ${mergedInsurer || '—'}\n` +
    `Denial date: ${denialDate || '—'}\n\n` +
    `Denial reasons:\n- ${mergedReasons.join('\n- ')}\n\n` +
    (analysis?.keyDates?.length ? `Key dates mentioned:\n- ${analysis.keyDates.join('\n- ')}\n\n` : '') +
    `Facts:\n${facts}\n\n` +
    `Requested remedy:\n${mergedRequestedRemedy}\n\n` +
    (analysis?.recommendedArguments?.length ? `Recommended arguments:\n- ${analysis.recommendedArguments.join('\n- ')}\n\n` : '') +
    (analysis?.supportingDocs?.length ? `Supporting documents to reference (if applicable):\n- ${analysis.supportingDocs.join('\n- ')}\n\n` : '') +
    (analysis?.appealOutline?.length ? `Appeal outline (structure):\n- ${analysis.appealOutline.join('\n- ')}\n\n` : '') +
    `Optional notes (may be empty):\n${notes || '—'}\n\n` +
    `Use placeholders like [CLAIM NUMBER] and [POLICY NUMBER] instead of requesting sensitive identifiers.`

  const openai = await callOpenAIResponses({
    apiKey,
    model: MODEL,
    input: [
      { role: 'system', content: [{ type: 'input_text', text: APPEAL_GENERATOR_SYSTEM_PROMPT }] },
      { role: 'user', content: [{ type: 'input_text', text: userPrompt }] },
    ],
    schema: OUTPUT_SCHEMA,
    temperature: 0.25,
    maxOutputTokens: 850,
    timeoutMs: TIMEOUT_MS,
  })

  if (!openai.ok) {
    const message = openai.error === 'timeout'
      ? 'Generation timed out. Please try again.'
      : 'We could not generate your letter right now. Please try again.'
    return json(503, { message })
  }

  const text = extractOutputText(openai.json)
  let value = null
  try {
    value = JSON.parse(text)
  } catch {
    value = null
  }
  if (!value?.letter_text) {
    return json(503, { message: 'We could not generate your letter right now. Please try again.' })
  }

  const words = countWords(value.letter_text)
  if (words > 650) {
    value.letter_text = clampWordCount(value.letter_text, 650)
  }

  return json(200, value)
}
