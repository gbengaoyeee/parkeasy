import OnboardingMain from "@/_onboarding/OnboardingMain";
import Loader from "@/components/shared/Loader";
import { useUserContext } from "@/context/UserContext";
import { Home, ParkingSpots } from ".";
import { useAppContext } from "@/context/AppContext";
import { useEnableHosting } from "@/lib/react-query/queriesAndMutations";
import { useEffect } from "react";

const Dashboard = () => {
  const { user, isLoading } = useUserContext();
  const { tenant } = useAppContext();
  const { mutateAsync: enableHosting } = useEnableHosting();

  useEffect(() => {
    if (user && tenant === "host" && !user?.stripe_account) {
      enableHosting(user.id).catch((error) => console.error(error));
    }
  }, [user]);

  if (!user || isLoading) {
    return <Loader />;
  }
  return (
    <>
      {/* {user?.management?.onboard_state === 'finish' ? <Home /> : <OnboardingMain /> } */}
      <ParkingSpots />
    </>
  );
};

export default Dashboard;
