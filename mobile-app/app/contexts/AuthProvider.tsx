import { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from "react";
import appwriteClient from "../services/appwrite";
import { Models } from "appwrite";

interface AuthContextData {
  isLoggedIn: boolean;
  isLoading: boolean;
  signOut: () => Promise<boolean>;
  checkAuthUser: () => Promise<boolean>;
  user: Models.User<Models.Preferences> | null;
  setUser: Dispatch<SetStateAction<Models.User<Models.Preferences> | null>>;
}

export const AuthContext = createContext<AuthContextData>({
  isLoggedIn: false,
  isLoading: true,
  signOut: async () => false,
  checkAuthUser: async () => false,
  user: null,
  setUser: () => {},
});

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<Models.User<Models.Preferences> | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const checkAuthUser = async () => {
    try {
      const userData = await appwriteClient.account.get();
      setUser(userData);
      setIsLoggedIn(true);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };
  const signOut = async () => {
    return appwriteClient.account
      .deleteSession("current")
      .then(() => {
        setIsLoggedIn(false);
        return true;
      })
      .catch((error) => {
        console.error(error);
        return false;
      });
  };

  useEffect(() => {
    checkAuthUser();
  }, []);

  const value = {
    isLoggedIn,
    setIsLoggedIn,
    isLoading,
    signOut,
    checkAuthUser,
    user,
    setUser,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
