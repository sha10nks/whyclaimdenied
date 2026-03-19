import DenialReasonTemplate from '../denials/DenialReasonTemplate';
import { getDenialPage } from '../denials/registry';

const HealthClaimDeniedOhioCoordinationOfBenefits = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'ohio', reasonKey: 'coordination-of-benefits' });
  return <DenialReasonTemplate page={page} />;
};

export default HealthClaimDeniedOhioCoordinationOfBenefits;

