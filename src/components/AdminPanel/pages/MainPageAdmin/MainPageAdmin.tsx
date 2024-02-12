import styles from "./MainPageAdmin.module.css";
import BookmarkPagesLayer from "../../../../pages/MainPage/MainPageBookmarks/BookmarkPagesLayer/BookmarkPagesLayer.tsx";
import { BookmarkItems } from "../../data/dataSidebar.tsx";
import { NavLink } from "react-router-dom"; /* eslint-disable  @typescript-eslint/no-explicit-any */

/* eslint-disable  @typescript-eslint/no-explicit-any */
function MainPageAdmin() {
  return (
    <div className={styles.container}>
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
    </div>
  );
}

export default MainPageAdmin;
