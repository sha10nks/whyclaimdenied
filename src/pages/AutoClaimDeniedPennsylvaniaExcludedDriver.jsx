import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const AutoClaimDeniedPennsylvaniaExcludedDriver = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'pennsylvania', reasonKey: 'excluded-driver' })
  return <DenialReasonTemplate page={page} />
}

export default AutoClaimDeniedPennsylvaniaExcludedDriver
