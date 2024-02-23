import { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useManagementData from "@/hooks/useManagementData";
import { MdApartment } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaParking } from "react-icons/fa";
import { RiErrorWarningLine } from "react-icons/ri";

interface ISideBarOption {
  id: number;
  name: string;
  to: string;
  icon: string;
  ic: React.ReactNode;
}

const defaultOptions = [
  {
    id: 0,
    name: "Dashboard",
    to: "/",
    icon: "/assets/icons/home-white.svg",
    ic: <AiOutlineHome />,
  },
  {
    id: 1,
    name: "Apartment units",
    to: "/apartment-units",
    icon: "/assets/icons/apartment.svg",
    ic: <MdApartment />,
  },
  {
    id: 2,
    name: "Community members",
    to: `/community-members`,
    icon: "/assets/icons/community-white.svg",
    ic: <FaPeopleGroup />,
  },
  {
    id: 3,
    name: "Parking spots",
    to: "/parking-spots",
    icon: "/assets/icons/parking-white.svg",
    ic: <FaParking />,
  },
  // {
  //   id: 4,
  //   name: "Violations",
  //   to: "/violations",
  //   icon: "/assets/icons/violations-white.svg",
  //   ic: <RiErrorWarningLine />,
  // },
];
interface AppContextData {
  sideBarOptions: ISideBarOption[];
  selectedSideBarOption: ISideBarOption | null;
  setSelectedSideBarOption: Dispatch<SetStateAction<ISideBarOption | null>>;
  handleSideBarOptionSelection: (optionId: number) => void;
}

export const AppContext = createContext<AppContextData>({
  sideBarOptions: [],
  selectedSideBarOption: null,
  setSelectedSideBarOption: () => {},
  handleSideBarOptionSelection: () => {},
});

export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [sideBarOptions, setSideBarOptions] = useState<ISideBarOption[]>([...defaultOptions]);
  const [selectedSideBarOption, setSelectedSideBarOption] = useState<ISideBarOption | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const { currentBuilding } = useManagementData();

  useEffect(() => {
    if (location.pathname === "/") {
      setSelectedSideBarOption(defaultOptions[0]);
      return
    }
    setSelectedSideBarOption(
      defaultOptions.slice(1).find((option) => location.pathname.includes(option.to)) ?? null
    );
  }, [location]);

  useEffect(() => {
    if (currentBuilding) {
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
          name: "Apartment units",
          to: "/apartment-units",
          icon: "/assets/icons/apartment.svg",
          ic: <MdApartment size={20} />,
        },
        {
          id: 2,
          name: "Community members",
          to: `/community-members${currentBuilding ? `/${currentBuilding.id}` : ""}`,
          icon: "/assets/icons/community-white.svg",
          ic: <FaPeopleGroup size={20} />,
        },
        {
          id: 3,
          name: "Parking spots",
          to: "/parking-spots",
          icon: "/assets/icons/parking-white.svg",
          ic: <FaParking size={20} />,
        },
        // {
        //   id: 4,
        //   name: "Violations",
        //   to: "/violations",
        //   icon: "/assets/icons/violations-white.svg",
        //   ic: <RiErrorWarningLine size={20} />,
        // },
      ];
      setSideBarOptions([...options]);
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
  };
  return (
    <AppContext.Provider
      value={{
        sideBarOptions,
        selectedSideBarOption,
        setSelectedSideBarOption,
        handleSideBarOptionSelection,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
