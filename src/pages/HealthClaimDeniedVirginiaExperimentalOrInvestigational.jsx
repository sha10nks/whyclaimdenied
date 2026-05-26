import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedVirginiaExperimentalOrInvestigational = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'virginia', reasonKey: 'experimental-or-investigational' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedVirginiaExperimentalOrInvestigational
