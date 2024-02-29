import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AddApartmentUnitValidation } from "@/lib/validation";
import { useAddApartmentUnit, useGetApartmentUnits } from "@/lib/react-query/queriesAndMutations";
import { Building } from "@/types";
import useManagementData from "@/hooks/useManagementData";
import { toast } from "sonner";
import Loader from "@/components/shared/Loader";
import Header from "@/components/shared/Header";

const ApartmentUnits = () => {
  const [openAddApartmentUnitModal, setOpenAddApartmentUnitModal] = useState(false);
  const { currentBuilding } = useManagementData();
  const {
    refetch: refetchApartmentUnits,
    isFetching: isFetchingApartmentUnits,
    data: apartmentUnits,
    error: apartmentUnitsError,
  } = useGetApartmentUnits(currentBuilding?.id);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    if (currentBuilding) {
      refetchApartmentUnits();
    }
  }, [currentBuilding]);

  if (isFetchingApartmentUnits) {
    return <Loader />;
  }

  if (!apartmentUnits) {
    return (
      <h1>Could not find your apartment units. contact {import.meta.env.VITE_SUPPORT_EMAIL}</h1>
    );
  }

  return (
    <>
      <Header />
      {apartmentUnits.length > 0 ? (
        <div>
          <span className="flex justify-between">
            <h3 className="h3-bold">
              {apartmentUnits.length} Apartment unit{apartmentUnits.length > 1 ? "s" : ""}
            </h3>
            <div>
              <AddApartmentUnitModal
                openAddApartmentModal={openAddApartmentUnitModal}
                setOpenAddApartmentModal={setOpenAddApartmentUnitModal}
                building={currentBuilding}
                refetchApartmentUnits={refetchApartmentUnits}
              />
            </div>
          </span>

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
                    Unit number
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Beds
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Baths
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Assigned to
                  </th>
                </tr>
              </thead>
              <tbody className="">
                {apartmentUnits?.map((unit) => (
                  <tr
                    // onClick={() => handleMemberClick(member.id)}
                    key={unit.id}
                    className="bg-white border-b cursor-pointer"
                  >
                    <td className="px-6 py-4">{unit.unit_number}</td>
                    <td className="px-6 py-4">{unit.no_of_bedrooms}</td>
                    <td className="px-6 py-4">{unit.no_of_baths}</td>
                    <td className="px-6 py-4">{unit.community_member?.name || "N/A"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* <div className="flex justify-end gap-3 p-3">
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
            </div> */}
          </div>
        </div>
      ) : (
        <div>
          <div className="flex flex-col gap-6 justify-center items-center h-full">
            <p>Looks like you have not added any apartment units</p>

            <AddApartmentUnitModal
              openAddApartmentModal={openAddApartmentUnitModal}
              setOpenAddApartmentModal={setOpenAddApartmentUnitModal}
              building={currentBuilding}
              refetchApartmentUnits={refetchApartmentUnits}
            />
          </div>
        </div>
      )}
    </>
  );
};

const AddApartmentUnitModal = ({
  openAddApartmentModal,
  setOpenAddApartmentModal,
  building,
  refetchApartmentUnits = () => {},
}: {
  openAddApartmentModal: boolean;
  setOpenAddApartmentModal: (open: boolean) => void;
  building: Building | undefined | null;
  refetchApartmentUnits?: () => void;
}) => {
  const form = useForm<z.infer<typeof AddApartmentUnitValidation>>({
    resolver: zodResolver(AddApartmentUnitValidation),
    defaultValues: {
      unitNumber: "",
      noOfRooms: undefined,
      noOfBaths: undefined,
    },
  });

  const { mutateAsync: addApartmentUnit, isPending: isAddingApartmentUnit } = useAddApartmentUnit();

  function onSubmit(values: z.infer<typeof AddApartmentUnitValidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    if (!building) {
      toast.error(`Could not find your building. contact ${import.meta.env.VITE_SUPPORT_EMAIL}`);
      return;
    }
    addApartmentUnit({ buildingId: building.id, dto: values })
      .then((_) => {
        toast.success("Apartment unit added successfully");
        refetchApartmentUnits();
        setOpenAddApartmentModal(false);
      })
      .catch((error) => {
        console.error(error.message);
        toast.error(error.response.data.message);
      });
  }
  return (
    <Dialog open={openAddApartmentModal} onOpenChange={setOpenAddApartmentModal}>
      <DialogTrigger asChild data-state="closed">
        <Button className="shad-button_primary w-[250px]">Add an apartment unit</Button>
      </DialogTrigger>
      <DialogContent className="bg-light-1">
        <DialogHeader>
          <DialogTitle>Enter Apartment details</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <div className="sm:w-420 flex-center flex-col">
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col w-full gap-5">
              <FormField
                control={form.control}
                name="unitNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Unit number</FormLabel>
                    <FormControl>
                      <Input placeholder="1001" {...field} />
                    </FormControl>
                    <FormMessage className="text-red" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="noOfRooms"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>How many bedrooms</FormLabel>
                    <FormControl>
                      <Input placeholder="3" pattern="[1-9]*" {...field} />
                    </FormControl>
                    <FormMessage className="text-red" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="noOfBaths"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>How many bathrooms</FormLabel>
                    <FormControl>
                      <Input placeholder="2" pattern="[1-9]*" {...field} />
                    </FormControl>
                    <FormMessage className="text-red" />
                  </FormItem>
                )}
              />

              <DialogFooter>
                <Button
                  type="submit"
                  disabled={isAddingApartmentUnit}
                  className="shad-button_primary"
                >
                  {isAddingApartmentUnit ? (
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

export default ApartmentUnits;
