import styles from "./Documents.module.css";

export const Documents = () => {
  return (
    <div className={styles.container}>
      <h1>Документи</h1>
      <form>
        <div className={styles.inputs}>
          <label htmlFor="terms">Умови використання</label>
          <input type="text" name="terms" placeholder="Додайте посилання" />
        </div>
        <div className={styles.inputs}>
          <label htmlFor="politics">Політика конфіденційності</label>
          <input type="text" name="politics" placeholder="Додайте посилання" />
        </div>
        <div className={styles.buttons}>
          <button>Відмінити</button>
          <button>Зберегти</button>
        </div>
      </form>
    </div>
  );
};
