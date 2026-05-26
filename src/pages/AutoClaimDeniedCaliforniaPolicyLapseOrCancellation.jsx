import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const AutoClaimDeniedCaliforniaPolicyLapseOrCancellation = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'california', reasonKey: 'policy-lapse-or-cancellation' })
  return <DenialReasonTemplate page={page} />
}

export default AutoClaimDeniedCaliforniaPolicyLapseOrCancellation
