import useCommunityMember from "@/hooks/useCommunityMember";
import { useNavigate, useParams } from "react-router-dom";
import { $Enums } from "../../../../shared/prisma-client";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  useDeleteCommunityMember,
  useGetBuilding,
  useGetCommunityMember,
  useToggleCommunityMemberStatus,
  useUpdateCommunityMember,
} from "@/lib/react-query/queriesAndMutations";
import { toast } from "sonner";
import { useState } from "react";
import Loader from "@/components/shared/Loader";
import { AddMemberManuallyModal } from "./CommunityMembersPage";

const CommunityMemberPage = () => {
  const { buildingId, communityMemberId } = useParams();
  // const { member, isFetchingMember, refetchMember } = useCommunityMember({
  //   buildingId,
  //   communityMemberId,
  // });

  const {
    data: member,
    isFetching: isFetchingMember,
    refetch: refetchMember,
  } = useGetCommunityMember(buildingId, communityMemberId);
  const { data: building, isFetching: isFetchingBuilding } = useGetBuilding(buildingId);
  const [openToggleStatusModal, setOpenToggleStatusModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const { mutateAsync: toggleMemberStatus, isPending: isToggling } =
    useToggleCommunityMemberStatus();

  const { mutateAsync: deleteMember, isPending: isDeleting } = useDeleteCommunityMember();

  const [openEditMemberModal, setOpenEditMemberModal] = useState(false);
  const navigate = useNavigate();

  const getAppropriateUserRole = (role: $Enums.User_Role | null) => {
    switch (role) {
      case "owner":
        return "owner";
      case "tenant":
        return "tenant";
      default:
        return "tenant";
    }
  };

  if (isFetchingMember || isFetchingBuilding) {
    return <>Loading</>;
  }
  if (!member) {
    return <h1>Could not find your this member. contact {import.meta.env.VITE_SUPPORT_EMAIL}</h1>;
  }

  const handleUpdateMemberStatus = async () => {
    if (buildingId) {
      toggleMemberStatus({
        buildingId,
        memberId: member.id,
      })
        .then((resp) => {
          toast.success(resp.message);
          refetchMember();
        })
        .catch((error) => {
          toast.error(error.response.data.message);
        })
        .finally(() => {
          setOpenToggleStatusModal(false);
        });
    }
  };

  const handleDeleteMember = async () => {
    if (buildingId) {
      deleteMember({
        buildingId,
        memberId: member.id,
      })
        .then((resp) => {
          toast.success(resp.message);
          navigate(`/community-members/${buildingId}`);
        })
        .catch((error) => {
          toast.error(error.response.data.message);
        })
        .finally(() => {
          setOpenDeleteModal(false);
        });
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <h3 className="base-semibold">Member information</h3>

      <div className="flex justify-between text-gray-500 shadow-md rounded-lg p-4 border">
        <div className="grid grid-cols-2 gap-10 small-regular">
          <div className="flex flex-col gap-2">
            <Label className="base-semibold">Name</Label>
            <p>{member.name}</p>
          </div>

          <div className="flex flex-col gap-2">
            <Label className="base-semibold">Email</Label>
            <p>{member.email}</p>
          </div>

          <div className="flex flex-col gap-2">
            <Label className="base-semibold">Phone</Label>
            <p>{member.phone}</p>
          </div>

          <div className="flex flex-col gap-2">
            <Label className="base-semibold">Role</Label>
            <p>{member.user_role}</p>
          </div>

          <div className="flex flex-col gap-2">
            <Label className="base-semibold">Unit Numbers</Label>
            {member.apartment_units?.map((unit) => <p key={unit.id}>{unit.unit_number}</p>)}
          </div>

          <div className="flex flex-col gap-2">
            <Label className="base-semibold">Status</Label>
            <p>{member.status}</p>
          </div>
          <div className="flex flex-col gap-2">
            <Label className="base-semibold">Parking spots</Label>
            {member.parking_spots.length > 0 ? (
              member.parking_spots?.map((spot) => <p key={spot.id}>{spot.parking_spot_number}</p>)
            ) : (
              <p>No parking spots</p>
            )}
          </div>
        </div>
        <AddMemberManuallyModal
          openActivateMembersManualModal={openEditMemberModal}
          setOpenActivateMembersManualModal={setOpenEditMemberModal}
          building={building}
          communityMember={member}
          refetchMembers={refetchMember}
        />
      </div>

      <div className="flex flex-col gap-2 text-gray-500 shadow-md rounded-lg p-4 border">
        <Label className="base-semibold">QR Codes</Label>
        <div>
          <div key={member.qr_code.id} className="flex gap-2">
            <img src={member.qr_code.image_url ?? ""} width={150} alt="qr code" />
            <a
              href={member.qr_code.image_url ?? ""}
              download
              className="bg-gray-200 text-gray-800 text-sm flex-center px-8 rounded-lg h-8"
            >
              Download
            </a>
          </div>
        </div>
      </div>
      <Dialog open={openToggleStatusModal} onOpenChange={setOpenToggleStatusModal}>
        <DialogTrigger asChild>
          <Button className="shad-button_primary border-gray-400 text-gray-500 min-w-fit max-w-fit">
            {member.status === "active" ? "Deactivate member" : "Activate member"}
          </Button>
        </DialogTrigger>

        <DialogContent className="bg-light-1">
          <p>
            Are you sure you want to {member.status === "active" ? "deactivate" : "activate"} this
            member?
          </p>
          <Button
            onClick={() => {
              handleUpdateMemberStatus();
            }}
            className="shad-button_primary"
            disabled={isToggling}
          >
            {isToggling ? (
              <div className="flex-center gap-3">
                <Loader />
                {member.status === "active" ? "Deactivating..." : "Activating..."}
              </div>
            ) : (
              <span>{member.status === "active" ? "Deactivate" : "Activate"}</span>
            )}
          </Button>
        </DialogContent>
      </Dialog>
      <Dialog open={openDeleteModal} onOpenChange={setOpenDeleteModal}>
        <DialogTrigger asChild>
          <Button className="bg-red border-gray-400 text-white min-w-fit max-w-fit">
            Delete member
          </Button>
        </DialogTrigger>

        <DialogContent className="bg-light-1">
          <p>Are you sure you want to delete this member?</p>
          <Button
            onClick={() => {
              handleDeleteMember();
            }}
            className="bg-red text-white"
            disabled={isDeleting}
          >
            {isDeleting ? (
              <div className="flex-center gap-3">
                <Loader />
                Deleting...
              </div>
            ) : (
              <span>Delete</span>
            )}
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CommunityMemberPage;
