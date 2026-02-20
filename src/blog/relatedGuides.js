import { getBlogPostsByState, getBlogStateLabel } from './registry'

export const buildRelatedGuides = ({ stateSlug, currentSlug, type }) => {
  const stateLabel = getBlogStateLabel(stateSlug) || stateSlug
  const inState = getBlogPostsByState(stateSlug)

  const siblings = inState
    .filter((p) => p.slug !== currentSlug)
    .slice(0, 4)
    .map((p) => ({ to: p.path, label: p.title }))

  const mainGuides = [
    { to: `/auto-insurance-claims-denied-${stateSlug}`, label: `Auto Insurance Claims Denied in ${stateLabel}` },
    { to: `/health-insurance-claims-denied-${stateSlug}`, label: `Health Insurance Claims Denied in ${stateLabel}` },
  ]

  const stateHub = [{ to: `/blog/${stateSlug}`, label: `Browse ${stateLabel} blog posts` }]

  const topicLinks = String(type || '').includes('health')
    ? [{ to: '/reasons/health-insurance-claim-denied', label: 'Health Insurance Claim Denial Reasons (Overview)' }]
    : [{ to: '/reasons/auto-insurance-claim-denied', label: 'Auto Insurance Claim Denial Reasons (Overview)' }]

  return [...stateHub, ...siblings, ...mainGuides, ...topicLinks].slice(0, 8)
}

