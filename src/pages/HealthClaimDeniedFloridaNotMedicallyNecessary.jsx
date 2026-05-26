import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedFloridaNotMedicallyNecessary = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'florida', reasonKey: 'not-medically-necessary' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedFloridaNotMedicallyNecessary
