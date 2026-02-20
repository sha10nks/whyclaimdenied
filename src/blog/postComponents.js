import { lazy } from 'react'

const loaders = {
  'california/why-auto-claims-denied': () => import('../pages/blog/california/BlogCaliforniaWhyAutoDenied.jsx'),
  'california/how-appeal-auto-claim': () => import('../pages/blog/california/BlogCaliforniaHowAppealAuto.jsx'),
  'california/case-auto-success': () => import('../pages/blog/california/BlogCaliforniaCaseAutoSuccess.jsx'),
  'california/why-health-claims-denied': () => import('../pages/blog/california/BlogCaliforniaWhyHealthDenied.jsx'),
  'california/how-appeal-health-claim': () => import('../pages/blog/california/BlogCaliforniaHowAppealHealth.jsx'),
  'california/case-health-success': () => import('../pages/blog/california/BlogCaliforniaCaseHealthSuccess.jsx'),

  'florida/why-auto-claims-denied': () => import('../pages/blog/florida/BlogFloridaWhyAutoDenied.jsx'),
  'florida/how-appeal-auto-claim': () => import('../pages/blog/florida/BlogFloridaHowAppealAuto.jsx'),
  'florida/case-auto-success': () => import('../pages/blog/florida/BlogFloridaCaseAutoSuccess.jsx'),
  'florida/why-health-claims-denied': () => import('../pages/blog/florida/BlogFloridaWhyHealthDenied.jsx'),
  'florida/how-appeal-health-claim': () => import('../pages/blog/florida/BlogFloridaHowAppealHealth.jsx'),
  'florida/case-health-success': () => import('../pages/blog/florida/BlogFloridaCaseHealthSuccess.jsx'),

  'texas/why-auto-claims-denied': () => import('../pages/blog/texas/BlogTexasWhyAutoDenied.jsx'),
  'texas/how-appeal-auto-claim': () => import('../pages/blog/texas/BlogTexasHowAppealAuto.jsx'),
  'texas/case-auto-success': () => import('../pages/blog/texas/BlogTexasCaseAutoSuccess.jsx'),
  'texas/why-health-claims-denied': () => import('../pages/blog/texas/BlogTexasWhyHealthDenied.jsx'),
  'texas/how-appeal-health-claim': () => import('../pages/blog/texas/BlogTexasHowAppealHealth.jsx'),
  'texas/case-health-success': () => import('../pages/blog/texas/BlogTexasCaseHealthSuccess.jsx'),

  'newyork/why-auto-claims-denied': () => import('../pages/blog/newyork/BlogNewYorkWhyAutoDenied.jsx'),
  'newyork/how-appeal-auto-claim': () => import('../pages/blog/newyork/BlogNewYorkHowAppealAuto.jsx'),
  'newyork/case-auto-success': () => import('../pages/blog/newyork/BlogNewYorkCaseAutoSuccess.jsx'),
  'newyork/why-health-claims-denied': () => import('../pages/blog/newyork/BlogNewYorkWhyHealthDenied.jsx'),
  'newyork/how-appeal-health-claim': () => import('../pages/blog/newyork/BlogNewYorkHowAppealHealth.jsx'),
  'newyork/case-health-success': () => import('../pages/blog/newyork/BlogNewYorkCaseHealthSuccess.jsx'),

  'new-york/why-auto-claims-denied': () => import('../pages/blog/newyork/BlogNewYorkWhyAutoDenied.jsx'),
  'new-york/how-appeal-auto-claim': () => import('../pages/blog/newyork/BlogNewYorkHowAppealAuto.jsx'),
  'new-york/case-auto-success': () => import('../pages/blog/newyork/BlogNewYorkCaseAutoSuccess.jsx'),
  'new-york/why-health-claims-denied': () => import('../pages/blog/newyork/BlogNewYorkWhyHealthDenied.jsx'),
  'new-york/how-appeal-health-claim': () => import('../pages/blog/newyork/BlogNewYorkHowAppealHealth.jsx'),
  'new-york/case-health-success': () => import('../pages/blog/newyork/BlogNewYorkCaseHealthSuccess.jsx'),
}

const cache = new Map()

export const getBlogPostComponent = (state, slug) => {
  const key = `${String(state || '').toLowerCase()}/${String(slug || '').toLowerCase()}`
  const loader = loaders[key]
  if (!loader) return null
  if (cache.has(key)) return cache.get(key)
  const Comp = lazy(loader)
  cache.set(key, Comp)
  return Comp
}
