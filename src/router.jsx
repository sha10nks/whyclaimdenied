import { createBrowserRouter } from "react-router-dom";
import HomeCalifornia from "./pages/HomeCalifornia";
import ClaimDeniedCalifornia from "./pages/ClaimDeniedCalifornia";
import About from "./pages/About";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeCalifornia />,
  },
  {
    path: "/why-claims-get-denied-california",
    element: <ClaimDeniedCalifornia />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/terms",
    element: <Terms />,
  },
  {
    path: "/privacy",
    element: <Privacy />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export default router;
