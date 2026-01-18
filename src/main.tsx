import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import Login from "./pages/Login.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import History from "./pages/profile/History.tsx";
import Demography from "./pages/profile/Demography.tsx";
import Maps from "./pages/profile/Maps.tsx";
import SocioEconomic from "./pages/profile/SocioEconomic.tsx";
import Officials from "./pages/government/Officials.tsx";
import DepartmentHeads from "./pages/government/DepartmentHeads.tsx";
import BarangayOfficials from "./pages/government/BarangayOfficials.tsx";
import AccomplishmentReports from "./pages/transparencies/AccomplishmentReports.tsx";
import CitizensCharter from "./pages/transparencies/CitizensCharter.tsx";
import FinancialStatements from "./pages/transparencies/FinancialStatements.tsx";
import InvitationToBid from "./pages/transparencies/InvitationToBid.tsx";
import Forms from "./pages/downloadables/Forms.tsx";
import Resolutions from "./pages/downloadables/Resolutions.tsx";
import Ordinances from "./pages/downloadables/Ordinances.tsx";
import Gallery from "./pages/Gallery.tsx";
import ContactUs from "./pages/ContactUs.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter basename={import.meta.env.VITE_BASE_PATH}>
        <Routes>
          {/* Public Route - Login */}
          <Route path="/login" element={<Login />} />

          {/* Protected Routes */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />

          {/* Profile Routes */}
          <Route
            path="/profile/history"
            element={
              <ProtectedRoute>
                <History />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile/demography"
            element={
              <ProtectedRoute>
                <Demography />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile/maps"
            element={
              <ProtectedRoute>
                <Maps />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile/socio-economic"
            element={
              <ProtectedRoute>
                <SocioEconomic />
              </ProtectedRoute>
            }
          />

          {/* Local Government Routes */}
          <Route
            path="/government/officials"
            element={
              <ProtectedRoute>
                <Officials />
              </ProtectedRoute>
            }
          />
          <Route
            path="/government/department-heads"
            element={
              <ProtectedRoute>
                <DepartmentHeads />
              </ProtectedRoute>
            }
          />
          <Route
            path="/government/barangay-officials"
            element={
              <ProtectedRoute>
                <BarangayOfficials />
              </ProtectedRoute>
            }
          />

          {/* Transparencies Routes */}
          <Route
            path="/transparencies/accomplishment-reports"
            element={
              <ProtectedRoute>
                <AccomplishmentReports />
              </ProtectedRoute>
            }
          />
          <Route
            path="/transparencies/citizens-charter"
            element={
              <ProtectedRoute>
                <CitizensCharter />
              </ProtectedRoute>
            }
          />
          <Route
            path="/transparencies/financial-statements"
            element={
              <ProtectedRoute>
                <FinancialStatements />
              </ProtectedRoute>
            }
          />
          <Route
            path="/transparencies/invitation-to-bid"
            element={
              <ProtectedRoute>
                <InvitationToBid />
              </ProtectedRoute>
            }
          />

          {/* Downloadables Routes */}
          <Route
            path="/downloadables/forms"
            element={
              <ProtectedRoute>
                <Forms />
              </ProtectedRoute>
            }
          />
          <Route
            path="/downloadables/resolutions"
            element={
              <ProtectedRoute>
                <Resolutions />
              </ProtectedRoute>
            }
          />
          <Route
            path="/downloadables/ordinances"
            element={
              <ProtectedRoute>
                <Ordinances />
              </ProtectedRoute>
            }
          />

          {/* Other Routes */}
          <Route
            path="/gallery"
            element={
              <ProtectedRoute>
                <Gallery />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <ProtectedRoute>
                <ContactUs />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
);
