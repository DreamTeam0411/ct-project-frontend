import DropdownMenu from "../../UIAdminPanel/Dropdown_Menu/DropdownMenu";
import styles from "./AllMasters.module.css";
import { useEffect, useState } from "react";
import { FetchDataAdmin } from "../../../../stores/AdminStore/fetch_admin_data.tsx";
import { ADMIN_SERVICES } from "../../../../stores/ROUTES.tsx";
import { PuffLoader } from "react-spinners";

/* eslint-disable  @typescript-eslint/no-explicit-any */
function AllMasters() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    FetchDataAdmin(ADMIN_SERVICES).then((res): any => {
      setData(res.data.data);
      console.log(res.data.data);
      setLoading(false);
    });
  }, []);
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
      {loading ? (
        <div className={"loader-box"}>
          {" "}
          <PuffLoader color="#21151F" size={200} />
        </div>
      ) : (
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
              <li className={styles.phone}>
                У юзера в базі нема номера телефону
              </li>
              <li className={styles.empty}>...</li>
              <DropdownMenu />
            </ul>
          </div>
        ))
      )}
    </div>
  );
}

export default AllMasters;
