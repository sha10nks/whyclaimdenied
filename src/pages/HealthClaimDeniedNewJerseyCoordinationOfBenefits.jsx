import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedNewJerseyCoordinationOfBenefits = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'new-jersey', reasonKey: 'coordination-of-benefits' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedNewJerseyCoordinationOfBenefits
