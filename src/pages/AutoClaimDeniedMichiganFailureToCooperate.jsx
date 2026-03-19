import DenialReasonTemplate from '../denials/DenialReasonTemplate';
import { getDenialPage } from '../denials/registry';

const AutoClaimDeniedMichiganFailureToCooperate = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'michigan', reasonKey: 'failure-to-cooperate' });
  return <DenialReasonTemplate page={page} />;
};

export default AutoClaimDeniedMichiganFailureToCooperate;

