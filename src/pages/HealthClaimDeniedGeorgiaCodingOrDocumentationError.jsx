import DenialReasonTemplate from '../denials/DenialReasonTemplate';
import { getDenialPage } from '../denials/registry';

const HealthClaimDeniedGeorgiaCodingOrDocumentationError = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'georgia', reasonKey: 'coding-or-documentation-error' });
  return <DenialReasonTemplate page={page} />;
};

export default HealthClaimDeniedGeorgiaCodingOrDocumentationError;

