import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const AutoClaimDeniedNorthCarolinaExcludedDriver = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'north-carolina', reasonKey: 'excluded-driver' })
  return <DenialReasonTemplate page={page} />
}

export default AutoClaimDeniedNorthCarolinaExcludedDriver
