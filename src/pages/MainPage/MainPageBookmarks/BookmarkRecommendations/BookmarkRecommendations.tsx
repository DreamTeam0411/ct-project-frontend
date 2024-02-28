import styles from "./BookmarkRecommendations.module.css";
import { useStoreRecommendations } from "../../../../stores/localStores/recommendationsStore.tsx";
import { NavLink } from "react-router-dom";
import DropdownMenu from "../../../../components/AdminPanel/UIAdminPanel/Dropdown_Menu/DropdownMenu.tsx";

const BookmarkRecommendations = () => {
  const items = useStoreRecommendations((state) => state.items);
  const updateItem = useStoreRecommendations((state) => state.updateItem);
  const removeItem = useStoreRecommendations((state) => state.removeItem);
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <NavLink
          to={`/admin-panel/main-page/recommendations/add-recommendation`}
        >
          + Додати майстра
        </NavLink>
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

      {items.length > 0 &&
        items.map((item) => (
          <div key={item.id}>
            <ul className={styles.mastersList}>
              <li className={styles.id}>{item.id}</li>
              <li className={styles.name}>{item.serviceName}</li>
              <li className={styles.service}>{item.cardCategory}</li>
              <li className={styles.email}>Email</li>
              <li className={styles.address}>{item.cardAddress}</li>
              <li className={styles.phone}>{item.cardTel}</li>
              <li className={styles.empty}>
                <DropdownMenu
                  editMethod={() => updateItem}
                  deleteMethod={() => removeItem(item.id)}
                />
              </li>
            </ul>
          </div>
        ))}
    </div>
  );
};

export default BookmarkRecommendations;
