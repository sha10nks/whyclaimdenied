import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedIllinoisCodingOrDocumentationError = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'illinois', reasonKey: 'coding-or-documentation-error' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedIllinoisCodingOrDocumentationError
