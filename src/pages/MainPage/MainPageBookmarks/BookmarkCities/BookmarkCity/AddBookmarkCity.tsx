import { useState } from "react";
import styles from "../../BookmarkRecommendations/BookmarkAddRecommendation/BookmarkAddRecommendation.module.css";
import useFetchAdminCities from "../../../../../stores/AdminStore/fetch_admin_cities.tsx";

const AddBookmarkCity = () => {
  const { addCity } = useFetchAdminCities();
  const [cityName, setCityName] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const handleSave = (e) => {
    e.preventDefault();
    addCity(cityName);
    setCityName("");
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setCityName("");
  };

  return (
    <div className={styles.container}>
      <form>
        <div className={styles.content}>
          <div className={styles.forms}>
            <h2>Додати місто</h2>
            <div className={styles.inputsTitle}>
              <label htmlFor="title">Міста</label>
              <input
                className={styles.select}
                name="title"
                placeholder="Введіть назву міста"
                value={cityName}
                onChange={(e) => setCityName(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className={styles.buttons}>
          <button onClick={handleCancel}>Відмінити</button>
          <button onClick={handleSave}>Зберегти</button>
        </div>
      </form>
      {showMessage && <div className={styles.messageShow}>Збереженно</div>}
    </div>
  );
};
export default AddBookmarkCity;
