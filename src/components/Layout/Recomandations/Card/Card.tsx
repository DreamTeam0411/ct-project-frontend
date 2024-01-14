import React from "react";

import styles from "./Card.module.css";
import { CardProps } from "./Card.props.ts";
import {Link} from "react-router-dom";

const Card: React.FC<CardProps> = ({
  image,
  serviceName,
  cardCategory,
  cardAddress,
  cardTel,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
          <Link to={"/services-all"}>
        <img src={image} alt="icon" />
          </Link>
      </div>
      <div className={styles.serviceName}>
        {serviceName}{" "}
        <img src="/Verification.svg" className={styles.serviceNameIcon} />
      </div>
      <div className={styles.cardCategory}>{cardCategory}</div>
      <div className={styles.cardAddress}>{cardAddress}</div>
      <div className={styles.cardTel}>{cardTel}</div>
    </div>
  );
};

export default Card;
