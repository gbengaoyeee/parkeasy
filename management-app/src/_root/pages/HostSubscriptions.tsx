// import { Button } from '@/components/ui/button';
import { Label } from "@/components/ui/label";
import useManagementData from "@/hooks/useManagementData";
import { formatCurrency } from "@/lib/formatter";
import { useGetHostSubscriptions } from "@/lib/react-query/queriesAndMutations";
import { Subscription } from "@/types";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const HostSubscriptions = () => {
  // const [parkingSpotsPage, setParkingSpotsPage] = useState(1);
  const { currentBuilding } = useManagementData();
  // const pageSize = 10;
  const navigate = useNavigate();
  const { data: subscriptions } = useGetHostSubscriptions(currentBuilding?.id);

  const handleSpotClick = (subscription: Subscription) => {
    navigate(`/subscriptions/${subscription.id}`, {
      state: { subscription },
    });
  };

  return (
    <div>
      <span className="flex justify-between">
        <h3 className="h3-bold">Subscriptions</h3>
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
              <th scope="col" className="px-6 py-3">
                Subscriber email
              </th>
              <th scope="col" className="px-6 py-3">
                Subscriber licence plate
              </th>
            </tr>
          </thead>
          <tbody className="">
            {subscriptions?.map((subscription) => (
              <tr onClick={() => handleSpotClick(subscription)} key={subscription.id} className="bg-white border-b cursor-pointer">
                <td className="px-6 py-4">{subscription?.parking_spot?.parking_spot_number}</td>
                <td className="px-6 py-4">{formatCurrency(subscription.parking_spot?.price ? subscription.parking_spot?.price / 100 : 0, "ar-AE", "AED")}/m</td>
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

                <td className="px-6 py-4">{subscription?.subscriber_email}</td>
                <td className="px-6 py-4">{subscription?.subscriber_licence_plate}</td>
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

export default HostSubscriptions;
