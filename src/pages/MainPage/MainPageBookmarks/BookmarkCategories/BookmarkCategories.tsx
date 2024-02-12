import styles from "../BookmarkCities/BookmarkCities.module.css";

const BookmarkCategories = () => {
  return (
    <div>
      <div className={styles.title}>
        <button>+ Додати категорію</button>
      </div>

      <div className={styles.list}>
        <ul>
          <div className={styles.listItems}>
            <li className={styles.id}>Id</li>
            <li className={styles.city}>Назва категорії</li>
          </div>
        </ul>
      </div>
      <div className={styles.listData}>
        <ul className={styles.cityList}>
          <div className={styles.listItems}>
            <li className={styles.id}>Id</li>
            <li className={styles.city}>Назва категорії</li>
          </div>

          <li className={styles.empty}>...</li>
        </ul>
      </div>
    </div>
  );
};

export default BookmarkCategories;
