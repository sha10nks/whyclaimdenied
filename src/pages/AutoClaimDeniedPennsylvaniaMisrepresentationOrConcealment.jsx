import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const AutoClaimDeniedPennsylvaniaMisrepresentationOrConcealment = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'pennsylvania', reasonKey: 'misrepresentation-or-concealment' })
  return <DenialReasonTemplate page={page} />
}

export default AutoClaimDeniedPennsylvaniaMisrepresentationOrConcealment
