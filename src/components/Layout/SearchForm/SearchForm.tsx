import { useState, MouseEvent } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./SearchForm.module.css";

interface SearchFormProps {}

export const SearchForm: React.FC<SearchFormProps> = () => {
  const [searchParams] = useSearchParams();
  const categorie = searchParams.get("categorie");
  const city = searchParams.get("city");

  const [inputValue, setInputValue] = useState(categorie || "");
  const [inputCity, setInputCity] = useState(city || "");
  const navigate = useNavigate();

  console.log(categorie, city);

  const addTask = (evt: MouseEvent) => {
    if (inputValue || inputCity) {
      evt.preventDefault();
      console.log(inputValue);
      console.log(inputCity);

      navigate(`/services-all?categorie=${inputValue}&city=${inputCity}`);
    } else {
      evt.preventDefault();
      console.log("empty");
    }
  };
  return (
    <div className={styles.searchFormContainer}>
      <form>
        <div className={styles.searchForm}>
          <button
            className={styles.searchFormButton}
            onClick={(evt) => addTask(evt)}
          >
            <img src="/Magnifier.svg" alt="" />
          </button>
          {/* <input
            type="text"
            name="services"
            value={inputValue}
            placeholder="Сервіс"
            className={styles.searchFormInput}
            onChange={(evt) => {
              setInputValue(evt.target.value);
            }}
            ></input> */}
          
          <select
            name="services"
            className={styles.searchFormCategorieBox}
            value={inputValue}
            onChange={(evt) => {
              setInputValue(evt.target.value);
            }}
          >
            <option
              disabled
              // selected||
              hidden
              // className={styles.searchFormSelectDisabled}
            >
              Локація
            </option>
            <option value="">Всі сервіси</option>
            <option value="Догляд за нігтями">Догляд за нігтями</option>
            <option value="Макіяж">Макіяж</option>
            <option value="Фарбування та зачіска">Фарбування та зачіска</option>
            <option value="Жіноча стрижка">Жіноча стрижка</option>
            <option value="Чоловіча стрижка">Чоловіча стрижка</option>
            <option value="Вії та брови">Вії та брови</option>
            <option value="Масаж">Масаж</option>
            <option value="Татуаж">Татуаж</option>
            <option value="Видалення волосся">Видалення волосся</option>
            <option value="Косметологія">Косметологія</option>
          </select>

          <div className={styles.searchFormDivLine}></div>
          <div className={styles.searchFormSelect}>
            <select
              name="select"
              className={styles.searchFormSelectBox}
              value={inputCity}
              onChange={(evt) => {
                setInputCity(evt.target.value);
              }}
            >
              <option
                disabled
                selected
                hidden
                // className={styles.searchFormSelectDisabled}
              >
                Локація
              </option>
              <option value="">Всі міста</option>
              <option value="Київ">Київ</option>
              <option value="Харків">Харків</option>
              <option value="Одеса">Одеса</option>
              <option value="Миколаїв">Миколаїв</option>
              <option value="Хмельницький">Хмельницький</option>
              <option value="Львів">Львів</option>
              <option value="Тернопіль">Тернопіль</option>
              <option value="Рівне">Рівне</option>
              <option value="Дніпро">Дніпро</option>
              <option value="Луцьк">Луцьк</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};
