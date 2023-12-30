import styles from "./NotFound.module.css";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.text}>
        Sorry, you have reached a page that we could not find. It seems that you
        are lost among the numbers and letters of our virtual space. Perhaps
        this page went on vacation or decided to disappear into another
        dimension. We apologize for this inconvenience.
      </p>

      <Link to="/" className={styles.link}>
        
        ← На головну
      </Link>
    </div>
  );
};
