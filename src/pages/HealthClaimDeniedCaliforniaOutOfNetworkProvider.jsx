import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedCaliforniaOutOfNetworkProvider = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'california', reasonKey: 'out-of-network-provider' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedCaliforniaOutOfNetworkProvider
