import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const AutoClaimDeniedIllinoisPolicyLapseOrCancellation = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'illinois', reasonKey: 'policy-lapse-or-cancellation' })
  return <DenialReasonTemplate page={page} />
}

export default AutoClaimDeniedIllinoisPolicyLapseOrCancellation
