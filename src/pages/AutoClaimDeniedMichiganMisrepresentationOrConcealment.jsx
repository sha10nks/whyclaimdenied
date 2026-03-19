import DenialReasonTemplate from '../denials/DenialReasonTemplate';
import { getDenialPage } from '../denials/registry';

const AutoClaimDeniedMichiganMisrepresentationOrConcealment = () => {
  const page = getDenialPage({ domain: 'auto', stateSlug: 'michigan', reasonKey: 'misrepresentation-or-concealment' });
  return <DenialReasonTemplate page={page} />;
};

export default AutoClaimDeniedMichiganMisrepresentationOrConcealment;

