import DropdownMenu from "../../UIAdminPanel/Dropdown_Menu/DropdownMenu";
import styles from "./AllMasters.module.css";

function AllMasters() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Всі майстри</h1>
        <button>+ Додати майстра</button>
      </div>
      <div className={styles.filter}>
        <input type="text" name="filter" placeholder="Пошук" />
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
          <li className={styles.empty}>
            <DropdownMenu />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AllMasters;
