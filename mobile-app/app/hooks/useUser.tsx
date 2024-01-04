import { useQuery } from "@tanstack/react-query";
import { useAuthContext } from "../contexts/AuthProvider";
import { getUser } from "../services/user";
import { User } from "../types";
import { useEffect, useState } from "react";
import { User_Role } from "../../../shared/prisma-client";
import useToast from "./useToast";

const useUser = () => {
  const { user: authUser, isLoading } = useAuthContext();
  const [user, setUser] = useState<User | null>(null);
  const [verifLink, setVerifLink] = useState<string | null>(null);
  const { showToast } = useToast();
  const role: User_Role = "owner";
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
        const response = await getUser(authUser.phone, role);
        return response as User;
      }
      return null;
    },
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    retry: 2,
  });

  useEffect(() => {
    if (authUser) {
      refetch();
    }
  }, [authUser]);

  useEffect(() => {
    if (queryError) {
      console.error(queryError);
      showToast({ type: "error", message: queryError.message });
    }
  }, [queryError]);

  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data]);

  const refreshUser = async () => {
    refetch();
  };

  return { user, isLoading, refreshUser };
};

export default useUser;
