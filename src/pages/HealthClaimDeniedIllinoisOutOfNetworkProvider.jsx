import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedIllinoisOutOfNetworkProvider = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'illinois', reasonKey: 'out-of-network-provider' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedIllinoisOutOfNetworkProvider
