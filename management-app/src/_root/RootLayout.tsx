import SideBar from "@/components/shared/SideBar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="flex w-full">
      <SideBar />
      <section className="w-full p-5">
        <Outlet />
      </section>
    </div>
  );
};

export default RootLayout;
