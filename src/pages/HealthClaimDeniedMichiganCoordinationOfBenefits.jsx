import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedMichiganCoordinationOfBenefits = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'michigan', reasonKey: 'coordination-of-benefits' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedMichiganCoordinationOfBenefits
