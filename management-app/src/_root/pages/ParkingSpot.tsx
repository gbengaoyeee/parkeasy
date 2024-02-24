import React from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";
import { useGetParkingSpot } from "@/lib/react-query/queriesAndMutations";
import Loader from "@/components/shared/Loader";

const ParkingSpot = () => {
  const { buildingId, parkingSpotId } = useParams();
  const {
    data: parkingSpot,
    isFetching: isFetchingParkingSpot,
    refetch: refetchParkingSpot,
  } = useGetParkingSpot(buildingId, parkingSpotId);
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
        <div className="grid grid-cols-2 gap-10 small-regular">
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
        </div>
        <Button className="shad-button_secondary border-gray-400 text-gray-500 w-10">edit</Button>
      </div>
      <div className="flex flex-col gap-2 text-gray-500 shadow-md rounded-lg p-4 border">
        <Label className="base-semibold">QR Codes</Label>
        <div>
          <div key={parkingSpot.qr_code.id} className="flex gap-2">
            <img src={parkingSpot.qr_code.image_url ?? ""} width={150} alt="qr code" />
            <a
              href={parkingSpot.qr_code.image_url ?? ""}
              download
              className="bg-gray-200 text-gray-800 text-sm flex-center px-8 rounded-lg h-8"
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkingSpot;
