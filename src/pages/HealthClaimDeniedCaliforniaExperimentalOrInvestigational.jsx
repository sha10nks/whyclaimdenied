import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedCaliforniaExperimentalOrInvestigational = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'california', reasonKey: 'experimental-or-investigational' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedCaliforniaExperimentalOrInvestigational
