import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import ClaimDeniedCalifornia from "./pages/ClaimDeniedCalifornia";
import AutoClaimDeniedCalifornia from "./pages/AutoClaimDeniedCalifornia";
import HealthClaimDeniedCalifornia from "./pages/HealthClaimDeniedCalifornia";
import AutoClaimDeniedCaliforniaNoCoverageAtTimeOfLoss from "./pages/AutoClaimDeniedCaliforniaNoCoverageAtTimeOfLoss";
import AutoClaimDeniedCaliforniaPolicyLapseOrCancellation from "./pages/AutoClaimDeniedCaliforniaPolicyLapseOrCancellation";
import AutoClaimDeniedCaliforniaMissedReportingDeadline from "./pages/AutoClaimDeniedCaliforniaMissedReportingDeadline";
import AutoClaimDeniedCaliforniaExcludedDriver from "./pages/AutoClaimDeniedCaliforniaExcludedDriver";
import AutoClaimDeniedCaliforniaMisrepresentationOrConcealment from "./pages/AutoClaimDeniedCaliforniaMisrepresentationOrConcealment";
import AutoClaimDeniedCaliforniaNonCoveredUse from "./pages/AutoClaimDeniedCaliforniaNonCoveredUse";
import AutoClaimDeniedCaliforniaFailureToCooperate from "./pages/AutoClaimDeniedCaliforniaFailureToCooperate";
import AutoClaimDeniedCaliforniaDisputedLiability from "./pages/AutoClaimDeniedCaliforniaDisputedLiability";
import HealthClaimDeniedCaliforniaPriorAuthorizationMissing from "./pages/HealthClaimDeniedCaliforniaPriorAuthorizationMissing";
import HealthClaimDeniedCaliforniaNotMedicallyNecessary from "./pages/HealthClaimDeniedCaliforniaNotMedicallyNecessary";
import HealthClaimDeniedCaliforniaOutOfNetworkProvider from "./pages/HealthClaimDeniedCaliforniaOutOfNetworkProvider";
import HealthClaimDeniedCaliforniaCodingOrDocumentationError from "./pages/HealthClaimDeniedCaliforniaCodingOrDocumentationError";
import HealthClaimDeniedCaliforniaExperimentalOrInvestigational from "./pages/HealthClaimDeniedCaliforniaExperimentalOrInvestigational";
import HealthClaimDeniedCaliforniaBenefitOrServiceExcluded from "./pages/HealthClaimDeniedCaliforniaBenefitOrServiceExcluded";
import HealthClaimDeniedCaliforniaTimelyFilingIssue from "./pages/HealthClaimDeniedCaliforniaTimelyFilingIssue";
import HealthClaimDeniedCaliforniaCoordinationOfBenefits from "./pages/HealthClaimDeniedCaliforniaCoordinationOfBenefits";
import AutoClaimDeniedFlorida from "./pages/AutoClaimDeniedFlorida";
import HealthClaimDeniedFlorida from "./pages/HealthClaimDeniedFlorida";
import AutoClaimDeniedFloridaNoCoverageAtTimeOfLoss from "./pages/AutoClaimDeniedFloridaNoCoverageAtTimeOfLoss";
import AutoClaimDeniedFloridaPolicyLapseOrCancellation from "./pages/AutoClaimDeniedFloridaPolicyLapseOrCancellation";
import AutoClaimDeniedFloridaMissedReportingDeadline from "./pages/AutoClaimDeniedFloridaMissedReportingDeadline";
import AutoClaimDeniedFloridaExcludedDriver from "./pages/AutoClaimDeniedFloridaExcludedDriver";
import AutoClaimDeniedFloridaMisrepresentationOrOmission from "./pages/AutoClaimDeniedFloridaMisrepresentationOrOmission";
import AutoClaimDeniedFloridaNonCoveredUse from "./pages/AutoClaimDeniedFloridaNonCoveredUse";
import AutoClaimDeniedFloridaFailureToCooperate from "./pages/AutoClaimDeniedFloridaFailureToCooperate";
import AutoClaimDeniedFloridaDisputedLiability from "./pages/AutoClaimDeniedFloridaDisputedLiability";
import HealthClaimDeniedFloridaPriorAuthorizationMissing from "./pages/HealthClaimDeniedFloridaPriorAuthorizationMissing";
import HealthClaimDeniedFloridaNotMedicallyNecessary from "./pages/HealthClaimDeniedFloridaNotMedicallyNecessary";
import HealthClaimDeniedFloridaOutOfNetworkProvider from "./pages/HealthClaimDeniedFloridaOutOfNetworkProvider";
import HealthClaimDeniedFloridaCodingOrDocumentationError from "./pages/HealthClaimDeniedFloridaCodingOrDocumentationError";
import HealthClaimDeniedFloridaExperimentalOrInvestigational from "./pages/HealthClaimDeniedFloridaExperimentalOrInvestigational";
import HealthClaimDeniedFloridaBenefitOrServiceExcluded from "./pages/HealthClaimDeniedFloridaBenefitOrServiceExcluded";
import HealthClaimDeniedFloridaTimelyFilingIssue from "./pages/HealthClaimDeniedFloridaTimelyFilingIssue";
import HealthClaimDeniedFloridaCoordinationOfBenefits from "./pages/HealthClaimDeniedFloridaCoordinationOfBenefits";
import AutoClaimDeniedTexas from "./pages/AutoClaimDeniedTexas";
import HealthClaimDeniedTexas from "./pages/HealthClaimDeniedTexas";
import AutoClaimDeniedTexasNoCoverage from "./pages/AutoClaimDeniedTexasNoCoverage";
import AutoClaimDeniedTexasMissedDeadline from "./pages/AutoClaimDeniedTexasMissedDeadline";
import AutoClaimDeniedTexasPolicyLapse from "./pages/AutoClaimDeniedTexasPolicyLapse";
import AutoClaimDeniedTexasExcludedDriver from "./pages/AutoClaimDeniedTexasExcludedDriver";
import AutoClaimDeniedTexasMisrepresentation from "./pages/AutoClaimDeniedTexasMisrepresentation";
import AutoClaimDeniedTexasNonCoveredUse from "./pages/AutoClaimDeniedTexasNonCoveredUse";
import AutoClaimDeniedTexasFailureCooperate from "./pages/AutoClaimDeniedTexasFailureCooperate";
import AutoClaimDeniedTexasDisputedLiability from "./pages/AutoClaimDeniedTexasDisputedLiability";
import AutoClaimDeniedTexasExcludedVehicle from "./pages/AutoClaimDeniedTexasExcludedVehicle";
import AutoClaimDeniedTexasCoverageLimits from "./pages/AutoClaimDeniedTexasCoverageLimits";
import HealthClaimDeniedTexasMedicalNecessity from "./pages/HealthClaimDeniedTexasMedicalNecessity";
import HealthClaimDeniedTexasOutOfNetwork from "./pages/HealthClaimDeniedTexasOutOfNetwork";
import HealthClaimDeniedTexasPriorAuth from "./pages/HealthClaimDeniedTexasPriorAuth";
import HealthClaimDeniedTexasExperimental from "./pages/HealthClaimDeniedTexasExperimental";
import HealthClaimDeniedTexasCoverageExclusion from "./pages/HealthClaimDeniedTexasCoverageExclusion";
import HealthClaimDeniedTexasFilingError from "./pages/HealthClaimDeniedTexasFilingError";
import HealthClaimDeniedTexasTimelyFiling from "./pages/HealthClaimDeniedTexasTimelyFiling";
import HealthClaimDeniedTexasPreExisting from "./pages/HealthClaimDeniedTexasPreExisting";
import HealthClaimDeniedTexasBenefitExhausted from "./pages/HealthClaimDeniedTexasBenefitExhausted";
import HealthClaimDeniedTexasProviderCredential from "./pages/HealthClaimDeniedTexasProviderCredential";
import About from "./pages/About";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <AutoClaimDeniedCalifornia />,
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
