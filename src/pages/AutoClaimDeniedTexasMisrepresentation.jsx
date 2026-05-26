import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const AutoClaimDeniedTexasMisrepresentation = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'texas', reasonKey: 'misrepresentation' })
  return <DenialReasonTemplate page={page} />
}

export default AutoClaimDeniedTexasMisrepresentation
