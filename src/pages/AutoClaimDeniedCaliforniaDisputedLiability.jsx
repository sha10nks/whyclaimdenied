import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const AutoClaimDeniedCaliforniaDisputedLiability = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'california', reasonKey: 'disputed-liability' })
  return <DenialReasonTemplate page={page} />
}

export default AutoClaimDeniedCaliforniaDisputedLiability
