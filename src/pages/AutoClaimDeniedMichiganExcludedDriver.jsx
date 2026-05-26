import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const AutoClaimDeniedMichiganExcludedDriver = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'michigan', reasonKey: 'excluded-driver' })
  return <DenialReasonTemplate page={page} />
}

export default AutoClaimDeniedMichiganExcludedDriver
