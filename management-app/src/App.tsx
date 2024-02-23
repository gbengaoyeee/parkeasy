import { Route, Routes } from "react-router-dom";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import { CommunityMemberPage, CommunityMembersPage, Dashboard, ParkingSpots, Violations } from "./_root/pages";
import "./globals.css";
import {
  ForgotPasswordForm,
  ForgotPasswordRedirect,
  LoginForm,
  RequestFailed,
  RequestSuccess,
  SSOForm,
  SignUpForm,
} from "./_auth";
import SSORedirect from "./_auth/redirect-pages/SSORedirect";
import { Toaster } from "sonner";
import { UserContextProvider } from "./context/UserContext";
import { AppContextProvider } from "./context/AppContext";
import ApartmentUnits from "./_root/pages/ApartmentUnits";

const App = () => {
  return (
    <main className="flex h-screen">
      <Toaster position="top-right" richColors expand />
      <UserContextProvider>
        <AppContextProvider>
          <Routes>
            {/* public routes */}
            <Route element={<AuthLayout />}>
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
            <Route element={<RootLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="/apartment-units" element={<ApartmentUnits />} />
              <Route path="/parking-spots" element={<ParkingSpots />} />
              <Route path="/community-members/:buildingId" element={<CommunityMembersPage />} />
              <Route path="/community-members/:buildingId/:communityMemberId" element={<CommunityMemberPage />} />
              <Route path="/violations" element={<Violations />} />
            </Route>
          </Routes>
        </AppContextProvider>
      </UserContextProvider>
    </main>
  );
};

export default App;
