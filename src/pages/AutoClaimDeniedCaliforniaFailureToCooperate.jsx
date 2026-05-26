import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const AutoClaimDeniedCaliforniaFailureToCooperate = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'california', reasonKey: 'failure-to-cooperate' })
  return <DenialReasonTemplate page={page} />
}

export default AutoClaimDeniedCaliforniaFailureToCooperate
