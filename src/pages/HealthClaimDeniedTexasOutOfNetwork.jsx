import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedTexasOutOfNetwork = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'texas', reasonKey: 'out-of-network-provider' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedTexasOutOfNetwork
