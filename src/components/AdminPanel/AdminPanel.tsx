import SideBar from "./UIAdminPanel/SideBar/SideBar.tsx";
import styles from "./AdminPanel.module.css";
import PagesLayer from "./UIAdminPanel/PagesLayer/PagesLayer.tsx";
import Documents from "./pages/Documents/Documents.tsx";
import { Route, Routes } from "react-router-dom";
import Contacts from "./pages/Contacts/Contacts.tsx";
import MainPageAdmin from "./pages/MainPageAdmin/MainPageAdmin.tsx";
import Business from "./pages/Business/Business.tsx";
import AllMasters from "./pages/AllMasters/AllMasters.tsx";

function AdminPanel() {
  return (
    <div className={styles.container}>
      <div>
        <SideBar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<PagesLayer />}>
            <Route path="main-page" element={<MainPageAdmin />} />
            <Route path="documents" element={<Documents />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="business" element={<Business />} />
            <Route path="all-masters" element={<AllMasters />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default AdminPanel;
