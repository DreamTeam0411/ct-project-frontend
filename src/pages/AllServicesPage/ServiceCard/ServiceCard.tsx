import { useState } from "react";
import styles from "./ServiceCard.module.css";
import { DataAllMasters } from "../../../stores/fetchAllMasters.tsx";
import { AppointmentBlock } from "../../../components/Layout/AppointmentBlock/AppointmentBlock.tsx";
import { BasicModalWindow } from "../../../components/UI/BasicModalWindow/BasicModalWindow.tsx";
import { useNavigate } from "react-router-dom";

export const ServiceCard = (props: DataAllMasters) => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => {
    setOpenModal(false);
  };

  const openModalButton = () => {
    setOpenModal(true);
  };

  const handleCardClick = (productId: number) => {
    navigate(`/all-services/${productId}`);
  };

  function formatPhoneNumber(phoneNumber: string) {
    const country = phoneNumber.slice(0, 2);
    const operator = phoneNumber.slice(2, 5);
    const rest = phoneNumber.slice(5);
    const formattedNumber = `+${country}(${operator}) ${rest.slice(
      0,
      3
    )}- ${rest.slice(3, 5)} ${rest.slice(5)}`;

    return formattedNumber;
  }

  const formattedPhoneNumber = formatPhoneNumber(props.user.phoneNumber);


  return (
    <div className={styles.container}>
      <div className={styles.mainPart}>
        <div className={styles.cardImgBlock}>
          <img
            className={styles.image}
            key={props.id}
            onClick={() => handleCardClick(props.id)}
            src={`https://ct-project-images.s3.eu-central-1.amazonaws.com/service-photos/${props.photo}`}
            alt="master-photo"
          />
        </div>
        <div className={styles.cardInformation}>
          <div
            className={styles.mainInformation}
            key={props.id}
            onClick={() => handleCardClick(props.id)}
          >
            <div className={styles.cardTitle}>
              {props.user.firstName} {props.user.lastName}
            </div>
            <div className={styles.cardProfession}>{props.title}</div>
            <div className={styles.cardAddress}>{props.city.name}</div>
            <div className={styles.cardAddress}>{formattedPhoneNumber}</div>
            <div className={styles.cardDescription}>{props.description}</div>
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
      <BasicModalWindow active={openModal} setActive={closeModal}>
        <AppointmentBlock tel={props.user.phoneNumber} setActive={closeModal} />
      </BasicModalWindow>

      <div className={styles.orderButton}>
        <button className={styles.buttonSC} onClick={openModalButton}>
          Записатись
        </button>
      </div>
    </div>
  );
};
