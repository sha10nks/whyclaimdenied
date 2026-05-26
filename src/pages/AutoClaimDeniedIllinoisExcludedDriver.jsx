import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const AutoClaimDeniedIllinoisExcludedDriver = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'illinois', reasonKey: 'excluded-driver' })
  return <DenialReasonTemplate page={page} />
}

export default AutoClaimDeniedIllinoisExcludedDriver
