import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const AutoClaimDeniedTexasNonCoveredUse = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'texas', reasonKey: 'non-covered-use' })
  return <DenialReasonTemplate page={page} />
}

export default AutoClaimDeniedTexasNonCoveredUse
