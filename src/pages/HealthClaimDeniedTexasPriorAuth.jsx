import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedTexasPriorAuth = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'texas', reasonKey: 'prior-authorization-missing' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedTexasPriorAuth
