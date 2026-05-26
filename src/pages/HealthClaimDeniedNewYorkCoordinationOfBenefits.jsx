import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedNewYorkCoordinationOfBenefits = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'new-york', reasonKey: 'coordination-of-benefits' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedNewYorkCoordinationOfBenefits
