import styles from "./BookmarkCities.module.css";
import { useEffect, useState } from "react";
import { FetchDataAdmin } from "../../../../stores/AdminStore/fetch_admin_data.tsx";
import { ADMIN_CITIES } from "../../../../stores/ROUTES.tsx";
import { PuffLoader } from "react-spinners";
import { NavLink } from "react-router-dom";
/* eslint-disable  @typescript-eslint/no-explicit-any */
const BookmarkCities = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    FetchDataAdmin(ADMIN_CITIES).then((res): any => {
      setData(res.data.data);
      console.log(res.data.data);
      setLoading(false);
    });
  }, []);
  return (
    <div>
      <div className={styles.title}>
        <NavLink to={"/"}>+ Додати місто</NavLink>
      </div>

      <div className={styles.list}>
        <ul>
          <div className={styles.listItems}>
            <li className={styles.id}>Id</li>
            <li className={styles.city}>Назва міста</li>
          </div>
        </ul>
      </div>
      {loading ? (
        <div className={"loader-box"}>
          <PuffLoader color="#21151F" size={200} />
        </div>
      ) : (
        data.map((item): any => (
          <div key={item.id}>
            <ul className={styles.cityList}>
              <div className={styles.listItems}>
                <li className={styles.id}>{item.id}</li>
                <li className={styles.city}>{item.name}</li>
              </div>

              <li className={styles.empty}>...</li>
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default BookmarkCities;
