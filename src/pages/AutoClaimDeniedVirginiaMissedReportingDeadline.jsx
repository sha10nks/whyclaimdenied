import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const AutoClaimDeniedVirginiaMissedReportingDeadline = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'virginia', reasonKey: 'missed-reporting-deadline' })
  return <DenialReasonTemplate page={page} />
}

export default AutoClaimDeniedVirginiaMissedReportingDeadline
