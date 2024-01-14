import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SearchForm.module.css";



const SearchForm = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();


  const addTask =(evt) => {
    if(inputValue){evt.preventDefault();
      console.log(inputValue);
      setInputValue('')
     navigate(`/services-all?searchForm=${inputValue}`);}
    else{
      evt.preventDefault();
      console.log('empty');
      
    }
    
  }
  return (
    <div className={styles.promoContainer}>
      
      
      <form className={styles.promoSearchContainer}>
        <div className={styles.promoSearch}>
        <button className={styles.promoSearcButton} onClick={(evt)=> addTask(evt)
          }>
            <img
              src="/Magnifier.svg"
              alt=""
              className={styles.promoSearcButtonImg}
            />
          </button>
          <input
            type="text"
            name="services"
            value={inputValue}
            placeholder="Type here ..."
            className={styles.promoSearchInput}
            onChange={(evt) => {
              setInputValue(evt.target.value);
            }}
          ></input>
         
        </div>
      </form>
    </div>
  );
};
export default SearchForm;

