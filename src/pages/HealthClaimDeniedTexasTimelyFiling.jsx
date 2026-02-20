import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedTexasTimelyFiling = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'texas', reasonKey: 'timely-filing-violations' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedTexasTimelyFiling
