import DenialReasonTemplate from '../denials/DenialReasonTemplate';
import { getDenialPage } from '../denials/registry';

const AutoClaimDeniedOhioDisputedLiability = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'ohio', reasonKey: 'disputed-liability' });
  return <DenialReasonTemplate page={page} />;
};

export default AutoClaimDeniedOhioDisputedLiability;

