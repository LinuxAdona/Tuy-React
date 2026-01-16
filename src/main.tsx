import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Profile Routes */}
        <Route path="/profile/history" element={<History />} />
        <Route path="/profile/demography" element={<Demography />} />
        <Route path="/profile/maps" element={<Maps />} />
        <Route path="/profile/socio-economic" element={<SocioEconomic />} />

        {/* Local Government Routes */}
        <Route path="/government/officials" element={<Officials />} />
        <Route
          path="/government/department-heads"
          element={<DepartmentHeads />}
        />
        <Route
          path="/government/barangay-officials"
          element={<BarangayOfficials />}
        />

        {/* Transparencies Routes */}
        <Route
          path="/transparencies/accomplishment-reports"
          element={<AccomplishmentReports />}
        />
        <Route
          path="/transparencies/citizens-charter"
          element={<CitizensCharter />}
        />
        <Route
          path="/transparencies/financial-statements"
          element={<FinancialStatements />}
        />
        <Route
          path="/transparencies/invitation-to-bid"
          element={<InvitationToBid />}
        />

        {/* Downloadables Routes */}
        <Route path="/downloadables/forms" element={<Forms />} />
        <Route path="/downloadables/resolutions" element={<Resolutions />} />
        <Route path="/downloadables/ordinances" element={<Ordinances />} />

        {/* Other Routes */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
