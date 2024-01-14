import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Promo.module.css";



const Promo = () => {
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
      <div className={styles.promoHeader}>ДОГЛЯД & КРАСА</div>
      <div className={styles.promoText}>
        Знаходьте найкращих фахівців та замовляйте послуги онлайн !
      </div>
      <form className={styles.promoSearchContainer}>
        <div className={styles.promoSearch}>
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
          <button className={styles.promoSearcButton} onClick={(evt)=> addTask(evt)
          }>
            <img
              src="/Magnifier.svg"
              alt=""
              className={styles.promoSearcButtonImg}
            />
          </button>
        </div>
      </form>
    </div>
  );
};
export default Promo;
