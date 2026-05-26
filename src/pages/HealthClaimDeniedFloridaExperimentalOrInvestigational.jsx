import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedFloridaExperimentalOrInvestigational = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'florida', reasonKey: 'experimental-or-investigational' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedFloridaExperimentalOrInvestigational
