import DenialReasonTemplate from '../denials/DenialReasonTemplate';
import { getDenialPage } from '../denials/registry';

const AutoClaimDeniedMichiganDisputedLiability = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'michigan', reasonKey: 'disputed-liability' });
  return <DenialReasonTemplate page={page} />;
};

export default AutoClaimDeniedMichiganDisputedLiability;

