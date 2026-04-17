import DenialReasonTemplate from '../denials/DenialReasonTemplate';
import { getDenialPage } from '../denials/registry';

const HealthClaimDeniedNewJerseyOutOfNetworkProvider = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'new-jersey', reasonKey: 'out-of-network-provider' });
  return <DenialReasonTemplate page={page} />;
};

export default HealthClaimDeniedNewJerseyOutOfNetworkProvider;

