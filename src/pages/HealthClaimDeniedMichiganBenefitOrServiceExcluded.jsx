import DenialReasonTemplate from '../denials/DenialReasonTemplate';
import { getDenialPage } from '../denials/registry';

const HealthClaimDeniedMichiganBenefitOrServiceExcluded = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'michigan', reasonKey: 'benefit-or-service-excluded' });
  return <DenialReasonTemplate page={page} />;
};

export default HealthClaimDeniedMichiganBenefitOrServiceExcluded;

