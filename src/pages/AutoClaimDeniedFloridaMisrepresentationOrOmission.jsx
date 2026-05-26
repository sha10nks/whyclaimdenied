import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const AutoClaimDeniedFloridaMisrepresentationOrOmission = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'florida', reasonKey: 'misrepresentation-or-omission' })
  return <DenialReasonTemplate page={page} />
}

export default AutoClaimDeniedFloridaMisrepresentationOrOmission
