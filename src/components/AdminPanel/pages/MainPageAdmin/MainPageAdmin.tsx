import styles from "./MainPageAdmin.module.css";
import BookmarkPagesLayer from "../../../../pages/MainPage/MainPageBookmarks/BookmarkPagesLayer/BookmarkPagesLayer.tsx";
import { BookmarkItems } from "../../data/dataSidebar.tsx";
import { NavLink } from "react-router-dom"; /* eslint-disable  @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";

/* eslint-disable  @typescript-eslint/no-explicit-any */
function MainPageAdmin() {
  return (
    <motion.div
      initial={{ x: "5%", opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.container}
    >
      <h1>Головна сторінка</h1>
      <div className={styles.items}>
        {BookmarkItems.map((item, index): any => (
          <NavLink
            to={item.path}
            key={index}
            className={({ isActive }) =>
              [isActive ? styles.active : styles.link].join(" ")
            }
          >
            <div className={styles.linkTitle}>{item.title}</div>
          </NavLink>
        ))}
      </div>
      <BookmarkPagesLayer />
    </motion.div>
  );
}

export default MainPageAdmin;
