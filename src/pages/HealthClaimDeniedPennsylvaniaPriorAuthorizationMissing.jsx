import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedPennsylvaniaPriorAuthorizationMissing = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'pennsylvania', reasonKey: 'prior-authorization-missing' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedPennsylvaniaPriorAuthorizationMissing
