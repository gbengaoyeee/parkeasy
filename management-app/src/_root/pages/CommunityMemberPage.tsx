import useCommunityMember from "@/hooks/useCommunityMember";
import { UpdateCommunityMemberValidation } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { z } from "zod";
import { $Enums } from "../../../../shared/prisma-client";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useUpdateCommunityMember } from "@/lib/react-query/queriesAndMutations";
import { toast } from "sonner";
import { useState } from "react";
import Loader from "@/components/shared/Loader";

const CommunityMemberPage = () => {
  const { buildingId, communityMemberId } = useParams();
  const { member, isFetchingMember, refetchMember } = useCommunityMember({
    buildingId,
    communityMemberId,
  });
  const [modalOpen, setModalOpen] = useState(false);
  const { mutateAsync: updateMember, isPending: isUpdatingMember } = useUpdateCommunityMember();

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
  const form = useForm<z.infer<typeof UpdateCommunityMemberValidation>>({
    resolver: zodResolver(UpdateCommunityMemberValidation),
    defaultValues: {
      name: member?.name || "",
      phone: member?.phone || "",
      role: getAppropriateUserRole(member?.user_role || null),
      email: member?.email || "",
      unit_number: member?.unit_number || "",
    },
  });
  if (isFetchingMember) {
    return <>Loading</>;
  }
  if (!member) {
    return <h1>Could not find your this member. contact {import.meta.env.VITE_SUPPORT_EMAIL}</h1>;
  }

  const handleUpdateMemberStatus = async (status: "active" | "inactive") => {
    if (buildingId) {
      updateMember({ buildingId, memberId: member.id, member: { status } })
        .then((resp) => {
          toast.success(resp.message);
          refetchMember();
        })
        .catch((error) => {
          toast.error(error.response.data.message);
        })
        .finally(() => {
          setModalOpen(false);
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
            <Label className="base-semibold">Unit Number</Label>
            <p>{member.unit_number}</p>
          </div>

          <div className="flex flex-col gap-2">
            <Label className="base-semibold">Status</Label>
            <p>{member.status}</p>
          </div>
        </div>
        <Button className="shad-button_secondary border-gray-400 text-gray-500 w-10">edit</Button>
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
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
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
              handleUpdateMemberStatus(member.status === "active" ? "inactive" : "active");
            }}
            className="shad-button_primary"
            disabled={isUpdatingMember}
          >
            {isUpdatingMember ? (
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
    </div>
  );
};

export default CommunityMemberPage;
