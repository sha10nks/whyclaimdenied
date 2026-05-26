import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedMichiganExperimentalOrInvestigational = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'michigan', reasonKey: 'experimental-or-investigational' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedMichiganExperimentalOrInvestigational
