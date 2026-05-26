import {
  callOpenAIResponses,
  extractOutputText,
  getCachedJson,
  getClientIp,
  json,
  rateLimit,
  readJson,
  sanitizeText,
  setCachedJson,
  sha256,
} from './_shared.js'

const MODEL = 'gpt-4o-mini'

const ANALYZER_SYSTEM_PROMPT =
  'You analyze insurance denial letters for educational purposes. Be concise, factual, and policy-sensitive. Do not cite laws, deadlines, regulators, statutes, or case law unless explicitly present in the letter text. Do not invent policy language. Do not request sensitive personal data. Output must be valid JSON matching the schema.'

const OUTPUT_SCHEMA = {
  name: 'DenialAnalysisV2',
  schema: {
    type: 'object',
    additionalProperties: false,
    required: [
      'denialReasons',
      'keyDates',
      'requestedRemedy',
      'insurer',
      'state',
      'supportingDocs',
      'recommendedArguments',
      'appealOutline',
      'confidenceFlags',
    ],
    properties: {
      denialReasons: { type: 'array', items: { type: 'string' }, minItems: 1, maxItems: 12 },
      keyDates: { type: 'array', items: { type: 'string' }, maxItems: 10 },
      requestedRemedy: { type: 'string' },
      insurer: { type: 'string' },
      state: { type: 'string' },
      supportingDocs: { type: 'array', items: { type: 'string' }, maxItems: 12 },
      recommendedArguments: { type: 'array', items: { type: 'string' }, maxItems: 10 },
      appealOutline: { type: 'array', items: { type: 'string' }, maxItems: 12 },
      confidenceFlags: { type: 'array', items: { type: 'string' }, maxItems: 10 },
    },
  },
}

const MIN_LEN = 200
const MAX_LEN = 12000
const LIMIT = 3
const WINDOW_MS = 15 * 60 * 1000
const TIMEOUT_MS = 35 * 1000
const CACHE_TTL_MS = 6 * 60 * 60 * 1000

export default async (req) => {
  if (req.method !== 'POST') return json(405, { message: 'Method not allowed.' })

  const apiKey = process.env.OPENAI_API_KEY_WCD
  if (!apiKey) return json(503, { message: 'Service is not configured yet. Please try again later.' })

  const ip = getClientIp(req)
  const rl = await rateLimit({ key: `analyze:${ip}`, limit: LIMIT, windowMs: WINDOW_MS })
  if (!rl.allowed) {
    const retryAfter = Math.max(1, Math.ceil(rl.resetMs / 1000))
    return json(429, { message: 'Rate limit exceeded. Please try again later.' }, { 'retry-after': String(retryAfter) })
  }

  const parsed = await readJson(req)
  if (!parsed.ok) return json(400, { message: 'Invalid JSON.' })

  const denialLetterText = sanitizeText(parsed.data?.denial_letter_text)
  const claimType = sanitizeText(parsed.data?.claim_type)
  const state = sanitizeText(parsed.data?.state)
  const insurer = sanitizeText(parsed.data?.insurer)
  const extraContext = sanitizeText(parsed.data?.extra_context)

  if (denialLetterText.length < MIN_LEN) {
    return json(400, { message: `Denial letter text must be at least ${MIN_LEN} characters.` })
  }
  if (denialLetterText.length > MAX_LEN) {
    return json(400, { message: `Denial letter text is too long (max ${MAX_LEN} characters).` })
  }

  const cacheKey = `analysis:${sha256(`${claimType}|${state}|${insurer}|${denialLetterText}`)}`
  const cached = await getCachedJson({ storeName: 'wcd-tools-cache', cacheKey, ttlMs: CACHE_TTL_MS })
  if (cached) return json(200, cached)

  const userPrompt =
    `Analyze the denial letter and return a compact structured object that can be used to draft an appeal letter.\n` +
    `Use short, non-repetitive bullets.\n` +
    `Do not include legal citations or deadlines unless explicitly present in the denial letter text.\n\n` +
    `Optional hints (may be empty):\n` +
    `- claim_type_hint: ${claimType || 'unknown'}\n` +
    `- state_hint: ${state || 'unknown'}\n` +
    `- insurer_hint: ${insurer || 'unknown'}\n\n` +
    `Extra context (may be empty):\n${extraContext || '—'}\n\n` +
    `Denial letter text:\n${denialLetterText}`

  const openai = await callOpenAIResponses({
    apiKey,
    model: MODEL,
    input: [
      { role: 'system', content: [{ type: 'input_text', text: ANALYZER_SYSTEM_PROMPT }] },
      { role: 'user', content: [{ type: 'input_text', text: userPrompt }] },
    ],
    schema: OUTPUT_SCHEMA,
    temperature: 0.2,
    maxOutputTokens: 650,
    timeoutMs: TIMEOUT_MS,
  })

  if (!openai.ok) {
    const message = openai.error === 'timeout'
      ? 'Analysis timed out. Please try again.'
      : 'We could not analyze your letter right now. Please try again.'
    return json(503, { message })
  }

  const text = extractOutputText(openai.json)
  let value = null
  try {
    value = JSON.parse(text)
  } catch {
    value = null
  }

  if (!value) {
    return json(503, { message: 'We could not analyze your letter right now. Please try again.' })
  }

  await setCachedJson({ storeName: 'wcd-tools-cache', cacheKey, ttlMs: CACHE_TTL_MS, value })
  return json(200, value)
}
