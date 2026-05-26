import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedCaliforniaNotMedicallyNecessary = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'california', reasonKey: 'not-medically-necessary' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedCaliforniaNotMedicallyNecessary
