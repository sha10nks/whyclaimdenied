import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedNewJerseyPriorAuthorizationMissing = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'new-jersey', reasonKey: 'prior-authorization-missing' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedNewJerseyPriorAuthorizationMissing
