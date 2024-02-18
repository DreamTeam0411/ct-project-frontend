import SideBar from "./UIAdminPanel/SideBar/SideBar.tsx";
import styles from "./AdminPanel.module.css";
import PagesLayer from "./UIAdminPanel/PagesLayer/PagesLayer.tsx";
import { Route, Routes } from "react-router-dom";
import Contacts from "./pages/Contacts/Contacts.tsx";
import MainPageAdmin from "./pages/MainPageAdmin/MainPageAdmin.tsx";
import Business from "./pages/Business/Business.tsx";
import AllMasters from "./pages/AllMasters/AllMasters.tsx";
import { Documents } from "./pages/Documents/Documents.tsx";
import BookmarkPagesLayer from "../../pages/MainPage/MainPageBookmarks/BookmarkPagesLayer/BookmarkPagesLayer.tsx";
import BookmarkBanner from "../../pages/MainPage/MainPageBookmarks/BookmarkBanner/BookmarkBanner.tsx";
import BookmarkRecommendations from "../../pages/MainPage/MainPageBookmarks/BookmarkRecommendations/BookmarkRecommendations.tsx";
import BookmarkCategories from "../../pages/MainPage/MainPageBookmarks/BookmarkCategories/BookmarkCategories.tsx";
import BookmarkCities from "../../pages/MainPage/MainPageBookmarks/BookmarkCities/BookmarkCities.tsx";
import BookmarkAboutUs from "../../pages/MainPage/MainPageBookmarks/BookmarkAboutUs/BookmarkAboutUs.tsx";

function AdminPanel() {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <SideBar />
      </div>
      <div className={styles.content}>
        <Routes>
          <Route path="/" element={<PagesLayer />}>
            <Route path="main-page" element={<MainPageAdmin />}>
              <Route path="/main-page/" element={<BookmarkPagesLayer />}>
                <Route path="banner" element={<BookmarkBanner />} />
                <Route
                  path="recommendations"
                  element={<BookmarkRecommendations />}
                />
                <Route path="categories" element={<BookmarkCategories />} />
                <Route path="cities" element={<BookmarkCities />}>
                  <Route path="city/:id" />
                </Route>
                <Route path="about-us" element={<BookmarkAboutUs />} />
              </Route>
            </Route>
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
