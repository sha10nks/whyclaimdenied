import DenialReasonTemplate from '../denials/DenialReasonTemplate';
import { getDenialPage } from '../denials/registry';

const HealthClaimDeniedGeorgiaBenefitOrServiceExcluded = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'georgia', reasonKey: 'benefit-or-service-excluded' });
  return <DenialReasonTemplate page={page} />;
};

export default HealthClaimDeniedGeorgiaBenefitOrServiceExcluded;

