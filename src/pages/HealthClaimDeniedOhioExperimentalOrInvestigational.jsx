import DenialReasonTemplate from '../denials/DenialReasonTemplate';
import { getDenialPage } from '../denials/registry';

const HealthClaimDeniedOhioExperimentalOrInvestigational = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'ohio', reasonKey: 'experimental-or-investigational' });
  return <DenialReasonTemplate page={page} />;
};

export default HealthClaimDeniedOhioExperimentalOrInvestigational;

