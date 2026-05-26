import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedIllinoisTimelyFilingIssue = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'illinois', reasonKey: 'timely-filing-issue' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedIllinoisTimelyFilingIssue
