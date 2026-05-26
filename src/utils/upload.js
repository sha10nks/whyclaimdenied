export const uploadFormDataWithProgress = ({ url, formData, timeoutMs, onProgress }) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    const timer = setTimeout(() => {
      try {
        xhr.abort()
      } catch {
        // ignore
      }
    }, timeoutMs)

    xhr.open('POST', url, true)
    xhr.responseType = 'json'

    xhr.upload.onprogress = (evt) => {
      if (!evt.lengthComputable) return
      const pct = Math.round((evt.loaded / evt.total) * 100)
      onProgress?.(Math.max(0, Math.min(100, pct)))
    }

    xhr.onload = () => {
      clearTimeout(timer)
      resolve({ status: xhr.status, ok: xhr.status >= 200 && xhr.status < 300, data: xhr.response })
    }

    xhr.onerror = () => {
      clearTimeout(timer)
      reject(new Error('network_error'))
    }

    xhr.onabort = () => {
      clearTimeout(timer)
      reject(new Error('timeout'))
    }

    xhr.send(formData)
  })
}
