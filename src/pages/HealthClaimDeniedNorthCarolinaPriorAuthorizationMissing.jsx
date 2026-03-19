import DenialReasonTemplate from '../denials/DenialReasonTemplate';
import { getDenialPage } from '../denials/registry';

const HealthClaimDeniedNorthCarolinaPriorAuthorizationMissing = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'north-carolina', reasonKey: 'prior-authorization-missing' });
  return <DenialReasonTemplate page={page} />;
};

export default HealthClaimDeniedNorthCarolinaPriorAuthorizationMissing;

