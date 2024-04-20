import { useAuthContext } from "@/context/AuthContext";
import { Button } from "../ui/button";
import { useAppContext } from "@/context/AppContext";

import { useUserContext } from "@/context/UserContext";
import { useEffect } from "react";
import { useGetVisitorSubscriptions } from "@/lib/react-query/queriesAndMutations";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const { signOut } = useAuthContext();
  const { user } = useUserContext();
  const { sideBarOptions, setSideBarOptions, selectedSideBarOption, handleSideBarOptionSelection: handleOptionSelection } = useAppContext();
  const navigate = useNavigate();
  const { data: subscriptions } = useGetVisitorSubscriptions(user?.id);

  useEffect(() => {
    if (subscriptions?.length) {
      const active = subscriptions.filter((item) => {
        if (item?.end_date && new Date(item.end_date).getTime() > new Date().getTime()) {
          return true;
        } else if (item.stripe_subscription && (item.stripe_subscription as any)["status"] === "active") {
          return true;
        }
        return false;
      });
      console.log(active);
      if (active.length) {
        setTimeout(() => {
          setSideBarOptions(sideBarOptions.filter((item) => item.to !== "/discover"));
          navigate("/subscriptions");
        }, 500);
      }
    }
  }, [subscriptions]);
  return (
    <div>
      <div>
        <span id="logo" className="text-xl">
          EASYPARKWAY
        </span>
        <div className="mt-8 flex flex-col">
          {sideBarOptions.map((item, index) => (
            <Button
              onClick={() => handleOptionSelection(item.id)}
              key={item.name}
              // disabled={user?.management?.onboard_state !== "finish"}
              className={`grid grid-flow-col justify-start items-center gap-3 ${index === selectedSideBarOption?.id ? "bg-primary-3" : ""} hover:bg-primary-3 cursor-pointer mb-[1px] w-full `}
            >
              <span className="grid grid-flow-col justify-start items-center gap-3 ">
                <span>{item.ic}</span>
                {item.name}
              </span>
            </Button>
          ))}
        </div>
      </div>
      <Button onClick={() => signOut()} className="sidebar-menu-item ">
        <img src="/assets/icons/sign-out.svg" className="svg-button" alt="" />
        Sign out
      </Button>
    </div>
  );
};

export default SideBar;
