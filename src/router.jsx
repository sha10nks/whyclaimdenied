import { createBrowserRouter } from "react-router-dom";
import HomeCalifornia from "./pages/HomeCalifornia";
import ClaimDeniedCalifornia from "./pages/ClaimDeniedCalifornia";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeCalifornia />,
  },
  {
    path: "/why-claims-get-denied-california",
    element: <ClaimDeniedCalifornia />,
  },
]);

export default router;
