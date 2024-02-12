import styles from "../../../../components/AdminPanel/UIAdminPanel/PagesLayer/PagesLayer.module.css";
import { Outlet } from "react-router-dom";

function BookmarkPagesLayer() {
  return (
    <div className={styles.container}>
      <Outlet />
    </div>
  );
}
export default BookmarkPagesLayer;
