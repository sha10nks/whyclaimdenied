import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const AutoClaimDeniedOhioExcludedDriver = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'ohio', reasonKey: 'excluded-driver' })
  return <DenialReasonTemplate page={page} />
}

export default AutoClaimDeniedOhioExcludedDriver
