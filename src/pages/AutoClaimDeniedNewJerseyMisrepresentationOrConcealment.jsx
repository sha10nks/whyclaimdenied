import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const AutoClaimDeniedNewJerseyMisrepresentationOrConcealment = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'new-jersey', reasonKey: 'misrepresentation-or-concealment' })
  return <DenialReasonTemplate page={page} />
}

export default AutoClaimDeniedNewJerseyMisrepresentationOrConcealment
