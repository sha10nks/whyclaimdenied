import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedNorthCarolinaCoordinationOfBenefits = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'north-carolina', reasonKey: 'coordination-of-benefits' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedNorthCarolinaCoordinationOfBenefits
