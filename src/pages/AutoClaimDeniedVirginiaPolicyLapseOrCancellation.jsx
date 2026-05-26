import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const AutoClaimDeniedVirginiaPolicyLapseOrCancellation = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'virginia', reasonKey: 'policy-lapse-or-cancellation' })
  return <DenialReasonTemplate page={page} />
}

export default AutoClaimDeniedVirginiaPolicyLapseOrCancellation
