import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedOhioTimelyFilingIssue = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'ohio', reasonKey: 'timely-filing-issue' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedOhioTimelyFilingIssue
