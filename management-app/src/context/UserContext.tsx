import { User } from "@/types";
import { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "@/api/user";
import { useAuthContext } from "./AuthContext";
import { toast } from "sonner";

interface UserContextData {
  user: User | null;
  isLoading: boolean;
  setUser: Dispatch<SetStateAction<User | null>>;
}

export const UserContext = createContext<UserContextData>({
  user: null,
  isLoading: false,
  setUser: () => {},
});

export const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const { user: authUser } = useAuthContext();

  const {
    data,
    isFetching,
    error: queryError,
    // isSuccess,
    refetch,
  } = useQuery({
    queryKey: ["user-data"],
    queryFn: async () => {
      if (authUser) {
        const response = await getUser(authUser?.email ?? "");
        return response as User;
      }
      return null;
    },
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    retry: true,
  });

  useEffect(() => {
    if (authUser) {
      refetch();
    }
  }, [authUser]);

  useEffect(() => {
    if (queryError) {
      toast.error(queryError.message);
    }
  }, [queryError]);

  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data]);

  const value = {
    user,
    setUser,
    isLoading: isFetching,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext);
