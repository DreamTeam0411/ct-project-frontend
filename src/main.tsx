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
import { AnimatePresence } from "framer-motion";

const router = createBrowserRouter([
  {
    path: "/*",
    element: (
      <AnimatePresence mode="wait">
        <MainPage key="/" />
      </AnimatePresence>
    ),
  },
  {
    path: "/login/*",
    element: (
      <AnimatePresence mode="wait">
        <LoginPage key="/login" />
      </AnimatePresence>
    ),
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
    element: (
      <AnimatePresence mode="wait">
        <AllServicesPage key="/all-services" />
      </AnimatePresence>
    ),
  },
  {
    path: "/all-services/:serviceId",
    element: (
      <AnimatePresence mode="wait">
        <ServicePage key="/all-services/:serviceId" />
      </AnimatePresence>
    ),
  },
  {
    path: "/*",
    element: <NotFoundPage />,
  },
  {
    path: "/for-business",
    element: (
      <AnimatePresence mode="wait">
        <ForBusiness key="/for-business" />
      </AnimatePresence>
    ),
  },
  {
    path: "/admin-panel/*",
    element: (
      <AnimatePresence mode="wait">
        <AdminPanel key="/admin-panel/*" />
      </AnimatePresence>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
