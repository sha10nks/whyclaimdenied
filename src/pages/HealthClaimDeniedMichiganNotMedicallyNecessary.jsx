import DenialReasonTemplate from '../denials/DenialReasonTemplate';
import { getDenialPage } from '../denials/registry';

const HealthClaimDeniedMichiganNotMedicallyNecessary = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'michigan', reasonKey: 'not-medically-necessary' });
  return <DenialReasonTemplate page={page} />;
};

export default HealthClaimDeniedMichiganNotMedicallyNecessary;

