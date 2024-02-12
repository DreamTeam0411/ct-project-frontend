import React, { useEffect } from "react";
import { IStepProps } from "../StepOne/StepOne.tsx";
import styles from "./StepTwo.module.css";
import useFetchCategories from "../../../../stores/fetchCategories.tsx";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormData {
  services: string;
  address: string;
  description: string;
}

export const StepTwo: React.FC<IStepProps> = ({ changeActiveStep }) => {
  const fetchDataCategories = useFetchCategories((state) => state.fetchData);
  const dataStateCategories = useFetchCategories((state) => state.data);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormData>({
    mode: "onChange",
  });

  useEffect(() => {
    fetchDataCategories();
  }, []);
  const submit: SubmitHandler<IFormData> = (data): void => {
    console.log("Form data submitted:", data);
    changeActiveStep(3);
  };
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(submit)}>
        <div className={styles.categoriesBlock}>
          <label htmlFor="services">Назва послуги</label>

          <select {...register("services", { required: "Выберіть опцію" })}>
            <option value="" hidden selected>
              Виберіть послугу
            </option>
            {dataStateCategories.map((el) => (
              <option key={el.id} value={el.slug}>
                {el.title}
              </option>
            ))}
          </select>

          <div className={styles.error}>
            {errors?.services && <p>{errors?.services?.message}</p>}
          </div>
        </div>
        <div className={styles.address}>
          <label htmlFor="address">Адреса обслуговування</label>
          <input
            className={styles.inputAddress}
            placeholder="Введіть адресу"
            name="address"
            {...register("address", { required: "Введіть адрессу" })}
          />
          <div className={styles.error}>
            {errors?.address && <p>{errors?.address?.message}</p>}
          </div>
        </div>
        <div className={styles.description}>
          <label htmlFor="description">Короткий опис</label>
          <textarea
            name="description"
            {...register("description", {
              required: false,
              maxLength: {
                value: 300,
                message: "Максимум 300 символів",
              },
            })}
          ></textarea>
          <div className={styles.error}>
            {errors?.description && <p>{errors?.description?.message}</p>}
          </div>
        </div>

        <button type="submit">Продовжити</button>
      </form>
    </div>
  );
};
