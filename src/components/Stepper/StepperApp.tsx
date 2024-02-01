import { useMemo, useState } from "react";
import { Stepper } from "./StepperUI/index";
import { StepOne } from "./Steps/StepOne/StepOne.tsx";
import { StepThree } from "./Steps/StepThree/StepThree.tsx";
import { StepTwo } from "./Steps/StepTwo/StepoTwo.tsx";
import { StepFour } from "./Steps/StepFour/StepFour.tsx";

// import "./App.css";

function StepperApp() {
  const [activeStep, setActiveStep] = useState(1);

  const changeActiveStep = (stepValue: number) => {
    if (stepValue <= steps.length || stepValue >= 1) {
      setActiveStep(stepValue);
    }
  };

  const steps = useMemo(
    () => [
      {
        label: "Крок 1",
        label2: "Контактні дані",
        value: 1,
        component: <StepOne changeActiveStep={changeActiveStep} />,
      },
      {
        label: "Крок 2",
        label2: "Дані про послуги",
        value: 2,
        component: <StepTwo changeActiveStep={changeActiveStep} />,
      },
      {
        label: "Крок 3",
        label2: "Додати фото",
        value: 3,
        component: <StepThree changeActiveStep={changeActiveStep} />,
      },
      {
        label: "Крок 4",
        label2: "Сервіс додано",
        value: 4,
        component: <StepFour changeActiveStep={changeActiveStep} />,
      },
    ],
    []
  );

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
