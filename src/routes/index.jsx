import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home";
import { About } from "../pages/about";
import { Contact } from "../pages/contact";
import { ErrorPage } from "../pages/error-page";
import { Countries } from "../pages/countries";
import App from "../App";
import { CountryDetails } from "../pages/countryDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "countries",
        element: <Countries />,
      },
      {
        path: "countries/:name",
        element: <CountryDetails />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
