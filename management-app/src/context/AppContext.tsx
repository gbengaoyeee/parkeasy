import { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useManagementData from "@/hooks/useManagementData";

interface ISideBarOption {
  id: number;
  name: string;
  to: string;
  icon: string;
}

const defaultOptions = [
  { id: 0, name: "Dashboard", to: "/", icon: "/assets/icons/home-white.svg" },
  {
    id: 1,
    name: "Community members",
    to: `/community-members}`,
    icon: "/assets/icons/community-white.svg",
  },
  { id: 2, name: "Parking spots", to: "/parking-spots", icon: "/assets/icons/parking-white.svg" },
  { id: 3, name: "Violations", to: "/violations", icon: "/assets/icons/violations-white.svg" },
];
interface AppContextData {
  sideBarOptions: ISideBarOption[];
  selectedSideBarOption: ISideBarOption;
  setSelectedSideBarOption: Dispatch<SetStateAction<ISideBarOption>>;
  handleSideBarOptionSelection: (optionId: number) => void;
}

export const AppContext = createContext<AppContextData>({
  sideBarOptions: [],
  selectedSideBarOption: defaultOptions[0],
  setSelectedSideBarOption: () => {},
  handleSideBarOptionSelection: () => {},
});

export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [sideBarOptions, setSideBarOptions] = useState<ISideBarOption[]>([...defaultOptions]);
  const [selectedSideBarOption, setSelectedSideBarOption] = useState<ISideBarOption>(
    defaultOptions[0]
  );
  const location = useLocation();
  const navigate = useNavigate();

  const { currentBuilding } = useManagementData();

  useEffect(() => {
    if (location.pathname === "/") {
      setSelectedSideBarOption(defaultOptions[0]);
    } else if (location.pathname.includes("/community-members")) {
      setSelectedSideBarOption(defaultOptions[1]);
    } else if (location.pathname.includes("/parking-spots")) {
      setSelectedSideBarOption(defaultOptions[2]);
    } else if (location.pathname.includes("/violations")) {
      setSelectedSideBarOption(defaultOptions[3]);
    } else {
      setSelectedSideBarOption(defaultOptions[0]);
    }
  }, [location]);

  useEffect(() => {
    if (currentBuilding) {
      const options = [
        { id: 0, name: "Dashboard", to: "/", icon: "/assets/icons/home-white.svg" },
        {
          id: 1,
          name: "Community members",
          to: `/community-members${currentBuilding ? `/${currentBuilding.id}` : ""}`,
          icon: "/assets/icons/community-white.svg",
        },
        {
          id: 2,
          name: "Parking spots",
          to: "/parking-spots",
          icon: "/assets/icons/parking-white.svg",
        },
        {
          id: 3,
          name: "Violations",
          to: "/violations",
          icon: "/assets/icons/violations-white.svg",
        },
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
