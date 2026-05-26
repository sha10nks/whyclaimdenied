import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedPennsylvaniaNotMedicallyNecessary = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'pennsylvania', reasonKey: 'not-medically-necessary' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedPennsylvaniaNotMedicallyNecessary
