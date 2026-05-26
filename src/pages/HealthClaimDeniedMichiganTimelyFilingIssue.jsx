import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedMichiganTimelyFilingIssue = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'michigan', reasonKey: 'timely-filing-issue' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedMichiganTimelyFilingIssue
