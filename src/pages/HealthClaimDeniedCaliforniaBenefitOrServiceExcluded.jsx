import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedCaliforniaBenefitOrServiceExcluded = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'california', reasonKey: 'benefit-or-service-excluded' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedCaliforniaBenefitOrServiceExcluded
