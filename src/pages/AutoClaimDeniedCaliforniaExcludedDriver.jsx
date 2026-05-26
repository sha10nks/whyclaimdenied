import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const AutoClaimDeniedCaliforniaExcludedDriver = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'california', reasonKey: 'excluded-driver' })
  return <DenialReasonTemplate page={page} />
}

export default AutoClaimDeniedCaliforniaExcludedDriver
