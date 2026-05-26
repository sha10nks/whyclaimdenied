import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const AutoClaimDeniedCaliforniaMissedReportingDeadline = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'california', reasonKey: 'missed-reporting-deadline' })
  return <DenialReasonTemplate page={page} />
}

export default AutoClaimDeniedCaliforniaMissedReportingDeadline
