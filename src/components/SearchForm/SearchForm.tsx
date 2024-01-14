import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SearchForm.module.css";

interface SearchFormProps {
  onAdd: (title: string) => void;
}

export const SearchForm: React.FC<SearchFormProps> = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const addTask = (evt) => {
    if (inputValue) {
      evt.preventDefault();
      console.log(inputValue);
      setInputValue("");
      navigate(`/services-all?searchForm=${inputValue}`);
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
          <input
            type="text"
            name="services"
            value={inputValue}
            placeholder="Сервіс"
            className={styles.searchFormInput}
            onChange={(evt) => {
              setInputValue(evt.target.value);
            }}
          ></input>
          <div className={styles.searchFormDivLine}></div>
          <div className={styles.searchFormSelect}>
            <select name="select" className={styles.searchFormSelectBox}>
              <option
                value=""
                disabled
                selected
                hidden
                className={styles.searchFormSelectDisabled}
              >
                Локація
              </option>
              <option value="value1">Київ</option>
              <option value="value2">Харків</option>
              <option value="value3">Одеса</option>
              <option value="value3">Миколаїв</option>
              <option value="value3">Хмельницький</option>
              <option value="value3">Львів</option>
              <option value="value3">Тернопіль</option>
              <option value="value3">Рівне</option>
              <option value="value3">Дніпро</option>
              <option value="value3">Луцьк</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};
