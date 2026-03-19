import DenialReasonTemplate from '../denials/DenialReasonTemplate';
import { getDenialPage } from '../denials/registry';

const HealthClaimDeniedNorthCarolinaExperimentalOrInvestigational = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'north-carolina', reasonKey: 'experimental-or-investigational' });
  return <DenialReasonTemplate page={page} />;
};

export default HealthClaimDeniedNorthCarolinaExperimentalOrInvestigational;

