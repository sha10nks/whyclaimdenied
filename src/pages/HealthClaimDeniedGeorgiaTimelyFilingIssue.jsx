import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedGeorgiaTimelyFilingIssue = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'georgia', reasonKey: 'timely-filing-issue' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedGeorgiaTimelyFilingIssue
