import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const AutoClaimDeniedCaliforniaNonCoveredUse = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'california', reasonKey: 'non-covered-use' })
  return <DenialReasonTemplate page={page} />
}

export default AutoClaimDeniedCaliforniaNonCoveredUse
