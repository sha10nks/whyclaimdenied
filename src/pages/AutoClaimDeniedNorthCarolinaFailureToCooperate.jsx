import DenialReasonTemplate from '../denials/DenialReasonTemplate';
import { getDenialPage } from '../denials/registry';

const AutoClaimDeniedNorthCarolinaFailureToCooperate = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'north-carolina', reasonKey: 'failure-to-cooperate' });
  return <DenialReasonTemplate page={page} />;
};

export default AutoClaimDeniedNorthCarolinaFailureToCooperate;

