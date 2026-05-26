import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const AutoClaimDeniedNewYorkNonCoveredUse = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'new-york', reasonKey: 'non-covered-use' })
  return <DenialReasonTemplate page={page} />
}

export default AutoClaimDeniedNewYorkNonCoveredUse
