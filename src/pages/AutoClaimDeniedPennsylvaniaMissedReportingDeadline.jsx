import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const AutoClaimDeniedPennsylvaniaMissedReportingDeadline = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'pennsylvania', reasonKey: 'missed-reporting-deadline' })
  return <DenialReasonTemplate page={page} />
}

export default AutoClaimDeniedPennsylvaniaMissedReportingDeadline
