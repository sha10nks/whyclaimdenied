import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const AutoClaimDeniedNewYorkExcludedDriver = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'new-york', reasonKey: 'excluded-driver' })
  return <DenialReasonTemplate page={page} />
}

export default AutoClaimDeniedNewYorkExcludedDriver
