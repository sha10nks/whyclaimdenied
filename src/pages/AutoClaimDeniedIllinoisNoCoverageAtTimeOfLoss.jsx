import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const AutoClaimDeniedIllinoisNoCoverageAtTimeOfLoss = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'illinois', reasonKey: 'no-coverage-at-time-of-loss' })
  return <DenialReasonTemplate page={page} />
}

export default AutoClaimDeniedIllinoisNoCoverageAtTimeOfLoss
