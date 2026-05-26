import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const AutoClaimDeniedFloridaPolicyLapseOrCancellation = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'florida', reasonKey: 'policy-lapse-or-cancellation' })
  return <DenialReasonTemplate page={page} />
}

export default AutoClaimDeniedFloridaPolicyLapseOrCancellation
