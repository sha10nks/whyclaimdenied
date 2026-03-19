import DenialReasonTemplate from '../denials/DenialReasonTemplate';
import { getDenialPage } from '../denials/registry';

const AutoClaimDeniedOhioMissedReportingDeadline = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'ohio', reasonKey: 'missed-reporting-deadline' });
  return <DenialReasonTemplate page={page} />;
};

export default AutoClaimDeniedOhioMissedReportingDeadline;

