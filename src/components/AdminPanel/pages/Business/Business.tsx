import styles from "./Business.module.css";

function Business() {
  return (
    <div className={styles.container}>
      <h1>Для бізнесу</h1>

      <form>
        <div className={styles.content}>
          <div className={styles.forms}>
            <h2>Основні дані</h2>
            <div className={styles.inputsTitle}>
              <label htmlFor="title">Заголовок</label>
              <input type="text" name="title" placeholder="Введіть заголовок" />
              <label htmlFor="subtitle">Підзаголовок</label>
              <textarea
                placeholder="Введіть підзаголовок"
                name="subtitle"
              ></textarea>
              <p className={styles.p}>0/300</p>
            </div>
            <div className={styles.inputsSubtitle}>
              <label htmlFor="content-subtitle">Заголовок контенту</label>
              <input
                type="text"
                name="content-subtitle"
                placeholder="Введіть заголовок контенту"
              />
              <label htmlFor="content">Контент</label>
              <textarea
                placeholder="Введіть текст контенту"
                name="content"
              ></textarea>
              <p className={styles.p}>0/300</p>
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
}

export default Business;
