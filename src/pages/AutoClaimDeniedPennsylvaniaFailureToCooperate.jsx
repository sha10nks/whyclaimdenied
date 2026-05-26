import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const AutoClaimDeniedPennsylvaniaFailureToCooperate = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'pennsylvania', reasonKey: 'failure-to-cooperate' })
  return <DenialReasonTemplate page={page} />
}

export default AutoClaimDeniedPennsylvaniaFailureToCooperate
