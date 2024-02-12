import styles from "./BookmarkCities.module.css";

const BookmarkCities = () => {
  return (
    <div>
      <div className={styles.title}>
        <button>+ Додати місто</button>
      </div>

      <div className={styles.list}>
        <ul>
          <div className={styles.listItems}>
            <li className={styles.id}>Id</li>
            <li className={styles.city}>Назва міста</li>
          </div>
        </ul>
      </div>
      <div>
        <ul className={styles.cityList}>
          <div className={styles.listItems}>
            <li className={styles.id}>Id</li>
            <li className={styles.city}>Назва міста</li>
          </div>

          <li className={styles.empty}>...</li>
        </ul>
      </div>
    </div>
  );
};

export default BookmarkCities;
