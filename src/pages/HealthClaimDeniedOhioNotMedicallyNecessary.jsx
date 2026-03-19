import DenialReasonTemplate from '../denials/DenialReasonTemplate';
import { getDenialPage } from '../denials/registry';

const HealthClaimDeniedOhioNotMedicallyNecessary = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'ohio', reasonKey: 'not-medically-necessary' });
  return <DenialReasonTemplate page={page} />;
};

export default HealthClaimDeniedOhioNotMedicallyNecessary;

