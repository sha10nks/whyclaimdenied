import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const AutoClaimDeniedGeorgiaMisrepresentationOrConcealment = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'georgia', reasonKey: 'misrepresentation-or-concealment' })
  return <DenialReasonTemplate page={page} />
}

export default AutoClaimDeniedGeorgiaMisrepresentationOrConcealment
