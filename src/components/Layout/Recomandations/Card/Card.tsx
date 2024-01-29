import React from "react";

import styles from "./Card.module.css";
import { CardProps } from "./Card.props.ts";
import { useNavigate } from "react-router-dom";

const Card: React.FC<CardProps> = ({
  image,
  serviceName,
  cardCategory,
  cardAddress,
}) => {
  const navigate = useNavigate();
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img
          src={image}
          alt="icon"
          onClick={() => {
            navigate("/all-services");
            scroll(0, 0);
          }}
        />
      </div>

      <div className={styles.cardCategory}>{cardCategory}</div>
      <div>
        <div className={styles.serviceName}>{serviceName} </div>
        <div className={styles.cardAddress}>{cardAddress}</div>
      </div>
    </div>
  );
};

export default Card;
