import styles from "./BookmarkRecommendations.module.css";
import {useStoreRecommendations} from "../../../../stores/localStores/recommendationsStore.tsx";
import {NavLink} from "react-router-dom";
import {motion} from "framer-motion";
import DropdownMenuRecommendation
    from "../../../../components/AdminPanel/UIAdminPanel/Dropdown_Menu/DropdownMenuRecommandations.tsx";

const BookmarkRecommendations = () => {
    const items = useStoreRecommendations((state) => state.items);

    const removeItem = useStoreRecommendations((state) => state.removeItem);
    return (
        <motion.div
            className={styles.container}
            initial={{x: "5%", opacity: 0}}
            exit={{
                opacity: 0,
                transition: {
                    duration: 0.3,
                },
            }}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.5}}
        >
            <div className={styles.title}>
                <NavLink
                    to={`/admin-panel/main-page/recommendations/add-recommendation`}
                >
                    + Додати майстра
                </NavLink>
            </div>

            <div className={styles.list}>
                <ul>
                    <li className={styles.id}>Id</li>
                    <li className={styles.name}>Прізвище та Ім’я</li>
                    <li className={styles.service}>Сервіс</li>
                    <li className={styles.email}>Email</li>
                    <li className={styles.address}>Адрес</li>
                    <li className={styles.phone}>Телефон</li>
                    <li className={styles.empty}>{"  "}</li>
                </ul>
            </div>

            {items.length > 0 &&
                items.map((item, index) => (
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
                        <ul className={styles.mastersList}>
                            <li className={styles.id}>{item.id}</li>
                            <li className={styles.name}>{item.serviceName}</li>
                            <li className={styles.service}>{item.cardCategory}</li>
                            <li className={styles.email}>{item.cardEmail}</li>
                            <li className={styles.address}>{item.cardAddress}</li>
                            <li className={styles.phone}>{item.cardTel}</li>
                            <li className={styles.empty}>
                                <DropdownMenuRecommendation

                                    deleteMethod={() => {
                                        const assign = confirm("Видалити рекомендацію?")
                                        if (assign) {
                                            removeItem(item.id)
                                            alert('Видалено')
                                        }
                                    }}
                                />
                            </li>
                        </ul>
                    </motion.div>
                ))}
        </motion.div>
    );
};

export default BookmarkRecommendations;
