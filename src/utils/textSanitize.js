export const sanitizePastedText = (raw) => {
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

export const clampTextLength = (text, maxChars) => {
  const t = String(text || '')
  if (t.length <= maxChars) return t
  return `${t.slice(0, maxChars)}\n\n[Truncated for processing]`
}

export const countWords = (text) => {
  const t = String(text || '').trim()
  if (!t) return 0
  return t.split(/\s+/).filter(Boolean).length
}
