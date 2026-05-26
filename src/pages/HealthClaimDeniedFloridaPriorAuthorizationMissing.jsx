import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedFloridaPriorAuthorizationMissing = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'florida', reasonKey: 'prior-authorization-missing' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedFloridaPriorAuthorizationMissing
