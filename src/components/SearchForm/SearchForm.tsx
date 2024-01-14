import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SearchForm.module.css";

interface SearchFormProps {
  onAdd: (title: string) => void;
}

export const SearchForm: React.FC<SearchFormProps> = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputSelect, setInputSelect] = useState("");
  const navigate = useNavigate();

  const addTask = (evt) => {
    if (inputValue||inputSelect) {
      evt.preventDefault();
      console.log(inputValue);
      setInputValue("");
      navigate(`/services-all?serviseQuerry=${inputValue}&cityQuerry=${inputSelect}`);
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
            <select name="select" className={styles.searchFormSelectBox}
            onChange={(event) => {
                setInputSelect(event.target.value);

                console.log(inputSelect);
                
              }}
            >
              <option
                value=""
                disabled
                selected
                hidden
                className={styles.searchFormSelectDisabled}
                
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
