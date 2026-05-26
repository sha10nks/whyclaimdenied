import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedFloridaCodingOrDocumentationError = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'florida', reasonKey: 'coding-or-documentation-error' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedFloridaCodingOrDocumentationError
