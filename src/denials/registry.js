import { BLOG_POSTS, getBlogStateLabel } from '../blog/registry.js'

const STATE_SIGNALS = {
  california: {
    regulatorName: 'California Department of Insurance (CDI)',
    domainNotes: {
      auto: [
        'California claim disputes often turn on documentation and timing: what was reported, when it was reported, and whether the insurer is relying on an exclusion or a policy condition.',
        'If communication breaks down, CDI consumer assistance is a practical escalation path to request a clearer, written explanation and confirm what the insurer says is missing.',
      ],
      health: [
        'California health denials frequently hinge on medical-necessity criteria, coding, prior authorization, or network status—so the strongest appeals tie evidence to plan criteria rather than general fairness arguments.',
        'If you cannot get a stable, written denial rationale, California’s regulator resources can help you request a clearer explanation and next steps for review.',
      ],
    },
  },
  florida: {
    regulatorName: 'Florida Department of Financial Services (DFS)',
    domainNotes: {
      auto: [
        'Florida auto denials often revolve around coverage at time of loss, policy conditions, and disputed causation. The cleanest appeals respond to the insurer’s exact policy citation with one or two exhibits per point.',
        'DFS consumer assistance is a common escalation option when you need a clearer written explanation or the file appears stuck.',
      ],
      health: [
        'Florida health denials commonly involve authorization, documentation, and plan-criteria disputes. Evidence that maps to criteria (notes, test results, letter of medical necessity) tends to move decisions more than broad narratives.',
        'When the insurer’s reasoning is vague, DFS consumer assistance can help you request a more specific written basis for the decision.',
      ],
    },
  },
  texas: {
    regulatorName: 'Texas Department of Insurance (TDI)',
    domainNotes: {
      auto: [
        'Texas auto denials often come down to whether the insurer’s file supports its assumption about dates, drivers, vehicles, and usage. Your appeal is strongest when it builds a simple timeline and attaches proof for each disputed fact.',
        'TDI consumer complaint resources can be useful when you cannot get the insurer to identify the exact policy language and facts relied on.',
      ],
      health: [
        'Texas health denials are frequently criteria-driven. Appeals that reference plan documents, medical policy criteria, and provider documentation tend to produce higher information gain for reviewers.',
        'If you are getting inconsistent answers, TDI consumer complaint resources can help you request a clearer written explanation and next steps.',
      ],
    },
  },
  'new-york': {
    regulatorName: 'New York State Department of Financial Services (DFS)',
    domainNotes: {
      auto: [
        'New York auto claim denials often involve disputed liability and coverage interpretation. The best appeals keep the dispute narrow: identify the policy clause, then provide a short proof package that answers it.',
        'DFS consumer assistance can be a useful escalation path when you need a clearer written basis for the denial or a documented status update.',
      ],
      health: [
        'New York health denials can hinge on network status, medical necessity, authorization, and filing rules. Appeals tend to win when they directly map evidence to the plan’s stated criteria.',
        'When you cannot get stable, written rationale, DFS consumer assistance can help you request a clearer explanation and confirm available review options.',
      ],
    },
  },
  pennsylvania: {
    regulatorName: 'Pennsylvania Insurance Department',
    domainNotes: {
      auto: [
        'Pennsylvania auto denials often turn on proof: coverage at time of loss, policy conditions, and causation. Treat the denial letter as a checklist and respond to each point with labeled exhibits.',
        'If the insurer is not providing a clear written basis, Pennsylvania Insurance Department consumer services can help you request clarity and process transparency.',
      ],
      health: [
        'Pennsylvania health denials can be documentation- and criteria-driven. Appeals that include provider records and explain how evidence meets criteria tend to be stronger than general statements.',
        'When communication stalls, Pennsylvania Insurance Department consumer services can help you request a clearer explanation and documented next steps.',
      ],
    },
  },
  illinois: {
    regulatorName: 'Illinois Department of Insurance',
    domainNotes: {
      auto: [
        'Illinois auto denials are often tied to coverage interpretation, reporting, and fault disputes. The highest-value appeals align facts to policy language and include proof of timing and communications.',
        'If the denial reason is vague, Illinois Department of Insurance consumer assistance can help you request a clearer written explanation.',
      ],
      health: [
        'Illinois health denials frequently depend on medical necessity criteria, coding, authorization, and network rules. Your appeal should be criteria-first, evidence-second, and concise.',
        'When you cannot get a stable rationale, Illinois Department of Insurance consumer assistance can help you request clarity and next steps.',
      ],
    },
  },
  ohio: {
    regulatorName: 'Ohio Department of Insurance',
    domainNotes: {
      auto: [
        'Ohio auto denials often focus on coverage timing, policy conditions, and disputed causation. Appeals are strongest when they provide a tight timeline plus the specific documents that fix the disputed assumption.',
        'Ohio Department of Insurance consumer services can help when you need a clearer written basis for the denial and proof of what was reviewed.',
      ],
      health: [
        'Ohio health denials can be driven by criteria, coding, and prior authorization. Appeals that attach provider records and explain how evidence meets criteria tend to perform better.',
        'If the insurer’s explanation is inconsistent, Ohio Department of Insurance consumer services can help you request a clearer written basis and available review options.',
      ],
    },
  },
  georgia: {
    regulatorName: 'Georgia Office of Commissioner of Insurance',
    domainNotes: {
      auto: [
        'Georgia auto denials commonly involve coverage status, excluded drivers, and disputed liability. Strong appeals focus on policy language, documented communications, and a clean proof package.',
        'If you cannot get the insurer to identify exactly what is missing, Georgia’s insurance regulator resources can help you request clearer written explanation.',
      ],
      health: [
        'Georgia health denials often turn on documentation and criteria. Appeals that map evidence to criteria (and request reviewer criteria) are typically higher information gain.',
        'When communication breaks down, Georgia’s insurance regulator resources can help you request a clearer written decision basis and next steps.',
      ],
    },
  },
  'north-carolina': {
    regulatorName: 'North Carolina Department of Insurance',
    domainNotes: {
      auto: [
        'North Carolina auto denials often depend on policy conditions and disputed facts. Use the denial letter’s exact headings to structure your appeal and attach proof tied to each heading.',
        'North Carolina Department of Insurance consumer services can help when you cannot get stable written reasoning or the file appears stuck.',
      ],
      health: [
        'North Carolina health denials frequently involve authorization, network rules, and medical necessity criteria. Appeals with targeted documentation tend to be stronger than broad narratives.',
        'If the insurer will not provide clear written rationale, North Carolina Department of Insurance consumer services can help you request clarity and process visibility.',
      ],
    },
  },
  michigan: {
    regulatorName: 'Michigan Department of Insurance and Financial Services (DIFS)',
    domainNotes: {
      auto: [
        'Michigan auto denials often come down to what the insurer’s file shows versus what you can document. A short timeline + exhibits that correct dates, drivers, or coverage assumptions can materially improve appeal outcomes.',
        'DIFS consumer assistance can help when the insurer will not identify the specific policy language and facts relied on.',
      ],
      health: [
        'Michigan health denials commonly involve criteria and documentation. Appeals are stronger when you request the plan criteria used and submit records that directly satisfy those criteria.',
        'If the explanation keeps changing, DIFS consumer assistance can help you request a clearer written basis and next steps.',
      ],
    },
  },
  'new-jersey': {
    regulatorName: 'New Jersey Department of Banking and Insurance (DOBI)',
    domainNotes: {
      auto: [
        'New Jersey auto denials often hinge on liability disputes and policy-condition issues. Appeals that respond point-by-point to the denial letter with labeled exhibits tend to be more reviewable.',
        'DOBI consumer assistance can help you request a clearer written explanation if communication is not productive.',
      ],
      health: [
        'New Jersey health denials often involve authorization, network status, and medical necessity. Appeals are stronger when they map evidence to criteria and request the criteria used.',
        'If you cannot get stable written rationale, DOBI consumer assistance can help you request clarification and next steps.',
      ],
    },
  },
  virginia: {
    regulatorName: 'Virginia SCC Bureau of Insurance',
    domainNotes: {
      auto: [
        'Virginia auto denials commonly involve coverage timing and disputed facts. Your appeal should be short, evidence-led, and organized using the denial letter’s exact headings.',
        'If you cannot get the insurer to state the exact basis in writing, Virginia SCC Bureau of Insurance consumer assistance can help you request clarity and process transparency.',
      ],
      health: [
        'Virginia health denials often involve criteria-based decisions and documentation gaps. Appeals that attach targeted records and explain how they satisfy criteria tend to be higher information gain.',
        'When the decision basis is unclear, Virginia SCC Bureau of Insurance consumer assistance can help you request a clearer written explanation and next steps.',
      ],
    },
  },
}

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
  { slug: 'new-jersey', label: 'New Jersey' },
  { slug: 'virginia', label: 'Virginia' },
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
    q: `Where can I get help in ${stateLabel} if the insurer won’t explain the denial?`,
    a: `Start by requesting the exact policy/plan provision and the specific facts relied on in writing. If you still cannot get a clear explanation, you can contact your state’s insurance regulator consumer assistance office for help understanding the process and requesting a clearer written basis.`,
  },
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

  const signals = STATE_SIGNALS[stateSlug]
  const stateContext = signals?.domainNotes?.[domain] || []
  const regulatorName = signals?.regulatorName || null

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
    stateContext,
    regulatorName,
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
