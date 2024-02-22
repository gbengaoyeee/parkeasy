import { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from "react";
import { User } from "../types";
import { useAuthContext } from "./AuthProvider";
import useToast from "../hooks/useToast";
import { User_Role } from "../../../shared/prisma-client";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../services/user";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface UserContextData {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
  isLoading: boolean;
  refreshUser: () => Promise<void>;
}

export const UserContext = createContext<UserContextData>({
  user: null,
  setUser: () => {},
  isLoading: false,
  refreshUser: async () => {},
});

export const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const { user: authUser, isLoading } = useAuthContext();
  const [user, setUser] = useState<User | null>(null);
  const [verifLink, setVerifLink] = useState<string | null>(null);
  const { showToast } = useToast();
  const cacheKey = "user-data";
  const {
    data,
    isFetching,
    error: queryError,
    // isSuccess,
    refetch,
  } = useQuery({
    queryKey: [cacheKey],
    queryFn: async (): Promise<User | null> => {
      if (authUser && authUser.phoneNumber) {
        const response = getUser(authUser.phoneNumber)
        .then((response) => {
            return response as User;
          })
          .catch((error) => {
            // console.error("useUser", error.response.data);
            showToast({ type: "error", message: error.response.data.message });
            return null;
          });

        return response;
      }
      return null;
    },
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    retry: 2,
    refetchInterval: 30000,
  });

  useEffect(() => {
    if (authUser) {
      refetch();
    }
  }, [authUser]);

  const saveUserToStorage = async (user: User) => {
    await AsyncStorage.setItem(cacheKey, JSON.stringify(user));
  };

  const getUserFromStorage = async () => {
    const user = await AsyncStorage.getItem(cacheKey);
    if (user) {
      setUser(JSON.parse(user));
    }
  };
  // fetch user from storage
  useEffect(() => {
    getUserFromStorage();
  }, []);
  useEffect(() => {
    if (data) {
      setUser(data);
      saveUserToStorage(data);
    }
  }, [data]);

  const refreshUser = async () => {
    await refetch();
  };
  const value = {
    user,
    setUser,
    refreshUser,
    isLoading: isFetching || isLoading,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext);
