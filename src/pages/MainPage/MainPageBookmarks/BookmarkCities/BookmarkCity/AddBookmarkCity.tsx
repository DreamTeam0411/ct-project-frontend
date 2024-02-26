import { useState } from "react";
import styles from "../../BookmarkRecommendations/BookmarkAddRecommendation/BookmarkAddRecommendation.module.css";
import useFetchAdminCities from "../../../../../stores/AdminStore/fetch_admin_cities.tsx";

import { useNavigate } from "react-router-dom";

const AddBookmarkCity = () => {
  const navigate = useNavigate();
  const { addCity } = useFetchAdminCities();
  const [cityName, setCityName] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const handleSave = (e) => {
    e.preventDefault();
    addCity(cityName);
    setCityName("");
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
      navigate("/admin-panel/main-page/cities");
    }, 1000);
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
