import { useCallback, useEffect, useMemo, useState } from 'react'
import { clearToolSession, loadToolSession, saveToolSession } from './session'
import { normalizeAnalysis } from './analysis'
import { ToolSessionContext } from './ToolSessionContext'

export default function ToolSessionProvider({ children }) {
  const [analysis, setAnalysisState] = useState(null)

  useEffect(() => {
    const loaded = loadToolSession()
    const normalized = normalizeAnalysis(loaded?.analysis)
    if (normalized) setAnalysisState(normalized)
  }, [])

  const setAnalysis = useCallback((next) => {
    const normalized = normalizeAnalysis(next)
    if (!normalized) return false
    setAnalysisState(normalized)
    saveToolSession({ analysis: normalized })
    return true
  }, [])

  const clear = useCallback(() => {
    setAnalysisState(null)
    clearToolSession()
  }, [])

  const value = useMemo(() => ({ analysis, setAnalysis, clear }), [analysis, clear, setAnalysis])

  return (
    <ToolSessionContext.Provider value={value}>
      {children}
    </ToolSessionContext.Provider>
  )
}
