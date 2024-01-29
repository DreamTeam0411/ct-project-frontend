import { useState } from "react";
import styles from "./ForBusiness.module.css";
import Header from "../../components/Layout/Header/Header.tsx";
import Footer from "../../components/Layout/Footer/Footer.tsx";
import { Button } from "../../components/UI/buttons/Button/Button.tsx";
import StepperApp from "../../components/Stepper/StepperApp.tsx";

export const ForBusiness = () => {
  const [activeJoinUs, setActiveJoinUs] = useState(false);

  const joinus = () => {
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
              <div className={styles.titleBlock}>
                <div className={styles.imageForBusiness}>
                  <img src="/forBusinessImage.png" alt="forBusiness" />
                </div>
                <div className={styles.titleInformation}>
                  <div className={styles.titleForBusiness}>
                    Як стати новим партнером компанії «BeautyBook»{" "}
                  </div>
                  <div className={styles.description}>
                    Розкрийте свій талант на BeautyBook! Якщо ви є професійним
                    б'юті-майстром і хочете розмістити своє оголошення на нашому
                    сайті, ми вас вітаємо!
                  </div>
                </div>
              </div>
              <div className={styles.informationBlock}>
                <div className={styles.title}>
                  Для початку співпраці вам потрібно надіслати нам основну
                  інформацію:
                </div>
                <div className={styles.list}>
                  <ol>
                    <li>
                      Прізвище та ім'я: Для того, щоб користувачі знали, як вас
                      знайти.{" "}
                    </li>
                    <li>
                      Локація обслуговування (адреса): Місце, де ви приймаєте
                      клієнтів.{" "}
                    </li>
                    <li>
                      {" "}
                      Назва послуги: Для того, щоб користувачі точно знали, що
                      ви пропонуєте.{" "}
                    </li>
                    <li>
                      {" "}
                      Короткий опис: Розкажіть коротко, чому саме вас варто
                      обрати.{" "}
                    </li>
                    <li>
                      Фото для оголошення: Надішліть нам фото, яке ви хочете
                      включити у ваше оголошення.{" "}
                    </li>
                    <li>
                      Контактні дані: Надайте мобільний телефон або інші зручні
                      для вас контактні дані, за якими ви хочете, щоб із вами
                      міг зв'язатися клієнт.{" "}
                    </li>
                  </ol>
                </div>
                <div className={styles.toContact}>
                  Будь ласка, зв'яжіться з нами за допомогою електронної пошти
                  beautybook@gmail.com або напишіть нам за телефоном +380 735 98
                  67 у Telegram або Viber, щоб розпочати розміщення свого
                  оголошення на BeautyBook.
                </div>
                <div className={styles.wishes}>
                  Давайте разом робити світ красивішим!
                </div>
              </div>
            </div>
            <div onClick={joinus}>
              <Button children={"Приєднатись"} />
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};
