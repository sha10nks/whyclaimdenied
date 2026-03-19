import DenialReasonTemplate from '../denials/DenialReasonTemplate';
import { getDenialPage } from '../denials/registry';

const AutoClaimDeniedNorthCarolinaMisrepresentationOrConcealment = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'north-carolina', reasonKey: 'misrepresentation-or-concealment' });
  return <DenialReasonTemplate page={page} />;
};

export default AutoClaimDeniedNorthCarolinaMisrepresentationOrConcealment;

