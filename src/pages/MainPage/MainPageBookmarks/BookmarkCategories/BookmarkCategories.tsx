import styles from "./BookmarkCategories.module.css";
import { ADMIN_CATEGORIES } from "../../../../stores/ROUTES.tsx";

import { useEffect, useState } from "react";
import { FetchDataAdmin } from "../../../../stores/AdminStore/fetch_admin_data.tsx";
import { PuffLoader } from "react-spinners";
import { NavLink } from "react-router-dom";
import DropdownMenu from "../../../../components/AdminPanel/UIAdminPanel/Dropdown_Menu/DropdownMenu.tsx";
/* eslint-disable  @typescript-eslint/no-explicit-any */
const BookmarkCategories = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    FetchDataAdmin(ADMIN_CATEGORIES).then((res): any => {
      setData(res.data.data);
      console.log(res.data.data);
      setLoading(false);
    });
  }, []);
  return (
    <div>
      <div className={styles.title}>
        <NavLink to={"/"}>+ Додати категорію</NavLink>
      </div>

      <div className={styles.list}>
        <ul>
          <div className={styles.listItems}>
            <li className={styles.id}>Id</li>
            <li className={styles.city}>Назва категорії</li>
          </div>
        </ul>
      </div>
      {loading ? (
        <div className={"loader-box"}>
          {" "}
          <PuffLoader color="#21151F" size={200} />
        </div>
      ) : (
        data.map((item) => (
          <div className={styles.listData} key={item.id}>
            <ul className={styles.cityList}>
              <div className={styles.listItems}>
                <li className={styles.id}>{item.id}</li>
                <li className={styles.city}>{item.title}</li>
              </div>

              <li className={styles.empty}>
                <DropdownMenu />
              </li>
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default BookmarkCategories;
