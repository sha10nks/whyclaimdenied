import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedNewYorkExperimentalOrInvestigational = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'new-york', reasonKey: 'experimental-or-investigational' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedNewYorkExperimentalOrInvestigational
