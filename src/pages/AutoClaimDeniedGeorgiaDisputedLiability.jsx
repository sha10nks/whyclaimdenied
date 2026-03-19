import DenialReasonTemplate from '../denials/DenialReasonTemplate';
import { getDenialPage } from '../denials/registry';

const AutoClaimDeniedGeorgiaDisputedLiability = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'georgia', reasonKey: 'disputed-liability' });
  return <DenialReasonTemplate page={page} />;
};

export default AutoClaimDeniedGeorgiaDisputedLiability;

