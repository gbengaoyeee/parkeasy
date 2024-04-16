import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useManagementData from "@/hooks/useManagementData";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDebounce } from "@/hooks/useDebounce";
import { Building, ParkingSpot } from "@/types";
import { searchParkingSpots } from "@/api/building";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AddParkingSpotValidation } from "@/lib/validation";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Loader from "@/components/shared/Loader";
import { useAddParkingSpot, useUpdateParkingSpot } from "@/lib/react-query/queriesAndMutations";
import { formatCurrency } from "@/lib/formatter";
import { Label } from "@radix-ui/react-label";
import moment from "moment";
import { Loader2 } from "lucide-react";

const ParkingSpots = () => {
  const { currentBuilding, parkingSpots, getParkingSpotsError, isFetchingParkingSpots, parkingSpotsPage, setParkingSpotsPage, pageSize, refetchParkingSpots } = useManagementData();
  const navigate = useNavigate();

  const [openAddParkingSpotModal, setOpenAddParkingSpotModal] = useState(false);

  const [searchTerm, setSearchTerm] = useState<string>("");
  const debounce = useDebounce(searchTerm);
  const [searchedSpots, setSearchedSpots] = useState<ParkingSpot[]>([]);

  const handleSearch = useCallback(async () => {
    if (searchTerm.length) {
      try {
        const spots = await searchParkingSpots(currentBuilding?.id ?? "none-building", debounce);
        setSearchedSpots(spots);
      } catch (error) {
        console.error(error);
        toast.error("Error while searching for parking spots");
        setSearchedSpots([]);
      }
    } else {
      setSearchedSpots([]);
    }
  }, [debounce]);

  useEffect(() => {
    handleSearch();
  }, [debounce, handleSearch]);

  if(isFetchingParkingSpots) {
    return <div className="w-full h-full flex-center">
      <Loader2 className="animate-spin-slow"/>
    </div>
  }

  if (getParkingSpotsError) {
    return <h1>Could not find your building. contact {import.meta.env.VITE_SUPPORT_EMAIL}</h1>;
  }
  if (!parkingSpots) {
    return <h1>Could not find your building. contact {import.meta.env.VITE_SUPPORT_EMAIL}</h1>;
  }

  const handleSpotClick = (parkingSpot: ParkingSpot) => {
    navigate(`/parking-spots/${currentBuilding?.id}/${parkingSpot.id}`, {
      state: { parkingSpot, building: currentBuilding },
    });
  };

  const handlePageChange = (direction: "next" | "prev") => {
    if (direction === "next" && parkingSpotsPage < Math.ceil(currentBuilding?.parking_spots.length ?? 1 / pageSize)) {
      setParkingSpotsPage(parkingSpotsPage + 1);
    } else if (direction === "prev" && parkingSpotsPage > 1) {
      setParkingSpotsPage(parkingSpotsPage - 1);
    }
  };

  let filteredParkngSpots = searchTerm.length ? searchedSpots : parkingSpots;

  const numberOfPages = Math.ceil((currentBuilding?.parking_spots.length ?? 1) / pageSize);

  return (
    <>
      {(currentBuilding?.parking_spots.length ?? 0) > 0 ? (
        <div>
          <span className="flex justify-between">
            <h3 className="h3-bold">
              {parkingSpots.length} parking spot{parkingSpots.length > 1 ? "s" : ""}
            </h3>
            <div>
              <AddParkingSpotModal openAddParkingSpotModal={openAddParkingSpotModal} setOpenAddParkingSpotModal={setOpenAddParkingSpotModal} building={currentBuilding} refetchParkingSpots={refetchParkingSpots} />
            </div>
          </span>

          <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <div className="p-4">
              <Input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search by spot number" />
            </div>
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Spot Number
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Spot Level
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Spot type
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Subscription status
                  </th>
                </tr>
              </thead>
              <tbody className="">
                {filteredParkngSpots.map((spot) => (
                  <tr onClick={() => handleSpotClick(spot)} key={spot.id} className="bg-white border-b cursor-pointer">
                    <td className="px-6 py-4">{spot.parking_spot_number}</td>
                    <td className="px-6 py-4">{spot.parking_level}</td>
                    <td className="px-6 py-4">{spot.parking_spot_type}</td>
                    <td className="px-6 py-4">{formatCurrency(spot.price ? spot.price / 100 : 0, "ar-AE", "AED")}/m</td>
                    <td className="px-6 py-4">
                      {spot.current_subscription?.stripe_subscription ? (
                        <>
                          {(spot.current_subscription.stripe_subscription as any)["cancel_at"] ? (
                            <div className="flex flex-col gap-2">
                              <Label className="base-semibold">Ends at {moment((spot.current_subscription.stripe_subscription as any)["cancel_at"] * 1000).format("MMM DD, YYYY")}</Label>
                            </div>
                          ) : (
                            (spot.current_subscription.stripe_subscription as any)["status"]
                          )}
                        </>
                      ) : (
                        "N/A"
                      )}
                    </td>
                    {/* <td className="px-6 py-4">{spot.owner ? spot.owner?.name : "N/A"}</td> */}
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-end gap-3 p-3">
              <Button onClick={() => handlePageChange("prev")} disabled={parkingSpotsPage === 1} className="shad-button_secondary">
                Prev
              </Button>
              <Button onClick={() => handlePageChange("next")} disabled={parkingSpotsPage >= numberOfPages} className="shad-button_secondary">
                Next
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-6 justify-center items-center h-full">
          <p>Looks like you have not activated any parking spots yet</p>
          <AddParkingSpotModal openAddParkingSpotModal={openAddParkingSpotModal} setOpenAddParkingSpotModal={setOpenAddParkingSpotModal} building={currentBuilding} refetchParkingSpots={refetchParkingSpots} />
        </div>
      )}
    </>
  );
};

export const AddParkingSpotModal = ({ openAddParkingSpotModal, setOpenAddParkingSpotModal, building, parkingSpot, refetchParkingSpots = () => {} }: { openAddParkingSpotModal: boolean; setOpenAddParkingSpotModal: (open: boolean) => void; building: Building | undefined | null; parkingSpot?: ParkingSpot; refetchParkingSpots?: () => void }) => {
  const form = useForm<z.infer<typeof AddParkingSpotValidation>>({
    resolver: zodResolver(AddParkingSpotValidation),
    defaultValues: {
      spotNumber: parkingSpot?.parking_spot_number ?? "",
      spotLevel: parkingSpot?.parking_level ? parkingSpot?.parking_level : 1,
      spotType: parkingSpot?.parking_spot_type ?? "regular",
      price: parkingSpot?.price ? parkingSpot?.price / 100 : 0.0,
    },
  });

  const { mutateAsync: addParkingSpot, isPending: isAddingParkingSpot } = useAddParkingSpot();
  const { mutateAsync: updateParkingSpot, isPending: isUpdatingParkingSpot } = useUpdateParkingSpot();

  function onSubmit(values: z.infer<typeof AddParkingSpotValidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    if (!building) {
      toast.error(`Could not find your building. contact ${import.meta.env.VITE_SUPPORT_EMAIL}`);
      return;
    }
    if (parkingSpot) {
      updateParkingSpot({ buildingId: building.id, spotId: parkingSpot.id, dto: values })
        .then((_) => {
          toast.success("Parking spot updated successfully");
          refetchParkingSpots();
          setOpenAddParkingSpotModal(false);
        })
        .catch((error) => {
          console.error(error.message);
          toast.error(error.response.data.message);
        });
    } else {
      addParkingSpot({ buildingId: building.id, dto: values })
        .then((_) => {
          toast.success("Parking spot added successfully");
          refetchParkingSpots();
          setOpenAddParkingSpotModal(false);
        })
        .catch((error) => {
          console.error(error.message);
          toast.error(error.response.data.message);
        });
    }
  }
  return (
    <Dialog open={openAddParkingSpotModal} onOpenChange={setOpenAddParkingSpotModal}>
      <DialogTrigger asChild data-state="closed">
        <Button className="shad-button_primary w-[90px] lg:w-[250px]">{parkingSpot ? "Edit" : "Add"} parking spot</Button>
      </DialogTrigger>
      <DialogContent className="bg-light-1">
        <DialogHeader>
          <DialogTitle>Enter parking spot details</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <div className="sm:w-420 flex-center flex-col">
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col w-full gap-5">
              <FormField
                control={form.control}
                name="spotNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What is the spot number?</FormLabel>
                    <FormControl>
                      <Input placeholder="1001" {...field} />
                    </FormControl>
                    <FormMessage className="text-red" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="spotLevel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What level is this parking spot on?</FormLabel>
                    <FormControl>
                      <Input placeholder="3" pattern="[1-9]*" {...field} />
                    </FormControl>
                    <FormMessage className="text-red" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What will be the monthly price for this spot in AED?</FormLabel>
                    <FormControl>
                      <Input placeholder="300" {...field} />
                    </FormControl>
                    <FormMessage className="text-red" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="spotType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What type of parking spot is this?</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a staff role" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-light-1">
                        {["regular", "hybrid", "electric"].map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-red" />
                  </FormItem>
                )}
              />

              <DialogFooter>
                <Button type="submit" disabled={isAddingParkingSpot || isUpdatingParkingSpot} className="shad-button_primary">
                  {isAddingParkingSpot || isUpdatingParkingSpot ? (
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

export default ParkingSpots;
