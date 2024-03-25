import styles from "./Promo.module.css";
import { NavLink } from "react-router-dom";
import { useStoreBanner } from "../../../stores/localStores/banner_store.tsx";

const Promo = () => {
  const { item } = useStoreBanner();
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
          Записуйтеся на сеанс зручно та просто!
        </p>

        <div className={styles.promoButtonContainer}>
          <NavLink to={"/all-services"}>
            <button className={styles.promoButton}>
              Записатись{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 23 23"
              >
                <path
                  fill="white"
                  d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"
                />
              </svg>
            </button>
          </NavLink>
        </div>
      </div>

      <div className={styles.promoRightBlock}>
        <img src={item.image} alt="promo-image" />
      </div>
    </div>
  );
};
export default Promo;
