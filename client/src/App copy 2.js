import { UseContextProvider } from "./contexts/StepperContext";
import React, { useState } from "react";
import Stepper from "./components/Stepper/Stepper";
import Address from "./components/Address/index";
import Complete from "./components/Completed/index";
import StepperControl from "./components/Stepper/StepperControl";
import AddService from './pages/AddService';
import MachineTypeSelection from './pages/MachineSelection';
import Orderpage from './pages/Orderpage';
import './index.css'


const App = () => {
  const [currentStep, setCurrentStep]= useState(1);
  const steps =[
    "Machine Type",
    "Machine Selection",
    "Favorite Items",
    "Address",
    "Confirm",
  ]

  const displayStep =(step)=>{
    switch(step){
      case 1:
        return<AddService/>
      case 2:
        return<MachineTypeSelection/>
      case 3:
        return<Orderpage/>
      case 4:
        return<Address/>
      case 5:
        return<Complete/>
    }
  }

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <div className="flex flex-col w-full mx-auto col-span-4 pb-2 ">
      {/* Stepper */}
      <div className="container px-4 py-5 h-full mx-auto flex flex-col">
        <Stepper steps={steps} currentStep={currentStep} />

        <div className="mt-5 h-64 flex justify-center border">
          <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
        </div>
      </div>

      {/* navigation button */}
      {currentStep !== steps.length && (
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      )}
    </div>
  );
}

export default App;
