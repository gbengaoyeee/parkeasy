import { useUserContext } from "@/context/UserContext";
import { formatCurrency } from "@/lib/formatter";
import { useGetVisitorSubscriptions } from "@/lib/react-query/queriesAndMutations";
import { Subscription } from "@/types";
import { Label } from "@radix-ui/react-label";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const VisitorSubscriptions = () => {
  // const [parkingSpotsPage, setParkingSpotsPage] = useState(1);
  const { user } = useUserContext();
  // const pageSize = 10;
  const navigate = useNavigate();
  const { data: subscriptions } = useGetVisitorSubscriptions(user?.id);

  // useEffect(() => {
  //   refetchParkingSpots();
  // }, [parkingSpotsPage]);

  const handleSpotClick = (subscription: Subscription) => {
    navigate(`/subscriptions/${subscription.id}`, {
      state: { subscription },
    });
  };

  // const handlePageChange = (direction: "next" | "prev") => {
  //   if (direction === "next" && parkingSpotsPage < Math.ceil(data?.numOfSpots ?? 1 / pageSize)) {
  //     setParkingSpotsPage(parkingSpotsPage + 1);
  //   } else if (direction === "prev" && parkingSpotsPage > 1) {
  //     setParkingSpotsPage(parkingSpotsPage - 1);
  //   }
  // };

  // let filteredParkngSpots = data?.parkingSpots ?? [];
  // const numberOfPages = Math.ceil((data?.numOfSpots ?? 1) / pageSize);
  return (
    <div>
      <span className="flex justify-between">
        <h3 className="h3-bold">Your Subscriptions</h3>
      </span>

      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Spot Number
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
            {subscriptions?.map((subscription) => (
              <tr onClick={() => handleSpotClick(subscription)} key={subscription.id} className="bg-white border-b cursor-pointer">
                <td className="px-6 py-4">{subscription?.parking_spot?.parking_spot_number}</td>
                <td className="px-6 py-4">{formatCurrency(subscription.parking_spot?.price ? subscription.parking_spot?.price / 100 : 0, "ar-AE", "AED")}/m</td>
                {/* <td className="px-6 py-4">{spot.owner ? spot.owner?.name : "N/A"}</td> */}
                <td className="px-6 py-4">
                  {subscription?.stripe_subscription ? (
                    <>
                      {(subscription.stripe_subscription as any)["cancel_at"] ? (
                        <div className="flex flex-col gap-2">
                          <Label className="base-semibold">Ends at {moment((subscription.stripe_subscription as any)["cancel_at"] * 1000).format("MMM DD, YYYY")}</Label>
                        </div>
                      ) : (
                        (subscription.stripe_subscription as any)["status"]
                      )}
                    </>
                  ) : (
                    "N/A"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <div className="flex justify-end gap-3 p-3">
          <Button onClick={() => handlePageChange("prev")} disabled={parkingSpotsPage === 1} className="shad-button_secondary">
            Prev
          </Button>
          <Button onClick={() => handlePageChange("next")} disabled={parkingSpotsPage >= numberOfPages} className="shad-button_secondary">
            Next
          </Button>
        </div> */}
      </div>
    </div>
  );
};

export default VisitorSubscriptions;
