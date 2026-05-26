import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedFloridaBenefitOrServiceExcluded = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'florida', reasonKey: 'benefit-or-service-excluded' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedFloridaBenefitOrServiceExcluded
