import React from "react";
import { IStepProps } from "../StepOne/StepOne.tsx";
import styles from "./StepThree.module.css";

export const StepThree: React.FC<IStepProps> = ({ changeActiveStep }) => {
  const completeSteps = () => {
    changeActiveStep(4);
    console.log("check conditions and/or push to new route");
  };

  return (
    <div>
      <section>
        <div className={styles.imageDownLoad}></div>
      </section>

      <div className={styles.button}>
        <button type="submit" onClick={() => completeSteps()}>
          Продовжити
        </button>
      </div>
    </div>
  );
};
