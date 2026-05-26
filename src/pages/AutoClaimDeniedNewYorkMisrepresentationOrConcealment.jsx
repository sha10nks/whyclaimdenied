import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const AutoClaimDeniedNewYorkMisrepresentationOrConcealment = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'new-york', reasonKey: 'misrepresentation-or-concealment' })
  return <DenialReasonTemplate page={page} />
}

export default AutoClaimDeniedNewYorkMisrepresentationOrConcealment
