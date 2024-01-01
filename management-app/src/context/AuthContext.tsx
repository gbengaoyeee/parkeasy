import appwriteClient from "@/api/appwrite";
import { useLoginByEmail } from "@/lib/react-query/queriesAndMutations";
import { LoginValidation } from "@/lib/validation";
import { AppwriteException, Models } from "appwrite";
import { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

interface AuthContextData {
  user: Models.User<Models.Preferences> | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  setUser: Dispatch<SetStateAction<Models.User<Models.Preferences> | null>>;
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
  checkAuthUser: () => Promise<boolean>;
  signOut: () => Promise<boolean>;
  signInWithEmail: (value: z.infer<typeof LoginValidation>) => Promise<boolean>;
}

export const AuthContext = createContext<AuthContextData>({
  user: null,
  isLoading: false,
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  setUser: () => {},
  checkAuthUser: async () => false,
  signOut: async () => false,
  signInWithEmail: async () => false,
});

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<Models.User<Models.Preferences> | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { isPending: isSigningIn, mutateAsync: handleSignIn } = useLoginByEmail();

  const navigate = useNavigate();
  const location = useLocation();

  const nonProtectedRoutes = [
    "/login",
    "/sso-redirect",
    "/sso",
    "/sign-up",
    "/request-success",
    "/request-failed",
    "/forgot-password",
    "/password-recovery",
  ];

  const signOut = async () => {
    navigate("/login");
    try {
      await appwriteClient.account.deleteSession("current");
      await checkAuthUser();
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const signInWithEmail = async (values: z.infer<typeof LoginValidation>) => {
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

  const checkAuthUser = async () => {
    if (!nonProtectedRoutes.includes(location.pathname)) {
      try {
        const userData = await appwriteClient.account.get();
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
    signInWithEmail,
  };

  useEffect(() => {
    if (
      localStorage.getItem("cookieFallback") === "[]" &&
      !nonProtectedRoutes.includes(location.pathname)
    ) {
      navigate("/login");
    }
    checkAuthUser();
  }, [localStorage]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
