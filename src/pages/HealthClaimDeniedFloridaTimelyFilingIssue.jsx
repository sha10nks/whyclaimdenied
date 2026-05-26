import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedFloridaTimelyFilingIssue = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'florida', reasonKey: 'timely-filing-issue' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedFloridaTimelyFilingIssue
