import DenialReasonTemplate from '../denials/DenialReasonTemplate';
import { getDenialPage } from '../denials/registry';

const HealthClaimDeniedGeorgiaNotMedicallyNecessary = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'georgia', reasonKey: 'not-medically-necessary' });
  return <DenialReasonTemplate page={page} />;
};

export default HealthClaimDeniedGeorgiaNotMedicallyNecessary;

