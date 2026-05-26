import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedIllinoisPriorAuthorizationMissing = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'illinois', reasonKey: 'prior-authorization-missing' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedIllinoisPriorAuthorizationMissing
