import DenialReasonTemplate from '../denials/DenialReasonTemplate';
import { getDenialPage } from '../denials/registry';

const AutoClaimDeniedVirginiaFailureToCooperate = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'virginia', reasonKey: 'failure-to-cooperate' });
  return <DenialReasonTemplate page={page} />;
};

export default AutoClaimDeniedVirginiaFailureToCooperate;

