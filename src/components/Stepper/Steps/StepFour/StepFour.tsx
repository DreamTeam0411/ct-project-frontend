import styles from "./StepFour.module.css";
import React from "react";
import { IStepProps } from "../StepOne/StepOne.tsx";
import { Button } from "../../../UI/buttons/Button/Button.tsx";
import { Link } from "react-router-dom";

export const StepFour: React.FC<IStepProps> = () => {
  return (
    <div className={styles.container}>
      <h3>Дякуємо!</h3>
      <p>
        Ваші дані успішно отримано. Зовсім скоро ваш профіль буде доданий на
        BeautyBook.
      </p>
      <div>
        <Link to={"/"}>
          <Button>На головну</Button>
        </Link>
      </div>
    </div>
  );
};
