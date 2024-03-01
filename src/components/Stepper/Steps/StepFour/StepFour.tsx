import styles from "./StepFour.module.css";
import React from "react";
import { IStepProps } from "../StepOne/StepOne.tsx";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const StepFour: React.FC<IStepProps> = () => {
  const text =
    "Ваші дані успішно отримано. Зовсім скоро ваш профіль буде доданий на\n" +
    "        BeautyBook.";
  return (
    <motion.div className={styles.container}>
      <h3>Дякуємо!</h3>
      <motion.div className={styles.textDiv}>
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.05 }}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
      <div>
        <Link to={"/"}>
          <button className={styles.bn54}>На головну</button>
        </Link>
      </div>
    </motion.div>
  );
};
