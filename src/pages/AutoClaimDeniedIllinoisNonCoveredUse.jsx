import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const AutoClaimDeniedIllinoisNonCoveredUse = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'illinois', reasonKey: 'non-covered-use' })
  return <DenialReasonTemplate page={page} />
}

export default AutoClaimDeniedIllinoisNonCoveredUse
