import DenialReasonTemplate from '../denials/DenialReasonTemplate';
import { getDenialPage } from '../denials/registry';

const HealthClaimDeniedNewJerseyTimelyFilingIssue = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'new-jersey', reasonKey: 'timely-filing-issue' });
  return <DenialReasonTemplate page={page} />;
};

export default HealthClaimDeniedNewJerseyTimelyFilingIssue;

