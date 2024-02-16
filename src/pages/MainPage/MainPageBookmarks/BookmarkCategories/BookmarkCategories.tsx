import styles from "../BookmarkCities/BookmarkCities.module.css";
import { ADMIN_CATEGORIES } from "../../../../stores/ROUTES.tsx";
import axios from "axios";
import { useEffect, useState } from "react";

const local = localStorage.getItem("token");

const FetchData = async () => {
  return await axios.get(ADMIN_CATEGORIES, {
    headers: {
      Authorization: "Bearer " + local,
    },
  });
};
const BookmarkCategories = () => {
  const [data] = useState([]);
  useEffect(() => {
    FetchData().then((res) => console.log(res));
  }, []);
  return (
    <div>
      <div className={styles.title}>
        <button>+ Додати категорію</button>
      </div>

      <div className={styles.list}>
        <ul>
          <div className={styles.listItems}>
            <li className={styles.id}>{data.map((item) => item)}</li>
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
