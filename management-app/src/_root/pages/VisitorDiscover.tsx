import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/formatter";
import { useDiscover } from "@/lib/react-query/queriesAndMutations";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const VisitorDiscover = () => {
  const [parkingSpotsPage, setParkingSpotsPage] = useState(1);
  const pageSize = 10;
  const navigate = useNavigate();
  const { data, isFetching, refetch: refetchParkingSpots } = useDiscover({
    page: parkingSpotsPage,
    pageSize,
  });

  useEffect(() => {
    refetchParkingSpots();
  }, [parkingSpotsPage]);

  const handleSpotClick = (spotId: string) => {
    navigate(`/discover/spot/${spotId}`);
  };

  const handlePageChange = (direction: "next" | "prev") => {
    if (direction === "next" && parkingSpotsPage < Math.ceil(data?.numOfSpots ?? 1 / pageSize)) {
      setParkingSpotsPage(parkingSpotsPage + 1);
    } else if (direction === "prev" && parkingSpotsPage > 1) {
      setParkingSpotsPage(parkingSpotsPage - 1);
    }
  };

  let filteredParkngSpots = data?.parkingSpots ?? [];
  const numberOfPages = Math.ceil((data?.numOfSpots ?? 1) / pageSize);
  return (
    <div>
      <span className="flex justify-between">
        <h3 className="h3-bold">Discover parking spots</h3>
      </span>

      <div className="overflow-x-auto shadow-md sm:rounded-lg">
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
              {/* <th scope="col" className="px-6 py-3">
                    Assigned to
                  </th> */}
            </tr>
          </thead>
          <tbody className="">
            {filteredParkngSpots?.map((spot) => (
              <tr onClick={() => handleSpotClick(spot.id)} key={spot.id} className="bg-white border-b cursor-pointer">
                <td className="px-6 py-4">{spot.parking_spot_number}</td>
                <td className="px-6 py-4">{spot.parking_level}</td>
                <td className="px-6 py-4">{spot.parking_spot_type}</td>
                <td className="px-6 py-4">{formatCurrency(spot.price ? spot.price / 100 : 0, "ar-AE", "AED")}</td>
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
  );
};

export default VisitorDiscover;
