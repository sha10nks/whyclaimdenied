import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedNewYorkTimelyFilingIssue = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'new-york', reasonKey: 'timely-filing-issue' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedNewYorkTimelyFilingIssue
