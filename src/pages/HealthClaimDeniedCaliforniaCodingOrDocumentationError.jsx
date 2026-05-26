import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedCaliforniaCodingOrDocumentationError = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'california', reasonKey: 'coding-or-documentation-error' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedCaliforniaCodingOrDocumentationError
