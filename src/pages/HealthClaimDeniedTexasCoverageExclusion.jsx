import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedTexasCoverageExclusion = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'texas', reasonKey: 'coverage-exclusions' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedTexasCoverageExclusion
