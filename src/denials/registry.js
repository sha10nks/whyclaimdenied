import { BLOG_POSTS, getBlogStateLabel } from '../blog/registry.js'

const STATES = [
  { slug: 'california', label: 'California' },
  { slug: 'florida', label: 'Florida' },
  { slug: 'texas', label: 'Texas' },
  { slug: 'new-york', label: 'New York' },
  { slug: 'pennsylvania', label: 'Pennsylvania' },
  { slug: 'illinois', label: 'Illinois' },
  { slug: 'ohio', label: 'Ohio' },
  { slug: 'georgia', label: 'Georgia' },
  { slug: 'north-carolina', label: 'North Carolina' },
  { slug: 'michigan', label: 'Michigan' },
]

const AUTO_REASONS_DEFAULT = [
  { key: 'no-coverage-at-time-of-loss', title: 'No Coverage at Time of Loss' },
  { key: 'policy-lapse-or-cancellation', title: 'Policy Lapse or Cancellation' },
  { key: 'missed-reporting-deadline', title: 'Missed Reporting Deadline' },
  { key: 'excluded-driver', title: 'Excluded Driver' },
  { key: 'misrepresentation-or-concealment', title: 'Misrepresentation or Concealment' },
  { key: 'non-covered-use', title: 'Non-Covered Use' },
  { key: 'failure-to-cooperate', title: 'Failure to Cooperate' },
  { key: 'disputed-liability', title: 'Disputed Liability or Fault' },
]

const AUTO_REASONS_BY_STATE = {
  texas: [
    { key: 'no-coverage-at-time-of-loss', title: 'No Coverage at Time of Loss' },
    { key: 'missed-reporting-deadline', title: 'Missed Reporting Deadline' },
    { key: 'policy-lapse', title: 'Policy Lapse or Cancellation' },
    { key: 'excluded-driver', title: 'Excluded Driver' },
    { key: 'misrepresentation', title: 'Misrepresentation or Concealment' },
    { key: 'non-covered-use', title: 'Non-Covered Use' },
    { key: 'failure-to-cooperate', title: 'Failure to Cooperate' },
    { key: 'disputed-liability', title: 'Disputed Liability or Fault' },
    { key: 'excluded-vehicle', title: 'Excluded Vehicle' },
    { key: 'coverage-limits-exceeded', title: 'Coverage Limits Exceeded' },
  ],
  florida: [
    { key: 'no-coverage-at-time-of-loss', title: 'No Coverage at Time of Loss' },
    { key: 'policy-lapse-or-cancellation', title: 'Policy Lapse or Cancellation' },
    { key: 'missed-reporting-deadline', title: 'Missed Reporting Deadline' },
    { key: 'excluded-driver', title: 'Excluded Driver' },
    { key: 'misrepresentation-or-omission', title: 'Misrepresentation or Omission' },
    { key: 'non-covered-use', title: 'Non-Covered Use' },
    { key: 'failure-to-cooperate', title: 'Failure to Cooperate' },
    { key: 'disputed-liability', title: 'Disputed Liability or Fault' },
  ],
}

const HEALTH_REASONS_DEFAULT = [
  { key: 'prior-authorization-missing', title: 'Prior Authorization Missing' },
  { key: 'not-medically-necessary', title: 'Not Medically Necessary' },
  { key: 'out-of-network-provider', title: 'Out-of-Network Provider' },
  { key: 'coding-or-documentation-error', title: 'Coding or Documentation Error' },
  { key: 'experimental-or-investigational', title: 'Experimental or Investigational' },
  { key: 'benefit-or-service-excluded', title: 'Benefit or Service Excluded' },
  { key: 'timely-filing-issue', title: 'Timely Filing Issue' },
  { key: 'coordination-of-benefits', title: 'Coordination of Benefits' },
]

const HEALTH_REASONS_BY_STATE = {
  texas: [
    { key: 'lack-of-medical-necessity', title: 'Lack of Medical Necessity' },
    { key: 'out-of-network-provider', title: 'Out-of-Network Provider' },
    { key: 'prior-authorization-missing', title: 'Prior Authorization Missing' },
    { key: 'experimental-treatment', title: 'Experimental or Investigational' },
    { key: 'coverage-exclusions', title: 'Coverage Exclusions' },
    { key: 'filing-errors', title: 'Filing Errors' },
    { key: 'timely-filing-violations', title: 'Timely Filing Violations' },
    { key: 'pre-existing-conditions', title: 'Pre-Existing Conditions' },
    { key: 'benefits-exhausted', title: 'Benefits Exhausted' },
    { key: 'provider-credential-issues', title: 'Provider Credential Issues' },
  ],
}

const getStateLabel = (stateSlug) => {
  return getBlogStateLabel(stateSlug) || STATES.find((s) => s.slug === stateSlug)?.label || stateSlug
}

const buildFaq = ({ stateLabel, domainLabel, reasonTitle }) => ([
  {
    q: `Is this denial final in ${stateLabel}?`,
    a: `Not always. Many denials are based on missing information or an assumption about the facts. Start by getting the reason in writing and asking what document or fact would change the decision for your ${domainLabel.toLowerCase()} claim.`,
  },
  {
    q: `What should I ask for from the insurer first?`,
    a: 'Ask for the exact policy/plan provision relied on, any internal notes or reviewer criteria, and a checklist of what is missing. That turns the denial into a concrete list you can satisfy.',
  },
  {
    q: 'Should I call or write?',
    a: 'Calls can clarify what is missing, but you should submit your request and appeal in writing so there is a clear record of what you sent and when you sent it.',
  },
  {
    q: `How do I write an appeal for ${reasonTitle}?`,
    a: 'Use the denial letter headings as your appeal headings. Address each reason in order with one paragraph and one or two supporting exhibits that directly answer that reason.',
  },
  {
    q: 'What if the insurer ignores my appeal?',
    a: 'Follow up in writing with your submission proof and request a written status update. If communication breaks down, consider filing a consumer complaint with the appropriate regulator for your type of coverage.',
  },
  {
    q: `What deadlines apply?`,
    a: 'Deadlines vary by policy and plan. Use your denial letter and your policy/plan documents as the source of truth and keep proof of your submission dates.',
  },
])

