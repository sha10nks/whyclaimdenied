import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const AutoClaimDeniedNewJerseyNonCoveredUse = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'new-jersey', reasonKey: 'non-covered-use' })
  return <DenialReasonTemplate page={page} />
}

export default AutoClaimDeniedNewJerseyNonCoveredUse
