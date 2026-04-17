import DenialReasonTemplate from '../denials/DenialReasonTemplate';
import { getDenialPage } from '../denials/registry';

const AutoClaimDeniedVirginiaExcludedDriver = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'virginia', reasonKey: 'excluded-driver' });
  return <DenialReasonTemplate page={page} />;
};

export default AutoClaimDeniedVirginiaExcludedDriver;

