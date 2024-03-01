import styles from "./Button.module.css";

import { PropsWithChildren } from "react";

export const Button = ({ children }: PropsWithChildren) => {
  return (
    <button type={"submit"} className={styles.bn54}>
      <span className={styles.bn54span}>{children}</span>
    </button>
  );
};
