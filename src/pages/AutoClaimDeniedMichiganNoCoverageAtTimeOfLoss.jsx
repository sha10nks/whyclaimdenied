import DenialReasonTemplate from '../denials/DenialReasonTemplate';
import { getDenialPage } from '../denials/registry';

const AutoClaimDeniedMichiganNoCoverageAtTimeOfLoss = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'michigan', reasonKey: 'no-coverage-at-time-of-loss' });
  return <DenialReasonTemplate page={page} />;
};

export default AutoClaimDeniedMichiganNoCoverageAtTimeOfLoss;

