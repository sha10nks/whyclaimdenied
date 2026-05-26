import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedMichiganOutOfNetworkProvider = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'michigan', reasonKey: 'out-of-network-provider' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedMichiganOutOfNetworkProvider
