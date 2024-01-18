// import React from 'react';

import styles from "./BasicModalWindow.module.css";

export interface Data {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

export const BasicModalWindow: React.FC<Data> = ({
  active,
  setActive,
  children,
}) => {
  return (
    <div
  className={`${styles.modalContainer} ${active ? styles.active : ""}`}
  onClick={() => setActive(false)}
>
  <div
    className={`${styles.modalContent} ${active ? styles.active : ""}`}
    onClick={(e) => e.stopPropagation()}
  >
    {children}
  </div>
</div>
  );
};
