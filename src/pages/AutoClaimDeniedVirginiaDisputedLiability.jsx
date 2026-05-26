import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const AutoClaimDeniedVirginiaDisputedLiability = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'virginia', reasonKey: 'disputed-liability' })
  return <DenialReasonTemplate page={page} />
}

export default AutoClaimDeniedVirginiaDisputedLiability
