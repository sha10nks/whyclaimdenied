import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const AutoClaimDeniedOhioNonCoveredUse = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'ohio', reasonKey: 'non-covered-use' })
  return <DenialReasonTemplate page={page} />
}

export default AutoClaimDeniedOhioNonCoveredUse
