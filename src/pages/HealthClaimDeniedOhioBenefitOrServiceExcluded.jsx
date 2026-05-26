import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedOhioBenefitOrServiceExcluded = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'ohio', reasonKey: 'benefit-or-service-excluded' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedOhioBenefitOrServiceExcluded
