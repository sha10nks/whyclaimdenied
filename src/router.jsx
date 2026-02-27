import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";

const Home = lazy(() => import("./pages/Home"));
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

// Georgia
const AutoClaimDeniedGeorgia = lazy(() => import("./pages/AutoClaimDeniedGeorgia"));
const HealthClaimDeniedGeorgia = lazy(() => import("./pages/HealthClaimDeniedGeorgia"));


const About = lazy(() => import("./pages/About"));
const Terms = lazy(() => import("./pages/Terms"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Contact = lazy(() => import("./pages/Contact"));

const BlogIndex = lazy(() => import("./pages/blog/BlogIndex"));
const BlogStateIndex = lazy(() => import("./pages/blog/BlogStateIndex"));
const BlogPost = lazy(() => import("./pages/blog/BlogPost"));

const router = createBrowserRouter([
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
        path: "health-insurance-claims-denied-ohio",
        element: <HealthClaimDeniedOhio />,
      },

      {
        path: "auto-insurance-claims-denied-georgia",
        element: <AutoClaimDeniedGeorgia />,
      },
      {
        path: "health-insurance-claims-denied-georgia",
        element: <HealthClaimDeniedGeorgia />,
      },

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
]);

export default router;
