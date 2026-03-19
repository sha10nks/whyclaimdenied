import DenialReasonTemplate from '../denials/DenialReasonTemplate';
import { getDenialPage } from '../denials/registry';

const HealthClaimDeniedOhioPriorAuthorizationMissing = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'ohio', reasonKey: 'prior-authorization-missing' });
  return <DenialReasonTemplate page={page} />;
};

export default HealthClaimDeniedOhioPriorAuthorizationMissing;

