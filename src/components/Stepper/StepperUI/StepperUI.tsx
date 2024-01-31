import React from "react";
import styles from "./StepperUI.module.css";

interface FormStepperProps {
  activeStep: number;
  steps: Array<any>;
  changeActiveStep: (step: number) => void;
}

const FormStepper: React.FC<FormStepperProps> = ({ activeStep, steps }) => {
  const isStepComplete = (currentStep: number) =>
    activeStep > currentStep || activeStep === 4;

  return (
    <div>
      <div>
        <h2 className={styles.header}>Приєднатись до BeautyBook</h2>
      </div>

      <div className={styles.stepper}>
        <ol className={styles.stepperList}>
          {steps.map(({ value, label, label2 }) => (
            <li key={value}>
              <div className={styles.listItems}>
                <div
                  className={`${activeStep === value ? styles.active : ""} ${
                    isStepComplete(value) ? styles.complete : ""
                  }`}
                >
                  <span>
                    <h3>{label}</h3>
                    <p>{label2}</p>
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
