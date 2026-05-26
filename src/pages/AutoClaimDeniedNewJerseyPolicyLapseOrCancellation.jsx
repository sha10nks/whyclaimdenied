import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const AutoClaimDeniedNewJerseyPolicyLapseOrCancellation = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'new-jersey', reasonKey: 'policy-lapse-or-cancellation' })
  return <DenialReasonTemplate page={page} />
}

export default AutoClaimDeniedNewJerseyPolicyLapseOrCancellation
