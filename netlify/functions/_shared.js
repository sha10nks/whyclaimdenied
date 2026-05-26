import { getStore } from '@netlify/blobs'
import crypto from 'node:crypto'

export const json = (statusCode, body, extraHeaders) => {
  return new Response(JSON.stringify(body), {
    status: statusCode,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
      ...(extraHeaders || {}),
    },
  })
}

export const readJson = async (req) => {
  try {
    const text = await req.text()
    if (!text) return { ok: true, data: {} }
    return { ok: true, data: JSON.parse(text) }
  } catch {
    return { ok: false, data: null }
  }
}

export const getClientIp = (req) => {
  const direct = req.headers.get('x-nf-client-connection-ip')
  if (direct) return direct
  const fwd = req.headers.get('x-forwarded-for')
  if (fwd) return fwd.split(',')[0].trim()
  return 'unknown'
}

export const sanitizeText = (raw) => {
  if (raw == null) return ''
  let text = String(raw)
  {
    let out = ''
    for (let i = 0; i < text.length; i += 1) {
      const code = text.charCodeAt(i)
      if (code === 9 || code === 10 || code >= 32) out += text[i]
    }
    text = out
  }
  text = text.replace(/\r\n/g, '\n')
  text = text.replace(/\r/g, '\n')
  text = text.replace(/\n{4,}/g, '\n\n\n')
  text = text.replace(/[ \t]{3,}/g, '  ')
  return text.trim()
}

export const sha256 = (value) => {
  return crypto.createHash('sha256').update(String(value)).digest('hex')
}

export const rateLimit = async ({ key, limit, windowMs }) => {
  const store = getStore('wcd-rate-limit')
  const now = Date.now()
  const windowStart = now - windowMs

  let entry = null
  try {
    const raw = await store.get(key)
    if (raw) entry = JSON.parse(raw)
  } catch {
    entry = null
  }

  const hits = Array.isArray(entry?.hits) ? entry.hits : []
  const fresh = hits.filter((ts) => typeof ts === 'number' && ts >= windowStart)
  if (fresh.length >= limit) {
    return { allowed: false, remaining: 0, resetMs: Math.max(0, (fresh[0] + windowMs) - now) }
  }

  fresh.push(now)
  try {
    await store.set(key, JSON.stringify({ hits: fresh }))
  } catch {
    // ignore
  }

  return { allowed: true, remaining: Math.max(0, limit - fresh.length), resetMs: Math.max(0, (fresh[0] + windowMs) - now) }
}

export const getCachedJson = async ({ storeName, cacheKey }) => {
  const store = getStore(storeName)
  try {
    const raw = await store.get(cacheKey)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (!parsed?.expiresAt || typeof parsed.expiresAt !== 'number') return null
    if (Date.now() > parsed.expiresAt) return null
    return parsed.value || null
  } catch {
    return null
  }
}

export const setCachedJson = async ({ storeName, cacheKey, ttlMs, value }) => {
  const store = getStore(storeName)
  const payload = {
    createdAt: Date.now(),
    expiresAt: Date.now() + ttlMs,
    value,
  }
  try {
    await store.set(cacheKey, JSON.stringify(payload))
  } catch {
    // ignore
  }
}

export const extractOutputText = (openaiResponseJson) => {
  if (!openaiResponseJson) return ''
  if (typeof openaiResponseJson.output_text === 'string') return openaiResponseJson.output_text

  const output = Array.isArray(openaiResponseJson.output) ? openaiResponseJson.output : []
  for (const item of output) {
    const content = Array.isArray(item?.content) ? item.content : []
    for (const c of content) {
      if (c?.type === 'output_text' && typeof c.text === 'string') return c.text
    }
  }
  return ''
}

export const callOpenAIResponses = async ({ apiKey, model, input, schema, temperature, maxOutputTokens, timeoutMs }) => {
  const controller = new AbortController()
  const id = setTimeout(() => controller.abort(), timeoutMs)
  try {
    const res = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        input,
        temperature,
        max_output_tokens: maxOutputTokens,
        store: false,
        text: {
          format: {
            type: 'json_schema',
            name: schema.name,
            strict: true,
            schema: schema.schema,
          },
        },
      }),
      signal: controller.signal,
    })

    const jsonBody = await res.json().catch(() => null)
    return { ok: res.ok, status: res.status, json: jsonBody, error: null }
  } catch (e) {
    const name = String(e?.name || '')
    const isTimeout = name === 'AbortError'
    return { ok: false, status: isTimeout ? 504 : 502, json: null, error: isTimeout ? 'timeout' : 'fetch_failed' }
  } finally {
    clearTimeout(id)
  }
}
