import { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useManagementData from "@/hooks/useManagementData";
import { AiOutlineHome } from "react-icons/ai";
import { FaParking } from "react-icons/fa";

interface ISideBarOption {
  id: number;
  name: string;
  to: string;
  icon: string;
  ic: React.ReactNode;
}

const hostOptions = [
  {
    id: 0,
    name: "Dashboard",
    to: "/",
    icon: "/assets/icons/home-white.svg",
    ic: <AiOutlineHome />,
  },
  {
    id: 1,
    name: "Subscriptions",
    to: "/subscriptions",
    icon: "/assets/icons/home-white.svg",
    ic: <FaParking />,
  },
  // {
  //   id: 1,
  //   name: "Apartment units",
  //   to: "/apartment-units",
  //   icon: "/assets/icons/apartment.svg",
  //   ic: <MdApartment />,
  // },
  // {
  //   id: 2,
  //   name: "Community members",
  //   to: `/community-members`,
  //   icon: "/assets/icons/community-white.svg",
  //   ic: <FaPeopleGroup />,
  // },
  // {
  //   id: 3,
  //   name: "Parking spots",
  //   to: "/parking-spots",
  //   icon: "/assets/icons/parking-white.svg",
  //   ic: <FaParking />,
  // },
  // {
  //   id: 4,
  //   name: "Violations",
  //   to: "/violations",
  //   icon: "/assets/icons/violations-white.svg",
  //   ic: <RiErrorWarningLine />,
  // },
];

const visitorOptions = [
  {
    id: 0,
    name: "Discover",
    to: "/discover",
    icon: "/assets/icons/home-white.svg",
    ic: <AiOutlineHome />,
  },
  {
    id: 1,
    name: "Subscriptions",
    to: "/subscriptions",
    icon: "/assets/icons/home-white.svg",
    ic: <FaParking />,
  },
];

// const defaultOptions = [
//   {
//     id: 0,
//     name: "Dashboard",
//     to: "/",
//     icon: "/assets/icons/home-white.svg",
//     ic: <AiOutlineHome />,
//   },
//   {
//     id: 1,
//     name: "Apartment units",
//     to: "/apartment-units",
//     icon: "/assets/icons/apartment.svg",
//     ic: <MdApartment />,
//   },
//   {
//     id: 2,
//     name: "Community members",
//     to: `/community-members`,
//     icon: "/assets/icons/community-white.svg",
//     ic: <FaPeopleGroup />,
//   },
//   {
//     id: 3,
//     name: "Parking spots",
//     to: "/parking-spots",
//     icon: "/assets/icons/parking-white.svg",
//     ic: <FaParking />,
//   },
//   // {
//   //   id: 4,
//   //   name: "Violations",
//   //   to: "/violations",
//   //   icon: "/assets/icons/violations-white.svg",
//   //   ic: <RiErrorWarningLine />,
//   // },
// ];
interface AppContextData {
  sideBarOptions: ISideBarOption[];
  selectedSideBarOption: ISideBarOption | null;
  sideBarOpen: boolean;
  tenant: "host" | "visitor";
  setSideBarOpen: Dispatch<SetStateAction<boolean>>;
  setSelectedSideBarOption: Dispatch<SetStateAction<ISideBarOption | null>>;
  handleSideBarOptionSelection: (optionId: number) => void;
}

export const AppContext = createContext<AppContextData>({
  sideBarOptions: [],
  selectedSideBarOption: null,
  sideBarOpen: false,
  tenant: "visitor",
  setSideBarOpen: () => {},
  setSelectedSideBarOption: () => {},
  handleSideBarOptionSelection: () => {},
});

export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [tenant, _] = useState<"host" | "visitor">(getTenantFromHostname());
  const [sideBarOptions, setSideBarOptions] = useState<ISideBarOption[]>(tenant === "host" ? [...hostOptions] : [...visitorOptions]);
  const [selectedSideBarOption, setSelectedSideBarOption] = useState<ISideBarOption | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  function getTenantFromHostname(): "host" | "visitor" {
    // Example: Extract tenant from subdomain
    const subdomain = window.location.hostname.split(".")[0];
    return subdomain === "host" ? "host" : "visitor";
  }

  const { currentBuilding } = useManagementData();

  useEffect(() => {
    if (location.pathname === "/" || location.pathname.includes("/discover")) {
      setSelectedSideBarOption(sideBarOptions[0]);
      return;
    }
    setSelectedSideBarOption(sideBarOptions.slice(1).find((option) => location.pathname.includes(option.to)) ?? null);
  }, [location]);

  useEffect(() => {
    if (tenant === "host" && currentBuilding) {
      const options = [
        {
          id: 0,
          name: "Dashboard",
          to: "/",
          icon: "/assets/icons/home-white.svg",
          ic: <AiOutlineHome size={20} />,
        },
        {
          id: 1,
          name: "Subscriptions",
          to: "/subscriptions",
          icon: "/assets/icons/home-white.svg",
          ic: <FaParking />,
        },
      ];
      setSideBarOptions([...options]);
    } else {
      console.log("visitor");
      setSideBarOptions([...visitorOptions]);
    }
  }, [currentBuilding]);


  const handleSideBarOptionSelection = (optionId: number) => {
    // find the option with corresponding id and set it as selected option
    const selectedOption = sideBarOptions.find((option) => option.id === optionId);
    if (selectedOption) {
      setSelectedSideBarOption(selectedOption);
      localStorage.setItem("selectedSideBarOption", JSON.stringify(selectedOption));
      navigate(selectedOption.to);
    }
    setSideBarOpen(false);
  };
  return (
    <AppContext.Provider
      value={{
        sideBarOptions,
        selectedSideBarOption,
        sideBarOpen,
        tenant,
        setSideBarOpen,
        setSelectedSideBarOption,
        handleSideBarOptionSelection,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
