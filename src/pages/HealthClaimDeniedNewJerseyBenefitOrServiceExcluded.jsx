import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedNewJerseyBenefitOrServiceExcluded = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'new-jersey', reasonKey: 'benefit-or-service-excluded' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedNewJerseyBenefitOrServiceExcluded
