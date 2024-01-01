import OnboardingMain from "@/_onboarding/OnboardingMain";
import Loader from "@/components/shared/Loader";
import { useUserContext } from "@/context/UserContext";
import { Home } from ".";

const Dashboard = () => {
  const { user, isLoading } = useUserContext()

  if(!user || isLoading) {
    return <Loader />
  }
  return (
    <>
      {user?.management?.onboard_state === 'finish' ? <Home /> : <OnboardingMain /> }
    </>
  );
};

export default Dashboard;
