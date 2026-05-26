import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedIllinoisNotMedicallyNecessary = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'illinois', reasonKey: 'not-medically-necessary' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedIllinoisNotMedicallyNecessary
