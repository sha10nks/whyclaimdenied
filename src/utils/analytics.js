export const trackEvent = (name, payload = {}) => {
  if (typeof window === 'undefined') return

  try {
    window.dispatchEvent(new CustomEvent('wcd:event', { detail: { name, payload } }))
  } catch {
    // ignore
  }

  try {
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({ event: name, ...payload })
    }
  } catch {
    // ignore
  }

  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', name, payload)
    }
  } catch {
    // ignore
  }
}

