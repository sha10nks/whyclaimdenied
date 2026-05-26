import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const AutoClaimDeniedFloridaMissedReportingDeadline = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'florida', reasonKey: 'missed-reporting-deadline' })
  return <DenialReasonTemplate page={page} />
}

export default AutoClaimDeniedFloridaMissedReportingDeadline
