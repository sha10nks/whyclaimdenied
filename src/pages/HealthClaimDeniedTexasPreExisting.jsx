import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedTexasPreExisting = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'texas', reasonKey: 'pre-existing-conditions' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedTexasPreExisting
