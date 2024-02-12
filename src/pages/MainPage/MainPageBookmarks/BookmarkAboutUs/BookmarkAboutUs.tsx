import styles from "../BookmarkBanner/BookmarkBanner.module.css";

const BookmarkAboutUs = () => {
  return (
    <div className={styles.container}>
      <form>
        <div className={styles.content}>
          <div className={styles.forms}>
            <h2>Редагувати Про нас</h2>
            <div className={styles.inputsTitle}>
              <label htmlFor="title">Заголовок</label>
              <input type="text" name="title" placeholder="Введіть заголовок" />
              <label htmlFor="subtitle">Підзаголовок</label>
              <textarea
                placeholder="Введіть підзаголовок"
                name="subtitle"
              ></textarea>
              <p>0/300</p>
            </div>
          </div>
          <div className={styles.photo}>
            <h2>Фото</h2>
            <div className={styles.photoBlock}></div>
          </div>
        </div>
        <div className={styles.buttons}>
          <button>Відмінити</button>
          <button>Зберегти</button>
        </div>
      </form>
    </div>
  );
};

export default BookmarkAboutUs;
