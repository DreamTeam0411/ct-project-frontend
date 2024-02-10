import { Outlet } from "react-router-dom";
import styles from "./PagesLayer.module.css";

function PagesLayer() {
  return (
    <div className={styles.container}>
      <Outlet />
    </div>
  );
}
export default PagesLayer;
