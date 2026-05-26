import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedVirginiaCodingOrDocumentationError = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'virginia', reasonKey: 'coding-or-documentation-error' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedVirginiaCodingOrDocumentationError
