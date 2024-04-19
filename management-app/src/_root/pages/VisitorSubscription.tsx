import { Label } from "@/components/ui/label";
import { formatCurrency } from "@/lib/formatter";
import { Subscription } from "@/types";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CancelSubscriptionConfirmationModal } from "./ParkingSpot";
import moment from "moment";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { UpdateSubscriptionValidation } from "@/lib/validation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Loader from "@/components/shared/Loader";
import { useUpdateSubscription } from "@/lib/react-query/queriesAndMutations";
import { toast } from "sonner";
interface State {
  subscription: Subscription;
}
const VisitorSubscription = () => {
  const { state } = useLocation();
  const { subscription: originalSubscription }: State = state;
  const navigate = useNavigate();
  const [openCancelSubscriptionModal, setOpenCancelSubscriptionModal] = useState(false);
  const { mutateAsync: updateSubscription, isPending: isUpdating } = useUpdateSubscription();
  const [subscription, setSubscription] = useState<Subscription>(originalSubscription);

  const form = useForm<z.infer<typeof UpdateSubscriptionValidation>>({
    resolver: zodResolver(UpdateSubscriptionValidation),
    defaultValues: {
      accessCardNumber: "",
    },
  });

  function onSubmit(values: z.infer<typeof UpdateSubscriptionValidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    updateSubscription({ subscriptionId: subscription.id, dto: values })
      .then((_) => {
        toast.success("Subscription updated successfully");
        setSubscription({ ...subscription, access_card_number: values.accessCardNumber });
        form.reset();
      })
      .catch((error) => {
        console.error(error.message);
        toast.error(error.response.data.message);
      });
  }
  return (
    <div className="flex flex-col gap-5">
      <h3 className="base-semibold">Subscription information</h3>
      <div className="flex justify-between text-gray-500 shadow-md rounded-lg p-4 border">
        <div className="lg:grid grid-cols-2 gap-10 small-regular">
          <div className="flex flex-col gap-2">
            <Label className="base-semibold">Parking spot number</Label>
            <p className="subtle-regular">{subscription.parking_spot?.parking_spot_number}</p>
          </div>

          <div className="flex flex-col gap-2">
            <Label className="base-semibold">Parking spot level</Label>
            <p className="subtle-regular">{subscription.parking_spot?.parking_level}</p>
          </div>

          <div className="flex flex-col gap-2">
            <Label className="base-semibold">Parking spot type</Label>
            <p className="subtle-regular">{subscription.parking_spot?.parking_spot_type}</p>
          </div>
          <div className="flex flex-col gap-2">
            <Label className="base-semibold">Monthly price</Label>
            <p className="subtle-regular">{formatCurrency(subscription.parking_spot?.price ? subscription.parking_spot?.price / 100 : 0, "ar-AE", "AED")}/m</p>
          </div>
          <div className="flex flex-col gap-2">
            <Label className="base-semibold">Hourly price</Label>
            <p className="subtle-regular">{formatCurrency(subscription.parking_spot?.hourly_price ? subscription.parking_spot?.hourly_price / 100 : 0, "ar-AE", "AED")}/h</p>
          </div>
          <div />
          {!subscription.access_card_number ? (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col w-full gap-5">
                <FormField
                  control={form.control}
                  name="accessCardNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="base-semibold uppercase">Enter your access card number</FormLabel>
                      <FormControl>
                        <Input placeholder="01234567890123" className="border-green-500 border-2" {...field} />
                      </FormControl>
                      <FormMessage className="text-red" />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isUpdating} className="shad-button_primary">
                  {isUpdating ? (
                    <div className="flex-center gap-3">
                      <Loader />
                      Submitting...
                    </div>
                  ) : (
                    <span>Submit</span>
                  )}
                </Button>
              </form>
            </Form>
          ) : (
            <div className="flex flex-col gap-2">
              <Label className="base-semibold">Access card number</Label>
              <p className="base-semibold">{subscription.access_card_number}</p>
            </div>
          )}
          <div />
          {subscription && (
            <>
              {subscription?.stripe_subscription && (
                <div className="flex flex-col gap-2">
                  <Label className="base-semibold">Subscription status</Label>
                  <p className="flex-center border rounded-lg p-2 cursor-pointer shadow-sm subtle-regular">{(subscription?.stripe_subscription as any)["status"]}</p>
                </div>
              )}
              {subscription?.stripe_payment_intent && (
                <>
                  <div className="flex flex-col gap-2">
                    <Label className="base-semibold">Amount paid</Label>
                    <p className="flex-center border rounded-lg p-2 cursor-pointer shadow-sm subtle-regular">
                      {formatCurrency((subscription?.stripe_payment_intent as any)["amount"] / 100, "ar-AE", "AED")} for {subscription.no_of_hours} hours
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label className="base-semibold">Session ends</Label>
                    <p className="flex-center border rounded-lg p-2 cursor-pointer shadow-sm subtle-regular">
                      {moment(subscription.end_date).format("MMM DD, YYYY, hh:mm A")}
                    </p>
                  </div>
                </>
              )}
              <div className="flex flex-col gap-2">
                <Label className="base-semibold">Subscriber</Label>
                <p className="flex-center border rounded-lg p-2 cursor-pointer shadow-sm subtle-regular">{subscription?.subscriber_name}</p>
              </div>
              <div className="flex flex-col gap-2">
                <Label className="base-semibold">Car model</Label>
                <p className="flex-center border rounded-lg p-2 cursor-pointer shadow-sm subtle-regular">{subscription?.subscriber_car_model}</p>
              </div>
              <div className="flex flex-col gap-2">
                <Label className="base-semibold">Car licence plate</Label>
                <p className="flex-center border rounded-lg p-2 cursor-pointer shadow-sm subtle-regular">{subscription?.subscriber_licence_plate}</p>
              </div>
              <div className="flex flex-col gap-2">
                <Label className="base-semibold">Subscriber email</Label>
                <p className="flex-center border rounded-lg p-2 cursor-pointer shadow-sm subtle-regular">{subscription?.subscriber_email}</p>
              </div>
              <div className="flex flex-col gap-2">
                <Label className="base-semibold">Subscriber phone number</Label>
                <p className="flex-center border rounded-lg p-2 cursor-pointer shadow-sm subtle-regular">{subscription?.subscriber_phone}</p>
              </div>
              {subscription.subscriber_driver_licence_number && (
                <div className="flex flex-col gap-2">
                  <Label className="base-semibold">Subscriber driver licence number</Label>
                  <p className="flex-center border rounded-lg p-2 cursor-pointer shadow-sm subtle-regular">{subscription?.subscriber_driver_licence_number}</p>
                </div>
              )}
              {subscription.subscriber_id_card_number && (
                <div className="flex flex-col gap-2">
                  <Label className="base-semibold">Subscriber Emirates ID</Label>
                  <p className="flex-center border rounded-lg p-2 cursor-pointer shadow-sm subtle-regular">{subscription?.subscriber_id_card_number}</p>
                </div>
              )}
            </>
          )}
        </div>
        {subscription && (
          <>
            {subscription.stripe_subscription && (
              <>
                {(subscription.stripe_subscription as any)["cancel_at"] ? (
                  <div className="flex flex-col gap-2">
                    <Label className="base-semibold">Subscription ends at {moment((subscription.stripe_subscription as any)["cancel_at"] * 1000).format("MMM DD, YYYY")}</Label>
                  </div>
                ) : (
                  <CancelSubscriptionConfirmationModal
                    tenant="visitor"
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
          </>
        )}
      </div>
    </div>
  );
};

export default VisitorSubscription;
