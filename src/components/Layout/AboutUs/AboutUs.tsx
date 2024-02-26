import styles from "./AboutUs.module.css";
import { useStoreAboutUs } from "../../../stores/localStores/aboutUsStore.tsx";

const AboutUs = () => {
  const { item } = useStoreAboutUs();
  return (
    <div className={styles.aboutUsContainer}>
      <img src={item.image} alt="women" className={styles.aboutUsImage} />

      <div className={styles.aboutUsBlockText}>
        <div>
          <p className={styles.aboutUsText1}>{item.titleFirstLineText}</p>
        </div>

        <div className={styles.aboutUsBlockText2}>
          <div>
            <p className={styles.aboutUsText2}>{item.titleSecondLineText}</p>
          </div>

          <div>
            <p className={styles.aboutUsText3}>{item.titleThirdLineText}</p>
          </div>
        </div>

        <div className={styles.aboutUsText4}>
          <p>{item.descriptionFirstLineText}</p>
          <p>{item.descriptionSecondLineText} </p>
          <p>{item.descriptionThirdLineText} </p>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
