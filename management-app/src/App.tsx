import { Route, Routes } from "react-router-dom";
import AuthLayout from "./_auth/AuthLayout";
import HostRootLayout from "./_root/HostRootLayout";
import { CommunityMemberPage, CommunityMembersPage, Dashboard, ParkingSpots, Violations } from "./_root/pages";
import "./globals.css";
import { ForgotPasswordForm, ForgotPasswordRedirect, LoginForm, RequestFailed, RequestSuccess, SSOForm, SignUpForm } from "./_auth";
import SSORedirect from "./_auth/redirect-pages/SSORedirect";
import { Toaster } from "sonner";
import { UserContextProvider } from "./context/UserContext";
import { AppContextProvider } from "./context/AppContext";
import ApartmentUnits from "./_root/pages/ApartmentUnits";
import ParkingSpot from "./_root/pages/ParkingSpot";
import VisitorRootLayout from "./_root/VisitorRootLayout";
import VisitorDiscover from "./_root/pages/VisitorDiscover";
import VisitorViewSpot from "./_root/pages/VisitorViewSpot";
import HostSubscriptions from "./_root/pages/HostSubscriptions";
import VisitorSubscriptions from "./_root/pages/VisitorSubscriptions";
import VisitorSubscription from "./_root/pages/VisitorSubscription";
import { useLayoutEffect } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import EnterPhone from "./_auth/forms/EnterPhone";

const App = () => {
  function getTenantFromHostname(): "host" | "visitor" {
    // Example: Extract tenant from subdomain
    const subdomain = window.location.hostname.split(".")[0];
    return subdomain === "host" ? "host" : "visitor";
  }

  useLayoutEffect(() => {
    document.title = getTenantFromHostname() === "host" ? "Host - Citadel Tower" : "Visitor - Citadel Tower";
  });
  return (
    <main className="flex h-screen">
      <Toaster position="top-right" richColors expand />
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <UserContextProvider>
          <AppContextProvider>
            <Routes>
              {/* public routes */}
              <Route element={<AuthLayout />}>
                <Route path="/verify-phone" element={<EnterPhone />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/sign-up" element={<SignUpForm />} />
                <Route path="/sso" element={<SSOForm />} />
                <Route path="/sso-redirect" element={<SSORedirect />} />
                <Route path="/request-success" element={<RequestSuccess />} />
                <Route path="/request-failed" element={<RequestFailed />} />
                <Route path="/forgot-password" element={<ForgotPasswordForm />} />
                <Route path="/password-recovery" element={<ForgotPasswordRedirect />} />
              </Route>
              {/* private routes */}
              <Route element={getTenantFromHostname() === "host" ? <HostRootLayout /> : <VisitorRootLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="/apartment-units" element={<ApartmentUnits />} />
                <Route path="/parking-spots" element={<ParkingSpots />} />
                <Route path="/parking-spots/:buildingId/:parkingSpotId" element={<ParkingSpot />} />
                <Route path="/community-members/:buildingId" element={<CommunityMembersPage />} />
                <Route path="/community-members/:buildingId/:communityMemberId" element={<CommunityMemberPage />} />
                <Route path="/violations" element={<Violations />} />

                {/* Visitor routes */}
                <Route path="/discover" element={<VisitorDiscover />} />
                <Route path="/discover/spot/:spotId" element={<VisitorViewSpot />} />
                <Route path="/subscriptions/:subscriptionId" element={<VisitorSubscription />} />

                {/* For all */}
                <Route path="/subscriptions" element={getTenantFromHostname() === "host" ? <HostSubscriptions /> : <VisitorSubscriptions />} />
              </Route>
            </Routes>
          </AppContextProvider>
        </UserContextProvider>
      </LocalizationProvider>
    </main>
  );
};

export default App;
