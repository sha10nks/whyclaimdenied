import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const AutoClaimDeniedTexasPolicyLapse = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'texas', reasonKey: 'policy-lapse' })
  return <DenialReasonTemplate page={page} />
}

export default AutoClaimDeniedTexasPolicyLapse
