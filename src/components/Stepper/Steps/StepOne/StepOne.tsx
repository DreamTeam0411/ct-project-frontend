import React from "react";
import styles from "./StepOne.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { motion } from "framer-motion";

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
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormData>({ mode: "onChange" });

  const submit: SubmitHandler<IFormData> = (): void => {
    // console.log("Form data submitted:", data);
    changeActiveStep(2);
  };

  return (
    <motion.div
      initial={{ x: "5%", opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.formBlock}
    >
      <form onSubmit={handleSubmit(submit)}>
        <div className={styles.form}>
          <div className={styles.nameOfUserBlock}>
            <div className={styles.name}>
              <label htmlFor="name">Ім'я</label>
              <input
                className={styles.inputName}
                {...register("name", {
                  required: "Це поле є обов'язковим",
                  minLength: {
                    value: 3,
                    message: "Мінімум три символи",
                  },
                  pattern: {
                    value: /^[А-Яа-яёЁЇїІіЄєҐґa-zA-Z]{2,20}$/,
                    message: "Невірні символи",
                  },
                })}
                type="text"
                id="name"
                name="name"
                placeholder="Введіть ім'я"
              ></input>
              <div className={styles.error}>
                {errors?.name && <p>{errors?.name?.message}</p>}
              </div>
            </div>
            <div className={styles.surname}>
              <label htmlFor="surname">Прізвище</label>
              <input
                className={styles.inputSurname}
                placeholder="Введіть прізвище"
                {...register("surname", {
                  required: "Це поле є обов'язковим",
                  minLength: {
                    value: 3,
                    message: "Мінімум три символи",
                  },
                  pattern: {
                    value: /^[А-Яа-яёЁЇїІіЄєҐґa-zA-Z]{2,20}$/,
                    message: "Невірні символи",
                  },
                })}
                type="text"
                id="surname"
                name="surname"
              ></input>
              <div className={styles.error}>
                {errors?.surname && <p>{errors?.surname?.message}</p>}
              </div>
            </div>
          </div>

          <div className={styles.email}>
            <label htmlFor="email">Email:</label>
            <input
              className={styles.inputEmail}
              placeholder="Ввведіть email"
              {...register("email", {
                required: "Це поле є обов'язковим",
                pattern: {
                  value: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
                  message: "Невірний email",
                },
              })}
              type="email"
              id="email"
              name="email"
            ></input>
            <div className={styles.error}>
              {errors?.email && <p>{errors?.email?.message}</p>}
            </div>
          </div>

          <div className={styles.phone}>
            <label htmlFor="phone">Номер телефону</label>
            <input
              className={styles.inputPhone}
              placeholder="+38(063) 000-0000"
              {...register("phone", {
                required: "Це поле є обов'язковим",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Тільки цифри",
                },
                minLength: {
                  value: 10,
                  message: "Мінімум десять символів",
                },
              })}
              type="tel"
              id="phone"
              name="phone"
            ></input>
            <div className={styles.error}>
              {errors?.phone && <p>{errors?.phone?.message}</p>}
            </div>
          </div>
        </div>
        <button type={"submit"} className={styles.bn54}>
          <span>Продовжити</span>
        </button>
      </form>
    </motion.div>
  );
};
