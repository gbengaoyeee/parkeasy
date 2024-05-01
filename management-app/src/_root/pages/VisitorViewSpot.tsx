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
import Switch from "react-switch";
import moment from "moment";
import useBreakpoints from "@/hooks/useBreakpoints";
import ImageUploading from "react-images-uploading";
import s3 from "@/api/aws";
import { S3 } from "aws-sdk";

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
      <div className=" text-gray-500 shadow-md rounded-lg p-4 border">
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
            <Label className="base-semibold">Parking spot monthly price</Label>
            <p>{formatCurrency(parkingSpot.price ? parkingSpot.price / 100 : 0, "ar-AE", "AED")}/m</p>
          </div>
          <div className="flex flex-col gap-2">
            <Label className="base-semibold">Parking spot hourly price</Label>
            <p>{formatCurrency(parkingSpot.hourly_price ? parkingSpot.hourly_price / 100 : 0, "ar-AE", "AED")}/hour</p>
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
        <div className="mt-5">
          <SubscribeToSpotModal openSubscribeModal={openSubscribeToSpotModal} setOpenSubscribeModal={setSubscribeToSpotModal} parkingSpot={parkingSpot} refetchParkingSpot={refetchParkingSpot} />
        </div>
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
  const [imagesData, setImagesData] = useState<
    {
      image: any;
      url: any;
    }[]
  >([]);
  const maxNumber = 4;

  const onChange = (imageList: any, addUpdatedIndexes: any) => {
    // data for submit
    const newImagesData = imageList.map((item: any) => ({ image: item }));
    setImagesData(newImagesData);

    if (addUpdatedIndexes) {
      const filesList = addUpdatedIndexes.map((index: number) => imageList[index].file);
      uploadMultipleFiles(filesList, addUpdatedIndexes).then((urls) => {
        urls.forEach((url) => {
          newImagesData[url.index].url = url.url;
        });
        setImagesData([...newImagesData]);
      });
    }
  };

  function uploadFile(file: File, index: number): Promise<{ url: string; index: number }> {
    const uploadParams: S3.PutObjectRequest = {
      Bucket: import.meta.env.VITE_AWS_S3_BUCKET,
      Key: `${import.meta.env.VITE_AWS_S3_BUCKET_DIRECTORY}/${Date.now()}_${file.name}`, // Unique file name
      Body: file,

      ACL: "public-read", // or another ACL according to your requirements
    };

    return new Promise((resolve, reject) => {
      s3.upload(uploadParams, function (err: any, data: any) {
        if (err) {
          reject(err.message);
        } else {
          resolve({ url: data.Location, index }); // The file URL
        }
      });
    });
  }

  function uploadMultipleFiles(files: FileList, addUpdatedIndexes: number[]): Promise<{ url: string; index: number }[]> {
    const uploadPromises = Array.from(files).map((file, index) => uploadFile(file, addUpdatedIndexes[index]));

    return Promise.allSettled(uploadPromises).then((results) => results.map((result) => (result.status === "fulfilled" ? result.value : { url: result.reason, index: -1 })));
  }

  const form = useForm<z.infer<typeof SubscribeToParkingSpotValidation>>({
    resolver: zodResolver(SubscribeToParkingSpotValidation),
    defaultValues: {
      name: user?.first_name && user?.last_name ? `${user?.first_name} ${user?.last_name}` : "",
      email: user?.email ? `${user?.email}` : "",
      phone: user?.phone_number ? `${user?.phone_number}` : "",
      carModel: "",
      licencePlate: "",
      officeNumber: "",
      paymentType: "payment",
      agreedToTerms: false,
      // noOfHours: undefined,
      startDate: undefined,
      endDate: undefined,
      driverLicenceNumber: undefined,
      emiratesId: undefined,
    },
  });

  const { isMedium, isSmall } = useBreakpoints();

  const { mutateAsync: subscribeToSpot, isPending: isSubscribing } = useSubscribeToSpot();

  const watchPaymentType = form.watch("paymentType");

  const openInNewTab = (url: string) => {
    window.location.href = url;
  };

  function onSubmit(values: z.infer<typeof SubscribeToParkingSpotValidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    if (!user) {
      if (isSmall || isMedium) {
        alert("Please log back in to subscribe to parking spot");
        return;
      }
      toast.error("Please log back in to subscribe to parking spot");
      return;
    }
    if (!parkingSpot) {
      if (isSmall || isMedium) {
        alert("Could not find this parking spot. contact " + import.meta.env.VITE_SUPPORT_EMAIL);
        return;
      }
      toast.error(`Could not find this parking spot. contact ${import.meta.env.VITE_SUPPORT_EMAIL}`);
      return;
    }

    subscribeToSpot({
      parkingSpotId: parkingSpot.id,
      userId: user.id,
      dto: { ...values, images: imagesData.map((image) => image.url) },
    })
      .then((res) => {
        refetchParkingSpot();
        setOpenSubscribeModal(false);
        openInNewTab(res.url);
      })
      .catch((error) => {
        console.error(error.message);
        if (isSmall || isMedium) {
          alert(error.response.data.message);
          return;
        }
        toast.error(error.response.data.message);
      });
  }
  return (
    <Dialog open={openSubscribeModal} onOpenChange={setOpenSubscribeModal}>
      <DialogTrigger asChild data-state="closed">
        <Button className="shad-button_primary w-[250px]">Buy this spot</Button>
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
              <div className="flex flex-col gap-2">
                <Label htmlFor="enable-disable-deposit" className="base-semibold">
                  {watchPaymentType === "subscription" ? "Monthly recurring parking subscription" : "Hourly parking subscription"}
                </Label>
                <Switch
                  width={50}
                  height={20}
                  checkedIcon={false}
                  uncheckedIcon={false}
                  onColor="#45f439"
                  offColor="#ff792b"
                  checked={watchPaymentType === "subscription"}
                  onChange={(checked) => {
                    if (checked) {
                      form.setValue("paymentType", "subscription");
                    } else {
                      form.setValue("paymentType", "payment");
                    }
                  }}
                />
              </div>

              <div className="App"></div>
              {watchPaymentType === "payment" && (
                <>
                  <FormField
                    control={form.control}
                    name="startDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>What date and time will you start parking?</FormLabel>
                        <FormControl>
                          <Input
                            type="datetime-local"
                            onChange={(e) => {
                              field.onChange(moment(e.target.value).toDate().getTime());
                            }}
                          />
                        </FormControl>
                        <FormMessage className="text-red" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="endDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>What date and time will you end parking?</FormLabel>
                        <FormControl>
                          <Input
                            type="datetime-local"
                            onChange={(e) => {
                              field.onChange(moment(e.target.value).toDate().getTime());
                            }}
                          />
                        </FormControl>
                        <FormMessage className="text-red" />
                      </FormItem>
                    )}
                  />
                </>
              )}
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
              {watchPaymentType === "subscription" && (
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
              )}
              {watchPaymentType === "subscription" && (
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
              )}
              <FormLabel>Upload images of your vehicle</FormLabel>
              <ImageUploading multiple acceptType={["jpg", "png", "jpeg"]} value={imagesData.map((imageData) => imageData.image)} onChange={onChange} maxNumber={maxNumber} dataURLKey="data_url">
                {({ imageList, onImageUpload, onImageRemove, isDragging, dragProps }) => (
                  // write your building UI
                  <div>
                    <div className="shad-button_primary cursor-pointer w-fit p-3" style={isDragging ? { color: "red" } : undefined} onClick={onImageUpload} {...dragProps}>
                      Click or Drop here
                    </div>
                    &nbsp;
                    {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
                    <div className="flex">
                      {imageList.map((image, index) => (
                        <div key={index} className="relative">
                          <img src={image["data_url"]} className="w-16 h-16" alt="" width="100" />
                          <button className="absolute top-0 right-0 bg-red text-white rounded-full text-xs w-4 h-4 flex-center " onClick={() => {
                            
                            onImageRemove(index)
                          }}>
                            x
                          </button>
                          <div>{/* <button onClick={() => onImageUpdate(index)}>Update</button> */}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </ImageUploading>
              <FormField
                control={form.control}
                name="agreedToTerms"
                render={({ field }) => (
                  <FormItem>
                    <FormControl className="flex-center">
                      <Input type="checkbox" onChange={field.onChange} className="!h-5 !w-5 mr-3" />
                    </FormControl>
                    {watchPaymentType === "subscription" ? (
                      <FormLabel className="text-[12px]">
                        You agree to subscribe to Citadel Monthly Parking Subscription. Kindly note your parking subscription will be charged every month automatically once you subscribe and pay it. You can review the parking terms and conditions{" "}
                        <a href="https://www.easyparkway.com/" className="text-primary-2 uppercase">
                          easyparkway.com
                        </a>{" "}
                        if required.
                      </FormLabel>
                    ) : (
                      <FormLabel className="text-[12px]">
                        You agree to pay a one time payment to Citadel Parking. You can review the parking terms and conditions{" "}
                        <a href="https://www.easyparkway.com/" className="text-primary-2 uppercase">
                          easyparkway.com
                        </a>{" "}
                        if required.
                      </FormLabel>
                    )}
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
