import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const AutoClaimDeniedTexasNoCoverage = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'texas', reasonKey: 'no-coverage-at-time-of-loss' })
  return <DenialReasonTemplate page={page} />
}

export default AutoClaimDeniedTexasNoCoverage
