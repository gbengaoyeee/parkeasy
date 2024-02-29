import Header from "@/components/shared/Header";
import { Button } from "@/components/ui/button";
import { useAppContext } from "@/context/AppContext";
import useManagementData from "@/hooks/useManagementData";

const Home = () => {
  const { handleSideBarOptionSelection } = useAppContext();
  const { currentBuilding: building, management, } = useManagementData();

  if (!building) {
    return <h1>Could not find your building. contact {import.meta.env.VITE_SUPPORT_EMAIL}</h1>;
  }

  return (
    <div className="h-full">
      <Header />
      <h3 className="h3-bold">Welcome Building Manager</h3>
      <p>Your community overview</p>
      <div>
        <ul className="bg-white shadow-md rounded-lg p-4 grid grid-cols-3 gap-4">
          <li>{building.building_name}</li>
          <li>{building.address}</li>
          <li>{building.no_of_units} Units</li>
          <li>{management?.company_name}</li>
          <li>{building.no_of_parking_floors} Parking floors</li>
        </ul>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-3">
        <div className="flex flex-col w-auto h-[180px] gap-10 rounded-lg shadow-md justify-center items-center border bg-primary-2 text-white">
          <span>Community Members</span>
          <Button
            onClick={() => handleSideBarOptionSelection(1)}
            className="shad-button_secondary border-none"
          >
            {building.community_members.length > 0 ? "View community members" : "Activate members"}
          </Button>
        </div>
        <div className="flex flex-col w-auto h-[180px] gap-10 rounded-lg shadow-md justify-center items-center border bg-primary-3">
          <span>Community units</span>
          <Button>Activate users to access this service</Button>
        </div>
        <div className="flex flex-col w-auto h-[180px] gap-10 rounded-lg shadow-md justify-center items-center border bg-primary-4">
          <span>Community Parking</span>
          <Button>Activate users to access this service</Button>
        </div>
        <div className="flex flex-col w-auto h-[180px] gap-10 rounded-lg shadow-md justify-center items-center border bg-primary-5 ">
          <span>Community Smart Metering</span>
          <Button className="shad-button_secondary border-none">Manage</Button>
        </div>
        <div className="flex flex-col w-auto h-[180px] gap-10 rounded-lg shadow-md justify-center items-center border bg-primary-2 text-white">
          <span>Community EV Charging</span>
          <Button className="shad-button_secondary border-none">Coming soon</Button>
        </div>
        <div className="flex flex-col w-auto h-[180px] gap-10 rounded-lg shadow-md justify-center items-center border bg-primary-3">
          <span>Complaints/Notifications</span>
          <Button className="shad-button_secondary border-none">View all complaints</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
