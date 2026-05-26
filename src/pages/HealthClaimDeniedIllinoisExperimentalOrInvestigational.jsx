import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedIllinoisExperimentalOrInvestigational = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'illinois', reasonKey: 'experimental-or-investigational' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedIllinoisExperimentalOrInvestigational
