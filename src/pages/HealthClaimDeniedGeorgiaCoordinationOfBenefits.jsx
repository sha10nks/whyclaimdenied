import DenialReasonTemplate from '../denials/DenialReasonTemplate';
import { getDenialPage } from '../denials/registry';

const HealthClaimDeniedGeorgiaCoordinationOfBenefits = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'georgia', reasonKey: 'coordination-of-benefits' });
  return <DenialReasonTemplate page={page} />;
};

export default HealthClaimDeniedGeorgiaCoordinationOfBenefits;

