import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const AutoClaimDeniedTexasExcludedDriver = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'texas', reasonKey: 'excluded-driver' })
  return <DenialReasonTemplate page={page} />
}

export default AutoClaimDeniedTexasExcludedDriver
