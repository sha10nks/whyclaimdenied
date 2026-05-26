import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedNewJerseyExperimentalOrInvestigational = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'new-jersey', reasonKey: 'experimental-or-investigational' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedNewJerseyExperimentalOrInvestigational
