import { getGuideBySlug } from './registry'

const DEFAULT_GUIDE_SLUGS = [
  'what-to-do-after-a-claim-denial',
  'how-to-write-an-insurance-appeal-letter',
  'appeal-deadlines-and-timelines',
]

const REASON_TO_GUIDE = {
  'no-coverage-at-time-of-loss': 'auto-claim-denied-no-coverage-at-time-of-loss',
  'policy-lapse-or-cancellation': 'auto-claim-denied-policy-lapse-or-cancellation',
  'policy-lapse': 'auto-claim-denied-policy-lapse-or-cancellation',
  'missed-reporting-deadline': 'auto-claim-denied-late-notice-or-missed-deadline',
  'excluded-driver': 'auto-claim-denied-excluded-driver',
  'misrepresentation-or-concealment': 'auto-claim-denied-misrepresentation-or-concealment',
  'misrepresentation-or-omission': 'auto-claim-denied-misrepresentation-or-concealment',
  misrepresentation: 'auto-claim-denied-misrepresentation-or-concealment',
  'non-covered-use': 'auto-claim-denied-non-covered-use',
  'failure-to-cooperate': 'auto-claim-denied-failure-to-cooperate',
  'disputed-liability': 'auto-claim-denied-disputed-liability',

  'prior-authorization-missing': 'health-claim-denied-prior-authorization',
  'lack-of-medical-necessity': 'health-claim-denied-not-medically-necessary',
  'not-medically-necessary': 'health-claim-denied-not-medically-necessary',
  'out-of-network-provider': 'health-claim-denied-out-of-network',
  'coding-or-documentation-error': 'health-claim-denied-coding-or-documentation',
  'filing-errors': 'health-claim-denied-coding-or-documentation',
  'timely-filing-issue': 'health-claim-denied-timely-filing',
  'timely-filing-violations': 'health-claim-denied-timely-filing',
  'coordination-of-benefits': 'health-claim-denied-coordination-of-benefits',
  'pre-existing-conditions': 'health-claim-denied-pre-existing-condition',
}

const unique = (arr) => Array.from(new Set(arr.filter(Boolean)))

export const getRelatedGuideSlugsForDenial = ({ reasonKey }) => {
  const picked = []
  const match = REASON_TO_GUIDE[String(reasonKey || '')]
  if (match) picked.push(match)
  picked.push(...DEFAULT_GUIDE_SLUGS)
  return unique(picked).slice(0, 3)
}

export const getRelatedGuidesForDenial = ({ reasonKey }) => {
  return getRelatedGuideSlugsForDenial({ reasonKey })
    .map((s) => getGuideBySlug(s))
    .filter(Boolean)
}

export const getRecommendedGuidesForStateHub = () => {
  return DEFAULT_GUIDE_SLUGS.map((s) => getGuideBySlug(s)).filter(Boolean)
}

