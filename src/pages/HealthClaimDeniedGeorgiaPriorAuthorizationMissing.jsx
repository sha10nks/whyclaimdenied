import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedGeorgiaPriorAuthorizationMissing = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'georgia', reasonKey: 'prior-authorization-missing' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedGeorgiaPriorAuthorizationMissing
