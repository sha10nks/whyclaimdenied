import DenialReasonTemplate from '../denials/DenialReasonTemplate';
import { getDenialPage } from '../denials/registry';

const AutoClaimDeniedMichiganMissedReportingDeadline = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'michigan', reasonKey: 'missed-reporting-deadline' });
  return <DenialReasonTemplate page={page} />;
};

export default AutoClaimDeniedMichiganMissedReportingDeadline;

