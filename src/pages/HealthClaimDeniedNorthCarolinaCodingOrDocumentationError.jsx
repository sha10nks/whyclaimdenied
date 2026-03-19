import DenialReasonTemplate from '../denials/DenialReasonTemplate';
import { getDenialPage } from '../denials/registry';

const HealthClaimDeniedNorthCarolinaCodingOrDocumentationError = () => {
  const page = getDenialPage({ domain: 'health', stateSlug: 'north-carolina', reasonKey: 'coding-or-documentation-error' });
  return <DenialReasonTemplate page={page} />;
};

export default HealthClaimDeniedNorthCarolinaCodingOrDocumentationError;

