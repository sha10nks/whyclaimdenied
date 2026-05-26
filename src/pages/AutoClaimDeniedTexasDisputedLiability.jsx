import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const AutoClaimDeniedTexasDisputedLiability = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'texas', reasonKey: 'disputed-liability' })
  return <DenialReasonTemplate page={page} />
}

export default AutoClaimDeniedTexasDisputedLiability
