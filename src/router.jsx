import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";

const Home = lazy(() => import("./pages/Home"));
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

const About = lazy(() => import("./pages/About"));
const Terms = lazy(() => import("./pages/Terms"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Contact = lazy(() => import("./pages/Contact"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
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
    ],
  },
]);

export default router;
