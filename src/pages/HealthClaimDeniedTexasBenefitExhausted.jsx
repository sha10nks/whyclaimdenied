import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedTexasBenefitExhausted = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'texas', reasonKey: 'benefits-exhausted' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedTexasBenefitExhausted
