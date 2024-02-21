import DropdownMenu from "../../UIAdminPanel/Dropdown_Menu/DropdownMenu";
import styles from "./AllMasters.module.css";
import { useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";
import { NavLink } from "react-router-dom";
import useFetchAdminMasters from "../../../../stores/AdminStore/fetch_admin_all_masters.tsx"; /* eslint-disable  @typescript-eslint/no-explicit-any */

/* eslint-disable  @typescript-eslint/no-explicit-any */
function AllMasters() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { dataMasters, fetchData } = useFetchAdminMasters();
  const [search, setSearch] = useState("");

  useEffect(() => {
    const filteredData = dataMasters.filter(
      (item) =>
        item.user.firstName.toLowerCase().includes(search.toLowerCase()) ||
        item.user.lastName.toLowerCase().includes(search.toLowerCase()) ||
        item.user.email.toLowerCase().includes(search.toLowerCase()) ||
        item.category.title.toLowerCase().includes(search.toLowerCase()) ||
        item.city.name.toLowerCase().includes(search.toLowerCase())
    );
    setData(filteredData);
  }, [search]);

  useEffect(() => {
    setLoading(true);
    fetchData();
    setData(dataMasters);
    console.log(dataMasters);
    setLoading(false);
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Всі майстри</h1>
      </div>
      <div className={styles.filter}>
        <input
          type="text"
          name="filter"
          placeholder="Пошук"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <NavLink to={"/"}>+ Додати майстра</NavLink>
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
      {loading ? (
        <div className={"loader-box"}>
          {" "}
          <PuffLoader color="#21151F" size={200} />
        </div>
      ) : data.length > 0 ? (
        data.map((item) => (
          <div key={item.id}>
            <ul className={styles.mastersList}>
              <li className={styles.id}>{item.id}</li>
              <li className={styles.name}>
                {item.user.firstName} {item.user.lastName}
              </li>
              <li className={styles.service}>{item.category.title}</li>
              <li className={styles.email}>{item.user.email}</li>
              <li className={styles.address}>{item.city.name}</li>
              <li className={styles.phone}>{Date.now()}</li>
              <li className={styles.empty}>{<DropdownMenu />}</li>
            </ul>
          </div>
        ))
      ) : (
        <p>Нічого не знайдено</p>
      )}
    </div>
  );
}

export default AllMasters;
