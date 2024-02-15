import { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from "react";
import appwriteClient from "../services/appwrite";
import { Models } from "appwrite";
import { User, browserSessionPersistence, onAuthStateChanged, setPersistence } from "firebase/auth";
import { FIREBASE_AUTH } from "@/firebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../_store/store";
import { setAuthUser } from "../_store/slices/authProviderSlice";

interface AuthContextData {
  isLoggedIn: boolean;
  isLoading: boolean;
  signOut: () => Promise<boolean>;
  // checkAuthUser: () => Promise<boolean>;
  // user: Models.User<Models.Preferences> | null;
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
}

export const AuthContext = createContext<AuthContextData>({
  isLoggedIn: false,
  isLoading: true,
  signOut: async () => false,
  // checkAuthUser: async () => false,
  user: null,
  setUser: () => {},
});

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const authUserSlice = useSelector((state: RootState) => state.authUser.authUser);
  const dispatch: AppDispatch = useDispatch();

  // const checkAuthUser = async () => {
  //   try {
  //     const userData = await appwriteClient.account.get();
  //     setUser(userData);
  //     setIsLoggedIn(true);
  //     return true;
  //   } catch (error) {
  //     console.error(error);
  //     return false;
  //   }
  // };
  const signOut = async () => {
    FIREBASE_AUTH.signOut();
    dispatch(setAuthUser(null))
    setIsLoggedIn(false);
    setUser(null);
    return true;
    // return appwriteClient.account
    //   .deleteSession("current")
    //   .then(() => {
    //     setIsLoggedIn(false);
    //     return true;
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     return false;
    //   });
  };

  useEffect(() => {
    if(authUserSlice) {
      setUser(authUserSlice)
      setIsLoggedIn(true);
      setIsLoading(false);
      return;
    }
    const subscribe = onAuthStateChanged(FIREBASE_AUTH, async (user) => {
      dispatch(setAuthUser(user))
      if (user) {
        setUser(user);
        setIsLoggedIn(true);
        setIsLoading(false);
      } else {
        setUser(null);
        setIsLoggedIn(false);
        setIsLoading(false);
      }
    });

    return () => {
      subscribe();
    };
    // appwriteClient.account
    //   .get()
    //   .then((userData) => {
    //     setUser(userData);
    //     setIsLoggedIn(true);
    //     setIsLoading(false);
    //   })
    //   .catch((error) => {
    //     setIsLoading(false);
    //     setIsLoggedIn(false);
    //   });
  }, [authUserSlice]);

  const value = {
    isLoggedIn,
    setIsLoggedIn,
    isLoading,
    signOut,
    // checkAuthUser,
    user,
    setUser,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
