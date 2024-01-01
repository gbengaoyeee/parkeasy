import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useManagementData from "@/hooks/useManagementData";
import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDebounce } from "@/hooks/useDebounce";
import Header from "@/components/shared/Header";
import { ParkingSpot } from "@/types";
import { searchParkingSpots } from "@/api/building";
import { toast } from "sonner";

const ParkingSpots = () => {
  const { currentBuilding, parkingSpots, parkingSpotsPage, setParkingSpotsPage, pageSize } =
    useManagementData();
  const navigate = useNavigate();

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

  if (!parkingSpots) {
    return <h1>Could not find your building. contact {import.meta.env.VITE_SUPPORT_EMAIL}</h1>;
  }

  const handleSpotClick = (memberId: string) => {
    navigate(`/community-members/${currentBuilding?.id}/${memberId}`);
  };

  const handlePageChange = (direction: "next" | "prev") => {
    if (
      direction === "next" &&
      parkingSpotsPage < Math.ceil(currentBuilding?.parking_spots.length ?? 1 / pageSize)
    ) {
      setParkingSpotsPage(parkingSpotsPage + 1);
    } else if (direction === "prev" && parkingSpotsPage > 1) {
      setParkingSpotsPage(parkingSpotsPage - 1);
    }
  };

  let filteredParkngSpots = searchTerm.length ? searchedSpots : parkingSpots;

  const numberOfPages = Math.ceil((currentBuilding?.parking_spots.length ?? 1) / pageSize);

  return (
    <>
      <Header />
      {(currentBuilding?.parking_spots.length ?? 0) > 0 ? (
        <div>
          <span className="flex justify-between">
            <h3 className="h3-bold">{parkingSpots.length} parking spots</h3>
          </span>

          <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <div className="p-4">
              <Input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by spot number"
              />
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
                    QR Code
                  </th>
                </tr>
              </thead>
              <tbody className="">
                {filteredParkngSpots.map((spot) => (
                  <tr
                    onClick={() => handleSpotClick(spot.id)}
                    key={spot.id}
                    className="bg-white border-b cursor-pointer"
                  >
                    <td className="px-6 py-4">{spot.parking_spot_number}</td>
                    <td className="px-6 py-4">{spot.parking_level}</td>
                    <td className="px-6 py-4">
                      <img src={spot.qr_code.image_url ?? ""} width={50} alt="" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-end gap-3 p-3">
              <Button
                onClick={() => handlePageChange("prev")}
                disabled={parkingSpotsPage === 1}
                className="shad-button_secondary"
              >
                Prev
              </Button>
              <Button
                onClick={() => handlePageChange("next")}
                disabled={parkingSpotsPage >= numberOfPages}
                className="shad-button_secondary"
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-6 justify-center items-center h-full">
          <p>Looks like you have not activated any parking spots yet</p>
          <h3 className="h3-bold">
            Go to Community Member section and Utilize our standard CSV Importer to add your
            community members
          </h3>
          <Link
            to={`/community-members/${currentBuilding?.id}`}
            className="shad-button_primary w-[250px]"
          >
            Go to community members section
          </Link>
        </div>
      )}
    </>
  );
};

export default ParkingSpots;
