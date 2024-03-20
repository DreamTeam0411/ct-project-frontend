// @flow

import styles from "../../BookmarkRecommendations/BookmarkAddRecommendation/BookmarkAddRecommendation.module.css";
import {motion} from "framer-motion";
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import useFetchAdminCities from "../../../../../stores/AdminStore/fetch_admin_cities.tsx";
export const EditBookmarkCity = ({city, id}) => {
    const navigate = useNavigate();
    const { editCity } = useFetchAdminCities();
    const [cityName, setCityName] = useState(city);
    const [showMessage, setShowMessage] = useState(false);
    const handleSave = (e) => {
        e.preventDefault();
        editCity(id, cityName, 1)
        setShowMessage(true);
        setTimeout(() => {
            setShowMessage(false);
            navigate("/admin-panel/main-page/cities");
        }, 1000);
    };
    const handleCancel = (e) => {
        e.preventDefault();
        setCityName(city);
    };
    return (
        <motion.div
            className={styles.container}
            initial={{x: "5%", opacity: 0}}
            exit={{opacity: 0}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.5}}
        >
            <form>
                <div className={styles.content}>
                    <div className={styles.forms}>
                        <h2>Редагувати місто</h2>
                        <div className={styles.inputsTitle}>
                            <label htmlFor="title">Міста</label>
                            <input
                                className={styles.select}
                                name="title"
                                placeholder="Введіть назву міста"
                                value={cityName}
                                onChange={(e) => setCityName(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.buttons}>
                    <button onClick={ handleCancel}>Відмінити</button>
                    <button onClick={ handleSave}>Зберегти</button>
                </div>
            </form>
            {showMessage && <div className={styles.messageShow}>Збереженно</div>}
        </motion.div>
    );
};