import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedIllinoisCoordinationOfBenefits = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'illinois', reasonKey: 'coordination-of-benefits' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedIllinoisCoordinationOfBenefits
