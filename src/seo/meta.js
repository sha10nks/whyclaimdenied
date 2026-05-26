import { GUIDES } from '../guides/registry.js';

export const BASE_URL = 'https://whyclaimdenied.com';

const GUIDE_META = Object.fromEntries(
  GUIDES.map((g) => {
    const key = `guide_${g.slug.replace(/-/g, '_')}`
    return [
      key,
      {
        title: `${g.title} | WhyClaimDenied`,
        description: g.description,
        canonical: `${BASE_URL}${g.canonicalPath}`,
      },
    ]
  }),
);

export const META = {
    toolsAppealLetterGenerator: {
      title: 'Free Insurance Appeal Letter Generator (No Login Required) | WhyClaimDenied',
      description: 'Generate professional insurance appeal letters instantly using our free AI-powered tool. No login required. Supports auto and health insurance claim denials.',
      canonical: `${BASE_URL}/tools/appeal-letter-generator`,
    },
    toolsDenialLetterAnalyzer: {
      title: 'Free Insurance Denial Letter Analyzer | WhyClaimDenied',
      description: 'Upload or paste your insurance denial letter and instantly analyze the real denial reason, hidden issues, and possible appeal directions using AI.',
      canonical: `${BASE_URL}/tools/denial-letter-analyzer`,
    },
    guidesIndex: {
      title: 'Insurance Claim Denial Guides | WhyClaimDenied',
      description: 'Step-by-step guides for denied insurance claims: appeals, paperwork, deadlines, and common denial reasons.',
      canonical: `${BASE_URL}/guides`,
    },
    home: {
      title: 'Why Insurance Claims Get Denied (+ What to Do Next) | WhyClaimDenied',
      description: 'Independent, state-specific guides for denied auto and health insurance claims. Learn why denials happen, what to request, and how to appeal.',
      canonical: `${BASE_URL}/`,
    },
    autoIL: {
      title: 'Auto Insurance Claims Denied in Illinois',
      description: 'Common denial reasons, Illinois context, and practical steps to challenge a denied auto claim.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-illinois`,
    },
    healthIL: {
      title: 'Health Insurance Claims Denied in Illinois',
      description: 'Why health claims get denied in Illinois and how to use plan appeals and IDOI consumer help.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-illinois`,
    },
    autoOH: {
      title: 'Auto Insurance Claims Denied in Ohio',
      description: 'Common denial reasons, Ohio context, and practical steps to challenge a denied auto claim.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-ohio`,
    },
    healthOH: {
      title: 'Health Insurance Claims Denied in Ohio',
      description: 'Why health claims get denied in Ohio and how to use plan appeals and ODI consumer help.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-ohio`,
    },
    autoGA: {
      title: 'Auto Insurance Claims Denied in Georgia',
      description: 'Common denial reasons, Georgia context, and practical steps to challenge a denied auto claim.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-georgia`,
    },
    healthGA: {
      title: 'Health Insurance Claims Denied in Georgia',
      description: 'Why health claims get denied in Georgia and how to use plan appeals and OCI consumer help.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-georgia`,
    },
    autoNC: {
      title: 'Auto Insurance Claims Denied in North Carolina',
      description: 'Common denial reasons, North Carolina context, and practical steps to challenge a denied auto claim.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-north-carolina`,
    },
    healthNC: {
      title: 'Health Insurance Claims Denied in North Carolina',
      description: 'Why health claims get denied in North Carolina and how to use plan appeals and consumer help options.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-north-carolina`,
    },
    autoMI: {
      title: 'Auto Insurance Claims Denied in Michigan',
      description: 'Common denial reasons, Michigan context, and practical steps to challenge a denied auto claim.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-michigan`,
    },
    healthMI: {
      title: 'Health Insurance Claims Denied in Michigan',
      description: 'Why health claims get denied in Michigan and how to use plan appeals and consumer help options.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-michigan`,
    },
    autoNJ: {
      title: 'Auto Insurance Claims Denied in New Jersey',
      description: 'Common denial reasons, New Jersey context, and practical steps to challenge a denied auto claim.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-new-jersey`,
    },
    healthNJ: {
      title: 'Health Insurance Claims Denied in New Jersey',
      description: 'Why health claims get denied in New Jersey and how to use plan appeals and consumer help options.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-new-jersey`,
    },
    autoVA: {
      title: 'Auto Insurance Claims Denied in Virginia',
      description: 'Common denial reasons, Virginia context, and practical steps to challenge a denied auto claim.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-virginia`,
    },
    healthVA: {
      title: 'Health Insurance Claims Denied in Virginia',
      description: 'Why health claims get denied in Virginia and how to use plan appeals and consumer help options.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-virginia`,
    },
    autoPA: {
      title: 'Auto Insurance Claims Denied in Pennsylvania',
      description: 'Common denial reasons, Pennsylvania context, and practical steps to challenge a denied auto claim.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-pennsylvania`,
    },
    healthPA: {
      title: 'Health Insurance Claims Denied in Pennsylvania',
      description: 'Why health claims get denied in Pennsylvania and how to use plan appeals and PID consumer help.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-pennsylvania`,
    },
    claimDenied: {
      title: 'What to Do When Your Claim is Denied in California',
      description: 'Step-by-step guide on handling denied insurance claims in California. Understand your rights and the appeals process.',
      canonical: `${BASE_URL}/why-claims-get-denied-california`,
    },
    autoCA: {
      title: 'Auto Insurance Claims Denied in California',
      description: 'Common denial reasons, key California rules, and practical steps to challenge a denied auto claim.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-california`,
    },
    healthCA: {
      title: 'Health Insurance Claims Denied in California',
      description: 'Why health claims get denied in California and how to use the state grievance and review process.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-california`,
    },
    autoFL: {
      title: 'Auto Insurance Claims Denied in Florida',
      description: 'Common denial reasons, key Florida rules, and practical steps to challenge a denied auto claim.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-florida`,
    },
    healthFL: {
      title: 'Health Insurance Claims Denied in Florida',
      description: 'Why health claims get denied in Florida and how to use grievance and consumer assistance options.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-florida`,
    },
    autoCA_noCoverage: {
      title: 'No Coverage at Time of Loss (California Auto Claims)',
      description: 'Why insurers deny for no coverage at time of loss in California auto claims and what to check next.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-california/no-coverage-at-time-of-loss`,
    },
    autoCA_lapse: {
      title: 'Policy Lapse or Cancellation (California Auto Claims)',
      description: 'How lapse and cancellation denials work in California auto claims and the key documents to request.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-california/policy-lapse-or-cancellation`,
    },
    autoCA_missedReporting: {
      title: 'Missed Reporting Deadline (California Auto Claims)',
      description: 'What “late notice” means in California auto claims and how to respond when reporting was delayed.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-california/missed-reporting-deadline`,
    },
    autoCA_excludedDriver: {
      title: 'Excluded Driver (California Auto Claims)',
      description: 'How excluded-driver denials happen in California auto claims and what to request from the insurer.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-california/excluded-driver`,
    },
    autoCA_misrep: {
      title: 'Misrepresentation or Concealment (California Auto Claims)',
      description: 'What misrepresentation denials mean in California auto insurance claims and how to challenge the facts.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-california/misrepresentation-or-concealment`,
    },
    autoCA_nonCoveredUse: {
      title: 'Non-Covered Use (California Auto Claims)',
      description: 'Why insurers deny claims for non-covered use in California and how to document what really happened.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-california/non-covered-use`,
    },
    autoCA_failureToCooperate: {
      title: 'Failure to Cooperate (California Auto Claims)',
      description: 'What insurers mean by “failure to cooperate” in California auto claims and how to cure the issue.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-california/failure-to-cooperate`,
    },
    autoCA_disputedLiability: {
      title: 'Disputed Liability or Fault (California Auto Claims)',
      description: 'How liability disputes lead to claim denials and what evidence helps in California auto claims.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-california/disputed-liability`,
    },
    healthCA_priorAuth: {
      title: 'Prior Authorization Missing (California Health Claims)',
      description: 'Why health claims get denied for missing prior authorization in California and what to do next.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-california/prior-authorization-missing`,
    },
    healthCA_medNec: {
      title: 'Not Medically Necessary (California Health Claims)',
      description: 'How medical necessity denials work in California and what to request for a stronger appeal.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-california/not-medically-necessary`,
    },
    healthCA_oON: {
      title: 'Out-of-Network Provider (California Health Claims)',
      description: 'Common out-of-network denial patterns in California and the questions to ask your plan.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-california/out-of-network-provider`,
    },
    healthCA_coding: {
      title: 'Coding or Documentation Error (California Health Claims)',
      description: 'How billing and documentation problems cause denials in California health claims and how to fix them.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-california/coding-or-documentation-error`,
    },
    healthCA_experimental: {
      title: 'Experimental or Investigational (California Health Claims)',
      description: 'What “experimental” denials mean in California health coverage and how to appeal with evidence.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-california/experimental-or-investigational`,
    },
    healthCA_excludedBenefit: {
      title: 'Benefit or Service Excluded (California Health Claims)',
      description: 'How excluded-benefit denials work in California health plans and what to check in your contract.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-california/benefit-or-service-excluded`,
    },
    healthCA_timelyFiling: {
      title: 'Timely Filing Issue (California Health Claims)',
      description: 'What timely filing denials mean in California health claims and how to request reconsideration.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-california/timely-filing-issue`,
    },
    healthCA_cob: {
      title: 'Coordination of Benefits (California Health Claims)',
      description: 'How coordination of benefits causes denials in California health claims and how to resolve COB holds.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-california/coordination-of-benefits`,
    },
    autoFL_noCoverage: {
      title: 'No Coverage at Time of Loss (Florida Auto Claims)',
      description: 'Why insurers deny for no coverage at time of loss in Florida auto claims and what to check next.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-florida/no-coverage-at-time-of-loss`,
    },
    autoFL_lapse: {
      title: 'Policy Lapse or Cancellation (Florida Auto Claims)',
      description: 'How lapse and cancellation denials work in Florida auto claims and the key documents to request.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-florida/policy-lapse-or-cancellation`,
    },
    autoFL_missedReporting: {
      title: 'Missed Reporting Deadline (Florida Auto Claims)',
      description: 'What “late notice” means in Florida auto claims and how to respond when reporting was delayed.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-florida/missed-reporting-deadline`,
    },
    autoFL_excludedDriver: {
      title: 'Excluded Driver (Florida Auto Claims)',
      description: 'How excluded-driver denials happen in Florida auto claims and what to request from the insurer.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-florida/excluded-driver`,
    },
    autoFL_misrep: {
      title: 'Misrepresentation or Omission (Florida Auto Claims)',
      description: 'What misrepresentation denials mean in Florida auto insurance claims and how to challenge the facts.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-florida/misrepresentation-or-omission`,
    },
    autoFL_nonCoveredUse: {
      title: 'Non-Covered Use (Florida Auto Claims)',
      description: 'Why insurers deny claims for non-covered use in Florida and how to document what really happened.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-florida/non-covered-use`,
    },
    autoFL_failureToCooperate: {
      title: 'Failure to Cooperate (Florida Auto Claims)',
      description: 'What insurers mean by “failure to cooperate” in Florida auto claims and how to cure the issue.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-florida/failure-to-cooperate`,
    },
    autoFL_disputedLiability: {
      title: 'Disputed Liability or Fault (Florida Auto Claims)',
      description: 'How liability disputes lead to claim denials and what evidence helps in Florida auto claims.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-florida/disputed-liability`,
    },
    healthFL_priorAuth: {
      title: 'Prior Authorization Missing (Florida Health Claims)',
      description: 'Why health claims get denied for missing prior authorization in Florida and what to do next.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-florida/prior-authorization-missing`,
    },
    healthFL_medNec: {
      title: 'Not Medically Necessary (Florida Health Claims)',
      description: 'How medical necessity denials work in Florida and what to request for a stronger appeal.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-florida/not-medically-necessary`,
    },
    healthFL_oON: {
      title: 'Out-of-Network Provider (Florida Health Claims)',
      description: 'Common out-of-network denial patterns in Florida and the questions to ask your plan.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-florida/out-of-network-provider`,
    },
    healthFL_coding: {
      title: 'Coding or Documentation Error (Florida Health Claims)',
      description: 'How billing and documentation problems cause denials in Florida health claims and how to fix them.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-florida/coding-or-documentation-error`,
    },
    healthFL_experimental: {
      title: 'Experimental or Investigational (Florida Health Claims)',
      description: 'What “experimental” denials mean in Florida health coverage and how to appeal with evidence.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-florida/experimental-or-investigational`,
    },
    healthFL_excludedBenefit: {
      title: 'Benefit or Service Excluded (Florida Health Claims)',
      description: 'How excluded-benefit denials work in Florida health plans and what to check in your contract.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-florida/benefit-or-service-excluded`,
    },
    healthFL_timelyFiling: {
      title: 'Timely Filing Issue (Florida Health Claims)',
      description: 'What timely filing denials mean in Florida health claims and how to request reconsideration.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-florida/timely-filing-issue`,
    },
    healthFL_cob: {
      title: 'Coordination of Benefits (Florida Health Claims)',
      description: 'How coordination of benefits causes denials in Florida health claims and how to resolve COB holds.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-florida/coordination-of-benefits`,
    },

    // Ohio (auto)
    autoOH_noCoverage: {
      title: 'No Coverage at Time of Loss (Ohio Auto Claims)',
      description: 'Why insurers deny for no coverage at time of loss in Ohio auto claims and what to check next.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-ohio/no-coverage-at-time-of-loss`,
    },
    autoOH_lapse: {
      title: 'Policy Lapse or Cancellation (Ohio Auto Claims)',
      description: 'How lapse and cancellation denials work in Ohio auto claims and the key documents to request.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-ohio/policy-lapse-or-cancellation`,
    },
    autoOH_missedReporting: {
      title: 'Missed Reporting Deadline (Ohio Auto Claims)',
      description: 'What “late notice” means in Ohio auto claims and how to respond when reporting was delayed.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-ohio/missed-reporting-deadline`,
    },
    autoOH_excludedDriver: {
      title: 'Excluded Driver (Ohio Auto Claims)',
      description: 'How excluded-driver denials happen in Ohio auto claims and what to request from the insurer.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-ohio/excluded-driver`,
    },
    autoOH_misrep: {
      title: 'Misrepresentation or Concealment (Ohio Auto Claims)',
      description: 'What misrepresentation denials mean in Ohio auto insurance claims and how to challenge the facts.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-ohio/misrepresentation-or-concealment`,
    },
    autoOH_nonCoveredUse: {
      title: 'Non-Covered Use (Ohio Auto Claims)',
      description: 'Why insurers deny claims for non-covered use in Ohio and how to document what really happened.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-ohio/non-covered-use`,
    },
    autoOH_failureToCooperate: {
      title: 'Failure to Cooperate (Ohio Auto Claims)',
      description: 'What insurers mean by “failure to cooperate” in Ohio auto claims and how to cure the issue.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-ohio/failure-to-cooperate`,
    },
    autoOH_disputedLiability: {
      title: 'Disputed Liability or Fault (Ohio Auto Claims)',
      description: 'How liability disputes lead to claim denials and what evidence helps in Ohio auto claims.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-ohio/disputed-liability`,
    },

    // Ohio (health)
    healthOH_priorAuth: {
      title: 'Prior Authorization Missing (Ohio Health Claims)',
      description: 'Why health claims get denied for missing prior authorization in Ohio and what to do next.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-ohio/prior-authorization-missing`,
    },
    healthOH_medNec: {
      title: 'Not Medically Necessary (Ohio Health Claims)',
      description: 'How medical necessity denials work in Ohio and what to request for a stronger appeal.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-ohio/not-medically-necessary`,
    },
    healthOH_oON: {
      title: 'Out-of-Network Provider (Ohio Health Claims)',
      description: 'Common out-of-network denial patterns in Ohio and the questions to ask your plan.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-ohio/out-of-network-provider`,
    },
    healthOH_coding: {
      title: 'Coding or Documentation Error (Ohio Health Claims)',
      description: 'How billing and documentation problems cause denials in Ohio health claims and how to fix them.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-ohio/coding-or-documentation-error`,
    },
    healthOH_experimental: {
      title: 'Experimental or Investigational (Ohio Health Claims)',
      description: 'What “experimental” denials mean in Ohio health coverage and how to appeal with evidence.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-ohio/experimental-or-investigational`,
    },
    healthOH_excludedBenefit: {
      title: 'Benefit or Service Excluded (Ohio Health Claims)',
      description: 'How excluded-benefit denials work in Ohio health plans and what to check in your contract.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-ohio/benefit-or-service-excluded`,
    },
    healthOH_timelyFiling: {
      title: 'Timely Filing Issue (Ohio Health Claims)',
      description: 'What timely filing denials mean in Ohio health claims and how to request reconsideration.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-ohio/timely-filing-issue`,
    },
    healthOH_cob: {
      title: 'Coordination of Benefits (Ohio Health Claims)',
      description: 'How coordination of benefits causes denials in Ohio health claims and how to resolve COB holds.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-ohio/coordination-of-benefits`,
    },

    // Georgia (auto)
    autoGA_noCoverage: {
      title: 'No Coverage at Time of Loss (Georgia Auto Claims)',
      description: 'Why insurers deny for no coverage at time of loss in Georgia auto claims and what to check next.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-georgia/no-coverage-at-time-of-loss`,
    },
    autoGA_lapse: {
      title: 'Policy Lapse or Cancellation (Georgia Auto Claims)',
      description: 'How lapse and cancellation denials work in Georgia auto claims and the key documents to request.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-georgia/policy-lapse-or-cancellation`,
    },
    autoGA_missedReporting: {
      title: 'Missed Reporting Deadline (Georgia Auto Claims)',
      description: 'What “late notice” means in Georgia auto claims and how to respond when reporting was delayed.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-georgia/missed-reporting-deadline`,
    },
    autoGA_excludedDriver: {
      title: 'Excluded Driver (Georgia Auto Claims)',
      description: 'How excluded-driver denials happen in Georgia auto claims and what to request from the insurer.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-georgia/excluded-driver`,
    },
    autoGA_misrep: {
      title: 'Misrepresentation or Concealment (Georgia Auto Claims)',
      description: 'What misrepresentation denials mean in Georgia auto insurance claims and how to challenge the facts.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-georgia/misrepresentation-or-concealment`,
    },
    autoGA_nonCoveredUse: {
      title: 'Non-Covered Use (Georgia Auto Claims)',
      description: 'Why insurers deny claims for non-covered use in Georgia and how to document what really happened.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-georgia/non-covered-use`,
    },
    autoGA_failureToCooperate: {
      title: 'Failure to Cooperate (Georgia Auto Claims)',
      description: 'What insurers mean by “failure to cooperate” in Georgia auto claims and how to cure the issue.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-georgia/failure-to-cooperate`,
    },
    autoGA_disputedLiability: {
      title: 'Disputed Liability or Fault (Georgia Auto Claims)',
      description: 'How liability disputes lead to claim denials and what evidence helps in Georgia auto claims.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-georgia/disputed-liability`,
    },

    // Georgia (health)
    healthGA_priorAuth: {
      title: 'Prior Authorization Missing (Georgia Health Claims)',
      description: 'Why health claims get denied for missing prior authorization in Georgia and what to do next.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-georgia/prior-authorization-missing`,
    },
    healthGA_medNec: {
      title: 'Not Medically Necessary (Georgia Health Claims)',
      description: 'How medical necessity denials work in Georgia and what to request for a stronger appeal.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-georgia/not-medically-necessary`,
    },
    healthGA_oON: {
      title: 'Out-of-Network Provider (Georgia Health Claims)',
      description: 'Common out-of-network denial patterns in Georgia and the questions to ask your plan.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-georgia/out-of-network-provider`,
    },
    healthGA_coding: {
      title: 'Coding or Documentation Error (Georgia Health Claims)',
      description: 'How billing and documentation problems cause denials in Georgia health claims and how to fix them.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-georgia/coding-or-documentation-error`,
    },
    healthGA_experimental: {
      title: 'Experimental or Investigational (Georgia Health Claims)',
      description: 'What “experimental” denials mean in Georgia health coverage and how to appeal with evidence.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-georgia/experimental-or-investigational`,
    },
    healthGA_excludedBenefit: {
      title: 'Benefit or Service Excluded (Georgia Health Claims)',
      description: 'How excluded-benefit denials work in Georgia health plans and what to check in your contract.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-georgia/benefit-or-service-excluded`,
    },
    healthGA_timelyFiling: {
      title: 'Timely Filing Issue (Georgia Health Claims)',
      description: 'What timely filing denials mean in Georgia health claims and how to request reconsideration.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-georgia/timely-filing-issue`,
    },
    healthGA_cob: {
      title: 'Coordination of Benefits (Georgia Health Claims)',
      description: 'How coordination of benefits causes denials in Georgia health claims and how to resolve COB holds.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-georgia/coordination-of-benefits`,
    },
    autoTX: {
      title: 'Auto Insurance Claims Denied in Texas',
      description: 'Common denial reasons, key Texas rules, and practical steps to challenge a denied auto claim.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-texas`,
    },
    healthTX: {
      title: 'Health Insurance Claims Denied in Texas',
      description: 'Why health claims get denied in Texas and how to use appeals, external review, and TDI complaints.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-texas`,
    },
    autoTX_noCoverage: {
      title: 'No Coverage at Time of Loss (Texas Auto Claims)',
      description: 'Why insurers deny for no coverage at time of loss in Texas auto claims and what to check next.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-texas/no-coverage-at-time-of-loss`,
    },
    autoTX_missedReporting: {
      title: 'Missed Reporting Deadline (Texas Auto Claims)',
      description: 'What “late notice” means in Texas auto claims and how to respond when reporting was delayed.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-texas/missed-reporting-deadline`,
    },
    autoTX_lapse: {
      title: 'Policy Lapse (Texas Auto Claims)',
      description: 'How lapse denials work in Texas auto claims and the key documents to request under Texas Insurance Code.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-texas/policy-lapse`,
    },
    autoTX_excludedDriver: {
      title: 'Excluded Driver (Texas Auto Claims)',
      description: 'How excluded-driver denials happen in Texas auto claims and what to request from the insurer.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-texas/excluded-driver`,
    },
    autoTX_misrep: {
      title: 'Misrepresentation (Texas Auto Claims)',
      description: 'What misrepresentation denials mean in Texas auto insurance claims and how to challenge the facts.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-texas/misrepresentation`,
    },
    autoTX_nonCoveredUse: {
      title: 'Non-Covered Use (Texas Auto Claims)',
      description: 'Why insurers deny claims for non-covered use in Texas and how to document what really happened.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-texas/non-covered-use`,
    },
    autoTX_failureToCooperate: {
      title: 'Failure to Cooperate (Texas Auto Claims)',
      description: 'What insurers mean by “failure to cooperate” in Texas auto claims and how to cure the issue.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-texas/failure-to-cooperate`,
    },
    autoTX_disputedLiability: {
      title: 'Disputed Liability (Texas Auto Claims)',
      description: 'How liability disputes lead to claim denials and what evidence helps in Texas auto claims.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-texas/disputed-liability`,
    },
    autoTX_excludedVehicle: {
      title: 'Excluded Vehicle (Texas Auto Claims)',
      description: 'How excluded-vehicle denials work in Texas auto claims and what documentation to request.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-texas/excluded-vehicle`,
    },
    autoTX_coverageLimits: {
      title: 'Coverage Limits Exceeded (Texas Auto Claims)',
      description: 'What coverage limits denials mean in Texas auto claims and how to verify policy limits.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-texas/coverage-limits-exceeded`,
    },
    healthTX_medNec: {
      title: 'Lack of Medical Necessity (Texas Health Claims)',
      description: 'How medical necessity denials work in Texas and what to request for a stronger appeal.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-texas/lack-of-medical-necessity`,
    },
    healthTX_oON: {
      title: 'Out-of-Network Provider (Texas Health Claims)',
      description: 'Common out-of-network denial patterns in Texas and the questions to ask your plan.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-texas/out-of-network-provider`,
    },
    healthTX_priorAuth: {
      title: 'Prior Authorization Missing (Texas Health Claims)',
      description: 'Why health claims get denied for missing prior authorization in Texas and what to do next.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-texas/prior-authorization-missing`,
    },
    healthTX_experimental: {
      title: 'Experimental Treatment (Texas Health Claims)',
      description: 'What “experimental” denials mean in Texas health coverage and how to appeal with evidence.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-texas/experimental-treatment`,
    },
    healthTX_excludedBenefit: {
      title: 'Coverage Exclusions (Texas Health Claims)',
      description: 'How excluded-benefit denials work in Texas health plans and what to check in your contract.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-texas/coverage-exclusions`,
    },
    healthTX_filingError: {
      title: 'Filing Errors (Texas Health Claims)',
      description: 'How billing and documentation problems cause denials in Texas health claims and how to fix them.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-texas/filing-errors`,
    },
    healthTX_timelyFiling: {
      title: 'Timely Filing Violations (Texas Health Claims)',
      description: 'What timely filing denials mean in Texas health claims and how to request reconsideration.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-texas/timely-filing-violations`,
    },
    healthTX_preExisting: {
      title: 'Pre-Existing Conditions (Texas Health Claims)',
      description: 'How pre-existing condition denials work in Texas and when federal protections apply.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-texas/pre-existing-conditions`,
    },
    healthTX_benefitExhausted: {
      title: 'Benefits Exhausted (Texas Health Claims)',
      description: 'What benefit exhaustion denials mean in Texas health claims and how to verify benefit limits.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-texas/benefits-exhausted`,
    },
    healthTX_providerCredential: {
      title: 'Provider Credential Issues (Texas Health Claims)',
      description: 'How provider credential denials work in Texas health claims and what to verify with your insurer.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-texas/provider-credential-issues`,
    },
    autoNY: {
      title: 'Auto Insurance Claims Denied in New York',
      description: 'Common denial reasons, key New York considerations, and practical steps to challenge a denied auto claim.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-new-york`,
    },
    healthNY: {
      title: 'Health Insurance Claims Denied in New York',
      description: 'Why health claims get denied in New York and how to use plan appeals, DFS external appeal, and consumer complaints.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-new-york`,
    },
    autoNY_noCoverage: {
      title: 'No Coverage at Time of Loss (New York Auto Claims)',
      description: 'Why insurers deny for no coverage at time of loss in New York auto claims and what to check next.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-new-york/no-coverage-at-time-of-loss`,
    },
    autoNY_missedReporting: {
      title: 'Missed Reporting Deadline (New York Auto Claims)',
      description: 'What “late notice” means in New York auto claims and how to respond when reporting was delayed.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-new-york/missed-reporting-deadline`,
    },
    autoNY_lapse: {
      title: 'Policy Lapse or Cancellation (New York Auto Claims)',
      description: 'How lapse and cancellation denials work in New York auto claims and the key documents to request.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-new-york/policy-lapse-or-cancellation`,
    },
    autoNY_excludedDriver: {
      title: 'Excluded Driver (New York Auto Claims)',
      description: 'How excluded-driver denials happen in New York auto claims and what to request from the insurer.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-new-york/excluded-driver`,
    },
    autoNY_misrep: {
      title: 'Misrepresentation or Concealment (New York Auto Claims)',
      description: 'What misrepresentation denials mean in New York auto insurance claims and how to challenge the facts.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-new-york/misrepresentation-or-concealment`,
    },
    autoNY_nonCoveredUse: {
      title: 'Non-Covered Use (New York Auto Claims)',
      description: 'Why insurers deny claims for non-covered use in New York and how to document what really happened.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-new-york/non-covered-use`,
    },
    autoNY_failureToCooperate: {
      title: 'Failure to Cooperate (New York Auto Claims)',
      description: 'What insurers mean by “failure to cooperate” in New York auto claims and how to cure the issue.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-new-york/failure-to-cooperate`,
    },
    autoNY_disputedLiability: {
      title: 'Disputed Liability or Fault (New York Auto Claims)',
      description: 'How liability disputes lead to claim denials and what evidence helps in New York auto claims.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-new-york/disputed-liability`,
    },
    healthNY_priorAuth: {
      title: 'Prior Authorization Missing (New York Health Claims)',
      description: 'Why health claims get denied for missing prior authorization in New York and what to do next.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-new-york/prior-authorization-missing`,
    },
    healthNY_medNec: {
      title: 'Not Medically Necessary (New York Health Claims)',
      description: 'How medical necessity denials work in New York and what to request for a stronger appeal.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-new-york/not-medically-necessary`,
    },
    healthNY_oON: {
      title: 'Out-of-Network Provider (New York Health Claims)',
      description: 'Common out-of-network denial patterns in New York and the questions to ask your plan.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-new-york/out-of-network-provider`,
    },
    healthNY_coding: {
      title: 'Coding or Documentation Error (New York Health Claims)',
      description: 'How billing and documentation problems cause denials in New York health claims and how to fix them.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-new-york/coding-or-documentation-error`,
    },
    healthNY_experimental: {
      title: 'Experimental or Investigational (New York Health Claims)',
      description: 'What “experimental” denials mean in New York health coverage and how to appeal with evidence.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-new-york/experimental-or-investigational`,
    },
    healthNY_excludedBenefit: {
      title: 'Benefit or Service Excluded (New York Health Claims)',
      description: 'How excluded-benefit denials work in New York health plans and what to check in your contract.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-new-york/benefit-or-service-excluded`,
    },
    healthNY_timelyFiling: {
      title: 'Timely Filing Issue (New York Health Claims)',
      description: 'What timely filing denials mean in New York health claims and how to request reconsideration.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-new-york/timely-filing-issue`,
    },
    healthNY_cob: {
      title: 'Coordination of Benefits (New York Health Claims)',
      description: 'How coordination of benefits causes denials in New York health claims and how to resolve COB holds.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-new-york/coordination-of-benefits`,
    },
    
    // Illinois – Auto reasons
    autoIL_noCoverage: {
      title: 'No Coverage at Time of Loss (Illinois Auto Claims)',
      description: 'Why insurers deny for no coverage at time of loss in Illinois auto claims and what to check next.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-illinois/no-coverage-at-time-of-loss`,
    },
    autoIL_lapse: {
      title: 'Policy Lapse or Cancellation (Illinois Auto Claims)',
      description: 'How lapse and cancellation denials work in Illinois auto claims and the key documents to request.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-illinois/policy-lapse-or-cancellation`,
    },
    autoIL_missedReporting: {
      title: 'Missed Reporting Deadline (Illinois Auto Claims)',
      description: 'What “late notice” means in Illinois auto claims and how to respond when reporting was delayed.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-illinois/missed-reporting-deadline`,
    },
    autoIL_excludedDriver: {
      title: 'Excluded Driver (Illinois Auto Claims)',
      description: 'How excluded-driver denials happen in Illinois auto claims and what to request from the insurer.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-illinois/excluded-driver`,
    },
    autoIL_misrep: {
      title: 'Misrepresentation or Concealment (Illinois Auto Claims)',
      description: 'What misrepresentation denials mean in Illinois auto insurance claims and how to challenge the facts.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-illinois/misrepresentation-or-concealment`,
    },
    autoIL_nonCoveredUse: {
      title: 'Non-Covered Use (Illinois Auto Claims)',
      description: 'Why insurers deny claims for non-covered use in Illinois and how to document what really happened.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-illinois/non-covered-use`,
    },
    autoIL_failureToCooperate: {
      title: 'Failure to Cooperate (Illinois Auto Claims)',
      description: 'What insurers mean by “failure to cooperate” in Illinois auto claims and how to cure the issue.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-illinois/failure-to-cooperate`,
    },
    autoIL_disputedLiability: {
      title: 'Disputed Liability or Fault (Illinois Auto Claims)',
      description: 'How liability disputes lead to claim denials and what evidence helps in Illinois auto claims.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-illinois/disputed-liability`,
    },

    // Illinois – Health reasons
    healthIL_priorAuth: {
      title: 'Prior Authorization Missing (Illinois Health Claims)',
      description: 'Why health claims get denied for missing prior authorization in Illinois and what to do next.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-illinois/prior-authorization-missing`,
    },
    healthIL_medNec: {
      title: 'Not Medically Necessary (Illinois Health Claims)',
      description: 'How medical necessity denials work in Illinois and what to request for a stronger appeal.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-illinois/not-medically-necessary`,
    },
    healthIL_oON: {
      title: 'Out-of-Network Provider (Illinois Health Claims)',
      description: 'Common out-of-network denial patterns in Illinois and the questions to ask your plan.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-illinois/out-of-network-provider`,
    },
    healthIL_coding: {
      title: 'Coding or Documentation Error (Illinois Health Claims)',
      description: 'How billing and documentation problems cause denials in Illinois health claims and how to fix them.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-illinois/coding-or-documentation-error`,
    },
    healthIL_experimental: {
      title: 'Experimental or Investigational (Illinois Health Claims)',
      description: 'What “experimental” denials mean in Illinois health coverage and how to appeal with evidence.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-illinois/experimental-or-investigational`,
    },
    healthIL_excludedBenefit: {
      title: 'Benefit or Service Excluded (Illinois Health Claims)',
      description: 'How excluded-benefit denials work in Illinois health plans and what to check in your contract.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-illinois/benefit-or-service-excluded`,
    },
    healthIL_timelyFiling: {
      title: 'Timely Filing Issue (Illinois Health Claims)',
      description: 'What timely filing denials mean in Illinois health claims and how to request reconsideration.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-illinois/timely-filing-issue`,
    },
    healthIL_cob: {
      title: 'Coordination of Benefits (Illinois Health Claims)',
      description: 'How coordination of benefits causes denials in Illinois health claims and how to resolve COB holds.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-illinois/coordination-of-benefits`,
    },
    
    // Pennsylvania – Auto reasons
    autoPA_noCoverage: {
      title: 'No Coverage at Time of Loss (Pennsylvania Auto Claims)',
      description: 'Why insurers deny for no coverage at time of loss in Pennsylvania auto claims and what to check next.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-pennsylvania/no-coverage-at-time-of-loss`,
    },
    autoPA_lapse: {
      title: 'Policy Lapse or Cancellation (Pennsylvania Auto Claims)',
      description: 'How lapse and cancellation denials work in Pennsylvania auto claims and the key documents to request.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-pennsylvania/policy-lapse-or-cancellation`,
    },
    autoPA_missedReporting: {
      title: 'Missed Reporting Deadline (Pennsylvania Auto Claims)',
      description: 'What “late notice” means in Pennsylvania auto claims and how to respond when reporting was delayed.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-pennsylvania/missed-reporting-deadline`,
    },
    autoPA_excludedDriver: {
      title: 'Excluded Driver (Pennsylvania Auto Claims)',
      description: 'How excluded-driver denials happen in Pennsylvania auto claims and what to request from the insurer.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-pennsylvania/excluded-driver`,
    },
    autoPA_misrep: {
      title: 'Misrepresentation or Concealment (Pennsylvania Auto Claims)',
      description: 'What misrepresentation denials mean in Pennsylvania auto insurance claims and how to challenge the facts.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-pennsylvania/misrepresentation-or-concealment`,
    },
    autoPA_nonCoveredUse: {
      title: 'Non-Covered Use (Pennsylvania Auto Claims)',
      description: 'Why insurers deny claims for non-covered use in Pennsylvania and how to document what really happened.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-pennsylvania/non-covered-use`,
    },
    autoPA_failureToCooperate: {
      title: 'Failure to Cooperate (Pennsylvania Auto Claims)',
      description: 'What insurers mean by “failure to cooperate” in Pennsylvania auto claims and how to cure the issue.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-pennsylvania/failure-to-cooperate`,
    },
    autoPA_disputedLiability: {
      title: 'Disputed Liability or Fault (Pennsylvania Auto Claims)',
      description: 'How liability disputes lead to claim denials and what evidence helps in Pennsylvania auto claims.',
      canonical: `${BASE_URL}/auto-insurance-claims-denied-pennsylvania/disputed-liability`,
    },

    // Pennsylvania – Health reasons
    healthPA_priorAuth: {
      title: 'Prior Authorization Missing (Pennsylvania Health Claims)',
      description: 'Why health claims get denied for missing prior authorization in Pennsylvania and what to do next.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-pennsylvania/prior-authorization-missing`,
    },
    healthPA_medNec: {
      title: 'Not Medically Necessary (Pennsylvania Health Claims)',
      description: 'How medical necessity denials work in Pennsylvania and what to request for a stronger appeal.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-pennsylvania/not-medically-necessary`,
    },
    healthPA_oON: {
      title: 'Out-of-Network Provider (Pennsylvania Health Claims)',
      description: 'Common out-of-network denial patterns in Pennsylvania and the questions to ask your plan.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-pennsylvania/out-of-network-provider`,
    },
    healthPA_coding: {
      title: 'Coding or Documentation Error (Pennsylvania Health Claims)',
      description: 'How billing and documentation problems cause denials in Pennsylvania health claims and how to fix them.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-pennsylvania/coding-or-documentation-error`,
    },
    healthPA_experimental: {
      title: 'Experimental or Investigational (Pennsylvania Health Claims)',
      description: 'What “experimental” denials mean in Pennsylvania health coverage and how to appeal with evidence.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-pennsylvania/experimental-or-investigational`,
    },
    healthPA_excludedBenefit: {
      title: 'Benefit or Service Excluded (Pennsylvania Health Claims)',
      description: 'How excluded-benefit denials work in Pennsylvania health plans and what to check in your contract.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-pennsylvania/benefit-or-service-excluded`,
    },
    healthPA_timelyFiling: {
      title: 'Timely Filing Issue (Pennsylvania Health Claims)',
      description: 'What timely filing denials mean in Pennsylvania health claims and how to request reconsideration.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-pennsylvania/timely-filing-issue`,
    },
    healthPA_cob: {
      title: 'Coordination of Benefits (Pennsylvania Health Claims)',
      description: 'How coordination of benefits causes denials in Pennsylvania health claims and how to resolve COB holds.',
      canonical: `${BASE_URL}/health-insurance-claims-denied-pennsylvania/coordination-of-benefits`,
    },
    ...GUIDE_META,
};

export const getMetaData = (page) => {
  const meta = META[page];
  if (!meta) {
    throw new Error(`Missing SEO META key: ${String(page)}`);
  }
  return meta;
};
