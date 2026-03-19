import DenialReasonTemplate from '../denials/DenialReasonTemplate';
import { getDenialPage } from '../denials/registry';

const HealthClaimDeniedMichiganPriorAuthorizationMissing = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'michigan', reasonKey: 'prior-authorization-missing' });
  return <DenialReasonTemplate page={page} />;
};

export default HealthClaimDeniedMichiganPriorAuthorizationMissing;

