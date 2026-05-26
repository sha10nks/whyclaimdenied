import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedOhioOutOfNetworkProvider = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'ohio', reasonKey: 'out-of-network-provider' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedOhioOutOfNetworkProvider
