import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedPennsylvaniaCodingOrDocumentationError = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'pennsylvania', reasonKey: 'coding-or-documentation-error' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedPennsylvaniaCodingOrDocumentationError
