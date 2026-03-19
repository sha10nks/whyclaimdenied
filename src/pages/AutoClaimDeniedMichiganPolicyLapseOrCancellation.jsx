import DenialReasonTemplate from '../denials/DenialReasonTemplate';
import { getDenialPage } from '../denials/registry';

const AutoClaimDeniedMichiganPolicyLapseOrCancellation = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'michigan', reasonKey: 'policy-lapse-or-cancellation' });
  return <DenialReasonTemplate page={page} />;
};

export default AutoClaimDeniedMichiganPolicyLapseOrCancellation;

