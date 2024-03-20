import styles from "./BookmarkCategories.module.css";
import { useEffect, useState } from "react";
import {NavLink, useNavigate} from "react-router-dom";
import DropdownMenu from "../../../../components/AdminPanel/UIAdminPanel/Dropdown_Menu/DropdownMenu.tsx";
import useFetchAdminCategories from "../../../../stores/AdminStore/fetch_admin_categories.tsx";
import { motion } from "framer-motion";
/* eslint-disable  @typescript-eslint/no-explicit-any */
const BookmarkCategories = () => {
  const navigate = useNavigate();
  const [, setLoading] = useState(false);
  const { dataCategory,deleteCategory, fetchData } = useFetchAdminCategories();

  useEffect(() => {
    setLoading(true);
    fetchData();
    console.log(dataCategory);
    setLoading(false);
  }, []);
  const handleCityClick = (cityId: number) => {
    navigate(`/admin-panel/main-page/categories/${cityId}`);
  };
  return (
    <motion.div

      initial={{ x: "5%", opacity: 0 }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.3,
        },
      }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.title}>
        <NavLink to={"/admin-panel/main-page/categories/add-category"}>+ Додати категорію</NavLink>
      </div>

      <div className={styles.list}>
        <ul>
          <div className={styles.listItems}>
            <li className={styles.id}>Id</li>
            <li className={styles.city}>Назва категорії</li>
          </div>
        </ul>
      </div>
      {dataCategory.map((item, index) => (
          <motion.div

            initial={{ y: 20, opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.1, ease: "linear" },
            }}
            transition={{
              duration: 0.5,
              ease: "linear",
              delay: index * 0.1,
            }}
            className={styles.listData}
            key={item.id}
          >
            <ul className={styles.cityList}>
              <div className={styles.listItemsData}>
                <li className={styles.id}>{item.id}</li>
                <li className={styles.city}>{item.title}</li>
              </div>

              <li className={styles.empty}>
                <DropdownMenu
                    key={item.id}
                  deleteMethod={() => {
                    deleteCategory(item.id)
                    alert('Видалено')
                  }}
                  editMethod={() => handleCityClick(item.id)}
                />
              </li>
            </ul>
          </motion.div>
        ))
      }
    </motion.div>
  );
};

export default BookmarkCategories;
