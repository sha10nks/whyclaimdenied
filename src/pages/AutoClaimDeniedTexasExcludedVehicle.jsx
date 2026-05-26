import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const AutoClaimDeniedTexasExcludedVehicle = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'texas', reasonKey: 'excluded-vehicle' })
  return <DenialReasonTemplate page={page} />
}

export default AutoClaimDeniedTexasExcludedVehicle
