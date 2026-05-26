import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedFloridaCoordinationOfBenefits = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'florida', reasonKey: 'coordination-of-benefits' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedFloridaCoordinationOfBenefits
