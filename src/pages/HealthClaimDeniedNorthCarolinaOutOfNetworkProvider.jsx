import DenialReasonTemplate from '../denials/DenialReasonTemplate';
import { getDenialPage } from '../denials/registry';

const HealthClaimDeniedNorthCarolinaOutOfNetworkProvider = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'north-carolina', reasonKey: 'out-of-network-provider' });
  return <DenialReasonTemplate page={page} />;
};

export default HealthClaimDeniedNorthCarolinaOutOfNetworkProvider;

