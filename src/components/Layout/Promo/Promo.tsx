import styles from "./Promo.module.css";

const Promo = () => {
  return (
    <div className={styles.promoContainer}>
      <div className={styles.promoLeftBlock}>
        <p className={styles.promoText1}>Знаходьте</p>
        <div className={styles.promoBlockText2}>
          <p className={styles.promoText2}>найкращих</p>
        </div>
        <p className={styles.promoText3}>фахівців та замовляйте</p>
        <div className={styles.promoBlockText4}>
          <p className={styles.promoText4}>послуги онлайн !</p>
        </div>
        <p className={styles.promoText5}>
          Записуйтеся на наступний сеанс зручно та просто!
        </p>
      </div>
      <div className={styles.promoRightBlock}>
        <div className={styles.promoFotoSmall}>
          <img src="/promo1-min.jpg" />
        </div>

        <div className={styles.promoFotoLarge}>
          <img src="/promo2-min.jpg" />
        </div>
        <div className={styles.promoFotoLarge}>
          <img src="/promo3-min.jpg" />
        </div>
        <div className={styles.promoFotoSmall}>
          <img src="/promo4-min.jpg" />
        </div>
      </div>
    </div>
  );
};
export default Promo;
