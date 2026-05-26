const STORAGE_KEY = 'wcd_tools_session_v1'

export const TOOL_SESSION_TTL_MS = 30 * 60 * 1000

export const safeParseSession = (raw) => {
  try {
    const parsed = JSON.parse(String(raw || ''))
    if (!parsed || typeof parsed !== 'object') return null
    if (typeof parsed.createdAt !== 'number') return null
    if (!parsed.analysis || typeof parsed.analysis !== 'object') return null
    return parsed
  } catch {
    return null
  }
}

export const loadToolSession = () => {
  if (typeof window === 'undefined') return null
  const raw = window.sessionStorage?.getItem(STORAGE_KEY)
  const parsed = safeParseSession(raw)
  if (!parsed) return null
  if (Date.now() - parsed.createdAt > TOOL_SESSION_TTL_MS) {
    try {
      window.sessionStorage?.removeItem(STORAGE_KEY)
    } catch {
      // ignore
    }
    return null
  }
  return parsed
}

export const saveToolSession = ({ analysis }) => {
  if (typeof window === 'undefined') return
  const payload = { createdAt: Date.now(), analysis }
  try {
    window.sessionStorage?.setItem(STORAGE_KEY, JSON.stringify(payload))
  } catch {
    // ignore
  }
}

export const clearToolSession = () => {
  if (typeof window === 'undefined') return
  try {
    window.sessionStorage?.removeItem(STORAGE_KEY)
  } catch {
    // ignore
  }
}
