import DenialReasonTemplate from '../denials/DenialReasonTemplate';
import { getDenialPage } from '../denials/registry';

const HealthClaimDeniedGeorgiaOutOfNetworkProvider = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'georgia', reasonKey: 'out-of-network-provider' });
  return <DenialReasonTemplate page={page} />;
};

export default HealthClaimDeniedGeorgiaOutOfNetworkProvider;

