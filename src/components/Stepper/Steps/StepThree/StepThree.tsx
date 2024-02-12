import React from "react";
import { IStepProps } from "../StepOne/StepOne.tsx";
import styles from "./StepThree.module.css";

import FileUpload from "../../../Layout/Drag&Drop/Drag_Drop.jsx";

export const StepThree: React.FC<IStepProps> = ({ changeActiveStep }) => {
  const completeSteps = () => {
    changeActiveStep(4);
    console.log("check conditions and/or push to new route");
  };

  return (
    <div>
      <div className={styles.imageDownLoad}>
        <FileUpload />
      </div>
      <div className={styles.button}>
        <button
          type="submit"
          className={styles.button}
          onClick={() => completeSteps()}
        >
          Продовжити
        </button>
      </div>
    </div>
  );
};
