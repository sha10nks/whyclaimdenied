import DenialReasonTemplate from '../denials/DenialReasonTemplate';
import { getDenialPage } from '../denials/registry';

const HealthClaimDeniedVirginiaBenefitOrServiceExcluded = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'virginia', reasonKey: 'benefit-or-service-excluded' });
  return <DenialReasonTemplate page={page} />;
};

export default HealthClaimDeniedVirginiaBenefitOrServiceExcluded;

