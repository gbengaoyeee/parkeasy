import appwriteClient from "@/api/appwrite";
import { useLoginByEmail } from "@/lib/react-query/queriesAndMutations";
import { LoginValidation, SSOValidation } from "@/lib/validation";
import { AppwriteException, Models } from "appwrite";
import { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";
import {} from "firebase/app";
import { firAuth } from "@/api/firebase";
import { User, onAuthStateChanged, sendSignInLinkToEmail } from "firebase/auth";

interface AuthContextData {
  user: Models.User<Models.Preferences> | User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  setUser: Dispatch<SetStateAction<Models.User<Models.Preferences> | User | null>>;
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
  checkAuthUser: () => Promise<boolean>;
  signOut: () => Promise<boolean>;
  signInWithEmailPassword: (value: z.infer<typeof LoginValidation>) => Promise<boolean>;
  signInPasswordless: (value: z.infer<typeof SSOValidation>) => Promise<boolean>;
}

export const AuthContext = createContext<AuthContextData>({
  user: null,
  isLoading: false,
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  setUser: () => {},
  checkAuthUser: async () => false,
  signOut: async () => false,
  signInWithEmailPassword: async () => false,
  signInPasswordless: async () => false,
});

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<Models.User<Models.Preferences> | User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { isPending: isSigningIn, mutateAsync: handleSignIn } = useLoginByEmail();

  const navigate = useNavigate();
  const location = useLocation();
  const url = new URL(import.meta.env.VITE_APP_URL);

  function getTenantFromHostname() {
    // Example: Extract tenant from subdomain
    const subdomain = window.location.hostname.split(".")[0];
    return subdomain;
  }

  const nonProtectedRoutes = ["/login", "/sso-redirect", "/sso", "/sign-up", "/request-success", "/request-failed", "/forgot-password", "/password-recovery"];

  const signOut = async () => {
    try {
      // await appwriteClient.account.deleteSession("current");
      await firAuth.signOut();
      navigate("/login");
      await checkAuthUser();
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const signInWithEmailPassword = async (values: z.infer<typeof LoginValidation>) => {
    try {
      await handleSignIn(values);
      let user = await appwriteClient.account.get();
      setUser(user);
      setIsAuthenticated(true);
      navigate("/");
      return true;
    } catch (error) {
      console.error(error);
      if (error instanceof AppwriteException) {
        toast.error(error.message);
      }
      return false;
    }
  };

  const signInPasswordless = async (values: z.infer<typeof SSOValidation>) => {
    try {
      await sendSignInLinkToEmail(firAuth, values.email, {
        url: `${url.protocol}//${getTenantFromHostname()}.${url.host}/sso-redirect`,
        handleCodeInApp: true,
      });
      localStorage.setItem("emailForSignIn", values.email);
      return true;
    } catch (error: any) {
      console.error(error);
      if (error instanceof AppwriteException) {
        toast.error(error.message);
      }
      toast.error(error.message);
      return false;
    }
  };

  const checkAuthUser = async () => {
    if (!nonProtectedRoutes.includes(location.pathname)) {
      try {
        // const userData = await appwriteClient.account.get();
        const userData = firAuth.currentUser;
        setUser(userData);
        setIsAuthenticated(true);
        return true;
      } catch (error) {
        console.error(error);
        navigate("/login");
        return false;
      }
    } else {
      return false;
    }
  };

  const value = {
    user,
    setUser,
    isLoading: isSigningIn,
    isAuthenticated,
    setIsAuthenticated,
    checkAuthUser,
    signOut,
    signInWithEmailPassword,
    signInPasswordless,
  };

  useEffect(() => {
    // if (localStorage.getItem("cookieFallback") === "[]" && !nonProtectedRoutes.includes(location.pathname)) {
    //   navigate("/login");
    // }
    const subscribe = onAuthStateChanged(firAuth, async (user) => {
      if (!user && !nonProtectedRoutes.includes(location.pathname)) {
        navigate("/login");
      } 
      else if (user && getTenantFromHostname() === "visitor") {

        navigate("/discover");
      }
      setUser(user);
    });
    checkAuthUser();
    return () => {
      subscribe();
    };
  }, [localStorage]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
