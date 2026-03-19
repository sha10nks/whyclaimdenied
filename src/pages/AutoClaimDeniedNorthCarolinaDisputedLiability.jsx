import DenialReasonTemplate from '../denials/DenialReasonTemplate';
import { getDenialPage } from '../denials/registry';

const AutoClaimDeniedNorthCarolinaDisputedLiability = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'north-carolina', reasonKey: 'disputed-liability' });
  return <DenialReasonTemplate page={page} />;
};

export default AutoClaimDeniedNorthCarolinaDisputedLiability;

