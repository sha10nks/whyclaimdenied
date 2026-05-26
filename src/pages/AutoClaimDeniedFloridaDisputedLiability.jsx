import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const AutoClaimDeniedFloridaDisputedLiability = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'florida', reasonKey: 'disputed-liability' })
  return <DenialReasonTemplate page={page} />
}

export default AutoClaimDeniedFloridaDisputedLiability
