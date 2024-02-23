import { useAuthContext } from "@/context/AuthContext";
import { Button } from "../ui/button";
import { useUserContext } from "@/context/UserContext";
import { useAppContext } from "@/context/AppContext";

const SideBar = () => {
  const { signOut } = useAuthContext();
  const { user } = useUserContext();
  const {
    sideBarOptions,
    selectedSideBarOption,
    handleSideBarOptionSelection: handleOptionSelection,
  } = useAppContext();


  return (
    <div className="leftsidebar">
      <div>
        <span id="logo" className="text-xl">
          PARKEASY
        </span>
        <div className="mt-8 flex flex-col">
          {sideBarOptions.map((item, index) => (
            <Button
              onClick={() => handleOptionSelection(item.id)}
              key={item.name}
              disabled={user?.management?.onboard_state !== "finish"}
              className={`grid grid-flow-col justify-start items-center gap-3 ${
                index === selectedSideBarOption?.id ? "bg-primary-3" : ""
              } hover:bg-primary-3 cursor-pointer mb-[1px] w-full `}
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
