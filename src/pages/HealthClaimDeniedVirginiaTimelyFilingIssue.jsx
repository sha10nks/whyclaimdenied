import DenialReasonTemplate from '../denials/DenialReasonTemplate';
import { getDenialPage } from '../denials/registry';

const HealthClaimDeniedVirginiaTimelyFilingIssue = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'virginia', reasonKey: 'timely-filing-issue' });
  return <DenialReasonTemplate page={page} />;
};

export default HealthClaimDeniedVirginiaTimelyFilingIssue;

