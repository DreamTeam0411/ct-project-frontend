import SideBar from "./UIAdminPanel/SideBar/SideBar.tsx";
import styles from "./AdminPanel.module.css";
import PagesLayer from "./UIAdminPanel/PagesLayer/PagesLayer.tsx";
import {Route, Routes, useLocation} from "react-router-dom";
import Contacts from "./pages/Contacts/Contacts.tsx";
import MainPageAdmin from "./pages/MainPageAdmin/MainPageAdmin.tsx";
import Business from "./pages/Business/Business.tsx";
import AllMasters from "./pages/AllMasters/AllMasters.tsx";
import {Documents} from "./pages/Documents/Documents.tsx";
import BookmarkPagesLayer from "../../pages/MainPage/MainPageBookmarks/BookmarkPagesLayer/BookmarkPagesLayer.tsx";
import BookmarkBanner from "../../pages/MainPage/MainPageBookmarks/BookmarkBanner/BookmarkBanner.tsx";
import BookmarkRecommendations
    from "../../pages/MainPage/MainPageBookmarks/BookmarkRecommendations/BookmarkRecommendations.tsx";
import BookmarkCities from "../../pages/MainPage/MainPageBookmarks/BookmarkCities/BookmarkCities.tsx";
import BookmarkAboutUs from "../../pages/MainPage/MainPageBookmarks/BookmarkAboutUs/BookmarkAboutUs.tsx";
import BookmarkAddRecommendation
    from "../../pages/MainPage/MainPageBookmarks/BookmarkRecommendations/BookmarkAddRecommendation/BookmarkAddRecommendation.tsx";
import AddBookmarkCity from "../../pages/MainPage/MainPageBookmarks/BookmarkCities/AddBookmarkCity/AddBookmarkCity.tsx";
import AddMaster from "./pages/AllMasters/AddMaster/AddMaster.tsx";
import {AnimatePresence, motion} from "framer-motion";
import AddBookmarkCategory
    from "../../pages/MainPage/MainPageBookmarks/BookmarkCategories/AddBookmarkCategory/AddBookmarkCategory.tsx";
import BookmarkCategories from "../../pages/MainPage/MainPageBookmarks/BookmarkCategories/BookmarkCategories.tsx";
import {
    EditBookmarkCityPage
} from "../../pages/MainPage/MainPageBookmarks/BookmarkCities/EditBookmarkCity/EditBookmarkCityPage.tsx";
import EditBookmarkCategoryPage
    from "../../pages/MainPage/MainPageBookmarks/BookmarkCategories/EditBookmarkCategory/EditBookmarkCategoryPage.tsx";
import EditMasterPage from "./pages/AllMasters/EditMaster/EditMasterPage.tsx";


function AdminPanel() {


    const location = useLocation();
    return (
        <motion.div
            className={styles.container}
            initial={{x: 10, opacity: 0}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0}}
            transition={{duration: 0.05, ease: "linear"}}
        >
            <motion.div
                initial={{x: "-45%", opacity: 0}}
                exit={{opacity: 0}}
                animate={{opacity: 1, x: 0}}
                transition={{duration: 0.5}}
                className={styles.sidebar}
            >
                <SideBar/>
            </motion.div>
            <div className={styles.content}>
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<PagesLayer/>}>
                            <Route path="main-page" element={<MainPageAdmin/>}>
                                <Route path="/main-page/" element={<BookmarkPagesLayer/>}>
                                    <Route path="banner" element={<BookmarkBanner/>}/>
                                    <Route path="recommendations" element={<PagesLayer/>}>
                                        <Route
                                            path="/main-page/recommendations/"
                                            element={<BookmarkRecommendations/>}
                                        />
                                        <Route
                                            path="add-recommendation"
                                            element={<BookmarkAddRecommendation/>}
                                        />
                                    </Route>
                                    <Route path="categories" element={<PagesLayer/>}>
                                        <Route
                                            path="/main-page/categories/"
                                            element={<BookmarkCategories/>}
                                        />
                                        <Route path="add-category" element={<AddBookmarkCategory/>}/>
                                        <Route path=':id' element={<EditBookmarkCategoryPage/>}/>
                                    </Route>
                                    <Route path="cities" element={<PagesLayer/>}>
                                        <Route
                                            path="/main-page/cities/"
                                            element={<BookmarkCities/>}
                                        />
                                        <Route path="add-city" element={<AddBookmarkCity/>}/>
                                        <Route path=':id' element={<EditBookmarkCityPage/>}/>
                                    </Route>
                                    <Route path="about-us" element={<BookmarkAboutUs/>}/>
                                </Route>
                            </Route>
                            <Route path="documents" element={<Documents/>}/>
                            <Route path="contacts" element={<Contacts/>}/>
                            <Route path="business" element={<Business/>}/>
                            <Route path="all-masters/" element={<PagesLayer/>}>
                                <Route
                                    path="/all-masters/"
                                    element={<AllMasters/>}
                                />
                                <Route path=':id' element={<EditMasterPage/>}/>
                            </Route>
                            <Route path="add-master" element={<AddMaster/>}/>

                        </Route>
                    </Routes>
                </AnimatePresence>
            </div>
        </motion.div>
    );
}

export default AdminPanel;
