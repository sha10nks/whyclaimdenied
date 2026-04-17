import DenialReasonTemplate from '../denials/DenialReasonTemplate';
import { getDenialPage } from '../denials/registry';

const AutoClaimDeniedNewJerseyDisputedLiability = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'new-jersey', reasonKey: 'disputed-liability' });
  return <DenialReasonTemplate page={page} />;
};

export default AutoClaimDeniedNewJerseyDisputedLiability;

