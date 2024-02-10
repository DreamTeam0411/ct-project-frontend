import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage.tsx";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage.tsx";
import { SuccessRegistrationPage } from "./pages/SuccessRegistrationPage/SuccessRegistrationPage.tsx";
import { AllServicesPage } from "./pages/AllServicesPage/AllServicesPage.tsx";
import { ServicePage } from "./pages/ServicePage/ServicePage.tsx";
import { NotFoundPage } from "./pages/NotFound/NotFound.tsx";
import { StrictMode } from "react";
import { ForBusiness } from "./pages/ForBusiness/ForBusiness.tsx";
import MainPage from "./pages/MainPage/Main.tsx";
import AdminPanel from "./components/AdminPanel/AdminPanel.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/registration",
    element: <RegistrationPage />,
  },
  {
    path: "/success",
    element: <SuccessRegistrationPage />,
  },
  {
    path: "/all-services",
    element: <AllServicesPage />,
  },
  {
    path: "/all-services/:serviceId",
    element: <ServicePage />,
  },
  {
    path: "/*",
    element: <NotFoundPage />,
  },
  {
    path: "/forbusiness",
    element: <ForBusiness />,
  },
  {
    path: "/admin-panel/*",
    element: <AdminPanel />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
