import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedNewYorkNotMedicallyNecessary = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'new-york', reasonKey: 'not-medically-necessary' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedNewYorkNotMedicallyNecessary
