import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedPennsylvaniaCoordinationOfBenefits = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'pennsylvania', reasonKey: 'coordination-of-benefits' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedPennsylvaniaCoordinationOfBenefits
