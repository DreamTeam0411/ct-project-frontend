import React, { useState } from "react";
import { Button } from "../../../UI/buttons/Button/Button.tsx";
import styles from "./StepOne.module.css";

export interface IStepProps {
  changeActiveStep: (step: number) => void;
}

interface IFormData {
  name: string;
  surname: string;
  email: string;
  phone: string;
}

export const StepOne: React.FC<IStepProps> = ({ changeActiveStep }) => {
  const [formData, setFormData] = useState<IFormData>({
    name: "",
    surname: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    changeActiveStep(2);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className={styles.formBlock}>
      <form onSubmit={handleSubmit}>
        <div className={styles.form}>
          <div className={styles.nameOfUserBlock}>
            <div className={styles.name}>
              <label htmlFor="name">Ім'я</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Введіть ім'я"
                value={formData.name}
                onChange={handleInputChange}
              ></input>
            </div>
            <div className={styles.surname}>
              <label htmlFor="surname">Прізвище</label>
              <input
                placeholder="Введіть прізвище"
                type="text"
                id="surname"
                name="surname"
                value={formData.surname}
                onChange={handleInputChange}
              ></input>
            </div>
          </div>

          <div className={styles.email}>
            <label htmlFor="email">Email:</label>
            <input
              placeholder="Ввведіть email"
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            ></input>
          </div>

          <div className={styles.phone}>
            <label htmlFor="phone">Номер телефону</label>
            <input
              placeholder="+38(063) 000-0000"
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            ></input>
          </div>
        </div>
        <Button>Продовжити</Button>
      </form>
    </div>
  );
};
