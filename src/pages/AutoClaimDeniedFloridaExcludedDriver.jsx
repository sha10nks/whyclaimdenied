import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const AutoClaimDeniedFloridaExcludedDriver = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'florida', reasonKey: 'excluded-driver' })
  return <DenialReasonTemplate page={page} />
}

export default AutoClaimDeniedFloridaExcludedDriver
