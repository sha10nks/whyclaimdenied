import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const AutoClaimDeniedTexasCoverageLimits = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'texas', reasonKey: 'coverage-limits-exceeded' })
  return <DenialReasonTemplate page={page} />
}

export default AutoClaimDeniedTexasCoverageLimits
