import { sanitizePastedText } from '../utils/textSanitize'

const asStringArray = (value, maxItems) => {
  const arr = Array.isArray(value) ? value : []
  const out = []
  for (const v of arr) {
    const s = sanitizePastedText(v)
    if (s) out.push(s)
    if (out.length >= maxItems) break
  }
  return out
}

export const normalizeAnalysis = (value) => {
  if (!value || typeof value !== 'object') return null

  const denialReasons = asStringArray(value.denialReasons, 12)
  const keyDates = asStringArray(value.keyDates, 10)
  const supportingDocs = asStringArray(value.supportingDocs, 12)
  const recommendedArguments = asStringArray(value.recommendedArguments, 10)
  const appealOutline = asStringArray(value.appealOutline, 12)
  const confidenceFlags = asStringArray(value.confidenceFlags, 10)

  const requestedRemedy = sanitizePastedText(value.requestedRemedy)
  const insurer = sanitizePastedText(value.insurer)
  const state = sanitizePastedText(value.state).toUpperCase().slice(0, 2)

  if (!denialReasons.length) return null

  return {
    denialReasons,
    keyDates,
    requestedRemedy,
    insurer,
    state,
    supportingDocs,
    recommendedArguments,
    appealOutline,
    confidenceFlags,
  }
}
