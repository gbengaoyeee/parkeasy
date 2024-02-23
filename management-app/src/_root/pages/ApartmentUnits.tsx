import React, { useState } from "react";
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
import { useAddApartmentUnit } from "@/lib/react-query/queriesAndMutations";
import { addApartmentUnit } from "@/api/building";
import { Building } from "@/types";
import useManagementData from "@/hooks/useManagementData";
import { toast } from "sonner";
import Loader from "@/components/shared/Loader";

const ApartmentUnits = () => {
  const [openAddApartmentUnitModal, setOpenAddApartmentUnitModal] = useState(false);
  const { currentBuilding } = useManagementData();
  return (
    <div>
      <div className="flex flex-col gap-6 justify-center items-center h-full">
        <p>Looks like you have not added any apartment units</p>

        <AddApartmentUnitModal
          openAddApartmentModal={openAddApartmentUnitModal}
          setOpenAddApartmentModal={setOpenAddApartmentUnitModal}
          building={currentBuilding}
        />
      </div>
    </div>
  );
};

const AddApartmentUnitModal = ({
  openAddApartmentModal,
  setOpenAddApartmentModal,
  building,
}: {
  openAddApartmentModal: boolean;
  setOpenAddApartmentModal: (open: boolean) => void;
  building: Building | undefined | null;
}) => {
  const form = useForm<z.infer<typeof AddApartmentUnitValidation>>({
    resolver: zodResolver(AddApartmentUnitValidation),
    defaultValues: {
      unitNumber: "",
      noOfRooms: "",
      noOfBaths: "",
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
    addApartmentUnit({ buildingId: building.id, unit: values }).then((_) => {
      toast.success("Apartment unit added successfully");
      setOpenAddApartmentModal(false);
    });
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
    <Dialog open={openAddApartmentModal} onOpenChange={setOpenAddApartmentModal}>
      <DialogTrigger asChild data-state="closed">
        <Button className="shad-button_primary w-[250px]">Add a apartment unit</Button>
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
