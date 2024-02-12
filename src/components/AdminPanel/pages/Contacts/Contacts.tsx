import styles from "../Documents/Documents.module.css";

function Contacts() {
  return (
    <div className={styles.container}>
      <h1>Контакти</h1>
      <form>
        <div className={styles.inputs}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
        </div>
        <div className={styles.inputs}>
          <label htmlFor="phone">Номер телефону</label>
          <input type="tel" name="phone" />
        </div>
        <div className={styles.buttons}>
          <button>Відмінити</button>
          <button>Зберегти</button>
        </div>
      </form>
    </div>
  );
}

export default Contacts;
