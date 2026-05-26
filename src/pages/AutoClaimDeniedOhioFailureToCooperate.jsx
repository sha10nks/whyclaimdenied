import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const AutoClaimDeniedOhioFailureToCooperate = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'ohio', reasonKey: 'failure-to-cooperate' })
  return <DenialReasonTemplate page={page} />
}

export default AutoClaimDeniedOhioFailureToCooperate
