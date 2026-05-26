import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const AutoClaimDeniedTexasFailureCooperate = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'texas', reasonKey: 'failure-to-cooperate' })
  return <DenialReasonTemplate page={page} />
}

export default AutoClaimDeniedTexasFailureCooperate
