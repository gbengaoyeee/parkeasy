import { getCommunityMember } from "@/api/building";
import { useQuery } from "@tanstack/react-query";

interface IUseCommunityMemberProps {
  communityMemberId?: string;
  buildingId?: string;
}
const useCommunityMember = ({ communityMemberId, buildingId }: IUseCommunityMemberProps) => {
  // First, we fetch the management data
  const {
    data: member,
    isFetching: isFetchingMember,
    refetch: refetchMember,
    error: memberError,
  } = useQuery({
    queryKey: ["member-data"],
    queryFn: async () => {
      if (buildingId && communityMemberId) {
        return getCommunityMember(buildingId, communityMemberId)
          .then((member) => {
            return member;
          })
          .catch((error: Error) => {
            throw error
          });
      }
      return null;
    },
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    retry: 3,
  });

  return { member, isFetchingMember, refetchMember, memberError };
};

export default useCommunityMember;
