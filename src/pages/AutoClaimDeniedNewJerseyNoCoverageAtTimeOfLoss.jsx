import DenialReasonTemplate from '../denials/DenialReasonTemplate';
import { getDenialPage } from '../denials/registry';

const AutoClaimDeniedNewJerseyNoCoverageAtTimeOfLoss = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'new-jersey', reasonKey: 'no-coverage-at-time-of-loss' });
  return <DenialReasonTemplate page={page} />;
};

export default AutoClaimDeniedNewJerseyNoCoverageAtTimeOfLoss;

