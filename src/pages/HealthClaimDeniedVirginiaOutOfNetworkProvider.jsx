import DenialReasonTemplate from '../denials/DenialReasonTemplate';
import { getDenialPage } from '../denials/registry';

const HealthClaimDeniedVirginiaOutOfNetworkProvider = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'virginia', reasonKey: 'out-of-network-provider' });
  return <DenialReasonTemplate page={page} />;
};

export default HealthClaimDeniedVirginiaOutOfNetworkProvider;

