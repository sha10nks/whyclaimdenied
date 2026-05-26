import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedVirginiaNotMedicallyNecessary = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'virginia', reasonKey: 'not-medically-necessary' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedVirginiaNotMedicallyNecessary
