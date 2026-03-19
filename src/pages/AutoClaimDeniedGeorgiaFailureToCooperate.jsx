import DenialReasonTemplate from '../denials/DenialReasonTemplate';
import { getDenialPage } from '../denials/registry';

const AutoClaimDeniedGeorgiaFailureToCooperate = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'georgia', reasonKey: 'failure-to-cooperate' });
  return <DenialReasonTemplate page={page} />;
};

export default AutoClaimDeniedGeorgiaFailureToCooperate;

