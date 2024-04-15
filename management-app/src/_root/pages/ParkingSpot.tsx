import { Label } from "@/components/ui/label";
import { useParams } from "react-router-dom";
import { useCancelSubscription, useGetBuilding, useGetParkingSpot, useUpdateParkingSpot } from "@/lib/react-query/queriesAndMutations";
import Loader from "@/components/shared/Loader";
import { AddParkingSpotModal } from "./ParkingSpots";
import { useCallback, useEffect, useState } from "react";
import { formatCurrency } from "@/lib/formatter";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { ParkingSpot as AppParkingSpot } from "@/types";
import moment from "moment";
import Switch from "react-switch";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { AddParkingSpotValidation } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDebounce } from "@/hooks/useDebounce";

const ParkingSpot = () => {
  const { buildingId, parkingSpotId } = useParams();
  const { data: parkingSpot, isFetching: isFetchingParkingSpot, refetch: refetchParkingSpot } = useGetParkingSpot(buildingId, parkingSpotId);
  const { data: building } = useGetBuilding(buildingId);
  const [openCancelSubscriptionModal, setOpenCancelSubscriptionModal] = useState(false);

  const [openAddParkingSpotModal, setOpenAddParkingSpotModal] = useState(false);
  const form = useForm<z.infer<typeof AddParkingSpotValidation>>({
    resolver: zodResolver(AddParkingSpotValidation),
    defaultValues: {
      spotNumber: parkingSpot?.parking_spot_number ?? "",
      spotLevel: parkingSpot?.parking_level ? parkingSpot?.parking_level : 1,
      spotType: parkingSpot?.parking_spot_type ?? "regular",
      price: parkingSpot?.price ? parkingSpot?.price / 100 : 0.0,
      depositEnabled: parkingSpot?.deposit_enabled ?? false,
    },
  });

  const watchDepositEnabled = form.watch("depositEnabled");
  const debounce = useDebounce(watchDepositEnabled?.toString() ?? "false", 1000);

  const handleToggle = useCallback(async () => {
    onSubmit(form.getValues());
  }, [debounce]);

  useEffect(() => {
    handleToggle();
  }, [debounce, handleToggle]);

  const { mutateAsync: updateParkingSpot, } = useUpdateParkingSpot();

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
        })
        .catch((error) => {
          console.error(error.message);
          toast.error(error.response.data.message);
        });
    }
  }

  if (isFetchingParkingSpot) {
    return <Loader />;
  }
  if (!parkingSpot) {
    return <h1>Could not find your parking spot. contact {import.meta.env.VITE_SUPPORT_EMAIL}</h1>;
  }

  return (
    <div className="flex flex-col gap-5">
      <h3 className="base-semibold">Parking spot information</h3>
      <div className="flex justify-between text-gray-500 shadow-md rounded-lg p-4 border">
        <div className="lg:grid grid-cols-2 gap-10 small-regular">
          <div className="flex flex-col gap-2">
            <Label className="base-semibold">Parking spot number</Label>
            <p className="subtle-regular">{parkingSpot.parking_spot_number}</p>
          </div>

          <div className="flex flex-col gap-2">
            <Label className="base-semibold">Parking spot level</Label>
            <p className="subtle-regular">{parkingSpot.parking_level}</p>
          </div>

          <div className="flex flex-col gap-2">
            <Label className="base-semibold">Parking spot type</Label>
            <p className="subtle-regular">{parkingSpot.parking_spot_type}</p>
          </div>
          <div className="flex flex-col gap-2">
            <Label className="base-semibold">Parking spot price</Label>
            <p className="subtle-regular">{formatCurrency(parkingSpot.price ? parkingSpot.price / 100 : 0, "ar-AE", "AED")}/m</p>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="enable-disable-deposit" className="base-semibold">
              {watchDepositEnabled ? "Disable" : "Enable"} Deposit
            </Label>
            <Switch
              width={50}
              height={20}
              checkedIcon={false}
              uncheckedIcon={false}
              onColor="#090909"
              checked={watchDepositEnabled ?? false}
              onChange={(checked) => {
                form.setValue("depositEnabled", checked);
              }}
            />
          </div>
          {parkingSpot.current_subscription && (
            <>
              <div className="flex flex-col gap-2">
                <Label className="base-semibold">Subscription status</Label>
                <p className="flex-center border rounded-lg p-2 cursor-pointer shadow-sm subtle-regular">{(parkingSpot?.current_subscription?.stripe_subscription as any)["status"]}</p>
              </div>
              <div className="flex flex-col gap-2">
                <Label className="base-semibold">Subscriber</Label>
                <p className="flex-center border rounded-lg p-2 cursor-pointer shadow-sm subtle-regular">{parkingSpot?.current_subscription?.subscriber_name}</p>
              </div>
              <div className="flex flex-col gap-2">
                <Label className="base-semibold">Car model</Label>
                <p className="flex-center border rounded-lg p-2 cursor-pointer shadow-sm subtle-regular">{parkingSpot?.current_subscription?.subscriber_car_model}</p>
              </div>
              <div className="flex flex-col gap-2">
                <Label className="base-semibold">Car licence plate</Label>
                <p className="flex-center border rounded-lg p-2 cursor-pointer shadow-sm subtle-regular">{parkingSpot?.current_subscription?.subscriber_licence_plate}</p>
              </div>
              <div className="flex flex-col gap-2">
                <Label className="base-semibold">Subscriber email</Label>
                <p className="flex-center border rounded-lg p-2 cursor-pointer shadow-sm subtle-regular">{parkingSpot?.current_subscription?.subscriber_email}</p>
              </div>
              <div className="flex flex-col gap-2">
                <Label className="base-semibold">Subscriber phone number</Label>
                <p className="flex-center border rounded-lg p-2 cursor-pointer shadow-sm subtle-regular">{parkingSpot?.current_subscription?.subscriber_phone}</p>
              </div>
            </>
          )}
        </div>
        <AddParkingSpotModal openAddParkingSpotModal={openAddParkingSpotModal} setOpenAddParkingSpotModal={setOpenAddParkingSpotModal} building={building} parkingSpot={parkingSpot} refetchParkingSpots={refetchParkingSpot} />
        {parkingSpot.current_subscription && (
          <>
            {(parkingSpot.current_subscription.stripe_subscription as any)["cancel_at"] ? (
              <div className="flex flex-col gap-2 pl-2">
                <Label className="base-semibold">Subscription ends at {moment((parkingSpot.current_subscription.stripe_subscription as any)["cancel_at"] * 1000).format("MMM DD, YYYY")}</Label>
              </div>
            ) : (
              <CancelSubscriptionConfirmationModal tenant="host" openCancelSubscriptionModal={openCancelSubscriptionModal} setOpenCancelSubscriptionModal={setOpenCancelSubscriptionModal} parkingSpot={parkingSpot} refetchParkingSpot={refetchParkingSpot} />
            )}
          </>
        )}
      </div>
      {/* <div className="flex flex-col gap-2 text-gray-500 shadow-md rounded-lg p-4 border">
        <Label className="base-semibold">QR Codes</Label>
        <div>
          <div key={parkingSpot.qr_code.id} className="flex gap-2">
            <img src={parkingSpot.qr_code.image_url ?? ""} width={150} alt="qr code" />
            <a href={parkingSpot.qr_code.image_url ?? ""} download className="bg-gray-200 text-gray-800 text-sm flex-center px-8 rounded-lg h-8">
              Download
            </a>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export const CancelSubscriptionConfirmationModal = ({ tenant, openCancelSubscriptionModal, setOpenCancelSubscriptionModal, parkingSpot, refetchParkingSpot = () => {} }: { tenant: "visitor" | "host"; openCancelSubscriptionModal: boolean; setOpenCancelSubscriptionModal: (open: boolean) => void; parkingSpot?: AppParkingSpot; refetchParkingSpot?: () => void }) => {
  const { mutateAsync: cancelSubscription, isPending: isCancelling } = useCancelSubscription();
  const handleCancelSubscription = () => {
    if (!parkingSpot) {
      toast.error(`Could not find your parking spot. contact ${import.meta.env.VITE_SUPPORT_EMAIL}`);
      return;
    }
    cancelSubscription(parkingSpot.id)
      .then((res) => {
        toast.success(res.message);
        refetchParkingSpot();
        setOpenCancelSubscriptionModal(false);
      })
      .catch((error) => {
        console.error(error.message);
        toast.error(error.response.data.message);
      });
  };

  return (
    <Dialog open={openCancelSubscriptionModal} onOpenChange={setOpenCancelSubscriptionModal}>
      <DialogTrigger asChild>
        <Button className="bg-red border-gray-400 text-white p-3 text-[10px] lg:text-[16px] ">Cancel subscription</Button>
      </DialogTrigger>

      <DialogContent className="bg-light-1">
        {tenant === "host" ? (
          <>
            <p>Are you sure you want to cancel subscription?</p>
            <Button
              onClick={() => {
                handleCancelSubscription();
              }}
              className="bg-red text-white"
              disabled={isCancelling}
            >
              {isCancelling ? (
                <div className="flex-center gap-3">
                  <Loader />
                  Cancelling...
                </div>
              ) : (
                <span>Cancel</span>
              )}
            </Button>
          </>
        ) : (
          <p>Please visit the parking spot manager representative and return the card to collect your deposit and ask owner to cancel subscription</p>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ParkingSpot;
