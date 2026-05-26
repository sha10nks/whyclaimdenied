import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedVirginiaPriorAuthorizationMissing = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'virginia', reasonKey: 'prior-authorization-missing' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedVirginiaPriorAuthorizationMissing
