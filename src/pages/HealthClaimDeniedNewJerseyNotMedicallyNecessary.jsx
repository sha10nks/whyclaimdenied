import DenialReasonTemplate from '../denials/DenialReasonTemplate';
import { getDenialPage } from '../denials/registry';

const HealthClaimDeniedNewJerseyNotMedicallyNecessary = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'new-jersey', reasonKey: 'not-medically-necessary' });
  return <DenialReasonTemplate page={page} />;
};

export default HealthClaimDeniedNewJerseyNotMedicallyNecessary;

