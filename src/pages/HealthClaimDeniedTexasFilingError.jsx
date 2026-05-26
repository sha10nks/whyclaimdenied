import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const HealthClaimDeniedTexasFilingError = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'texas', reasonKey: 'filing-errors' })
  return <DenialReasonTemplate page={page} />
}

export default HealthClaimDeniedTexasFilingError
