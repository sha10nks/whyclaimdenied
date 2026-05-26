import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const AutoClaimDeniedNorthCarolinaNoCoverageAtTimeOfLoss = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'north-carolina', reasonKey: 'no-coverage-at-time-of-loss' })
  return <DenialReasonTemplate page={page} />
}

export default AutoClaimDeniedNorthCarolinaNoCoverageAtTimeOfLoss
