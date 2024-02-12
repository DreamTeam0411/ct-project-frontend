import styles from "./BookmarkRecommendations.module.css";

const BookmarkRecommendations = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <button>+ Додати майстра</button>
      </div>

      <div className={styles.list}>
        <ul>
          <li className={styles.id}>Id</li>
          <li className={styles.name}>Прізвище та Ім’я</li>
          <li className={styles.service}>Сервіс</li>
          <li className={styles.email}>Email</li>
          <li className={styles.address}>Адрес</li>
          <li className={styles.phone}>Телефон</li>
          <li className={styles.empty}>{"  "}</li>
        </ul>
      </div>
      <div>
        <ul className={styles.mastersList}>
          <li className={styles.id}>Id</li>
          <li className={styles.name}>Прізвище та Ім’я</li>
          <li className={styles.service}>Сервіс</li>
          <li className={styles.email}>Email</li>
          <li className={styles.address}>Адрес</li>
          <li className={styles.phone}>Телефон</li>
          <li className={styles.empty}>...</li>
        </ul>
      </div>
    </div>
  );
};

export default BookmarkRecommendations;
