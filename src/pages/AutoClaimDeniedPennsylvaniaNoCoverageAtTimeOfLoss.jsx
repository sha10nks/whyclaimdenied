import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const AutoClaimDeniedPennsylvaniaNoCoverageAtTimeOfLoss = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'pennsylvania', reasonKey: 'no-coverage-at-time-of-loss' })
  return <DenialReasonTemplate page={page} />
}

export default AutoClaimDeniedPennsylvaniaNoCoverageAtTimeOfLoss
