import React from "react";
import { HiOutlineCheck, HiPencil } from "react-icons/hi2";
import styles from "./StepperUI.module.css";

interface FormStepperProps {
  activeStep: number;
  steps: Array<any>;
  changeActiveStep: (step: number) => void;
}

const FormStepper: React.FC<FormStepperProps> = ({ activeStep, steps }) => {
  const isStepComplete = (currentStep: number) => activeStep > currentStep;

  return (
    <div>
      <div>
        <h2 className={styles.header}>Приєднатись до BeautyBook</h2>
      </div>

      <div className={styles.stepper}>
        <ol className={styles.stepperList}>
          {steps.map(({ value, label, label2 }) => (
            <li key={value}>
              <div>
                <div
                  className={`${activeStep === value ? "step-active" : ""} ${
                    isStepComplete(value) ? "step-complete" : ""
                  }`}
                >
                  <span>
                    <p>{label}</p>
                    <p>{label2}</p>
                    {isStepComplete(value) ? <HiOutlineCheck /> : <HiPencil />}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default FormStepper;
