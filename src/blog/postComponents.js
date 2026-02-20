import { lazy } from 'react'
import { getBlogPost } from './registry'

const moduleMap = import.meta.glob('../pages/blog/**/*.jsx')
const cache = new Map()

export const getBlogPostComponent = (state, slug) => {
  const post = getBlogPost({ state, slug })
  if (!post || !post.module) return null
  const loader = moduleMap[post.module]
  if (!loader) return null
  const key = `${String(state || '').toLowerCase()}/${String(slug || '').toLowerCase()}`
  if (cache.has(key)) return cache.get(key)
  const Comp = lazy(loader)
  cache.set(key, Comp)
  return Comp
}
