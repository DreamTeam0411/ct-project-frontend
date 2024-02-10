import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={styles.aboutUsContainer}>
      <img src="/About.jpg" alt="women" className={styles.aboutUsImage} />

      <div className={styles.aboutUsBlockText}>
        <div>
          <p className={styles.aboutUsText1}>BeautyBook</p>
        </div>

        <div className={styles.aboutUsBlockText2}>
          <div >
            <p className={styles.aboutUsText2}>- твій гід у світі</p>
          </div>

          <div>
            <p  className={styles.aboutUsText3}>краси</p>
          </div>
        </div>

        <div className={styles.aboutUsText4}>
          <p>
            Великий вибір послуг та професіоналів, зручний пошук - все це на
            нашому сайті.
          </p>
          <p>Знайди ідеального майстра за кілька кліків. </p>
          <p>Записуйся на процедури швидко та без зайвих зусиль. </p>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
