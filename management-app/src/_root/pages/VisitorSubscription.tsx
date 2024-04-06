import { Label } from "@/components/ui/label";
import { formatCurrency } from "@/lib/formatter";
import { Subscription } from "@/types";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CancelSubscriptionConfirmationModal } from "./ParkingSpot";
import moment from "moment";
interface State {
  subscription: Subscription;
}
const VisitorSubscription = () => {
  const { state } = useLocation();
  const { subscription }: State = state;
  const navigate = useNavigate();
  const [openCancelSubscriptionModal, setOpenCancelSubscriptionModal] = useState(false);
  return (
    <div className="flex flex-col gap-5">
      <h3 className="base-semibold">Parking spot information</h3>
      <div className="flex justify-between text-gray-500 shadow-md rounded-lg p-4 border">
        <div className="grid grid-cols-2 gap-10 small-regular">
          <div className="flex flex-col gap-2">
            <Label className="base-semibold">Parking spot number</Label>
            <p>{subscription.parking_spot?.parking_spot_number}</p>
          </div>

          <div className="flex flex-col gap-2">
            <Label className="base-semibold">Parking spot level</Label>
            <p>{subscription.parking_spot?.parking_level}</p>
          </div>

          <div className="flex flex-col gap-2">
            <Label className="base-semibold">Parking spot type</Label>
            <p>{subscription.parking_spot?.parking_spot_type}</p>
          </div>
          <div className="flex flex-col gap-2">
            <Label className="base-semibold">Parking spot price</Label>
            <p>{formatCurrency(subscription.parking_spot?.price ? subscription.parking_spot?.price / 100 : 0, "ar-AE", "AED")}/m</p>
          </div>
          {subscription && (
            <>
              <div className="flex flex-col gap-2">
                <Label className="base-semibold">Subscription status</Label>
                <p className="flex-center border rounded-lg p-2 cursor-pointer shadow-sm">{(subscription?.stripe_subscription as any)["status"]}</p>
              </div>
              <div className="flex flex-col gap-2">
                <Label className="base-semibold">Subscriber</Label>
                <p className="flex-center border rounded-lg p-2 cursor-pointer shadow-sm">{subscription?.subscriber_name}</p>
              </div>
              <div className="flex flex-col gap-2">
                <Label className="base-semibold">Car model</Label>
                <p className="flex-center border rounded-lg p-2 cursor-pointer shadow-sm">{subscription?.subscriber_car_model}</p>
              </div>
              <div className="flex flex-col gap-2">
                <Label className="base-semibold">Car licence plate</Label>
                <p className="flex-center border rounded-lg p-2 cursor-pointer shadow-sm">{subscription?.subscriber_licence_plate}</p>
              </div>
              <div className="flex flex-col gap-2">
                <Label className="base-semibold">Subscriber email</Label>
                <p className="flex-center border rounded-lg p-2 cursor-pointer shadow-sm">{subscription?.subscriber_email}</p>
              </div>
              <div className="flex flex-col gap-2">
                <Label className="base-semibold">Subscriber phone number</Label>
                <p className="flex-center border rounded-lg p-2 cursor-pointer shadow-sm">{subscription?.subscriber_phone}</p>
              </div>
            </>
          )}
        </div>
        {subscription && (
          <>
            {(subscription.stripe_subscription as any)["cancel_at"] ? (
              <div className="flex flex-col gap-2">
                <Label className="base-semibold">Subscription ends at {moment((subscription.stripe_subscription as any)["cancel_at"] * 1000).format("MMM DD, YYYY")}</Label>
              </div>
            ) : (
              <CancelSubscriptionConfirmationModal
                openCancelSubscriptionModal={openCancelSubscriptionModal}
                setOpenCancelSubscriptionModal={setOpenCancelSubscriptionModal}
                parkingSpot={subscription.parking_spot}
                refetchParkingSpot={() => {
                  navigate("/subscriptions");
                }}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default VisitorSubscription;
