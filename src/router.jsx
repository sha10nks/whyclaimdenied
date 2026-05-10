import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";

const Home = lazy(() => import("./pages/Home"));
const GuidesIndex = lazy(() => import("./pages/guides/GuidesIndex"));
const GuideDetail = lazy(() => import("./pages/guides/GuideDetail"));
const RouteError = lazy(() => import("./pages/RouteError"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ClaimDeniedCalifornia = lazy(() => import("./pages/ClaimDeniedCalifornia"));
const AutoClaimDeniedCalifornia = lazy(() => import("./pages/AutoClaimDeniedCalifornia"));
const HealthClaimDeniedCalifornia = lazy(() => import("./pages/HealthClaimDeniedCalifornia"));
const AutoClaimDeniedCaliforniaNoCoverageAtTimeOfLoss = lazy(() => import("./pages/AutoClaimDeniedCaliforniaNoCoverageAtTimeOfLoss"));
const AutoClaimDeniedCaliforniaPolicyLapseOrCancellation = lazy(() => import("./pages/AutoClaimDeniedCaliforniaPolicyLapseOrCancellation"));
const AutoClaimDeniedCaliforniaMissedReportingDeadline = lazy(() => import("./pages/AutoClaimDeniedCaliforniaMissedReportingDeadline"));
const AutoClaimDeniedCaliforniaExcludedDriver = lazy(() => import("./pages/AutoClaimDeniedCaliforniaExcludedDriver"));
const AutoClaimDeniedCaliforniaMisrepresentationOrConcealment = lazy(() => import("./pages/AutoClaimDeniedCaliforniaMisrepresentationOrConcealment"));
const AutoClaimDeniedCaliforniaNonCoveredUse = lazy(() => import("./pages/AutoClaimDeniedCaliforniaNonCoveredUse"));
const AutoClaimDeniedCaliforniaFailureToCooperate = lazy(() => import("./pages/AutoClaimDeniedCaliforniaFailureToCooperate"));
const AutoClaimDeniedCaliforniaDisputedLiability = lazy(() => import("./pages/AutoClaimDeniedCaliforniaDisputedLiability"));
const HealthClaimDeniedCaliforniaPriorAuthorizationMissing = lazy(() => import("./pages/HealthClaimDeniedCaliforniaPriorAuthorizationMissing"));
const HealthClaimDeniedCaliforniaNotMedicallyNecessary = lazy(() => import("./pages/HealthClaimDeniedCaliforniaNotMedicallyNecessary"));
const HealthClaimDeniedCaliforniaOutOfNetworkProvider = lazy(() => import("./pages/HealthClaimDeniedCaliforniaOutOfNetworkProvider"));
const HealthClaimDeniedCaliforniaCodingOrDocumentationError = lazy(() => import("./pages/HealthClaimDeniedCaliforniaCodingOrDocumentationError"));
const HealthClaimDeniedCaliforniaExperimentalOrInvestigational = lazy(() => import("./pages/HealthClaimDeniedCaliforniaExperimentalOrInvestigational"));
const HealthClaimDeniedCaliforniaBenefitOrServiceExcluded = lazy(() => import("./pages/HealthClaimDeniedCaliforniaBenefitOrServiceExcluded"));
const HealthClaimDeniedCaliforniaTimelyFilingIssue = lazy(() => import("./pages/HealthClaimDeniedCaliforniaTimelyFilingIssue"));
const HealthClaimDeniedCaliforniaCoordinationOfBenefits = lazy(() => import("./pages/HealthClaimDeniedCaliforniaCoordinationOfBenefits"));

const AutoClaimDeniedFlorida = lazy(() => import("./pages/AutoClaimDeniedFlorida"));
const HealthClaimDeniedFlorida = lazy(() => import("./pages/HealthClaimDeniedFlorida"));
const AutoClaimDeniedFloridaNoCoverageAtTimeOfLoss = lazy(() => import("./pages/AutoClaimDeniedFloridaNoCoverageAtTimeOfLoss"));
const AutoClaimDeniedFloridaPolicyLapseOrCancellation = lazy(() => import("./pages/AutoClaimDeniedFloridaPolicyLapseOrCancellation"));
const AutoClaimDeniedFloridaMissedReportingDeadline = lazy(() => import("./pages/AutoClaimDeniedFloridaMissedReportingDeadline"));
const AutoClaimDeniedFloridaExcludedDriver = lazy(() => import("./pages/AutoClaimDeniedFloridaExcludedDriver"));
const AutoClaimDeniedFloridaMisrepresentationOrOmission = lazy(() => import("./pages/AutoClaimDeniedFloridaMisrepresentationOrOmission"));
const AutoClaimDeniedFloridaNonCoveredUse = lazy(() => import("./pages/AutoClaimDeniedFloridaNonCoveredUse"));
const AutoClaimDeniedFloridaFailureToCooperate = lazy(() => import("./pages/AutoClaimDeniedFloridaFailureToCooperate"));
const AutoClaimDeniedFloridaDisputedLiability = lazy(() => import("./pages/AutoClaimDeniedFloridaDisputedLiability"));
const HealthClaimDeniedFloridaPriorAuthorizationMissing = lazy(() => import("./pages/HealthClaimDeniedFloridaPriorAuthorizationMissing"));
const HealthClaimDeniedFloridaNotMedicallyNecessary = lazy(() => import("./pages/HealthClaimDeniedFloridaNotMedicallyNecessary"));
const HealthClaimDeniedFloridaOutOfNetworkProvider = lazy(() => import("./pages/HealthClaimDeniedFloridaOutOfNetworkProvider"));
const HealthClaimDeniedFloridaCodingOrDocumentationError = lazy(() => import("./pages/HealthClaimDeniedFloridaCodingOrDocumentationError"));
const HealthClaimDeniedFloridaExperimentalOrInvestigational = lazy(() => import("./pages/HealthClaimDeniedFloridaExperimentalOrInvestigational"));
const HealthClaimDeniedFloridaBenefitOrServiceExcluded = lazy(() => import("./pages/HealthClaimDeniedFloridaBenefitOrServiceExcluded"));
const HealthClaimDeniedFloridaTimelyFilingIssue = lazy(() => import("./pages/HealthClaimDeniedFloridaTimelyFilingIssue"));
const HealthClaimDeniedFloridaCoordinationOfBenefits = lazy(() => import("./pages/HealthClaimDeniedFloridaCoordinationOfBenefits"));

const AutoClaimDeniedTexas = lazy(() => import("./pages/AutoClaimDeniedTexas"));
const HealthClaimDeniedTexas = lazy(() => import("./pages/HealthClaimDeniedTexas"));
const AutoClaimDeniedTexasNoCoverage = lazy(() => import("./pages/AutoClaimDeniedTexasNoCoverage"));
const AutoClaimDeniedTexasMissedDeadline = lazy(() => import("./pages/AutoClaimDeniedTexasMissedDeadline"));
const AutoClaimDeniedTexasPolicyLapse = lazy(() => import("./pages/AutoClaimDeniedTexasPolicyLapse"));
const AutoClaimDeniedTexasExcludedDriver = lazy(() => import("./pages/AutoClaimDeniedTexasExcludedDriver"));
const AutoClaimDeniedTexasMisrepresentation = lazy(() => import("./pages/AutoClaimDeniedTexasMisrepresentation"));
const AutoClaimDeniedTexasNonCoveredUse = lazy(() => import("./pages/AutoClaimDeniedTexasNonCoveredUse"));
const AutoClaimDeniedTexasFailureCooperate = lazy(() => import("./pages/AutoClaimDeniedTexasFailureCooperate"));
const AutoClaimDeniedTexasDisputedLiability = lazy(() => import("./pages/AutoClaimDeniedTexasDisputedLiability"));
const AutoClaimDeniedTexasExcludedVehicle = lazy(() => import("./pages/AutoClaimDeniedTexasExcludedVehicle"));
const AutoClaimDeniedTexasCoverageLimits = lazy(() => import("./pages/AutoClaimDeniedTexasCoverageLimits"));
const HealthClaimDeniedTexasMedicalNecessity = lazy(() => import("./pages/HealthClaimDeniedTexasMedicalNecessity"));
const HealthClaimDeniedTexasOutOfNetwork = lazy(() => import("./pages/HealthClaimDeniedTexasOutOfNetwork"));
const HealthClaimDeniedTexasPriorAuth = lazy(() => import("./pages/HealthClaimDeniedTexasPriorAuth"));
const HealthClaimDeniedTexasExperimental = lazy(() => import("./pages/HealthClaimDeniedTexasExperimental"));
const HealthClaimDeniedTexasCoverageExclusion = lazy(() => import("./pages/HealthClaimDeniedTexasCoverageExclusion"));
const HealthClaimDeniedTexasFilingError = lazy(() => import("./pages/HealthClaimDeniedTexasFilingError"));
const HealthClaimDeniedTexasTimelyFiling = lazy(() => import("./pages/HealthClaimDeniedTexasTimelyFiling"));
const HealthClaimDeniedTexasPreExisting = lazy(() => import("./pages/HealthClaimDeniedTexasPreExisting"));
const HealthClaimDeniedTexasBenefitExhausted = lazy(() => import("./pages/HealthClaimDeniedTexasBenefitExhausted"));
const HealthClaimDeniedTexasProviderCredential = lazy(() => import("./pages/HealthClaimDeniedTexasProviderCredential"));

const AutoClaimDeniedNewYork = lazy(() => import("./pages/AutoClaimDeniedNewYork"));
const HealthClaimDeniedNewYork = lazy(() => import("./pages/HealthClaimDeniedNewYork"));
const AutoClaimDeniedNewYorkNoCoverageAtTimeOfLoss = lazy(() => import("./pages/AutoClaimDeniedNewYorkNoCoverageAtTimeOfLoss"));
const AutoClaimDeniedNewYorkMissedReportingDeadline = lazy(() => import("./pages/AutoClaimDeniedNewYorkMissedReportingDeadline"));
const AutoClaimDeniedNewYorkPolicyLapseOrCancellation = lazy(() => import("./pages/AutoClaimDeniedNewYorkPolicyLapseOrCancellation"));
const AutoClaimDeniedNewYorkExcludedDriver = lazy(() => import("./pages/AutoClaimDeniedNewYorkExcludedDriver"));
const AutoClaimDeniedNewYorkMisrepresentationOrConcealment = lazy(() => import("./pages/AutoClaimDeniedNewYorkMisrepresentationOrConcealment"));
const AutoClaimDeniedNewYorkNonCoveredUse = lazy(() => import("./pages/AutoClaimDeniedNewYorkNonCoveredUse"));
const AutoClaimDeniedNewYorkFailureToCooperate = lazy(() => import("./pages/AutoClaimDeniedNewYorkFailureToCooperate"));
const AutoClaimDeniedNewYorkDisputedLiability = lazy(() => import("./pages/AutoClaimDeniedNewYorkDisputedLiability"));
const HealthClaimDeniedNewYorkPriorAuthorizationMissing = lazy(() => import("./pages/HealthClaimDeniedNewYorkPriorAuthorizationMissing"));
const HealthClaimDeniedNewYorkNotMedicallyNecessary = lazy(() => import("./pages/HealthClaimDeniedNewYorkNotMedicallyNecessary"));
const HealthClaimDeniedNewYorkOutOfNetworkProvider = lazy(() => import("./pages/HealthClaimDeniedNewYorkOutOfNetworkProvider"));
const HealthClaimDeniedNewYorkCodingOrDocumentationError = lazy(() => import("./pages/HealthClaimDeniedNewYorkCodingOrDocumentationError"));
const HealthClaimDeniedNewYorkExperimentalOrInvestigational = lazy(() => import("./pages/HealthClaimDeniedNewYorkExperimentalOrInvestigational"));
const HealthClaimDeniedNewYorkBenefitOrServiceExcluded = lazy(() => import("./pages/HealthClaimDeniedNewYorkBenefitOrServiceExcluded"));
const HealthClaimDeniedNewYorkTimelyFilingIssue = lazy(() => import("./pages/HealthClaimDeniedNewYorkTimelyFilingIssue"));
const HealthClaimDeniedNewYorkCoordinationOfBenefits = lazy(() => import("./pages/HealthClaimDeniedNewYorkCoordinationOfBenefits"));

// Pennsylvania
const AutoClaimDeniedPennsylvania = lazy(() => import("./pages/AutoClaimDeniedPennsylvania"));
const HealthClaimDeniedPennsylvania = lazy(() => import("./pages/HealthClaimDeniedPennsylvania"));
const AutoClaimDeniedPennsylvaniaNoCoverageAtTimeOfLoss = lazy(() => import("./pages/AutoClaimDeniedPennsylvaniaNoCoverageAtTimeOfLoss"));
const AutoClaimDeniedPennsylvaniaPolicyLapseOrCancellation = lazy(() => import("./pages/AutoClaimDeniedPennsylvaniaPolicyLapseOrCancellation"));
const AutoClaimDeniedPennsylvaniaMissedReportingDeadline = lazy(() => import("./pages/AutoClaimDeniedPennsylvaniaMissedReportingDeadline"));
const AutoClaimDeniedPennsylvaniaExcludedDriver = lazy(() => import("./pages/AutoClaimDeniedPennsylvaniaExcludedDriver"));
const AutoClaimDeniedPennsylvaniaMisrepresentationOrConcealment = lazy(() => import("./pages/AutoClaimDeniedPennsylvaniaMisrepresentationOrConcealment"));
const AutoClaimDeniedPennsylvaniaNonCoveredUse = lazy(() => import("./pages/AutoClaimDeniedPennsylvaniaNonCoveredUse"));
const AutoClaimDeniedPennsylvaniaFailureToCooperate = lazy(() => import("./pages/AutoClaimDeniedPennsylvaniaFailureToCooperate"));
const AutoClaimDeniedPennsylvaniaDisputedLiability = lazy(() => import("./pages/AutoClaimDeniedPennsylvaniaDisputedLiability"));
const HealthClaimDeniedPennsylvaniaPriorAuthorizationMissing = lazy(() => import("./pages/HealthClaimDeniedPennsylvaniaPriorAuthorizationMissing"));
const HealthClaimDeniedPennsylvaniaNotMedicallyNecessary = lazy(() => import("./pages/HealthClaimDeniedPennsylvaniaNotMedicallyNecessary"));
const HealthClaimDeniedPennsylvaniaOutOfNetworkProvider = lazy(() => import("./pages/HealthClaimDeniedPennsylvaniaOutOfNetworkProvider"));
const HealthClaimDeniedPennsylvaniaCodingOrDocumentationError = lazy(() => import("./pages/HealthClaimDeniedPennsylvaniaCodingOrDocumentationError"));
const HealthClaimDeniedPennsylvaniaExperimentalOrInvestigational = lazy(() => import("./pages/HealthClaimDeniedPennsylvaniaExperimentalOrInvestigational"));
const HealthClaimDeniedPennsylvaniaBenefitOrServiceExcluded = lazy(() => import("./pages/HealthClaimDeniedPennsylvaniaBenefitOrServiceExcluded"));
const HealthClaimDeniedPennsylvaniaTimelyFilingIssue = lazy(() => import("./pages/HealthClaimDeniedPennsylvaniaTimelyFilingIssue"));
const HealthClaimDeniedPennsylvaniaCoordinationOfBenefits = lazy(() => import("./pages/HealthClaimDeniedPennsylvaniaCoordinationOfBenefits"));

// Illinois
const AutoClaimDeniedIllinois = lazy(() => import("./pages/AutoClaimDeniedIllinois"));
const HealthClaimDeniedIllinois = lazy(() => import("./pages/HealthClaimDeniedIllinois"));
const AutoClaimDeniedIllinoisNoCoverageAtTimeOfLoss = lazy(() => import("./pages/AutoClaimDeniedIllinoisNoCoverageAtTimeOfLoss"));
const AutoClaimDeniedIllinoisPolicyLapseOrCancellation = lazy(() => import("./pages/AutoClaimDeniedIllinoisPolicyLapseOrCancellation"));
const AutoClaimDeniedIllinoisMissedReportingDeadline = lazy(() => import("./pages/AutoClaimDeniedIllinoisMissedReportingDeadline"));
const AutoClaimDeniedIllinoisExcludedDriver = lazy(() => import("./pages/AutoClaimDeniedIllinoisExcludedDriver"));
const AutoClaimDeniedIllinoisMisrepresentationOrConcealment = lazy(() => import("./pages/AutoClaimDeniedIllinoisMisrepresentationOrConcealment"));
const AutoClaimDeniedIllinoisNonCoveredUse = lazy(() => import("./pages/AutoClaimDeniedIllinoisNonCoveredUse"));
const AutoClaimDeniedIllinoisFailureToCooperate = lazy(() => import("./pages/AutoClaimDeniedIllinoisFailureToCooperate"));
const AutoClaimDeniedIllinoisDisputedLiability = lazy(() => import("./pages/AutoClaimDeniedIllinoisDisputedLiability"));
const HealthClaimDeniedIllinoisPriorAuthorizationMissing = lazy(() => import("./pages/HealthClaimDeniedIllinoisPriorAuthorizationMissing"));
const HealthClaimDeniedIllinoisNotMedicallyNecessary = lazy(() => import("./pages/HealthClaimDeniedIllinoisNotMedicallyNecessary"));
const HealthClaimDeniedIllinoisOutOfNetworkProvider = lazy(() => import("./pages/HealthClaimDeniedIllinoisOutOfNetworkProvider"));
const HealthClaimDeniedIllinoisCodingOrDocumentationError = lazy(() => import("./pages/HealthClaimDeniedIllinoisCodingOrDocumentationError"));
const HealthClaimDeniedIllinoisExperimentalOrInvestigational = lazy(() => import("./pages/HealthClaimDeniedIllinoisExperimentalOrInvestigational"));
const HealthClaimDeniedIllinoisBenefitOrServiceExcluded = lazy(() => import("./pages/HealthClaimDeniedIllinoisBenefitOrServiceExcluded"));
const HealthClaimDeniedIllinoisTimelyFilingIssue = lazy(() => import("./pages/HealthClaimDeniedIllinoisTimelyFilingIssue"));
const HealthClaimDeniedIllinoisCoordinationOfBenefits = lazy(() => import("./pages/HealthClaimDeniedIllinoisCoordinationOfBenefits"));

// Ohio
const AutoClaimDeniedOhio = lazy(() => import("./pages/AutoClaimDeniedOhio"));
const HealthClaimDeniedOhio = lazy(() => import("./pages/HealthClaimDeniedOhio"));
const AutoClaimDeniedOhioNoCoverageAtTimeOfLoss = lazy(() => import("./pages/AutoClaimDeniedOhioNoCoverageAtTimeOfLoss"));
const AutoClaimDeniedOhioPolicyLapseOrCancellation = lazy(() => import("./pages/AutoClaimDeniedOhioPolicyLapseOrCancellation"));
const AutoClaimDeniedOhioMissedReportingDeadline = lazy(() => import("./pages/AutoClaimDeniedOhioMissedReportingDeadline"));
const AutoClaimDeniedOhioExcludedDriver = lazy(() => import("./pages/AutoClaimDeniedOhioExcludedDriver"));
const AutoClaimDeniedOhioMisrepresentationOrConcealment = lazy(() => import("./pages/AutoClaimDeniedOhioMisrepresentationOrConcealment"));
const AutoClaimDeniedOhioNonCoveredUse = lazy(() => import("./pages/AutoClaimDeniedOhioNonCoveredUse"));
const AutoClaimDeniedOhioFailureToCooperate = lazy(() => import("./pages/AutoClaimDeniedOhioFailureToCooperate"));
const AutoClaimDeniedOhioDisputedLiability = lazy(() => import("./pages/AutoClaimDeniedOhioDisputedLiability"));
const HealthClaimDeniedOhioPriorAuthorizationMissing = lazy(() => import("./pages/HealthClaimDeniedOhioPriorAuthorizationMissing"));
const HealthClaimDeniedOhioNotMedicallyNecessary = lazy(() => import("./pages/HealthClaimDeniedOhioNotMedicallyNecessary"));
const HealthClaimDeniedOhioOutOfNetworkProvider = lazy(() => import("./pages/HealthClaimDeniedOhioOutOfNetworkProvider"));
const HealthClaimDeniedOhioCodingOrDocumentationError = lazy(() => import("./pages/HealthClaimDeniedOhioCodingOrDocumentationError"));
const HealthClaimDeniedOhioExperimentalOrInvestigational = lazy(() => import("./pages/HealthClaimDeniedOhioExperimentalOrInvestigational"));
const HealthClaimDeniedOhioBenefitOrServiceExcluded = lazy(() => import("./pages/HealthClaimDeniedOhioBenefitOrServiceExcluded"));
const HealthClaimDeniedOhioTimelyFilingIssue = lazy(() => import("./pages/HealthClaimDeniedOhioTimelyFilingIssue"));
const HealthClaimDeniedOhioCoordinationOfBenefits = lazy(() => import("./pages/HealthClaimDeniedOhioCoordinationOfBenefits"));

// Georgia
const AutoClaimDeniedGeorgia = lazy(() => import("./pages/AutoClaimDeniedGeorgia"));
const HealthClaimDeniedGeorgia = lazy(() => import("./pages/HealthClaimDeniedGeorgia"));
const AutoClaimDeniedGeorgiaNoCoverageAtTimeOfLoss = lazy(() => import("./pages/AutoClaimDeniedGeorgiaNoCoverageAtTimeOfLoss"));
const AutoClaimDeniedGeorgiaPolicyLapseOrCancellation = lazy(() => import("./pages/AutoClaimDeniedGeorgiaPolicyLapseOrCancellation"));
const AutoClaimDeniedGeorgiaMissedReportingDeadline = lazy(() => import("./pages/AutoClaimDeniedGeorgiaMissedReportingDeadline"));
const AutoClaimDeniedGeorgiaExcludedDriver = lazy(() => import("./pages/AutoClaimDeniedGeorgiaExcludedDriver"));
const AutoClaimDeniedGeorgiaMisrepresentationOrConcealment = lazy(() => import("./pages/AutoClaimDeniedGeorgiaMisrepresentationOrConcealment"));
const AutoClaimDeniedGeorgiaNonCoveredUse = lazy(() => import("./pages/AutoClaimDeniedGeorgiaNonCoveredUse"));
const AutoClaimDeniedGeorgiaFailureToCooperate = lazy(() => import("./pages/AutoClaimDeniedGeorgiaFailureToCooperate"));
const AutoClaimDeniedGeorgiaDisputedLiability = lazy(() => import("./pages/AutoClaimDeniedGeorgiaDisputedLiability"));
const HealthClaimDeniedGeorgiaPriorAuthorizationMissing = lazy(() => import("./pages/HealthClaimDeniedGeorgiaPriorAuthorizationMissing"));
const HealthClaimDeniedGeorgiaNotMedicallyNecessary = lazy(() => import("./pages/HealthClaimDeniedGeorgiaNotMedicallyNecessary"));
const HealthClaimDeniedGeorgiaOutOfNetworkProvider = lazy(() => import("./pages/HealthClaimDeniedGeorgiaOutOfNetworkProvider"));
const HealthClaimDeniedGeorgiaCodingOrDocumentationError = lazy(() => import("./pages/HealthClaimDeniedGeorgiaCodingOrDocumentationError"));
const HealthClaimDeniedGeorgiaExperimentalOrInvestigational = lazy(() => import("./pages/HealthClaimDeniedGeorgiaExperimentalOrInvestigational"));
const HealthClaimDeniedGeorgiaBenefitOrServiceExcluded = lazy(() => import("./pages/HealthClaimDeniedGeorgiaBenefitOrServiceExcluded"));
const HealthClaimDeniedGeorgiaTimelyFilingIssue = lazy(() => import("./pages/HealthClaimDeniedGeorgiaTimelyFilingIssue"));
const HealthClaimDeniedGeorgiaCoordinationOfBenefits = lazy(() => import("./pages/HealthClaimDeniedGeorgiaCoordinationOfBenefits"));

// North Carolina
const AutoClaimDeniedNorthCarolina = lazy(() => import("./pages/AutoClaimDeniedNorthCarolina"));
const HealthClaimDeniedNorthCarolina = lazy(() => import("./pages/HealthClaimDeniedNorthCarolina"));
const AutoClaimDeniedNorthCarolinaNoCoverageAtTimeOfLoss = lazy(() => import("./pages/AutoClaimDeniedNorthCarolinaNoCoverageAtTimeOfLoss"));
const AutoClaimDeniedNorthCarolinaPolicyLapseOrCancellation = lazy(() => import("./pages/AutoClaimDeniedNorthCarolinaPolicyLapseOrCancellation"));
const AutoClaimDeniedNorthCarolinaMissedReportingDeadline = lazy(() => import("./pages/AutoClaimDeniedNorthCarolinaMissedReportingDeadline"));
const AutoClaimDeniedNorthCarolinaExcludedDriver = lazy(() => import("./pages/AutoClaimDeniedNorthCarolinaExcludedDriver"));
const AutoClaimDeniedNorthCarolinaMisrepresentationOrConcealment = lazy(() => import("./pages/AutoClaimDeniedNorthCarolinaMisrepresentationOrConcealment"));
const AutoClaimDeniedNorthCarolinaNonCoveredUse = lazy(() => import("./pages/AutoClaimDeniedNorthCarolinaNonCoveredUse"));
const AutoClaimDeniedNorthCarolinaFailureToCooperate = lazy(() => import("./pages/AutoClaimDeniedNorthCarolinaFailureToCooperate"));
const AutoClaimDeniedNorthCarolinaDisputedLiability = lazy(() => import("./pages/AutoClaimDeniedNorthCarolinaDisputedLiability"));
const HealthClaimDeniedNorthCarolinaPriorAuthorizationMissing = lazy(() => import("./pages/HealthClaimDeniedNorthCarolinaPriorAuthorizationMissing"));
const HealthClaimDeniedNorthCarolinaNotMedicallyNecessary = lazy(() => import("./pages/HealthClaimDeniedNorthCarolinaNotMedicallyNecessary"));
const HealthClaimDeniedNorthCarolinaOutOfNetworkProvider = lazy(() => import("./pages/HealthClaimDeniedNorthCarolinaOutOfNetworkProvider"));
const HealthClaimDeniedNorthCarolinaCodingOrDocumentationError = lazy(() => import("./pages/HealthClaimDeniedNorthCarolinaCodingOrDocumentationError"));
const HealthClaimDeniedNorthCarolinaExperimentalOrInvestigational = lazy(() => import("./pages/HealthClaimDeniedNorthCarolinaExperimentalOrInvestigational"));
const HealthClaimDeniedNorthCarolinaBenefitOrServiceExcluded = lazy(() => import("./pages/HealthClaimDeniedNorthCarolinaBenefitOrServiceExcluded"));
const HealthClaimDeniedNorthCarolinaTimelyFilingIssue = lazy(() => import("./pages/HealthClaimDeniedNorthCarolinaTimelyFilingIssue"));
const HealthClaimDeniedNorthCarolinaCoordinationOfBenefits = lazy(() => import("./pages/HealthClaimDeniedNorthCarolinaCoordinationOfBenefits"));

// Michigan
const AutoClaimDeniedMichigan = lazy(() => import("./pages/AutoClaimDeniedMichigan"));
const HealthClaimDeniedMichigan = lazy(() => import("./pages/HealthClaimDeniedMichigan"));
const AutoClaimDeniedMichiganNoCoverageAtTimeOfLoss = lazy(() => import("./pages/AutoClaimDeniedMichiganNoCoverageAtTimeOfLoss"));
const AutoClaimDeniedMichiganPolicyLapseOrCancellation = lazy(() => import("./pages/AutoClaimDeniedMichiganPolicyLapseOrCancellation"));
const AutoClaimDeniedMichiganMissedReportingDeadline = lazy(() => import("./pages/AutoClaimDeniedMichiganMissedReportingDeadline"));
const AutoClaimDeniedMichiganExcludedDriver = lazy(() => import("./pages/AutoClaimDeniedMichiganExcludedDriver"));
const AutoClaimDeniedMichiganMisrepresentationOrConcealment = lazy(() => import("./pages/AutoClaimDeniedMichiganMisrepresentationOrConcealment"));
const AutoClaimDeniedMichiganNonCoveredUse = lazy(() => import("./pages/AutoClaimDeniedMichiganNonCoveredUse"));
const AutoClaimDeniedMichiganFailureToCooperate = lazy(() => import("./pages/AutoClaimDeniedMichiganFailureToCooperate"));
const AutoClaimDeniedMichiganDisputedLiability = lazy(() => import("./pages/AutoClaimDeniedMichiganDisputedLiability"));
const HealthClaimDeniedMichiganPriorAuthorizationMissing = lazy(() => import("./pages/HealthClaimDeniedMichiganPriorAuthorizationMissing"));
const HealthClaimDeniedMichiganNotMedicallyNecessary = lazy(() => import("./pages/HealthClaimDeniedMichiganNotMedicallyNecessary"));
const HealthClaimDeniedMichiganOutOfNetworkProvider = lazy(() => import("./pages/HealthClaimDeniedMichiganOutOfNetworkProvider"));
const HealthClaimDeniedMichiganCodingOrDocumentationError = lazy(() => import("./pages/HealthClaimDeniedMichiganCodingOrDocumentationError"));
const HealthClaimDeniedMichiganExperimentalOrInvestigational = lazy(() => import("./pages/HealthClaimDeniedMichiganExperimentalOrInvestigational"));
const HealthClaimDeniedMichiganBenefitOrServiceExcluded = lazy(() => import("./pages/HealthClaimDeniedMichiganBenefitOrServiceExcluded"));
const HealthClaimDeniedMichiganTimelyFilingIssue = lazy(() => import("./pages/HealthClaimDeniedMichiganTimelyFilingIssue"));
const HealthClaimDeniedMichiganCoordinationOfBenefits = lazy(() => import("./pages/HealthClaimDeniedMichiganCoordinationOfBenefits"));


const About = lazy(() => import("./pages/About"));
const Terms = lazy(() => import("./pages/Terms"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Contact = lazy(() => import("./pages/Contact"));

const BlogIndex = lazy(() => import("./pages/blog/BlogIndex"));
const BlogStateIndex = lazy(() => import("./pages/blog/BlogStateIndex"));
const BlogPost = lazy(() => import("./pages/blog/BlogPost"));

// New Jersey
const AutoClaimDeniedNewJersey = lazy(() => import("./pages/AutoClaimDeniedNewJersey"));
const HealthClaimDeniedNewJersey = lazy(() => import("./pages/HealthClaimDeniedNewJersey"));
const AutoClaimDeniedNewJerseyNoCoverageAtTimeOfLoss = lazy(() => import("./pages/AutoClaimDeniedNewJerseyNoCoverageAtTimeOfLoss"));
const AutoClaimDeniedNewJerseyPolicyLapseOrCancellation = lazy(() => import("./pages/AutoClaimDeniedNewJerseyPolicyLapseOrCancellation"));
const AutoClaimDeniedNewJerseyMissedReportingDeadline = lazy(() => import("./pages/AutoClaimDeniedNewJerseyMissedReportingDeadline"));
const AutoClaimDeniedNewJerseyExcludedDriver = lazy(() => import("./pages/AutoClaimDeniedNewJerseyExcludedDriver"));
const AutoClaimDeniedNewJerseyMisrepresentationOrConcealment = lazy(() => import("./pages/AutoClaimDeniedNewJerseyMisrepresentationOrConcealment"));
const AutoClaimDeniedNewJerseyNonCoveredUse = lazy(() => import("./pages/AutoClaimDeniedNewJerseyNonCoveredUse"));
const AutoClaimDeniedNewJerseyFailureToCooperate = lazy(() => import("./pages/AutoClaimDeniedNewJerseyFailureToCooperate"));
const AutoClaimDeniedNewJerseyDisputedLiability = lazy(() => import("./pages/AutoClaimDeniedNewJerseyDisputedLiability"));
const HealthClaimDeniedNewJerseyPriorAuthorizationMissing = lazy(() => import("./pages/HealthClaimDeniedNewJerseyPriorAuthorizationMissing"));
const HealthClaimDeniedNewJerseyNotMedicallyNecessary = lazy(() => import("./pages/HealthClaimDeniedNewJerseyNotMedicallyNecessary"));
const HealthClaimDeniedNewJerseyOutOfNetworkProvider = lazy(() => import("./pages/HealthClaimDeniedNewJerseyOutOfNetworkProvider"));
const HealthClaimDeniedNewJerseyCodingOrDocumentationError = lazy(() => import("./pages/HealthClaimDeniedNewJerseyCodingOrDocumentationError"));
const HealthClaimDeniedNewJerseyExperimentalOrInvestigational = lazy(() => import("./pages/HealthClaimDeniedNewJerseyExperimentalOrInvestigational"));
const HealthClaimDeniedNewJerseyBenefitOrServiceExcluded = lazy(() => import("./pages/HealthClaimDeniedNewJerseyBenefitOrServiceExcluded"));
const HealthClaimDeniedNewJerseyTimelyFilingIssue = lazy(() => import("./pages/HealthClaimDeniedNewJerseyTimelyFilingIssue"));
const HealthClaimDeniedNewJerseyCoordinationOfBenefits = lazy(() => import("./pages/HealthClaimDeniedNewJerseyCoordinationOfBenefits"));

// Virginia
const AutoClaimDeniedVirginia = lazy(() => import("./pages/AutoClaimDeniedVirginia"));
const HealthClaimDeniedVirginia = lazy(() => import("./pages/HealthClaimDeniedVirginia"));
const AutoClaimDeniedVirginiaNoCoverageAtTimeOfLoss = lazy(() => import("./pages/AutoClaimDeniedVirginiaNoCoverageAtTimeOfLoss"));
const AutoClaimDeniedVirginiaPolicyLapseOrCancellation = lazy(() => import("./pages/AutoClaimDeniedVirginiaPolicyLapseOrCancellation"));
const AutoClaimDeniedVirginiaMissedReportingDeadline = lazy(() => import("./pages/AutoClaimDeniedVirginiaMissedReportingDeadline"));
const AutoClaimDeniedVirginiaExcludedDriver = lazy(() => import("./pages/AutoClaimDeniedVirginiaExcludedDriver"));
const AutoClaimDeniedVirginiaMisrepresentationOrConcealment = lazy(() => import("./pages/AutoClaimDeniedVirginiaMisrepresentationOrConcealment"));
const AutoClaimDeniedVirginiaNonCoveredUse = lazy(() => import("./pages/AutoClaimDeniedVirginiaNonCoveredUse"));
const AutoClaimDeniedVirginiaFailureToCooperate = lazy(() => import("./pages/AutoClaimDeniedVirginiaFailureToCooperate"));
const AutoClaimDeniedVirginiaDisputedLiability = lazy(() => import("./pages/AutoClaimDeniedVirginiaDisputedLiability"));
const HealthClaimDeniedVirginiaPriorAuthorizationMissing = lazy(() => import("./pages/HealthClaimDeniedVirginiaPriorAuthorizationMissing"));
const HealthClaimDeniedVirginiaNotMedicallyNecessary = lazy(() => import("./pages/HealthClaimDeniedVirginiaNotMedicallyNecessary"));
const HealthClaimDeniedVirginiaOutOfNetworkProvider = lazy(() => import("./pages/HealthClaimDeniedVirginiaOutOfNetworkProvider"));
const HealthClaimDeniedVirginiaCodingOrDocumentationError = lazy(() => import("./pages/HealthClaimDeniedVirginiaCodingOrDocumentationError"));
const HealthClaimDeniedVirginiaExperimentalOrInvestigational = lazy(() => import("./pages/HealthClaimDeniedVirginiaExperimentalOrInvestigational"));
const HealthClaimDeniedVirginiaBenefitOrServiceExcluded = lazy(() => import("./pages/HealthClaimDeniedVirginiaBenefitOrServiceExcluded"));
const HealthClaimDeniedVirginiaTimelyFilingIssue = lazy(() => import("./pages/HealthClaimDeniedVirginiaTimelyFilingIssue"));
const HealthClaimDeniedVirginiaCoordinationOfBenefits = lazy(() => import("./pages/HealthClaimDeniedVirginiaCoordinationOfBenefits"));

export const routes = [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <RouteError />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "guides",
        element: <GuidesIndex />,
      },
      {
        path: "guides/:slug",
        element: <GuideDetail />,
      },
      {
        path: "auto-insurance-claims-denied-california",
        element: <AutoClaimDeniedCalifornia />,
      },
      {
        path: "auto-insurance-claims-denied-california/no-coverage-at-time-of-loss",
        element: <AutoClaimDeniedCaliforniaNoCoverageAtTimeOfLoss />,
      },
      {
        path: "auto-insurance-claims-denied-california/policy-lapse-or-cancellation",
        element: <AutoClaimDeniedCaliforniaPolicyLapseOrCancellation />,
      },
      {
        path: "auto-insurance-claims-denied-california/missed-reporting-deadline",
        element: <AutoClaimDeniedCaliforniaMissedReportingDeadline />,
      },
      {
        path: "auto-insurance-claims-denied-california/excluded-driver",
        element: <AutoClaimDeniedCaliforniaExcludedDriver />,
      },
      {
        path: "auto-insurance-claims-denied-california/misrepresentation-or-concealment",
        element: <AutoClaimDeniedCaliforniaMisrepresentationOrConcealment />,
      },
      {
        path: "auto-insurance-claims-denied-california/non-covered-use",
        element: <AutoClaimDeniedCaliforniaNonCoveredUse />,
      },
      {
        path: "auto-insurance-claims-denied-california/failure-to-cooperate",
        element: <AutoClaimDeniedCaliforniaFailureToCooperate />,
      },
      {
        path: "auto-insurance-claims-denied-california/disputed-liability",
        element: <AutoClaimDeniedCaliforniaDisputedLiability />,
      },
      {
        path: "health-insurance-claims-denied-california",
        element: <HealthClaimDeniedCalifornia />,
      },
      {
        path: "health-insurance-claims-denied-california/prior-authorization-missing",
        element: <HealthClaimDeniedCaliforniaPriorAuthorizationMissing />,
      },
      {
        path: "health-insurance-claims-denied-california/not-medically-necessary",
        element: <HealthClaimDeniedCaliforniaNotMedicallyNecessary />,
      },
      {
        path: "health-insurance-claims-denied-california/out-of-network-provider",
        element: <HealthClaimDeniedCaliforniaOutOfNetworkProvider />,
      },
      {
        path: "health-insurance-claims-denied-california/coding-or-documentation-error",
        element: <HealthClaimDeniedCaliforniaCodingOrDocumentationError />,
      },
      {
        path: "health-insurance-claims-denied-california/experimental-or-investigational",
        element: <HealthClaimDeniedCaliforniaExperimentalOrInvestigational />,
      },
      {
        path: "health-insurance-claims-denied-california/benefit-or-service-excluded",
        element: <HealthClaimDeniedCaliforniaBenefitOrServiceExcluded />,
      },
      {
        path: "health-insurance-claims-denied-california/timely-filing-issue",
        element: <HealthClaimDeniedCaliforniaTimelyFilingIssue />,
      },
      {
        path: "health-insurance-claims-denied-california/coordination-of-benefits",
        element: <HealthClaimDeniedCaliforniaCoordinationOfBenefits />,
      },
      {
        path: "auto-insurance-claims-denied-florida",
        element: <AutoClaimDeniedFlorida />,
      },
      {
        path: "auto-insurance-claims-denied-florida/no-coverage-at-time-of-loss",
        element: <AutoClaimDeniedFloridaNoCoverageAtTimeOfLoss />,
      },
      {
        path: "auto-insurance-claims-denied-florida/policy-lapse-or-cancellation",
        element: <AutoClaimDeniedFloridaPolicyLapseOrCancellation />,
      },
      {
        path: "auto-insurance-claims-denied-florida/missed-reporting-deadline",
        element: <AutoClaimDeniedFloridaMissedReportingDeadline />,
      },
      {
        path: "auto-insurance-claims-denied-florida/excluded-driver",
        element: <AutoClaimDeniedFloridaExcludedDriver />,
      },
      {
        path: "auto-insurance-claims-denied-florida/misrepresentation-or-omission",
        element: <AutoClaimDeniedFloridaMisrepresentationOrOmission />,
      },
      {
        path: "auto-insurance-claims-denied-florida/non-covered-use",
        element: <AutoClaimDeniedFloridaNonCoveredUse />,
      },
      {
        path: "auto-insurance-claims-denied-florida/failure-to-cooperate",
        element: <AutoClaimDeniedFloridaFailureToCooperate />,
      },
      {
        path: "auto-insurance-claims-denied-florida/disputed-liability",
        element: <AutoClaimDeniedFloridaDisputedLiability />,
      },
      {
        path: "health-insurance-claims-denied-florida",
        element: <HealthClaimDeniedFlorida />,
      },
      {
        path: "health-insurance-claims-denied-florida/prior-authorization-missing",
        element: <HealthClaimDeniedFloridaPriorAuthorizationMissing />,
      },
      {
        path: "health-insurance-claims-denied-florida/not-medically-necessary",
        element: <HealthClaimDeniedFloridaNotMedicallyNecessary />,
      },
      {
        path: "health-insurance-claims-denied-florida/out-of-network-provider",
        element: <HealthClaimDeniedFloridaOutOfNetworkProvider />,
      },
      {
        path: "health-insurance-claims-denied-florida/coding-or-documentation-error",
        element: <HealthClaimDeniedFloridaCodingOrDocumentationError />,
      },
      {
        path: "health-insurance-claims-denied-florida/experimental-or-investigational",
        element: <HealthClaimDeniedFloridaExperimentalOrInvestigational />,
      },
      {
        path: "health-insurance-claims-denied-florida/benefit-or-service-excluded",
        element: <HealthClaimDeniedFloridaBenefitOrServiceExcluded />,
      },
      {
        path: "health-insurance-claims-denied-florida/timely-filing-issue",
        element: <HealthClaimDeniedFloridaTimelyFilingIssue />,
      },
      {
        path: "health-insurance-claims-denied-florida/coordination-of-benefits",
        element: <HealthClaimDeniedFloridaCoordinationOfBenefits />,
      },
      {
        path: "auto-insurance-claims-denied-new-york",
        element: <AutoClaimDeniedNewYork />,
      },
      {
        path: "auto-insurance-claims-denied-new-york/no-coverage-at-time-of-loss",
        element: <AutoClaimDeniedNewYorkNoCoverageAtTimeOfLoss />,
      },
      {
        path: "auto-insurance-claims-denied-new-york/missed-reporting-deadline",
        element: <AutoClaimDeniedNewYorkMissedReportingDeadline />,
      },
      {
        path: "auto-insurance-claims-denied-new-york/policy-lapse-or-cancellation",
        element: <AutoClaimDeniedNewYorkPolicyLapseOrCancellation />,
      },
      {
        path: "auto-insurance-claims-denied-new-york/excluded-driver",
        element: <AutoClaimDeniedNewYorkExcludedDriver />,
      },
      {
        path: "auto-insurance-claims-denied-new-york/misrepresentation-or-concealment",
        element: <AutoClaimDeniedNewYorkMisrepresentationOrConcealment />,
      },
      {
        path: "auto-insurance-claims-denied-new-york/non-covered-use",
        element: <AutoClaimDeniedNewYorkNonCoveredUse />,
      },
      {
        path: "auto-insurance-claims-denied-new-york/failure-to-cooperate",
        element: <AutoClaimDeniedNewYorkFailureToCooperate />,
      },
      {
        path: "auto-insurance-claims-denied-new-york/disputed-liability",
        element: <AutoClaimDeniedNewYorkDisputedLiability />,
      },
      {
        path: "health-insurance-claims-denied-new-york",
        element: <HealthClaimDeniedNewYork />,
      },
      {
        path: "health-insurance-claims-denied-new-york/prior-authorization-missing",
        element: <HealthClaimDeniedNewYorkPriorAuthorizationMissing />,
      },
      {
        path: "health-insurance-claims-denied-new-york/not-medically-necessary",
        element: <HealthClaimDeniedNewYorkNotMedicallyNecessary />,
      },
      {
        path: "health-insurance-claims-denied-new-york/out-of-network-provider",
        element: <HealthClaimDeniedNewYorkOutOfNetworkProvider />,
      },
      {
        path: "health-insurance-claims-denied-new-york/coding-or-documentation-error",
        element: <HealthClaimDeniedNewYorkCodingOrDocumentationError />,
      },
      {
        path: "health-insurance-claims-denied-new-york/experimental-or-investigational",
        element: <HealthClaimDeniedNewYorkExperimentalOrInvestigational />,
      },
      {
        path: "health-insurance-claims-denied-new-york/benefit-or-service-excluded",
        element: <HealthClaimDeniedNewYorkBenefitOrServiceExcluded />,
      },
      {
        path: "health-insurance-claims-denied-new-york/timely-filing-issue",
        element: <HealthClaimDeniedNewYorkTimelyFilingIssue />,
      },
      {
        path: "health-insurance-claims-denied-new-york/coordination-of-benefits",
        element: <HealthClaimDeniedNewYorkCoordinationOfBenefits />,
      },
      {
        path: "auto-insurance-claims-denied-illinois",
        element: <AutoClaimDeniedIllinois />,
      },
      {
        path: "auto-insurance-claims-denied-illinois/no-coverage-at-time-of-loss",
        element: <AutoClaimDeniedIllinoisNoCoverageAtTimeOfLoss />,
      },
      {
        path: "auto-insurance-claims-denied-illinois/policy-lapse-or-cancellation",
        element: <AutoClaimDeniedIllinoisPolicyLapseOrCancellation />,
      },
      {
        path: "auto-insurance-claims-denied-illinois/missed-reporting-deadline",
        element: <AutoClaimDeniedIllinoisMissedReportingDeadline />,
      },
      {
        path: "auto-insurance-claims-denied-illinois/excluded-driver",
        element: <AutoClaimDeniedIllinoisExcludedDriver />,
      },
      {
        path: "auto-insurance-claims-denied-illinois/misrepresentation-or-concealment",
        element: <AutoClaimDeniedIllinoisMisrepresentationOrConcealment />,
      },
      {
        path: "auto-insurance-claims-denied-illinois/non-covered-use",
        element: <AutoClaimDeniedIllinoisNonCoveredUse />,
      },
      {
        path: "auto-insurance-claims-denied-illinois/failure-to-cooperate",
        element: <AutoClaimDeniedIllinoisFailureToCooperate />,
      },
      {
        path: "auto-insurance-claims-denied-illinois/disputed-liability",
        element: <AutoClaimDeniedIllinoisDisputedLiability />,
      },
      {
        path: "health-insurance-claims-denied-illinois",
        element: <HealthClaimDeniedIllinois />,
      },
      {
        path: "health-insurance-claims-denied-illinois/prior-authorization-missing",
        element: <HealthClaimDeniedIllinoisPriorAuthorizationMissing />,
      },
      {
        path: "health-insurance-claims-denied-illinois/not-medically-necessary",
        element: <HealthClaimDeniedIllinoisNotMedicallyNecessary />,
      },
      {
        path: "health-insurance-claims-denied-illinois/out-of-network-provider",
        element: <HealthClaimDeniedIllinoisOutOfNetworkProvider />,
      },
      {
        path: "health-insurance-claims-denied-illinois/coding-or-documentation-error",
        element: <HealthClaimDeniedIllinoisCodingOrDocumentationError />,
      },
      {
        path: "health-insurance-claims-denied-illinois/experimental-or-investigational",
        element: <HealthClaimDeniedIllinoisExperimentalOrInvestigational />,
      },
      {
        path: "health-insurance-claims-denied-illinois/benefit-or-service-excluded",
        element: <HealthClaimDeniedIllinoisBenefitOrServiceExcluded />,
      },
      {
        path: "health-insurance-claims-denied-illinois/timely-filing-issue",
        element: <HealthClaimDeniedIllinoisTimelyFilingIssue />,
      },
      {
        path: "health-insurance-claims-denied-illinois/coordination-of-benefits",
        element: <HealthClaimDeniedIllinoisCoordinationOfBenefits />,
      },

      {
        path: "auto-insurance-claims-denied-ohio",
        element: <AutoClaimDeniedOhio />,
      },
      {
        path: "auto-insurance-claims-denied-ohio/no-coverage-at-time-of-loss",
        element: <AutoClaimDeniedOhioNoCoverageAtTimeOfLoss />,
      },
      {
        path: "auto-insurance-claims-denied-ohio/policy-lapse-or-cancellation",
        element: <AutoClaimDeniedOhioPolicyLapseOrCancellation />,
      },
      {
        path: "auto-insurance-claims-denied-ohio/missed-reporting-deadline",
        element: <AutoClaimDeniedOhioMissedReportingDeadline />,
      },
      {
        path: "auto-insurance-claims-denied-ohio/excluded-driver",
        element: <AutoClaimDeniedOhioExcludedDriver />,
      },
      {
        path: "auto-insurance-claims-denied-ohio/misrepresentation-or-concealment",
        element: <AutoClaimDeniedOhioMisrepresentationOrConcealment />,
      },
      {
        path: "auto-insurance-claims-denied-ohio/non-covered-use",
        element: <AutoClaimDeniedOhioNonCoveredUse />,
      },
      {
        path: "auto-insurance-claims-denied-ohio/failure-to-cooperate",
        element: <AutoClaimDeniedOhioFailureToCooperate />,
      },
      {
        path: "auto-insurance-claims-denied-ohio/disputed-liability",
        element: <AutoClaimDeniedOhioDisputedLiability />,
      },
      {
        path: "health-insurance-claims-denied-ohio",
        element: <HealthClaimDeniedOhio />,
      },
      {
        path: "health-insurance-claims-denied-ohio/prior-authorization-missing",
        element: <HealthClaimDeniedOhioPriorAuthorizationMissing />,
      },
      {
        path: "health-insurance-claims-denied-ohio/not-medically-necessary",
        element: <HealthClaimDeniedOhioNotMedicallyNecessary />,
      },
      {
        path: "health-insurance-claims-denied-ohio/out-of-network-provider",
        element: <HealthClaimDeniedOhioOutOfNetworkProvider />,
      },
      {
        path: "health-insurance-claims-denied-ohio/coding-or-documentation-error",
        element: <HealthClaimDeniedOhioCodingOrDocumentationError />,
      },
      {
        path: "health-insurance-claims-denied-ohio/experimental-or-investigational",
        element: <HealthClaimDeniedOhioExperimentalOrInvestigational />,
      },
      {
        path: "health-insurance-claims-denied-ohio/benefit-or-service-excluded",
        element: <HealthClaimDeniedOhioBenefitOrServiceExcluded />,
      },
      {
        path: "health-insurance-claims-denied-ohio/timely-filing-issue",
        element: <HealthClaimDeniedOhioTimelyFilingIssue />,
      },
      {
        path: "health-insurance-claims-denied-ohio/coordination-of-benefits",
        element: <HealthClaimDeniedOhioCoordinationOfBenefits />,
      },

      {
        path: "auto-insurance-claims-denied-georgia",
        element: <AutoClaimDeniedGeorgia />,
      },
      {
        path: "auto-insurance-claims-denied-georgia/no-coverage-at-time-of-loss",
        element: <AutoClaimDeniedGeorgiaNoCoverageAtTimeOfLoss />,
      },
      {
        path: "auto-insurance-claims-denied-georgia/policy-lapse-or-cancellation",
        element: <AutoClaimDeniedGeorgiaPolicyLapseOrCancellation />,
      },
      {
        path: "auto-insurance-claims-denied-georgia/missed-reporting-deadline",
        element: <AutoClaimDeniedGeorgiaMissedReportingDeadline />,
      },
      {
        path: "auto-insurance-claims-denied-georgia/excluded-driver",
        element: <AutoClaimDeniedGeorgiaExcludedDriver />,
      },
      {
        path: "auto-insurance-claims-denied-georgia/misrepresentation-or-concealment",
        element: <AutoClaimDeniedGeorgiaMisrepresentationOrConcealment />,
      },
      {
        path: "auto-insurance-claims-denied-georgia/non-covered-use",
        element: <AutoClaimDeniedGeorgiaNonCoveredUse />,
      },
      {
        path: "auto-insurance-claims-denied-georgia/failure-to-cooperate",
        element: <AutoClaimDeniedGeorgiaFailureToCooperate />,
      },
      {
        path: "auto-insurance-claims-denied-georgia/disputed-liability",
        element: <AutoClaimDeniedGeorgiaDisputedLiability />,
      },
      {
        path: "health-insurance-claims-denied-georgia",
        element: <HealthClaimDeniedGeorgia />,
      },
      {
        path: "health-insurance-claims-denied-georgia/prior-authorization-missing",
        element: <HealthClaimDeniedGeorgiaPriorAuthorizationMissing />,
      },
      {
        path: "health-insurance-claims-denied-georgia/not-medically-necessary",
        element: <HealthClaimDeniedGeorgiaNotMedicallyNecessary />,
      },
      {
        path: "health-insurance-claims-denied-georgia/out-of-network-provider",
        element: <HealthClaimDeniedGeorgiaOutOfNetworkProvider />,
      },
      {
        path: "health-insurance-claims-denied-georgia/coding-or-documentation-error",
        element: <HealthClaimDeniedGeorgiaCodingOrDocumentationError />,
      },
      {
        path: "health-insurance-claims-denied-georgia/experimental-or-investigational",
        element: <HealthClaimDeniedGeorgiaExperimentalOrInvestigational />,
      },
      {
        path: "health-insurance-claims-denied-georgia/benefit-or-service-excluded",
        element: <HealthClaimDeniedGeorgiaBenefitOrServiceExcluded />,
      },
      {
        path: "health-insurance-claims-denied-georgia/timely-filing-issue",
        element: <HealthClaimDeniedGeorgiaTimelyFilingIssue />,
      },
      {
        path: "health-insurance-claims-denied-georgia/coordination-of-benefits",
        element: <HealthClaimDeniedGeorgiaCoordinationOfBenefits />,
      },

      {
        path: "auto-insurance-claims-denied-north-carolina",
        element: <AutoClaimDeniedNorthCarolina />,
      },
      {
        path: "auto-insurance-claims-denied-north-carolina/no-coverage-at-time-of-loss",
        element: <AutoClaimDeniedNorthCarolinaNoCoverageAtTimeOfLoss />,
      },
      {
        path: "auto-insurance-claims-denied-north-carolina/policy-lapse-or-cancellation",
        element: <AutoClaimDeniedNorthCarolinaPolicyLapseOrCancellation />,
      },
      {
        path: "auto-insurance-claims-denied-north-carolina/missed-reporting-deadline",
        element: <AutoClaimDeniedNorthCarolinaMissedReportingDeadline />,
      },
      {
        path: "auto-insurance-claims-denied-north-carolina/excluded-driver",
        element: <AutoClaimDeniedNorthCarolinaExcludedDriver />,
      },
      {
        path: "auto-insurance-claims-denied-north-carolina/misrepresentation-or-concealment",
        element: <AutoClaimDeniedNorthCarolinaMisrepresentationOrConcealment />,
      },
      {
        path: "auto-insurance-claims-denied-north-carolina/non-covered-use",
        element: <AutoClaimDeniedNorthCarolinaNonCoveredUse />,
      },
      {
        path: "auto-insurance-claims-denied-north-carolina/failure-to-cooperate",
        element: <AutoClaimDeniedNorthCarolinaFailureToCooperate />,
      },
      {
        path: "auto-insurance-claims-denied-north-carolina/disputed-liability",
        element: <AutoClaimDeniedNorthCarolinaDisputedLiability />,
      },
      {
        path: "health-insurance-claims-denied-north-carolina",
        element: <HealthClaimDeniedNorthCarolina />,
      },
      {
        path: "health-insurance-claims-denied-north-carolina/prior-authorization-missing",
        element: <HealthClaimDeniedNorthCarolinaPriorAuthorizationMissing />,
      },
      {
        path: "health-insurance-claims-denied-north-carolina/not-medically-necessary",
        element: <HealthClaimDeniedNorthCarolinaNotMedicallyNecessary />,
      },
      {
        path: "health-insurance-claims-denied-north-carolina/out-of-network-provider",
        element: <HealthClaimDeniedNorthCarolinaOutOfNetworkProvider />,
      },
      {
        path: "health-insurance-claims-denied-north-carolina/coding-or-documentation-error",
        element: <HealthClaimDeniedNorthCarolinaCodingOrDocumentationError />,
      },
      {
        path: "health-insurance-claims-denied-north-carolina/experimental-or-investigational",
        element: <HealthClaimDeniedNorthCarolinaExperimentalOrInvestigational />,
      },
      {
        path: "health-insurance-claims-denied-north-carolina/benefit-or-service-excluded",
        element: <HealthClaimDeniedNorthCarolinaBenefitOrServiceExcluded />,
      },
      {
        path: "health-insurance-claims-denied-north-carolina/timely-filing-issue",
        element: <HealthClaimDeniedNorthCarolinaTimelyFilingIssue />,
      },
      {
        path: "health-insurance-claims-denied-north-carolina/coordination-of-benefits",
        element: <HealthClaimDeniedNorthCarolinaCoordinationOfBenefits />,
      },

      {
        path: "auto-insurance-claims-denied-michigan",
        element: <AutoClaimDeniedMichigan />,
      },
      {
        path: "auto-insurance-claims-denied-michigan/no-coverage-at-time-of-loss",
        element: <AutoClaimDeniedMichiganNoCoverageAtTimeOfLoss />,
      },
      {
        path: "auto-insurance-claims-denied-michigan/policy-lapse-or-cancellation",
        element: <AutoClaimDeniedMichiganPolicyLapseOrCancellation />,
      },
      {
        path: "auto-insurance-claims-denied-michigan/missed-reporting-deadline",
        element: <AutoClaimDeniedMichiganMissedReportingDeadline />,
      },
      {
        path: "auto-insurance-claims-denied-michigan/excluded-driver",
        element: <AutoClaimDeniedMichiganExcludedDriver />,
      },
      {
        path: "auto-insurance-claims-denied-michigan/misrepresentation-or-concealment",
        element: <AutoClaimDeniedMichiganMisrepresentationOrConcealment />,
      },
      {
        path: "auto-insurance-claims-denied-michigan/non-covered-use",
        element: <AutoClaimDeniedMichiganNonCoveredUse />,
      },
      {
        path: "auto-insurance-claims-denied-michigan/failure-to-cooperate",
        element: <AutoClaimDeniedMichiganFailureToCooperate />,
      },
      {
        path: "auto-insurance-claims-denied-michigan/disputed-liability",
        element: <AutoClaimDeniedMichiganDisputedLiability />,
      },
      {
        path: "health-insurance-claims-denied-michigan",
        element: <HealthClaimDeniedMichigan />,
      },
      {
        path: "health-insurance-claims-denied-michigan/prior-authorization-missing",
        element: <HealthClaimDeniedMichiganPriorAuthorizationMissing />,
      },
      {
        path: "health-insurance-claims-denied-michigan/not-medically-necessary",
        element: <HealthClaimDeniedMichiganNotMedicallyNecessary />,
      },
      {
        path: "health-insurance-claims-denied-michigan/out-of-network-provider",
        element: <HealthClaimDeniedMichiganOutOfNetworkProvider />,
      },
      {
        path: "health-insurance-claims-denied-michigan/coding-or-documentation-error",
        element: <HealthClaimDeniedMichiganCodingOrDocumentationError />,
      },
      {
        path: "health-insurance-claims-denied-michigan/experimental-or-investigational",
        element: <HealthClaimDeniedMichiganExperimentalOrInvestigational />,
      },
      {
        path: "health-insurance-claims-denied-michigan/benefit-or-service-excluded",
        element: <HealthClaimDeniedMichiganBenefitOrServiceExcluded />,
      },
      {
        path: "health-insurance-claims-denied-michigan/timely-filing-issue",
        element: <HealthClaimDeniedMichiganTimelyFilingIssue />,
      },
      {
        path: "health-insurance-claims-denied-michigan/coordination-of-benefits",
        element: <HealthClaimDeniedMichiganCoordinationOfBenefits />,
      },

      {
        path: "auto-insurance-claims-denied-new-jersey",
        element: <AutoClaimDeniedNewJersey />,
      },
      { path: "auto-insurance-claims-denied-new-jersey/no-coverage-at-time-of-loss", element: <AutoClaimDeniedNewJerseyNoCoverageAtTimeOfLoss /> },
      { path: "auto-insurance-claims-denied-new-jersey/policy-lapse-or-cancellation", element: <AutoClaimDeniedNewJerseyPolicyLapseOrCancellation /> },
      { path: "auto-insurance-claims-denied-new-jersey/missed-reporting-deadline", element: <AutoClaimDeniedNewJerseyMissedReportingDeadline /> },
      { path: "auto-insurance-claims-denied-new-jersey/excluded-driver", element: <AutoClaimDeniedNewJerseyExcludedDriver /> },
      { path: "auto-insurance-claims-denied-new-jersey/misrepresentation-or-concealment", element: <AutoClaimDeniedNewJerseyMisrepresentationOrConcealment /> },
      { path: "auto-insurance-claims-denied-new-jersey/non-covered-use", element: <AutoClaimDeniedNewJerseyNonCoveredUse /> },
      { path: "auto-insurance-claims-denied-new-jersey/failure-to-cooperate", element: <AutoClaimDeniedNewJerseyFailureToCooperate /> },
      { path: "auto-insurance-claims-denied-new-jersey/disputed-liability", element: <AutoClaimDeniedNewJerseyDisputedLiability /> },
      {
        path: "health-insurance-claims-denied-new-jersey",
        element: <HealthClaimDeniedNewJersey />,
      },
      { path: "health-insurance-claims-denied-new-jersey/prior-authorization-missing", element: <HealthClaimDeniedNewJerseyPriorAuthorizationMissing /> },
      { path: "health-insurance-claims-denied-new-jersey/not-medically-necessary", element: <HealthClaimDeniedNewJerseyNotMedicallyNecessary /> },
      { path: "health-insurance-claims-denied-new-jersey/out-of-network-provider", element: <HealthClaimDeniedNewJerseyOutOfNetworkProvider /> },
      { path: "health-insurance-claims-denied-new-jersey/coding-or-documentation-error", element: <HealthClaimDeniedNewJerseyCodingOrDocumentationError /> },
      { path: "health-insurance-claims-denied-new-jersey/experimental-or-investigational", element: <HealthClaimDeniedNewJerseyExperimentalOrInvestigational /> },
      { path: "health-insurance-claims-denied-new-jersey/benefit-or-service-excluded", element: <HealthClaimDeniedNewJerseyBenefitOrServiceExcluded /> },
      { path: "health-insurance-claims-denied-new-jersey/timely-filing-issue", element: <HealthClaimDeniedNewJerseyTimelyFilingIssue /> },
      { path: "health-insurance-claims-denied-new-jersey/coordination-of-benefits", element: <HealthClaimDeniedNewJerseyCoordinationOfBenefits /> },

      {
        path: "auto-insurance-claims-denied-virginia",
        element: <AutoClaimDeniedVirginia />,
      },
      { path: "auto-insurance-claims-denied-virginia/no-coverage-at-time-of-loss", element: <AutoClaimDeniedVirginiaNoCoverageAtTimeOfLoss /> },
      { path: "auto-insurance-claims-denied-virginia/policy-lapse-or-cancellation", element: <AutoClaimDeniedVirginiaPolicyLapseOrCancellation /> },
      { path: "auto-insurance-claims-denied-virginia/missed-reporting-deadline", element: <AutoClaimDeniedVirginiaMissedReportingDeadline /> },
      { path: "auto-insurance-claims-denied-virginia/excluded-driver", element: <AutoClaimDeniedVirginiaExcludedDriver /> },
      { path: "auto-insurance-claims-denied-virginia/misrepresentation-or-concealment", element: <AutoClaimDeniedVirginiaMisrepresentationOrConcealment /> },
      { path: "auto-insurance-claims-denied-virginia/non-covered-use", element: <AutoClaimDeniedVirginiaNonCoveredUse /> },
      { path: "auto-insurance-claims-denied-virginia/failure-to-cooperate", element: <AutoClaimDeniedVirginiaFailureToCooperate /> },
      { path: "auto-insurance-claims-denied-virginia/disputed-liability", element: <AutoClaimDeniedVirginiaDisputedLiability /> },
      {
        path: "health-insurance-claims-denied-virginia",
        element: <HealthClaimDeniedVirginia />,
      },
      { path: "health-insurance-claims-denied-virginia/prior-authorization-missing", element: <HealthClaimDeniedVirginiaPriorAuthorizationMissing /> },
      { path: "health-insurance-claims-denied-virginia/not-medically-necessary", element: <HealthClaimDeniedVirginiaNotMedicallyNecessary /> },
      { path: "health-insurance-claims-denied-virginia/out-of-network-provider", element: <HealthClaimDeniedVirginiaOutOfNetworkProvider /> },
      { path: "health-insurance-claims-denied-virginia/coding-or-documentation-error", element: <HealthClaimDeniedVirginiaCodingOrDocumentationError /> },
      { path: "health-insurance-claims-denied-virginia/experimental-or-investigational", element: <HealthClaimDeniedVirginiaExperimentalOrInvestigational /> },
      { path: "health-insurance-claims-denied-virginia/benefit-or-service-excluded", element: <HealthClaimDeniedVirginiaBenefitOrServiceExcluded /> },
      { path: "health-insurance-claims-denied-virginia/timely-filing-issue", element: <HealthClaimDeniedVirginiaTimelyFilingIssue /> },
      { path: "health-insurance-claims-denied-virginia/coordination-of-benefits", element: <HealthClaimDeniedVirginiaCoordinationOfBenefits /> },

      {
        path: "auto-insurance-claims-denied-pennsylvania",
        element: <AutoClaimDeniedPennsylvania />,
      },
      {
        path: "auto-insurance-claims-denied-pennsylvania/no-coverage-at-time-of-loss",
        element: <AutoClaimDeniedPennsylvaniaNoCoverageAtTimeOfLoss />,
      },
      {
        path: "auto-insurance-claims-denied-pennsylvania/policy-lapse-or-cancellation",
        element: <AutoClaimDeniedPennsylvaniaPolicyLapseOrCancellation />,
      },
      {
        path: "auto-insurance-claims-denied-pennsylvania/missed-reporting-deadline",
        element: <AutoClaimDeniedPennsylvaniaMissedReportingDeadline />,
      },
      {
        path: "auto-insurance-claims-denied-pennsylvania/excluded-driver",
        element: <AutoClaimDeniedPennsylvaniaExcludedDriver />,
      },
      {
        path: "auto-insurance-claims-denied-pennsylvania/misrepresentation-or-concealment",
        element: <AutoClaimDeniedPennsylvaniaMisrepresentationOrConcealment />,
      },
      {
        path: "auto-insurance-claims-denied-pennsylvania/non-covered-use",
        element: <AutoClaimDeniedPennsylvaniaNonCoveredUse />,
      },
      {
        path: "auto-insurance-claims-denied-pennsylvania/failure-to-cooperate",
        element: <AutoClaimDeniedPennsylvaniaFailureToCooperate />,
      },
      {
        path: "auto-insurance-claims-denied-pennsylvania/disputed-liability",
        element: <AutoClaimDeniedPennsylvaniaDisputedLiability />,
      },
      {
        path: "health-insurance-claims-denied-pennsylvania",
        element: <HealthClaimDeniedPennsylvania />,
      },
      {
        path: "health-insurance-claims-denied-pennsylvania/prior-authorization-missing",
        element: <HealthClaimDeniedPennsylvaniaPriorAuthorizationMissing />,
      },
      {
        path: "health-insurance-claims-denied-pennsylvania/not-medically-necessary",
        element: <HealthClaimDeniedPennsylvaniaNotMedicallyNecessary />,
      },
      {
        path: "health-insurance-claims-denied-pennsylvania/out-of-network-provider",
        element: <HealthClaimDeniedPennsylvaniaOutOfNetworkProvider />,
      },
      {
        path: "health-insurance-claims-denied-pennsylvania/coding-or-documentation-error",
        element: <HealthClaimDeniedPennsylvaniaCodingOrDocumentationError />,
      },
      {
        path: "health-insurance-claims-denied-pennsylvania/experimental-or-investigational",
        element: <HealthClaimDeniedPennsylvaniaExperimentalOrInvestigational />,
      },
      {
        path: "health-insurance-claims-denied-pennsylvania/benefit-or-service-excluded",
        element: <HealthClaimDeniedPennsylvaniaBenefitOrServiceExcluded />,
      },
      {
        path: "health-insurance-claims-denied-pennsylvania/timely-filing-issue",
        element: <HealthClaimDeniedPennsylvaniaTimelyFilingIssue />,
      },
      {
        path: "health-insurance-claims-denied-pennsylvania/coordination-of-benefits",
        element: <HealthClaimDeniedPennsylvaniaCoordinationOfBenefits />,
      },
      {
        path: "why-claims-get-denied-california",
        element: <ClaimDeniedCalifornia />,
      },
      {
        path: "auto-insurance-claims-denied-texas",
        element: <AutoClaimDeniedTexas />,
      },
      {
        path: "auto-insurance-claims-denied-texas/no-coverage-at-time-of-loss",
        element: <AutoClaimDeniedTexasNoCoverage />,
      },
      {
        path: "auto-insurance-claims-denied-texas/missed-reporting-deadline",
        element: <AutoClaimDeniedTexasMissedDeadline />,
      },
      {
        path: "auto-insurance-claims-denied-texas/policy-lapse",
        element: <AutoClaimDeniedTexasPolicyLapse />,
      },
      {
        path: "auto-insurance-claims-denied-texas/excluded-driver",
        element: <AutoClaimDeniedTexasExcludedDriver />,
      },
      {
        path: "auto-insurance-claims-denied-texas/misrepresentation",
        element: <AutoClaimDeniedTexasMisrepresentation />,
      },
      {
        path: "auto-insurance-claims-denied-texas/non-covered-use",
        element: <AutoClaimDeniedTexasNonCoveredUse />,
      },
      {
        path: "auto-insurance-claims-denied-texas/failure-to-cooperate",
        element: <AutoClaimDeniedTexasFailureCooperate />,
      },
      {
        path: "auto-insurance-claims-denied-texas/disputed-liability",
        element: <AutoClaimDeniedTexasDisputedLiability />,
      },
      {
        path: "auto-insurance-claims-denied-texas/excluded-vehicle",
        element: <AutoClaimDeniedTexasExcludedVehicle />,
      },
      {
        path: "auto-insurance-claims-denied-texas/coverage-limits-exceeded",
        element: <AutoClaimDeniedTexasCoverageLimits />,
      },
      {
        path: "health-insurance-claims-denied-texas",
        element: <HealthClaimDeniedTexas />,
      },
      {
        path: "health-insurance-claims-denied-texas/lack-of-medical-necessity",
        element: <HealthClaimDeniedTexasMedicalNecessity />,
      },
      {
        path: "health-insurance-claims-denied-texas/out-of-network-provider",
        element: <HealthClaimDeniedTexasOutOfNetwork />,
      },
      {
        path: "health-insurance-claims-denied-texas/prior-authorization-missing",
        element: <HealthClaimDeniedTexasPriorAuth />,
      },
      {
        path: "health-insurance-claims-denied-texas/experimental-treatment",
        element: <HealthClaimDeniedTexasExperimental />,
      },
      {
        path: "health-insurance-claims-denied-texas/coverage-exclusions",
        element: <HealthClaimDeniedTexasCoverageExclusion />,
      },
      {
        path: "health-insurance-claims-denied-texas/filing-errors",
        element: <HealthClaimDeniedTexasFilingError />,
      },
      {
        path: "health-insurance-claims-denied-texas/timely-filing-violations",
        element: <HealthClaimDeniedTexasTimelyFiling />,
      },
      {
        path: "health-insurance-claims-denied-texas/pre-existing-conditions",
        element: <HealthClaimDeniedTexasPreExisting />,
      },
      {
        path: "health-insurance-claims-denied-texas/benefits-exhausted",
        element: <HealthClaimDeniedTexasBenefitExhausted />,
      },
      {
        path: "health-insurance-claims-denied-texas/provider-credential-issues",
        element: <HealthClaimDeniedTexasProviderCredential />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "blog",
        element: <BlogIndex />,
      },
      {
        path: "blog/:state",
        element: <BlogStateIndex />,
      },
      {
        path: "blog/:state/:slug",
        element: <BlogPost />,
      },
      {
        path: "terms",
        element: <Terms />,
      },
      {
        path: "privacy",
        element: <Privacy />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

const router = typeof window !== 'undefined' ? createBrowserRouter(routes) : null;

export default router;
