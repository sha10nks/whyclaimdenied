import DenialReasonTemplate from '../denials/DenialReasonTemplate';
import { getDenialPage } from '../denials/registry';

const HealthClaimDeniedNorthCarolinaTimelyFilingIssue = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'north-carolina', reasonKey: 'timely-filing-issue' });
  return <DenialReasonTemplate page={page} />;
};

export default HealthClaimDeniedNorthCarolinaTimelyFilingIssue;

