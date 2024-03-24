import styles from "./BookmarkCities.module.css";
import {useEffect, useState} from "react";
import {PuffLoader} from "react-spinners";
import {NavLink} from "react-router-dom";
import DropdownMenu from "../../../../components/AdminPanel/UIAdminPanel/Dropdown_Menu/DropdownMenu.tsx";
import useFetchAdminCities from "../../../../stores/AdminStore/fetch_admin_cities.tsx";
import {motion} from "framer-motion";
import {useNavigate} from "react-router-dom";
/* eslint-disable  @typescript-eslint/no-explicit-any */
const BookmarkCities = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const {dataCity, deleteCity, fetchDataCities} = useFetchAdminCities();

    useEffect(() => {
        setLoading(true);
        fetchDataCities();
        console.log(dataCity);
        setLoading(false);
    }, [deleteCity]);
    const handleCityClick = (cityId: number) => {
        navigate(`/admin-panel/main-page/cities/${cityId}`);
    };
    return (
        <motion.div
            initial={{x: "5%", opacity: 0}}
            animate={{opacity: 1, x: 0, transition: {duration: 0.5}}}
            exit={{
                opacity: 0,
                transition: {
                    duration: 0.3,
                },
            }}
        >
            <div className={styles.title}>
                <NavLink to={"/admin-panel/main-page/cities/add-city"}>
                    + Додати місто
                </NavLink>
            </div>

            <div className={styles.list}>
                <ul>
                    <div className={styles.listItems}>
                        <li className={styles.id}>Id</li>
                        <li className={styles.city}>Назва міста</li>
                    </div>
                </ul>
            </div>
            {loading ? (
                <div className={"loader-box"}>
                    <PuffLoader color="#21151F" size={200}/>
                </div>
            ) : (
                dataCity.map((item, index): any => (
                    <motion.div
                        initial={{y: 20, opacity: 0}}
                        animate={{opacity: 1, y: 0}}
                        exit={{
                            opacity: 0,
                            transition: {duration: 0.1, ease: "linear"},
                        }}
                        transition={{
                            duration: 0.5,
                            ease: "linear",
                            delay: index * 0.1,
                        }}
                        key={item.id}
                    >
                        <ul className={styles.cityList}>
                            <div className={styles.listItemsFetch}>
                                <li className={styles.id}>{item.id}</li>
                                <li className={styles.city}>{item.name}</li>
                            </div>

                            <li className={styles.empty}>
                                {
                                    <DropdownMenu
                                        deleteMethod={() => {
                                            const assign = confirm("Видалити місто?")
                                            if (assign) {
                                            deleteCity(item.id)

                                            }

                                        }}
                                        editMethod={() => handleCityClick(item.id)}
                                    />
                                }
                            </li>
                        </ul>
                    </motion.div>
                ))
            )}
        </motion.div>
    );
};

export default BookmarkCities;
