import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedFloridaOutOfNetworkProvider = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'florida', reasonKey: 'out-of-network-provider' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedFloridaOutOfNetworkProvider
