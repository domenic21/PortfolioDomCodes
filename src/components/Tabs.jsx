/*import React from "react";
import { Stepper, Step, Button, Typography } from "@material-tailwind/react";
import {
  CogIcon,
  UserIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/outline";
import About from './About'
import {styles} from '../styles'
import SectionWrap from '../hoc/SectionWrap'
import Cards from './Cards'

export function TabsSection() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  const getContent = (step) => {
    switch (step) {
      case 0:
        return   <div className="justify-center flex"> </div>
      case 1:
        return <div className="justify-center flex">
          
        </div>;
      case 2:
        return <div className="justify-center flex">Content for step 2</div>;
      default:
        return null;
    }
  };

  return (
    <div className='sm:px-16 px-6 sm:py-16' >
      <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
        
      >
        <Step   onClick={() => setActiveStep(0)} >
          <UserIcon className="h-9 w-9" />
          <div className="absolute -top-[2.5rem] w-max text-center ">
            <Typography variant="h6">Step 1</Typography>
          </div>
        </Step>
        <Step onClick={() => setActiveStep(1)}>
          <BuildingLibraryIcon className="h-9 w-9" />
          <div className="absolute -top-[2.5rem] w-max text-center">
            <Typography variant="h6">Step 2</Typography>
          </div>
        </Step>
        <Step onClick={() => setActiveStep(2)}>
          <CogIcon className="h-9 w-9" />
          <div className="absolute -top-[2.5rem] w-max text-center">
            <Typography variant="h6">Step 3</Typography>
          </div>
        </Step>
      </Stepper>
      
      {getContent(activeStep)}
      <div className="flex justify-between mt-10 ">
        <Button color="gray"  className='bg-secondary' onClick={handlePrev}>
          Back
        </Button>
        <Button className='bg-secondary' onClick={handleNext}>
          {isLastStep ? "Next" : "Next"}
        </Button>
      </div>
    </div>
  );
}
export default SectionWrap (TabsSection, "");*/