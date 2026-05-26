import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const AutoClaimDeniedPennsylvaniaDisputedLiability = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'pennsylvania', reasonKey: 'disputed-liability' })
  return <DenialReasonTemplate page={page} />
}

export default AutoClaimDeniedPennsylvaniaDisputedLiability
