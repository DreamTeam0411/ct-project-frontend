import { useState } from "react";
import styles from "./ForBusiness.module.css";
import Header from "../../components/Layout/Header/Header.tsx";
import Footer from "../../components/Layout/Footer/Footer.tsx";
import { Button } from "../../components/UI/buttons/Button/Button.tsx";
import StepperApp from "../../components/Stepper/StepperApp.tsx";

export const ForBusiness = () => {
  const [activeJoinUs, setActiveJoinUs] = useState(false);

  const joinUs = () => {
    setActiveJoinUs(true);
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        {activeJoinUs ? (
          <div className={styles.containerStepper}>
            <div className={styles.imgStepper}>
              <img src="/join-us-min.jpg" alt="" />
            </div>
            <div className={styles.stepperBlock}>
              <StepperApp />
            </div>
          </div>
        ) : (
          <>
            {" "}
            <div className={styles.forBusinessBlock}>
              <div className={styles.informationBlock}>
                <div className={styles.forBusinessTitle}>
                  Розкрийте свій талант на BeautyBook
                </div>
                <div className={styles.forBusinessShortInfo}>
                  Якщо ви є професійним б'юті-майстром і хочете розмістити своє
                  оголошення на нашому сайті, ми вас вітаємо!
                </div>
                <div className={styles.forBusinessTitleList}>
                  Приєднуйтеся та отримайте унікальні переваги:
                  <ul>
                    <li>
                      Збільшіть потік клієнтів завдяки ефективному залученню.
                    </li>
                    <li>
                      Розміщуйте свої оголошення безкоштовно і з легкістю.
                    </li>
                    <li>
                      Отримуйте об'єктивного зворотного зв'язку від клієнтів.
                    </li>
                    <li>
                      Отримаєте свій кабінет для управління бізнесом
                      (незабаром).
                    </li>
                  </ul>
                </div>
                <div onClick={joinUs} className={styles.button}>
                  <Button children={"Приєднатись"} />
                </div>
              </div>
              <div className={styles.imageForBusiness}>
                <img src="/forBusinessImage.png" alt="forBusiness" />
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};
