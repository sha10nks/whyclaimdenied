import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedCaliforniaPriorAuthorizationMissing = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'california', reasonKey: 'prior-authorization-missing' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedCaliforniaPriorAuthorizationMissing
