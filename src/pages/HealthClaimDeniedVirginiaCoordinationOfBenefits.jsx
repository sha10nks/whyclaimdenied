import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedVirginiaCoordinationOfBenefits = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'virginia', reasonKey: 'coordination-of-benefits' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedVirginiaCoordinationOfBenefits
