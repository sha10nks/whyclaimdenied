import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedMichiganCodingOrDocumentationError = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'michigan', reasonKey: 'coding-or-documentation-error' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedMichiganCodingOrDocumentationError
