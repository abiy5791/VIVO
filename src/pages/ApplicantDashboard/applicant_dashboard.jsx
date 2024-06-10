import { useState } from "react";
import Apply from "../../components/ApplicantComponents/Apply";
import MainTaskPage from "../../components/ApplicantComponents/Main_Task_Page";
import Achievements from "../../components/ApplicantComponents/Achievements";
import Steps_component from "../../components/ApplicantComponents/steps_component";

const ApplicantDashboard = () => {
  const [currentStep, setCurrentStep] = useState("Progress");
  console.log(currentStep);
  // const handleStepChange = (step) => {
  //   setCurrentStep(step);
  // };
  return (
    <>
      <Steps_component
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
      <div>
        {currentStep === "achievements" && <Achievements />}
        {currentStep === "apply" && <Apply />}
        {currentStep === "Progress" && <MainTaskPage />}
      </div>
    </>
  );
};
export default ApplicantDashboard;
