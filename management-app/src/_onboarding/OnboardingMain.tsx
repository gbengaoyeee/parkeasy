import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Button } from "@/components/ui/button";
import OnboardManagement from "./OnboardManagement";
import OnboardBuilding from "./OnboardBuilding";
import PaymentPlan from "./PaymentPlan";
import { useUserContext } from "@/context/UserContext";
import Loader from "@/components/shared/Loader";

const OnboardingMain = () => {
  const [currStep, setCurrStep] = useState(1);
  const {user} = useUserContext()

  const handleNext = () => {
    if (currStep < steps.length - 1) {
      setCurrStep(currStep + 1);
    }
  };
  const handlePrev = () => {
    if (currStep > 0) {
      setCurrStep(currStep - 1);
    }
  };

  const steps = [
    <Loader />,
    <OnboardManagement onNext={handleNext} />,
    <OnboardBuilding onNext={handleNext} />,
    <PaymentPlan />,
  ];

  const handleStepToGo = () => {
    switch (user?.management?.onboard_state) {
      case 'management_onboard':
        setCurrStep(1)
        break;
      case 'building_onboard':
        setCurrStep(2)
        break;
      case 'payment':
        setCurrStep(3)
        break;
    
      default:
        setCurrStep(0)
        break;
    }
  }

  useEffect(() => {
    handleStepToGo()
  }, [user])

  return (
    <div>
      <Header />
      {steps[currStep]}
      <Button onClick={handlePrev}>Prev</Button>
    </div>
  );
};

export default OnboardingMain;
