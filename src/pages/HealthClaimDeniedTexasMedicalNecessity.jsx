import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedTexasMedicalNecessity = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'texas', reasonKey: 'lack-of-medical-necessity' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedTexasMedicalNecessity
