import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedNewJerseyCodingOrDocumentationError = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'new-jersey', reasonKey: 'coding-or-documentation-error' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedNewJerseyCodingOrDocumentationError
