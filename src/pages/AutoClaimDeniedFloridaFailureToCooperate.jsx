import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const AutoClaimDeniedFloridaFailureToCooperate = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'florida', reasonKey: 'failure-to-cooperate' })
  return <DenialReasonTemplate page={page} />
}

export default AutoClaimDeniedFloridaFailureToCooperate
