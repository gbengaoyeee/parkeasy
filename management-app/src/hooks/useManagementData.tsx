import { getBuilding, getCommunityMembers, getParkingSpots } from "@/api/building";
import { getManagement } from "@/api/management";
import { useUserContext } from "@/context/UserContext";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const useManagementData = () => {
  const queryClient = useQueryClient();
  const { user } = useUserContext();
  const [communityMemberPage, setCommunityMemberPage] = useState(1);
  const [parkingSpotsPage, setParkingSpotsPage] = useState(1);
  const pageSize = 10;

  // First, we fetch the management data
  const {
    data: management,
    isFetching: isFetchingManagement,
    refetch: refetchManagement,
  } = useQuery({
    queryKey: ["management-data"],
    queryFn: async () => {
      if (user && user.management) {
        const management = await getManagement(user.management.id, "includeBuildings=true");
        return management;
      }
      return null;
    },
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    retry: true,
    enabled: !!user,
  });

  // Then, we use the management data to fetch the building data
  const {
    data: currentBuilding,
    isFetching: isFetchingBuilding,
    refetch: refetchBuilding,
  } = useQuery({
    queryKey: ["building-data", management?.buildings?.[0]?.id], // Ensure building query reruns when management changes
    queryFn: async () => {
      if (management?.buildings && management.buildings.length > 0) {
        const buildingId = management.buildings[0].id;
        const building = await getBuilding(buildingId, "includeMembers=true");
        return building;
      }
      return null;
    },
    enabled: !!management, // Only run this query if management is not null
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    retry: true,
  });

  // Optionally, prefetch the building data when management data is fetched
  const prefetchBuildingData = () => {
    if (management?.buildings && management.buildings.length > 0) {
      const buildingId = management.buildings[0].id;
      queryClient.prefetchQuery({
        queryKey: ["building-data", buildingId],
        queryFn: () => getBuilding(buildingId, "includeMembers=true"),
      });
    }
  };

  const {
    data: communityMembers,
    isFetching: isFetchingCommunityMembers,
    // error: queryError,
    refetch: refetchCommunityMembers,
  } = useQuery({
    queryKey: ["community-members-data"],
    queryFn: async () => {
      if (currentBuilding) {
        const buildingId = currentBuilding.id;
        const members = await getCommunityMembers(buildingId, `page=${communityMemberPage}&pageSize=${pageSize}`);
        return members;
      }
      return null;
    },
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    retry: true,
  });

  const prefetchCommunityMembersData = () => {
    if (currentBuilding) {
      const buildingId = currentBuilding.id;
      queryClient.prefetchQuery({
        queryKey: ["community-members-data"],
        queryFn: () => getCommunityMembers(buildingId, `page=${communityMemberPage}&pageSize=${pageSize}`),
      });
    }
  }
  const {
    data: parkingSpots,
    isFetching: isFetchingParkingSpots,
    error: getParkingSpotsError,
    refetch: refetchParkingSpots,
  } = useQuery({
    queryKey: ["parking-spots-data"],
    queryFn: async () => {
      if (currentBuilding) {
        const buildingId = currentBuilding.id;
        const spots = await getParkingSpots(buildingId, {
          page: parkingSpotsPage,
          pageSize: pageSize,
        });
        return spots;
      }
      return null;
    },
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    retry: true,
  });

  const prefetchParkingSpotsData = () => {
    if (currentBuilding) {
      const buildingId = currentBuilding.id;
      queryClient.prefetchQuery({
        queryKey: ["parking-spots-data"],
        queryFn: () => getParkingSpots(buildingId, {page: parkingSpotsPage, pageSize}),
      });
    }
  }

  useEffect(() => {
    prefetchBuildingData();
  }, [management]);
  
  useEffect(() => {
    prefetchCommunityMembersData();
    prefetchParkingSpotsData();
  }, [currentBuilding, communityMemberPage]);

  useEffect(() => {
    prefetchParkingSpotsData();
  }, [parkingSpotsPage]);

  return {
    management,
    isFetchingManagement,
    refetchManagement,
    currentBuilding,
    isFetchingBuilding,
    refetchBuilding,
    communityMembers,
    isFetchingCommunityMembers,
    refetchCommunityMembers,
    communityMemberPage,
    setCommunityMemberPage,
    pageSize,
    parkingSpots,
    getParkingSpotsError,
    isFetchingParkingSpots,
    refetchParkingSpots,
    parkingSpotsPage,
    setParkingSpotsPage,
  };
};

export default useManagementData;
