import { Button } from "@/components/ui/button";
import { useCallback, useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  useActivateAllCommunityMembers,
  useUploadCommunityMembers,
} from "@/lib/react-query/queriesAndMutations";
import Loader from "@/components/shared/Loader";
import { toast } from "sonner";
import Header from "@/components/shared/Header";
import useManagementData from "@/hooks/useManagementData";
import { searchCommunityMembers } from "@/api/building";
import { useDebounce } from "@/hooks/useDebounce";
import { CommunityMembers } from "@/types";
import { useNavigate } from "react-router-dom";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateCommunityMemberValidation } from "@/lib/validation";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CommunityMembersPage = () => {
  const navigate = useNavigate();
  const {
    refetchBuilding,
    currentBuilding,
    communityMembers,
    communityMemberPage,
    setCommunityMemberPage,
    pageSize,
  } = useManagementData();
  const [openActivateMembersModal, setOpenActivateMembersModal] = useState(false);
  const [openActivateMembersManualModal, setOpenActivateMembersManualModal] = useState(false);
  const { mutateAsync: upload, isPending: isUploading } = useUploadCommunityMembers();
  const { mutateAsync: activate, isPending: isActivating } = useActivateAllCommunityMembers();
  const [filter, setFilter] = useState<"all" | "active" | "inactive">("all");

  const [file, setFile] = useState<Blob | null>(null);

  const [searchTerm, setSearchTerm] = useState<string>("");
  const debounce = useDebounce(searchTerm);
  const [searchedMembers, setSearchedMembers] = useState<CommunityMembers[]>([]);

  const handleSearch = useCallback(async () => {
    if (searchTerm.length) {
      try {
        const members = await searchCommunityMembers(
          currentBuilding?.id ?? "none-building",
          debounce
        );
        setSearchedMembers(members);
      } catch (error) {
        console.error(error);
        toast.error("Error while searching for members");
        setSearchedMembers([]);
      }
    } else {
      setSearchedMembers([]);
    }
  }, [debounce]);

  useEffect(() => {
    handleSearch();
  }, [debounce, handleSearch]);

  if (!communityMembers) {
    return <h1>Could not find your building. contact {import.meta.env.VITE_SUPPORT_EMAIL}</h1>;
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files?.length ? event.target.files[0] : null);
  };

  const handleFileUpload = async () => {
    if (file && currentBuilding) {
      const formData = new FormData();
      formData.append("file", file);

      upload({ buildingId: currentBuilding.id, file: formData })
        .then((_) => {
          toast.success("File uploaded successfully");
        })
        .catch((error) => {
          toast.error(error.response.data.message);
        })
        .finally(() => {
          setOpenActivateMembersModal(false);
          setFile(null);
          refetchBuilding();
        });
    }
  };

  const handleActivateAll = async () => {
    if (currentBuilding) {
      activate(currentBuilding.id)
        .then((_) => {
          toast.success("Members activated successfully");
        })
        .catch((error) => {
          toast.error(error.response.data.message);
        })
        .finally(() => {
          setOpenActivateMembersModal(false);
          refetchBuilding();
        });
    } else {
      setOpenActivateMembersModal(false);
      toast.error(`Could not find your building. contact ${import.meta.env.VITE_SUPPORT_EMAIL}`);
    }
  };

  const handlePageChange = (direction: "next" | "prev") => {
    if (
      direction === "next" &&
      communityMemberPage < Math.ceil(currentBuilding?.community_members.length ?? 1 / pageSize)
    ) {
      setCommunityMemberPage(communityMemberPage + 1);
    } else if (direction === "prev" && communityMemberPage > 1) {
      setCommunityMemberPage(communityMemberPage - 1);
    }
  };
  const handleMemberClick = (memberId: string) => {
    navigate(`/community-members/${currentBuilding?.id}/${memberId}`);
  };

  let filteredMembers = searchTerm.length
    ? searchedMembers
    : communityMembers.filter((member) => {
        if (filter === "all") {
          return true;
        } else if (filter === "active") {
          return member.status === "active";
        } else {
          return member.status !== "active";
        }
      });

  const numberOfPages = Math.ceil((currentBuilding?.community_members.length ?? 1) / pageSize);
  return (
    <>
      <Header />
      {communityMembers.length > 0 ? (
        <div>
          <span className="flex justify-between">
            <h3 className="h3-bold">
              {currentBuilding?.community_members.length} community members
            </h3>
            <div>
              {!currentBuilding?.community_members.every(
                (member) => member.status === "active"
              ) && (
                <Dialog open={openActivateMembersModal} onOpenChange={setOpenActivateMembersModal}>
                  <DialogTrigger asChild>
                    <Button className="shad-button_primary text-xs h-[25px]">
                      Activate all inactive members
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-light-1">
                    <DialogHeader>
                      <DialogTitle>Activate all members?</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <p>
                        Setting users as active will make them available in mobile app and dashboard
                        for further use
                      </p>
                    </div>
                    <DialogFooter>
                      <Button
                        type="submit"
                        disabled={isActivating}
                        className="shad-button_primary"
                        onClick={handleActivateAll}
                      >
                        {isUploading ? (
                          <div className="flex-center gap-3">
                            <Loader />
                            Activating...
                          </div>
                        ) : (
                          <span>Activate</span>
                        )}
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              )}
              <AddMemberManuallyModal
                openActivateMembersManualModal={openActivateMembersManualModal}
                setOpenActivateMembersManualModal={setOpenActivateMembersManualModal}
                isSubmitting={isUploading}
              />
            </div>
          </span>
          <div className="flex gap-3">
            <Button
              onClick={() => setFilter("all")}
              className={`shad-button_secondary text-xs h-[29px] flex-center ${
                filter === "all" ? "bg-primary-1 text-white" : ""
              }`}
            >
              All
            </Button>
            <Button
              onClick={() => setFilter("active")}
              className={`shad-button_secondary text-xs h-[29px] flex-center ${
                filter === "active" ? "bg-primary-1 text-white" : ""
              }`}
            >
              Active
            </Button>
            <Button
              onClick={() => setFilter("inactive")}
              className={`shad-button_secondary text-xs h-[29px] flex-center ${
                filter === "inactive" ? "bg-primary-1 text-white" : ""
              }`}
            >
              Inactive
            </Button>
          </div>
          <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <div className="p-4">
              <Input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name"
              />
            </div>
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Unit Number
                  </th>
                  <th scope="col" className="px-6 py-3">
                    QR Code
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    User role
                  </th>
                </tr>
              </thead>
              <tbody className="">
                {filteredMembers.map((member) => (
                  <tr
                    onClick={() => handleMemberClick(member.id)}
                    key={member.id}
                    className="bg-white border-b cursor-pointer"
                  >
                    <td className="px-6 py-4">{member.name}</td>
                    <td className="px-6 py-4">{member.email}</td>
                    <td className="px-6 py-4">{member.unit_numbers}</td>
                    <td className="px-6 py-4">
                      <img src={member?.qr_code?.image_url || ""} width={50} alt="" />
                    </td>
                    <td className="px-6 py-4">{member.status}</td>
                    <td className="px-6 py-4">{member.user_role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-end gap-3 p-3">
              <Button
                onClick={() => handlePageChange("prev")}
                disabled={communityMemberPage === 1}
                className="shad-button_secondary"
              >
                Prev
              </Button>
              <Button
                onClick={() => handlePageChange("next")}
                disabled={communityMemberPage >= numberOfPages}
                className="shad-button_secondary"
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-6 justify-center items-center h-full">
          <p>Looks like you have not activated any Community Members yet</p>
          <h3 className="h3-bold">
            Utilize our standard CSV Importer to add your community members
          </h3>
          <Dialog open={openActivateMembersModal} onOpenChange={setOpenActivateMembersModal}>
            <DialogTrigger asChild data-state="closed">
              <Button className="shad-button_primary w-[250px]">Activate all members</Button>
            </DialogTrigger>
            <DialogContent className="bg-light-1">
              <DialogHeader>
                <DialogTitle>Please upload a filled out csv file</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Input onChange={handleFileChange} type="file" />
                </div>
              </div>
              <DialogFooter>
                <Button
                  type="submit"
                  disabled={file === null || isUploading}
                  className="shad-button_primary"
                  onClick={handleFileUpload}
                >
                  {isUploading ? (
                    <div className="flex-center gap-3">
                      <Loader />
                      Uploading...
                    </div>
                  ) : (
                    <span>Upload</span>
                  )}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Button className="shad-button_secondary w-[250px]">Download a csv sample</Button>

          <p>or</p>

          <AddMemberManuallyModal
            openActivateMembersManualModal={openActivateMembersManualModal}
            setOpenActivateMembersManualModal={setOpenActivateMembersManualModal}
            isSubmitting={isUploading}
          />
        </div>
      )}
    </>
  );
};

const AddMemberManuallyModal = ({
  openActivateMembersManualModal,
  setOpenActivateMembersManualModal,
  isSubmitting,
}: {
  openActivateMembersManualModal: boolean;
  isSubmitting: boolean;
  setOpenActivateMembersManualModal: (open: boolean) => void;
}) => {
  const form = useForm<z.infer<typeof CreateCommunityMemberValidation>>({
    resolver: zodResolver(CreateCommunityMemberValidation),
    defaultValues: {
      email: "",
      name: "",
      phone: "",
      unitNumbers: "",
      userRole: "owner",
      parkingSpotNumber: "",
      parkingLevel: 1,
      parkingSpotType: "regular",
      vehiclePlate: "",
      vehicleType: "regular",
    },
  });

  function onSubmit(values: z.infer<typeof CreateCommunityMemberValidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // handleSubmit(values)
    //   .then((_) => {
    //     toast.success("Please check your email for a reset link");
    //   })
    //   .catch((error) => {
    //     console.error(error.message);
    //     if (error instanceof AppwriteException) {
    //       toast.error(error.message);
    //       return;
    //     }
    //     toast.error(error.response.data.message);
    //   });
  }
  return (
    <Dialog open={openActivateMembersManualModal} onOpenChange={setOpenActivateMembersManualModal}>
      <DialogTrigger asChild data-state="closed">
        <Button className="shad-button_primary w-[250px]">Activate manually</Button>
      </DialogTrigger>
      <DialogContent className="bg-light-1">
        <DialogHeader>
          <DialogTitle>Enter the details of your community member</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <div className="sm:w-420 flex-center flex-col">
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col w-full gap-5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="john@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone number</FormLabel>
                    <FormControl>
                      <Input placeholder="+1234567890" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="unitNumbers"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Unit numbers(comma separated, if multiple)</FormLabel>
                    <FormControl>
                      <Input placeholder="1104, 1105" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="userRole"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormLabel>Select user role</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-light-1">
                        {["owner", "tenant"].map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage className="shad-form_message" />
                  </FormItem>
                )}
              />

              <DialogTitle>Parking(optional)</DialogTitle>
              <FormField
                control={form.control}
                name="parkingSpotNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Parking spot number</FormLabel>
                    <FormControl>
                      <Input placeholder="P1-1122" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="parkingLevel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Parking level</FormLabel>
                    <FormControl>
                      <Input placeholder="P1-1122" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <DialogFooter>
                <Button type="submit" disabled={isSubmitting} className="shad-button_primary">
                  {isSubmitting ? (
                    <div className="flex-center gap-3">
                      <Loader />
                      Submitting...
                    </div>
                  ) : (
                    <span>Submit</span>
                  )}
                </Button>
              </DialogFooter>
            </form>
          </div>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CommunityMembersPage;