const buildDenialReasonContent = ({ domain, stateSlug, stateLabel, reasonKey, reasonTitle, pathSegment, pillarPath, relatedReasons = [] }) => {
  const domainLabel = domain === 'health' ? 'Health' : 'Auto'
  const canonicalPath = `/${pillarPath.replace(/^\//, '')}/${pathSegment}`
  const canonicalUrl = `https://whyclaimdenied.com${canonicalPath}`

  const intro = [
    `A denial for “${reasonTitle}” usually means the insurer believes one key requirement was not met or one key exclusion applies. Your fastest path forward is to identify exactly what the insurer relied on and respond to that decision with targeted documentation.`,
    `Instead of arguing in general terms, treat the denial letter like a checklist. Build a short timeline, ask for the cited policy/plan language, and submit a point-by-point response that makes it easy for a reviewer to verify the facts.`,
  ]

  const why = [
    `This denial reason shows up when the insurer’s records, claim notes, or plan criteria do not match what you believe happened. Sometimes the denial is accurate; other times it’s based on missing documentation, an incorrect date, or an assumption about your situation.`,
    `Most reversals happen when you narrow the dispute. Identify the single sentence in the denial letter that drives the decision and provide the one or two documents that directly answer it. Keep everything in writing so your file shows what you provided and when.`,
  ]

  const checklist = [
    'The full denial letter and the exact reason stated (quote it back in your appeal).',
    'The policy/plan provision relied on (policy form section, endorsement, or medical policy criteria).',
    'Claim notes or reviewer notes that show what information the insurer used.',
    'A written checklist of what documents or facts are missing for reconsideration.',
    'Any photos, statements, records, or reports the insurer relied on.',
    'A copy of the declarations page (auto) or your plan summary/benefits document (health).',
    'Instructions for submitting an appeal (portal path, address, or form required).',
    'Confirmation of the appeal due date stated in your letter and where it comes from.',
  ]

  const steps = [
    'Highlight each denial reason in the letter; those lines become your appeal headings.',
    'Request the cited policy/plan language and any internal notes or criteria used.',
    'Create a one-page timeline with key dates and the documents that support each date.',
    'Gather only high-impact documents that directly answer the denial reason.',
    'Write a short appeal letter that responds point-by-point in the same order as the denial.',
    'Label exhibits (Exhibit A, B, C) and reference them in the paragraph where they matter.',
    'Submit through the documented channel and keep proof of delivery (portal receipt/email/certified mail).',
    'Follow up in writing for a status update and a written decision date range.',
  ]

  const mistakes = [
    'Sending a long narrative without answering the exact denial reason in order.',
    'Submitting many documents without labels, making review harder.',
    'Missing deadlines because dates are not tracked in one place.',
    'Relying only on phone calls and failing to follow up in writing.',
    'Not requesting the exact policy/plan language used to deny.',
    'Arguing fairness without providing evidence tied to the contract language.',
  ]

  const stateBlogLabel = getStateLabel(stateSlug)
  const stateBlogPosts = BLOG_POSTS.filter((p) => p.state === stateSlug)
  const relevantBlog = stateBlogPosts.find((p) => {
    if (domain === 'auto') return p.type === 'auto' || p.type === 'case-auto'
    return p.type === 'health' || p.type === 'case-health'
  })

  const blogLinks = relevantBlog ? [{ to: relevantBlog.path, label: relevantBlog.title }] : []

  const relatedLinks = relatedReasons
    .filter(Boolean)
    .slice(0, 2)
    .map((r) => ({ to: `${pillarPath}/${r.key}`, label: `Related: ${r.title}` }))

  const internalLinks = [
    ...relatedLinks,
    { to: `/blog/${stateSlug}`, label: `Browse ${stateBlogLabel} blog posts` },
    ...blogLinks,
    { to: '/blog', label: 'Browse all states (blog)' },
    { to: '/#guides-by-state', label: 'Browse guides by state' },
  ]

  return {
    domain,
    domainLabel,
    stateSlug,
    stateLabel,
    reasonKey,
    reasonTitle,
    metaTitle: `${reasonTitle} — ${stateLabel} ${domainLabel} Claim Denial`,
    metaDescription: `Why “${reasonTitle}” denials happen in ${stateLabel} and how to respond with a checklist, steps, and appeal-ready documentation.`,
    canonicalUrl,
    h1: `${reasonTitle} — ${stateLabel} ${domainLabel} Claim Denial`,
    breadcrumbs: [
      { label: stateLabel, link: pillarPath },
      { label: `${domainLabel} Claim Denials`, link: pillarPath },
      { label: reasonTitle, link: null },
    ],
    pillarPath,
    intro,
    why,
    checklist,
    steps,
    mistakes,
    faq: buildFaq({ stateLabel, domainLabel, reasonTitle }),
    internalLinks,
  }
}

export const DENIAL_PAGES = (() => {
  const pages = []

  for (const s of STATES) {
    const stateLabel = s.label
    const autoReasons = AUTO_REASONS_BY_STATE[s.slug] || AUTO_REASONS_DEFAULT
    const healthReasons = HEALTH_REASONS_BY_STATE[s.slug] || HEALTH_REASONS_DEFAULT

    const autoPillar = `/auto-insurance-claims-denied-${s.slug}`
    const healthPillar = `/health-insurance-claims-denied-${s.slug}`

    for (let idx = 0; idx < autoReasons.length; idx += 1) {
      const r = autoReasons[idx]
      const pathSegment = r.key
      const relatedReasons = [autoReasons[idx - 1], autoReasons[idx + 1]].filter(Boolean)
      pages.push(buildDenialReasonContent({
        domain: 'auto',
        stateSlug: s.slug,
        stateLabel,
        reasonKey: r.key,
        reasonTitle: r.title,
        pathSegment,
        pillarPath: autoPillar,
        relatedReasons,
      }))
    }

    for (let idx = 0; idx < healthReasons.length; idx += 1) {
      const r = healthReasons[idx]
      const pathSegment = r.key
      const relatedReasons = [healthReasons[idx - 1], healthReasons[idx + 1]].filter(Boolean)
      pages.push(buildDenialReasonContent({
        domain: 'health',
        stateSlug: s.slug,
        stateLabel,
        reasonKey: r.key,
        reasonTitle: r.title,
        pathSegment,
        pillarPath: healthPillar,
        relatedReasons,
      }))
    }
  }

  return pages
})()

export const getDenialPage = ({ domain, stateSlug, reasonKey }) => {
  return DENIAL_PAGES.find(
    (p) => p.domain === domain && p.stateSlug === stateSlug && p.reasonKey === reasonKey,
  )
}
