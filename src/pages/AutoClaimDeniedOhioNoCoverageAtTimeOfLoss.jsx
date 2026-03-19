import DenialReasonTemplate from '../denials/DenialReasonTemplate';
import { getDenialPage } from '../denials/registry';

const AutoClaimDeniedOhioNoCoverageAtTimeOfLoss = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'ohio', reasonKey: 'no-coverage-at-time-of-loss' });
  return <DenialReasonTemplate page={page} />;
};

export default AutoClaimDeniedOhioNoCoverageAtTimeOfLoss;

