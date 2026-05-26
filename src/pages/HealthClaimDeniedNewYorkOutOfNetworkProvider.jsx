import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedNewYorkOutOfNetworkProvider = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'new-york', reasonKey: 'out-of-network-provider' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedNewYorkOutOfNetworkProvider
