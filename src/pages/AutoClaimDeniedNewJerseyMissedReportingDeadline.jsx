import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const AutoClaimDeniedNewJerseyMissedReportingDeadline = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'new-jersey', reasonKey: 'missed-reporting-deadline' })
  return <DenialReasonTemplate page={page} />
}

export default AutoClaimDeniedNewJerseyMissedReportingDeadline
