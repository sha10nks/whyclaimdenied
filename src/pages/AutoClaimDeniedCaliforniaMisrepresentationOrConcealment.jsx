import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const AutoClaimDeniedCaliforniaMisrepresentationOrConcealment = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'california', reasonKey: 'misrepresentation-or-concealment' })
  return <DenialReasonTemplate page={page} />
}

export default AutoClaimDeniedCaliforniaMisrepresentationOrConcealment
