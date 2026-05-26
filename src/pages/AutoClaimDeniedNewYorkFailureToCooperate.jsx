import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const AutoClaimDeniedNewYorkFailureToCooperate = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'new-york', reasonKey: 'failure-to-cooperate' })
  return <DenialReasonTemplate page={page} />
}

export default AutoClaimDeniedNewYorkFailureToCooperate
