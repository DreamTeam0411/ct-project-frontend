import React, { useEffect, useState } from "react";
import { IStepProps } from "../StepOne/StepOne.tsx";
import styles from "./StepTwo.module.css";
import useFetchCategories from "../../../../stores/fetchCategories.tsx";

export const StepTwo: React.FC<IStepProps> = ({ changeActiveStep }) => {
  const fetchDataCategories = useFetchCategories((state) => state.fetchData);
  const dataStateCategories = useFetchCategories((state) => state.data);
  const [categoryState, setCategoryState] = useState("");
  useEffect(() => {
    fetchDataCategories();
  }, []);
  return (
    <div className={styles.container}>
      <form>
        <div className={styles.categoriesBlock}>
          <label htmlFor="services">Назва послуги</label>
          <select
            name="services"
            className={styles.categories}
            placeholder={"Виберіть послугу"}
            value={categoryState || ""}
            onChange={(evt) => {
              setCategoryState(evt.target.value);
            }}
          >
            <option selected hidden>
              Виберіть послугу
            </option>
            {dataStateCategories.map((el) => (
              <option key={el.id} value={el.slug}>
                {el.title}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.address}>
          <label htmlFor="address">Адреса обслуговування</label>
          <input placeholder="Введіть адресу" name="address" />
        </div>
        <div className={styles.description}>
          <label htmlFor="description">Короткий опис</label>
          <textarea name="description"></textarea>
        </div>

        <button type="submit" onClick={() => changeActiveStep(3)}>
          Продовжити
        </button>
      </form>
    </div>
  );
};
