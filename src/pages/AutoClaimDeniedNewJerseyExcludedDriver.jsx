import DenialReasonTemplate from '../denials/DenialReasonTemplate'
import { getDenialPage } from '../denials/registry'

const AutoClaimDeniedNewJerseyExcludedDriver = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'new-jersey', reasonKey: 'excluded-driver' })
  return <DenialReasonTemplate page={page} />
}

export default AutoClaimDeniedNewJerseyExcludedDriver
