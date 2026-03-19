import DenialReasonTemplate from '../denials/DenialReasonTemplate';
import { getDenialPage } from '../denials/registry';

const AutoClaimDeniedNorthCarolinaMissedReportingDeadline = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'north-carolina', reasonKey: 'missed-reporting-deadline' });
  return <DenialReasonTemplate page={page} />;
};

export default AutoClaimDeniedNorthCarolinaMissedReportingDeadline;

