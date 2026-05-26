import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedGeorgiaExperimentalOrInvestigational = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'georgia', reasonKey: 'experimental-or-investigational' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedGeorgiaExperimentalOrInvestigational
