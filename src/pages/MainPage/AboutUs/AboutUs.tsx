import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={styles.aboutUsContainer}>
      <h2 className={styles.aboutUsTitle}>Про нас</h2>
      <img src="/aboutUsImg.jpg" alt="women" className={styles.aboutUsImage} />

      <div className={styles.aboutUsPromoBlock}>
        <h3 className={styles.aboutUsPromo}>
          BeautyBook - твій гід у світі краси!
        </h3>
        <p className={styles.aboutUsText}>
          Знайди ідеального майстра за кілька кліків. Великий <br/>вибір послуг та
          професіоналів, зручний пошук - все<br/> це на нашому сайті.
        </p>
        <p className={styles.aboutUsText}>
          Записуйся на процедури швидко та <br/>без зайвих зусиль.
        </p>
      </div>
    </div>
  );
};
export default AboutUs;
