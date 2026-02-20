import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedTexasProviderCredential = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'texas', reasonKey: 'provider-credential-issues' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedTexasProviderCredential
