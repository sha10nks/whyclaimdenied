import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedNewYorkCodingOrDocumentationError = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'new-york', reasonKey: 'coding-or-documentation-error' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedNewYorkCodingOrDocumentationError
