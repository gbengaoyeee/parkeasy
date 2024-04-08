import Loader from "@/components/shared/Loader";
import { Label } from "@/components/ui/label";
import { formatCurrency } from "@/lib/formatter";
import { useGetSingleDiscoverParkingSpot, useSubscribeToSpot } from "@/lib/react-query/queriesAndMutations";
import { useParams } from "react-router-dom";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { SubscribeToParkingSpotValidation } from "@/lib/validation";
import { ParkingSpot } from "@/types";
import { useUserContext } from "@/context/UserContext";
import { useState } from "react";
import UploadWidget from "@/components/shared/UploadWidget";

const VisitorViewSpot = () => {
  const { spotId } = useParams();
  const [openSubscribeToSpotModal, setSubscribeToSpotModal] = useState(false);
  const { data: parkingSpot, isFetching: isFetchingParkingSpot, refetch: refetchParkingSpot } = useGetSingleDiscoverParkingSpot(spotId);

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
            <p>{parkingSpot.parking_spot_number}</p>
          </div>

          <div className="flex flex-col gap-2">
            <Label className="base-semibold">Parking spot level</Label>
            <p>{parkingSpot.parking_level}</p>
          </div>

          <div className="flex flex-col gap-2">
            <Label className="base-semibold">Parking spot type</Label>
            <p>{parkingSpot.parking_spot_type}</p>
          </div>
          <div className="flex flex-col gap-2">
            <Label className="base-semibold">Parking spot price</Label>
            <p>{formatCurrency(parkingSpot.price ? parkingSpot.price / 100 : 0, "ar-AE", "AED")}/m</p>
          </div>
          <div className="flex flex-col gap-2">
            {/* <Label className="base-semibold">Assigned to</Label> */}
            {/* <p
                  className="flex-center border rounded-lg p-2 cursor-pointer shadow-sm"
                  onClick={() => {
                    if (parkingSpot.owner) {
                      navigate(`/community-members/${buildingId}/${parkingSpot.owner?.id}`);
                    }
                  }}
                >
                  {parkingSpot.owner ? parkingSpot.owner.name : "N/A"}
                </p> */}
          </div>
        </div>
        <SubscribeToSpotModal openSubscribeModal={openSubscribeToSpotModal} setOpenSubscribeModal={setSubscribeToSpotModal} parkingSpot={parkingSpot} refetchParkingSpot={refetchParkingSpot} />
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

const SubscribeToSpotModal = ({ openSubscribeModal, setOpenSubscribeModal, parkingSpot, refetchParkingSpot = () => {} }: { openSubscribeModal: boolean; setOpenSubscribeModal: (open: boolean) => void; parkingSpot?: ParkingSpot; refetchParkingSpot?: () => void }) => {
  const { user } = useUserContext();
  const form = useForm<z.infer<typeof SubscribeToParkingSpotValidation>>({
    resolver: zodResolver(SubscribeToParkingSpotValidation),
    defaultValues: {
      name: user?.first_name && user?.last_name ? `${user?.first_name} ${user?.last_name}` : "",
      email: user?.email ? `${user?.email}` : "",
      phone: user?.phone_number ? `${user?.phone_number}` : "",
      carModel: "",
      licencePlate: "",
      officeNumber: "",
      driverLicenceNumber: "",
      emiratesId: "",
    },
  });

  const { mutateAsync: subscribeToSpot, isPending: isSubscribing } = useSubscribeToSpot();

  const openInNewTab = (url: string) => {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (isSafari) {
      // For Safari, open the URL in the same window due to restrictions
      window.location.href = url;
    } else {
      // Use JavaScript to open a new window for other browsers
      const newWindow = window.open(url, "_blank", "noopener,noreferrer");
      if (newWindow) newWindow.opener = null;
    }
  };

  function onSubmit(values: z.infer<typeof SubscribeToParkingSpotValidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    if (!user) {
      toast.error("Please log back in to subscribe to parking spot");
      return;
    }
    if (!parkingSpot) {
      toast.error(`Could not find this parking spot. contact ${import.meta.env.VITE_SUPPORT_EMAIL}`);
      return;
    }

    subscribeToSpot({
      parkingSpotId: parkingSpot.id,
      userId: user.id,
      dto: values,
    })
      .then((res) => {
        refetchParkingSpot();
        setOpenSubscribeModal(false);
        openInNewTab(res.url);
      })
      .catch((error) => {
        console.error(error.message);
        toast.error(error.response.data.message);
      });
  }
  return (
    <Dialog open={openSubscribeModal} onOpenChange={setOpenSubscribeModal}>
      <DialogTrigger asChild data-state="closed">
        <Button className="shad-button_primary w-[250px]">Subscribe to this spot</Button>
      </DialogTrigger>
      <DialogContent className="bg-light-1 overflow-y-scroll max-h-screen">
        <DialogHeader>
          <DialogTitle>Enter details to subscribe</DialogTitle>
          <DialogDescription>You will be able to pay after you enter your details</DialogDescription>
          <DialogDescription className="small-semibold">You will also need to pay a deposit fee which will be refunded if you cancel</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <div className="sm:w-420 flex-center flex-col">
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col w-full gap-5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What is your full name?</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage className="text-red" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What is your email?</FormLabel>
                    <FormControl>
                      <Input placeholder="xyz@example.com" {...field} />
                    </FormControl>
                    <FormMessage className="text-red" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What is your phone number? include country code (eg. +971)</FormLabel>
                    <FormControl>
                      <Input placeholder="+971123456789" {...field} />
                    </FormControl>
                    <FormMessage className="text-red" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="carModel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What is your car model?</FormLabel>
                    <FormControl>
                      <Input placeholder="Tesla Model 3" {...field} />
                    </FormControl>
                    <FormMessage className="text-red" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="licencePlate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What is your car license plate?</FormLabel>
                    <FormControl>
                      <Input placeholder="A-82269" {...field} />
                    </FormControl>
                    <FormMessage className="text-red" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="officeNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What is your office number?</FormLabel>
                    <FormControl>
                      <Input placeholder="123" {...field} />
                    </FormControl>
                    <FormMessage className="text-red" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="driverLicenceNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What is your drivers licence number?</FormLabel>
                    <FormControl>
                      <Input placeholder="123456" {...field} />
                    </FormControl>
                    <FormMessage className="text-red" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="emiratesId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What is your Emirates ID number?(Only numbers allowed)</FormLabel>
                    <FormControl>
                      <Input placeholder="12345678901234" {...field} />
                    </FormControl>
                    <FormMessage className="text-red" />
                  </FormItem>
                )}
              />

              {/* <UploadWidget btnText="Upload CV" onComplete={(urls) => console.log(urls)} /> */}

              <DialogFooter>
                <Button type="submit" disabled={isSubscribing} className="shad-button_primary">
                  {isSubscribing ? (
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

export default VisitorViewSpot;
