import Divider from "@/components/shared/Divider";
import { RxHamburgerMenu } from "react-icons/rx";
import SideBar from "./SideBar";
import { Drawer } from "antd";
import { useAppContext } from "@/context/AppContext";
import { useGetAccountLink } from "@/lib/react-query/queriesAndMutations";
import { useUserContext } from "@/context/UserContext";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const Header = () => {
  const { sideBarOpen, setSideBarOpen, tenant } = useAppContext();
  const { user } = useUserContext();
  const { refetch: getAccountLink, isFetching: isGettingAccountLink } = useGetAccountLink(user?.id ?? "");

  const openInNewTab = (url: string) => {
    // Create an anchor element
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.target = "_blank"; // Open link in new window/tab

    // Programmatically click the anchor element
    anchor.click();
  };

  const handleGetAccountLink = async () => {
    if (user) {
      getAccountLink()
        .then((res) => {
          if (res.error) {
            //@ts-ignore
            toast.error(res.error.response.data.message);
            return;
          }
          if (res.data && res.data.url) {
            openInNewTab(res.data.url);
            return;
          }
        })
        .catch((error) => {
          console.error(error.message);
          toast.error(error.response.data.message);
        });
    } else {
      toast.error("Please sign in again");
    }
  };
  return (
    <div className="mb-3 relative">
      {tenant === "host" && user?.stripe_account && (user.stripe_account as any)["requirements"]["disabled_reason"] && (
        <div className="bg-primary-1 flex flex-col justify-center text-white p-[6px] absolute w-[500px] rounded-br-md rounded-bl-md shadow-lg top-[-20px] lg:left-0 right-0">
          <h5 className="text-xs text-center">
            You need to finish verifying your business before you can get paid <br />
            <span className="underline cursor-pointer text-primary-3" onClick={handleGetAccountLink}>
              click here
            </span>{" "}
            to get started
          </h5>
          {isGettingAccountLink && <Loader2 className="animate-spin-slow" />}
        </div>
      )}
      <Drawer open={sideBarOpen} onClose={() => setSideBarOpen(false)} placement="left">
        <SideBar />
      </Drawer>
      <RxHamburgerMenu onClick={() => setSideBarOpen(true)} size={24} className="lg:hidden cursor-pointer" />
      <div className="flex justify-end mb-4">
        <span className="flex-center gap-4">
          <img src="/assets/icons/bell.svg" alt="bell" />
          <div className="w-9 h-9 bg-primary-3 rounded-full" />
          {user?.first_name} {user?.last_name}
        </span>
      </div>
      <Divider orientation="horizontal" />
    </div>
  );
};

export default Header;
