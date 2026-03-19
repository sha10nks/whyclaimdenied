import DenialReasonTemplate from '../denials/DenialReasonTemplate';
import { getDenialPage } from '../denials/registry';

const AutoClaimDeniedGeorgiaNonCoveredUse = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'georgia', reasonKey: 'non-covered-use' });
  return <DenialReasonTemplate page={page} />;
};

export default AutoClaimDeniedGeorgiaNonCoveredUse;

