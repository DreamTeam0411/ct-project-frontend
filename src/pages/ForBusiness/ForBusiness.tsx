import { useState } from "react";
import styles from "./ForBusiness.module.css";
import Header from "../../components/Layout/Header/Header.tsx";
import Footer from "../../components/Layout/Footer/Footer.tsx";
import { Button } from "../../components/UI/buttons/Button/Button.tsx";
import StepperApp from "../../components/Stepper/StepperApp.tsx";
import { useBusinessStore } from "../../stores/localStores/for_business.tsx";
import { motion } from "framer-motion";

export const ForBusiness = () => {
  const [activeJoinUs, setActiveJoinUs] = useState(false);
  const {
    title,
    subtitle,
    contentSubtitle,

    photo,
  } = useBusinessStore();
  const joinUs = () => {
    setActiveJoinUs(true);
  };

  return (
    <>
      <Header />
      <motion.div
        initial={{ x: "5%", opacity: 0 }}
        exit={{ opacity: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.container}
      >
        {activeJoinUs ? (
          <div className={styles.containerStepper}>
            <motion.div
              initial={{ x: "-5%", opacity: 0 }}
              exit={{ opacity: 0 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={styles.imgStepper}
            >
              <img src="/join-us-min.jpg" alt="" />
            </motion.div>
            <div className={styles.stepperBlock}>
              <StepperApp />
            </div>
          </div>
        ) : (
          <>
            {" "}
            <div className={styles.forBusinessBlock}>
              <div className={styles.informationBlock}>
                <div className={styles.forBusinessTitle}>{title}</div>
                <div className={styles.forBusinessShortInfo}>{subtitle}</div>
                <div className={styles.forBusinessTitleList}>
                  {contentSubtitle}
                  <ul>
                    <li>
                      Збільшіть потік клієнтів завдяки ефективному залученню.
                    </li>
                    <li>
                      Розміщуйте свої оголошення безкоштовно і з легкістю.
                    </li>
                    <li>
                      Отримуйте об'єктивний зворотній зв'язок від клієнтів.
                    </li>
                    <li>
                      Отримайте свій кабінет для управління бізнесом
                      (незабаром).
                    </li>
                  </ul>
                </div>
                <div onClick={joinUs} className={styles.button}>
                  <Button children={"Приєднатись"} />
                </div>
              </div>
              <div className={styles.imageForBusiness}>
                <img src={photo} alt="forBusiness" />
              </div>
            </div>
          </>
        )}
      </motion.div>
      <Footer />
    </>
  );
};
