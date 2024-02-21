import styles from "./BookmarkCities.module.css";
import { useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";
import { NavLink } from "react-router-dom";
import DropdownMenu from "../../../../components/AdminPanel/UIAdminPanel/Dropdown_Menu/DropdownMenu.tsx";
import useFetchAdminCities from "../../../../stores/AdminStore/fetch_admin_cities.tsx";
/* eslint-disable  @typescript-eslint/no-explicit-any */
const BookmarkCities = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { dataCity, fetchData } = useFetchAdminCities();
  useEffect(() => {
    setLoading(true);
    fetchData();
    setData(dataCity);
    console.log(dataCity);
    setLoading(false);
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
              <div className={styles.listItemsFetch}>
                <li className={styles.id}>{item.id}</li>
                <li className={styles.city}>{item.name}</li>
              </div>

              <li className={styles.empty}>
                {
                  <DropdownMenu
                    deleteMethod={() => setData}
                    editMethod={() => setData}
                  />
                }
              </li>
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default BookmarkCities;
