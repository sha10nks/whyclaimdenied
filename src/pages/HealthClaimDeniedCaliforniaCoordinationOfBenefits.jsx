import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedCaliforniaCoordinationOfBenefits = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'california', reasonKey: 'coordination-of-benefits' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedCaliforniaCoordinationOfBenefits
