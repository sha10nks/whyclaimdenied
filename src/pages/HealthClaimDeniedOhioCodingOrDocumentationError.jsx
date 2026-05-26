import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedOhioCodingOrDocumentationError = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'ohio', reasonKey: 'coding-or-documentation-error' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedOhioCodingOrDocumentationError
