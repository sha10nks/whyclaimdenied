import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const AutoClaimDeniedCaliforniaNoCoverageAtTimeOfLoss = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'california', reasonKey: 'no-coverage-at-time-of-loss' })
  return <DenialReasonTemplate page={page} />
}

export default AutoClaimDeniedCaliforniaNoCoverageAtTimeOfLoss
