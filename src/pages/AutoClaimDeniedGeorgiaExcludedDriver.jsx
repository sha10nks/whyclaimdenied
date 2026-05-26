import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const AutoClaimDeniedGeorgiaExcludedDriver = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'georgia', reasonKey: 'excluded-driver' })
  return <DenialReasonTemplate page={page} />
}

export default AutoClaimDeniedGeorgiaExcludedDriver
