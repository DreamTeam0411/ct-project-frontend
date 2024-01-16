import styles from "./Promo.module.css";

const Promo = () => {
  return (
    <div className={styles.promoContainer}>
      <div className={styles.promoHeader}>ДОГЛЯД & КРАСА</div>
      <div className={styles.promoText}>Знаходьте найкращих фахівців та замовляйте послуги онлайн !</div>
      {/* <form className={styles.promoSearchContainer}>
        <div className={styles.promoSearch}>
          <input type="text" name="services" className={styles.promoSearchInput} placeholder={'Пошук послуг або фахівців'}></input>
          <button className={styles.promoSearcButton}><img src="/Magnifier.svg" alt="" className={styles.promoSearcButtonImg}/></button>
        </div>
      </form> */}
    </div>
  );
};
export default Promo;
