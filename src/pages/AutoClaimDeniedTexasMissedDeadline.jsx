import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const AutoClaimDeniedTexasMissedDeadline = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'texas', reasonKey: 'missed-reporting-deadline' })
  return <DenialReasonTemplate page={page} />
}

export default AutoClaimDeniedTexasMissedDeadline
