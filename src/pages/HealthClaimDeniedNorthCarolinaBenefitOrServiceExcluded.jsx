import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedNorthCarolinaBenefitOrServiceExcluded = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'north-carolina', reasonKey: 'benefit-or-service-excluded' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedNorthCarolinaBenefitOrServiceExcluded
