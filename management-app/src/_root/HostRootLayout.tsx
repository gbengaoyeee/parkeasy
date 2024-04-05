import Header from "@/components/shared/Header";
import SideBar from "@/components/shared/SideBar";
import { Outlet } from "react-router-dom";

const HostRootLayout = () => {
  return (
    <div className="flex w-full">
      <div className="leftsidebar">
        <SideBar />
      </div>
      <section className="w-full p-5">
        <div>
          <Header />
        </div>
        <Outlet />
      </section>
    </div>
  );
};

export default HostRootLayout;
