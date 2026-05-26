import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedNewYorkPriorAuthorizationMissing = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'new-york', reasonKey: 'prior-authorization-missing' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedNewYorkPriorAuthorizationMissing
