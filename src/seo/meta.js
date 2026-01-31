export const getMetaData = (page) => {
  const baseUrl = 'https://whyclaimdenied.com';

  const meta = {
    home: {
      title: 'Auto Insurance Claims Denied in California',
      description: 'A practical, California-specific guide to common auto claim denials and what to do next.',
      canonical: `${baseUrl}/auto-insurance-claims-denied-california`,
    },
    claimDenied: {
      title: 'What to Do When Your Claim is Denied in California',
      description: 'Step-by-step guide on handling denied insurance claims in California. Understand your rights and the appeals process.',
      canonical: `${baseUrl}/why-claims-get-denied-california`,
    },
    autoCA: {
      title: 'Auto Insurance Claims Denied in California',
      description: 'Common denial reasons, key California rules, and practical steps to challenge a denied auto claim.',
      canonical: `${baseUrl}/auto-insurance-claims-denied-california`,
    },
    healthCA: {
      title: 'Health Insurance Claims Denied in California',
      description: 'Why health claims get denied in California and how to use the state grievance and review process.',
      canonical: `${baseUrl}/health-insurance-claims-denied-california`,
    },
    autoFL: {
      title: 'Auto Insurance Claims Denied in Florida',
      description: 'Common denial reasons, key Florida rules, and practical steps to challenge a denied auto claim.',
      canonical: `${baseUrl}/auto-insurance-claims-denied-florida`,
    },
    healthFL: {
      title: 'Health Insurance Claims Denied in Florida',
      description: 'Why health claims get denied in Florida and how to use grievance and consumer assistance options.',
      canonical: `${baseUrl}/health-insurance-claims-denied-florida`,
    },
    autoCA_noCoverage: {
      title: 'No Coverage at Time of Loss (California Auto Claims)',
      description: 'Why insurers deny for no coverage at time of loss in California auto claims and what to check next.',
      canonical: `${baseUrl}/auto-insurance-claims-denied-california/no-coverage-at-time-of-loss`,
    },
    autoCA_lapse: {
      title: 'Policy Lapse or Cancellation (California Auto Claims)',
      description: 'How lapse and cancellation denials work in California auto claims and the key documents to request.',
      canonical: `${baseUrl}/auto-insurance-claims-denied-california/policy-lapse-or-cancellation`,
    },
    autoCA_missedReporting: {
      title: 'Missed Reporting Deadline (California Auto Claims)',
      description: 'What “late notice” means in California auto claims and how to respond when reporting was delayed.',
      canonical: `${baseUrl}/auto-insurance-claims-denied-california/missed-reporting-deadline`,
    },
    autoCA_excludedDriver: {
      title: 'Excluded Driver (California Auto Claims)',
      description: 'How excluded-driver denials happen in California auto claims and what to request from the insurer.',
      canonical: `${baseUrl}/auto-insurance-claims-denied-california/excluded-driver`,
    },
    autoCA_misrep: {
      title: 'Misrepresentation or Concealment (California Auto Claims)',
      description: 'What misrepresentation denials mean in California auto insurance claims and how to challenge the facts.',
      canonical: `${baseUrl}/auto-insurance-claims-denied-california/misrepresentation-or-concealment`,
    },
    autoCA_nonCoveredUse: {
      title: 'Non-Covered Use (California Auto Claims)',
      description: 'Why insurers deny claims for non-covered use in California and how to document what really happened.',
      canonical: `${baseUrl}/auto-insurance-claims-denied-california/non-covered-use`,
    },
    autoCA_failureToCooperate: {
      title: 'Failure to Cooperate (California Auto Claims)',
      description: 'What insurers mean by “failure to cooperate” in California auto claims and how to cure the issue.',
      canonical: `${baseUrl}/auto-insurance-claims-denied-california/failure-to-cooperate`,
    },
    autoCA_disputedLiability: {
      title: 'Disputed Liability or Fault (California Auto Claims)',
      description: 'How liability disputes lead to claim denials and what evidence helps in California auto claims.',
      canonical: `${baseUrl}/auto-insurance-claims-denied-california/disputed-liability`,
    },
    healthCA_priorAuth: {
      title: 'Prior Authorization Missing (California Health Claims)',
      description: 'Why health claims get denied for missing prior authorization in California and what to do next.',
      canonical: `${baseUrl}/health-insurance-claims-denied-california/prior-authorization-missing`,
    },
    healthCA_medNec: {
      title: 'Not Medically Necessary (California Health Claims)',
      description: 'How medical necessity denials work in California and what to request for a stronger appeal.',
      canonical: `${baseUrl}/health-insurance-claims-denied-california/not-medically-necessary`,
    },
    healthCA_oON: {
      title: 'Out-of-Network Provider (California Health Claims)',
      description: 'Common out-of-network denial patterns in California and the questions to ask your plan.',
      canonical: `${baseUrl}/health-insurance-claims-denied-california/out-of-network-provider`,
    },
    healthCA_coding: {
      title: 'Coding or Documentation Error (California Health Claims)',
      description: 'How billing and documentation problems cause denials in California health claims and how to fix them.',
      canonical: `${baseUrl}/health-insurance-claims-denied-california/coding-or-documentation-error`,
    },
    healthCA_experimental: {
      title: 'Experimental or Investigational (California Health Claims)',
      description: 'What “experimental” denials mean in California health coverage and how to appeal with evidence.',
      canonical: `${baseUrl}/health-insurance-claims-denied-california/experimental-or-investigational`,
    },
    healthCA_excludedBenefit: {
      title: 'Benefit or Service Excluded (California Health Claims)',
      description: 'How excluded-benefit denials work in California health plans and what to check in your contract.',
      canonical: `${baseUrl}/health-insurance-claims-denied-california/benefit-or-service-excluded`,
    },
    healthCA_timelyFiling: {
      title: 'Timely Filing Issue (California Health Claims)',
      description: 'What timely filing denials mean in California health claims and how to request reconsideration.',
      canonical: `${baseUrl}/health-insurance-claims-denied-california/timely-filing-issue`,
    },
    healthCA_cob: {
      title: 'Coordination of Benefits (California Health Claims)',
      description: 'How coordination of benefits causes denials in California health claims and how to resolve COB holds.',
      canonical: `${baseUrl}/health-insurance-claims-denied-california/coordination-of-benefits`,
    },
    autoFL_noCoverage: {
      title: 'No Coverage at Time of Loss (Florida Auto Claims)',
      description: 'Why insurers deny for no coverage at time of loss in Florida auto claims and what to check next.',
      canonical: `${baseUrl}/auto-insurance-claims-denied-florida/no-coverage-at-time-of-loss`,
    },
    autoFL_lapse: {
      title: 'Policy Lapse or Cancellation (Florida Auto Claims)',
      description: 'How lapse and cancellation denials work in Florida auto claims and the key documents to request.',
      canonical: `${baseUrl}/auto-insurance-claims-denied-florida/policy-lapse-or-cancellation`,
    },
    autoFL_missedReporting: {
      title: 'Missed Reporting Deadline (Florida Auto Claims)',
      description: 'What “late notice” means in Florida auto claims and how to respond when reporting was delayed.',
      canonical: `${baseUrl}/auto-insurance-claims-denied-florida/missed-reporting-deadline`,
    },
    autoFL_excludedDriver: {
      title: 'Excluded Driver (Florida Auto Claims)',
      description: 'How excluded-driver denials happen in Florida auto claims and what to request from the insurer.',
      canonical: `${baseUrl}/auto-insurance-claims-denied-florida/excluded-driver`,
    },
    autoFL_misrep: {
      title: 'Misrepresentation or Omission (Florida Auto Claims)',
      description: 'What misrepresentation denials mean in Florida auto insurance claims and how to challenge the facts.',
      canonical: `${baseUrl}/auto-insurance-claims-denied-florida/misrepresentation-or-omission`,
    },
    autoFL_nonCoveredUse: {
      title: 'Non-Covered Use (Florida Auto Claims)',
      description: 'Why insurers deny claims for non-covered use in Florida and how to document what really happened.',
      canonical: `${baseUrl}/auto-insurance-claims-denied-florida/non-covered-use`,
    },
    autoFL_failureToCooperate: {
      title: 'Failure to Cooperate (Florida Auto Claims)',
      description: 'What insurers mean by “failure to cooperate” in Florida auto claims and how to cure the issue.',
      canonical: `${baseUrl}/auto-insurance-claims-denied-florida/failure-to-cooperate`,
    },
    autoFL_disputedLiability: {
      title: 'Disputed Liability or Fault (Florida Auto Claims)',
      description: 'How liability disputes lead to claim denials and what evidence helps in Florida auto claims.',
      canonical: `${baseUrl}/auto-insurance-claims-denied-florida/disputed-liability`,
    },
    healthFL_priorAuth: {
      title: 'Prior Authorization Missing (Florida Health Claims)',
      description: 'Why health claims get denied for missing prior authorization in Florida and what to do next.',
      canonical: `${baseUrl}/health-insurance-claims-denied-florida/prior-authorization-missing`,
    },
    healthFL_medNec: {
      title: 'Not Medically Necessary (Florida Health Claims)',
      description: 'How medical necessity denials work in Florida and what to request for a stronger appeal.',
      canonical: `${baseUrl}/health-insurance-claims-denied-florida/not-medically-necessary`,
    },
    healthFL_oON: {
      title: 'Out-of-Network Provider (Florida Health Claims)',
      description: 'Common out-of-network denial patterns in Florida and the questions to ask your plan.',
      canonical: `${baseUrl}/health-insurance-claims-denied-florida/out-of-network-provider`,
    },
    healthFL_coding: {
      title: 'Coding or Documentation Error (Florida Health Claims)',
      description: 'How billing and documentation problems cause denials in Florida health claims and how to fix them.',
      canonical: `${baseUrl}/health-insurance-claims-denied-florida/coding-or-documentation-error`,
    },
    healthFL_experimental: {
      title: 'Experimental or Investigational (Florida Health Claims)',
      description: 'What “experimental” denials mean in Florida health coverage and how to appeal with evidence.',
      canonical: `${baseUrl}/health-insurance-claims-denied-florida/experimental-or-investigational`,
    },
    healthFL_excludedBenefit: {
      title: 'Benefit or Service Excluded (Florida Health Claims)',
      description: 'How excluded-benefit denials work in Florida health plans and what to check in your contract.',
      canonical: `${baseUrl}/health-insurance-claims-denied-florida/benefit-or-service-excluded`,
    },
    healthFL_timelyFiling: {
      title: 'Timely Filing Issue (Florida Health Claims)',
      description: 'What timely filing denials mean in Florida health claims and how to request reconsideration.',
      canonical: `${baseUrl}/health-insurance-claims-denied-florida/timely-filing-issue`,
    },
    healthFL_cob: {
      title: 'Coordination of Benefits (Florida Health Claims)',
      description: 'How coordination of benefits causes denials in Florida health claims and how to resolve COB holds.',
      canonical: `${baseUrl}/health-insurance-claims-denied-florida/coordination-of-benefits`,
    },
    autoTX: {
      title: 'Auto Insurance Claims Denied in Texas',
      description: 'Common denial reasons, key Texas rules, and practical steps to challenge a denied auto claim.',
      canonical: `${baseUrl}/auto-insurance-claims-denied-texas`,
    },
    healthTX: {
      title: 'Health Insurance Claims Denied in Texas',
      description: 'Why health claims get denied in Texas and how to use appeals, external review, and TDI complaints.',
      canonical: `${baseUrl}/health-insurance-claims-denied-texas`,
    },
    autoTX_noCoverage: {
      title: 'No Coverage at Time of Loss (Texas Auto Claims)',
      description: 'Why insurers deny for no coverage at time of loss in Texas auto claims and what to check next.',
      canonical: `${baseUrl}/auto-insurance-claims-denied-texas/no-coverage-at-time-of-loss`,
    },
    autoTX_missedReporting: {
      title: 'Missed Reporting Deadline (Texas Auto Claims)',
      description: 'What “late notice” means in Texas auto claims and how to respond when reporting was delayed.',
      canonical: `${baseUrl}/auto-insurance-claims-denied-texas/missed-reporting-deadline`,
    },
    autoTX_lapse: {
      title: 'Policy Lapse (Texas Auto Claims)',
      description: 'How lapse denials work in Texas auto claims and the key documents to request under Texas Insurance Code.',
      canonical: `${baseUrl}/auto-insurance-claims-denied-texas/policy-lapse`,
    },
    autoTX_excludedDriver: {
      title: 'Excluded Driver (Texas Auto Claims)',
      description: 'How excluded-driver denials happen in Texas auto claims and what to request from the insurer.',
      canonical: `${baseUrl}/auto-insurance-claims-denied-texas/excluded-driver`,
    },
    autoTX_misrep: {
      title: 'Misrepresentation (Texas Auto Claims)',
      description: 'What misrepresentation denials mean in Texas auto insurance claims and how to challenge the facts.',
      canonical: `${baseUrl}/auto-insurance-claims-denied-texas/misrepresentation`,
    },
    autoTX_nonCoveredUse: {
      title: 'Non-Covered Use (Texas Auto Claims)',
      description: 'Why insurers deny claims for non-covered use in Texas and how to document what really happened.',
      canonical: `${baseUrl}/auto-insurance-claims-denied-texas/non-covered-use`,
    },
    autoTX_failureToCooperate: {
      title: 'Failure to Cooperate (Texas Auto Claims)',
      description: 'What insurers mean by “failure to cooperate” in Texas auto claims and how to cure the issue.',
      canonical: `${baseUrl}/auto-insurance-claims-denied-texas/failure-to-cooperate`,
    },
    autoTX_disputedLiability: {
      title: 'Disputed Liability (Texas Auto Claims)',
      description: 'How liability disputes lead to claim denials and what evidence helps in Texas auto claims.',
      canonical: `${baseUrl}/auto-insurance-claims-denied-texas/disputed-liability`,
    },
    autoTX_excludedVehicle: {
      title: 'Excluded Vehicle (Texas Auto Claims)',
      description: 'How excluded-vehicle denials work in Texas auto claims and what documentation to request.',
      canonical: `${baseUrl}/auto-insurance-claims-denied-texas/excluded-vehicle`,
    },
    autoTX_coverageLimits: {
      title: 'Coverage Limits Exceeded (Texas Auto Claims)',
      description: 'What coverage limits denials mean in Texas auto claims and how to verify policy limits.',
      canonical: `${baseUrl}/auto-insurance-claims-denied-texas/coverage-limits-exceeded`,
    },
    healthTX_medNec: {
      title: 'Lack of Medical Necessity (Texas Health Claims)',
      description: 'How medical necessity denials work in Texas and what to request for a stronger appeal.',
      canonical: `${baseUrl}/health-insurance-claims-denied-texas/lack-of-medical-necessity`,
    },
    healthTX_oON: {
      title: 'Out-of-Network Provider (Texas Health Claims)',
      description: 'Common out-of-network denial patterns in Texas and the questions to ask your plan.',
      canonical: `${baseUrl}/health-insurance-claims-denied-texas/out-of-network-provider`,
    },
    healthTX_priorAuth: {
      title: 'Prior Authorization Missing (Texas Health Claims)',
      description: 'Why health claims get denied for missing prior authorization in Texas and what to do next.',
      canonical: `${baseUrl}/health-insurance-claims-denied-texas/prior-authorization-missing`,
    },
    healthTX_experimental: {
      title: 'Experimental Treatment (Texas Health Claims)',
      description: 'What “experimental” denials mean in Texas health coverage and how to appeal with evidence.',
      canonical: `${baseUrl}/health-insurance-claims-denied-texas/experimental-treatment`,
    },
    healthTX_excludedBenefit: {
      title: 'Coverage Exclusions (Texas Health Claims)',
      description: 'How excluded-benefit denials work in Texas health plans and what to check in your contract.',
      canonical: `${baseUrl}/health-insurance-claims-denied-texas/coverage-exclusions`,
    },
    healthTX_filingError: {
      title: 'Filing Errors (Texas Health Claims)',
      description: 'How billing and documentation problems cause denials in Texas health claims and how to fix them.',
      canonical: `${baseUrl}/health-insurance-claims-denied-texas/filing-errors`,
    },
    healthTX_timelyFiling: {
      title: 'Timely Filing Violations (Texas Health Claims)',
      description: 'What timely filing denials mean in Texas health claims and how to request reconsideration.',
      canonical: `${baseUrl}/health-insurance-claims-denied-texas/timely-filing-violations`,
    },
    healthTX_preExisting: {
      title: 'Pre-Existing Conditions (Texas Health Claims)',
      description: 'How pre-existing condition denials work in Texas and when federal protections apply.',
      canonical: `${baseUrl}/health-insurance-claims-denied-texas/pre-existing-conditions`,
    },
    healthTX_benefitExhausted: {
      title: 'Benefits Exhausted (Texas Health Claims)',
      description: 'What benefit exhaustion denials mean in Texas health claims and how to verify benefit limits.',
      canonical: `${baseUrl}/health-insurance-claims-denied-texas/benefits-exhausted`,
    },
    healthTX_providerCredential: {
      title: 'Provider Credential Issues (Texas Health Claims)',
      description: 'How provider credential denials work in Texas health claims and what to verify with your insurer.',
      canonical: `${baseUrl}/health-insurance-claims-denied-texas/provider-credential-issues`,
    },
  };

  return meta[page] || meta.autoCA;
};
