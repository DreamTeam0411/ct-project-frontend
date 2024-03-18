import styles from "./ServiceCardDescription.module.css";
import { Category, City, User } from "../../../stores/fetchAllMasters.tsx";
import { BasicModalWindow } from "../../../components/UI/BasicModalWindow/BasicModalWindow.tsx";
import { AppointmentBlock } from "../../../components/Layout/AppointmentBlock/AppointmentBlock.tsx";
import { useState } from "react";
import { Link } from "react-router-dom";

type PropsType = {
  description: string;
  title: string;
  user: User;
  city: City;
  category: Category;
  photo: null | string | undefined;
};
export const ServiceCardDescription = ({
  description,
  user,
  category,
  city,
  photo,
}: PropsType) => {
  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => {
    setOpenModal(false);
  };

  const openModalButton = () => {
    setOpenModal(true);
  };
  return (
    <div className={styles.wrapper2}>
      <div className={styles.breadCrumbs}>
        <Link to="/">Головна/</Link>
        <div className={styles.breadCrumbsCategory}>{category.title}/</div>
        <div className={styles.breadCrumbsCategory}> {user.firstName} {user.lastName}/</div>
      </div>
    
      <div className={styles.container}>
        <div className={styles.imageBlock}>
          <img
            src={`https://ct-project-images.s3.eu-central-1.amazonaws.com/service-photos/${photo}`}
            alt=""
          />
        </div>
        <div className={styles.contentBlock}>
          <div className={styles.mainPart}>
            <div className={styles.cardInformation}>
              <div className={styles.mainInformation}>
                <div className={styles.cardTitle}>
                  {user.firstName} {user.lastName}
                </div>
                <div className={styles.cardAddress}>{city.name}</div>
                <div className={styles.workTime}>Пн - Нд 10:00-18:00</div>
                <div className={styles.cardDescription}>{description}</div>
              </div>
              <div className={styles.social}>
                <div className={styles.icon}>
                  <img src="/Instagram2.svg" alt="" />
                </div>
                <div className={styles.icon}>
                  <img src="/Facebook2.svg" alt="" />
                </div>
                <div className={styles.icon}></div>
              </div>
            </div>
          </div>
          <div className={styles.orderButton}>
            <button className={styles.buttonModal} onClick={openModalButton}>
              Записатись
            </button>
          </div>
          <BasicModalWindow active={openModal} setActive={closeModal}>
            <AppointmentBlock tel={user.phoneNumber} setActive={closeModal} />
          </BasicModalWindow>
        </div>
      </div>
    </div>
  );
};
