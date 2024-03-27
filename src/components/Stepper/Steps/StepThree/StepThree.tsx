import React from "react";
import { IStepProps } from "../StepOne/StepOne.tsx";
import styles from "./StepThree.module.css";

import FileUpload from "../../../Layout/Drag&Drop/Drag_Drop.jsx";
import { motion } from "framer-motion";

export const StepThree: React.FC<IStepProps> = ({ changeActiveStep }) => {
  const completeSteps = () => {
    changeActiveStep(4);
    // console.log("check conditions and/or push to new route");
  };

  return (
    <motion.div
      initial={{ x: "5%", opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.imageDownLoad}>
        <FileUpload />
      </div>
      <div className={styles.button}>
        <button
          type="submit"
          className={styles.bn54}
          onClick={() => completeSteps()}
        >
          <span>Продовжити</span>
        </button>
      </div>
    </motion.div>
  );
};
