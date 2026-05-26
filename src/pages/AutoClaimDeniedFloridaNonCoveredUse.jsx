import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const AutoClaimDeniedFloridaNonCoveredUse = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'florida', reasonKey: 'non-covered-use' })
  return <DenialReasonTemplate page={page} />
}

export default AutoClaimDeniedFloridaNonCoveredUse
