import DenialReasonTemplate from '../denials/DenialReasonTemplate';
import { getDenialPage } from '../denials/registry';

const AutoClaimDeniedNewJerseyFailureToCooperate = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'new-jersey', reasonKey: 'failure-to-cooperate' });
  return <DenialReasonTemplate page={page} />;
};

export default AutoClaimDeniedNewJerseyFailureToCooperate;

