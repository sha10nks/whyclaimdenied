import DenialReasonTemplate from '../denials/DenialReasonTemplate';
import { getDenialPage } from '../denials/registry';

const AutoClaimDeniedNorthCarolinaNonCoveredUse = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'north-carolina', reasonKey: 'non-covered-use' });
  return <DenialReasonTemplate page={page} />;
};

export default AutoClaimDeniedNorthCarolinaNonCoveredUse;

