import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const AutoClaimDeniedNewYorkDisputedLiability = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'new-york', reasonKey: 'disputed-liability' })
  return <DenialReasonTemplate page={page} />
}

export default AutoClaimDeniedNewYorkDisputedLiability
