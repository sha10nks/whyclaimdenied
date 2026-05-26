import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedCaliforniaTimelyFilingIssue = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'california', reasonKey: 'timely-filing-issue' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedCaliforniaTimelyFilingIssue
