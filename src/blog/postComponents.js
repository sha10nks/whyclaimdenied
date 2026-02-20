import { createElement, lazy } from 'react'
import { getBlogPost } from './registry'
import StandardPost from './templates/StandardPost'

const moduleMap = import.meta.glob('./posts/**/*.js')
const cache = new Map()

export const getBlogPostComponent = (state, slug) => {
  const postMeta = getBlogPost({ state, slug })
  if (!postMeta || !postMeta.module) return null
  const loader = moduleMap[postMeta.module]
  if (!loader) return null
  const key = `${String(state || '').toLowerCase()}/${String(slug || '').toLowerCase()}`
  if (cache.has(key)) return cache.get(key)
  const Comp = lazy(async () => {
    const mod = await loader()
    const data = mod?.post
    return {
      default: () => createElement(StandardPost, { post: data }),
    }
  })
  cache.set(key, Comp)
  return Comp
}
