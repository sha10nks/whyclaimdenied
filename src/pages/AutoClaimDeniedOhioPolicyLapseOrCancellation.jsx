import DenialReasonTemplate from '../denials/DenialReasonTemplate';
import { getDenialPage } from '../denials/registry';

const AutoClaimDeniedOhioPolicyLapseOrCancellation = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'ohio', reasonKey: 'policy-lapse-or-cancellation' });
  return <DenialReasonTemplate page={page} />;
};

export default AutoClaimDeniedOhioPolicyLapseOrCancellation;

