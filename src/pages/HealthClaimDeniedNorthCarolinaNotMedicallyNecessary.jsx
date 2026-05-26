import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedNorthCarolinaNotMedicallyNecessary = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'north-carolina', reasonKey: 'not-medically-necessary' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedNorthCarolinaNotMedicallyNecessary
