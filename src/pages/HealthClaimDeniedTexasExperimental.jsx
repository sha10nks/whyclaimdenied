import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedTexasExperimental = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'texas', reasonKey: 'experimental-treatment' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedTexasExperimental
