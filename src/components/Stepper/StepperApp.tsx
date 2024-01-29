import { useMemo, useState } from "react";

import { Stepper } from "./StepperUI/index";
import { Stepone } from "./Steps/Stepone";
import { Steptwo } from "./Steps/Stepotwo";
import { Stepthree } from "./Steps/Stepthree";

// import "./App.css";

function StepperApp() {
  const [activeStep, setActiveStep] = useState(1);

  const changeActiveStep = (stepValue: number) => {
    if (stepValue <= steps.length || stepValue >= 1) {
      setActiveStep(stepValue);
    }
  };

  const steps = useMemo(() => [
    {
      label: "Крок 1",
      label2: "Контактні дані",
      value: 1,
      component: <Stepone changeActiveStep={changeActiveStep} />,
    },
    {
      label: "Крок 2",
      label2: "Дані про послуги",
      value: 2,
      component: <Steptwo changeActiveStep={changeActiveStep} />,
    },
    {
      label: "Крок 3",
      label2: "Додати фото",
      value: 3,
      component: <Stepthree changeActiveStep={changeActiveStep} />,
    },
  ], []);

  const activeComponent = useMemo(() => {
    return steps.find(({ value }) => value === activeStep)?.component || null;
  }, [activeStep, steps]);

  return (
    <div>
      <div>
        <Stepper
          steps={steps}
          activeStep={activeStep}
          changeActiveStep={changeActiveStep}
        />
        {activeComponent}
      </div>
    </div>
  );
}

export default StepperApp;