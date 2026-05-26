import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const AutoClaimDeniedGeorgiaMissedReportingDeadline = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'georgia', reasonKey: 'missed-reporting-deadline' })
  return <DenialReasonTemplate page={page} />
}

export default AutoClaimDeniedGeorgiaMissedReportingDeadline
