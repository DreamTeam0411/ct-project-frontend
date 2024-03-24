import DropdownMenu from "../../UIAdminPanel/Dropdown_Menu/DropdownMenu";
import styles from "./AllMasters.module.css";
import {useEffect, useState} from "react";
import {PuffLoader} from "react-spinners";
import {NavLink, useNavigate} from "react-router-dom";
 /* eslint-disable  @typescript-eslint/no-explicit-any */
import {motion} from "framer-motion";
import useFetchAdminServices from "../../../../stores/AdminStore/fetch_admin_services.tsx";

/* eslint-disable  @typescript-eslint/no-explicit-any */
function AllMasters() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const {dataServices, fetchData, deleteService} = useFetchAdminServices();
    const [data, setData] = useState(dataServices);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const filteredData = dataServices.filter(
            (item) =>
                item.user.firstName.toLowerCase().includes(search.toLowerCase()) ||
                item.user.lastName.toLowerCase().includes(search.toLowerCase()) ||
                item.user.email.toLowerCase().includes(search.toLowerCase()) ||
                item.category.title.toLowerCase().includes(search.toLowerCase()) ||
                item.user.address.toLowerCase().includes(search.toLowerCase())
        );
        setData(filteredData);
    }, [search]);
    const handleCityClick = (masterId: number) => {
        navigate(`/admin-panel/all-masters/${masterId}`);
    };
    useEffect(() => {
        setLoading(true);
        fetchData();
        setData(dataServices);
        console.log(dataServices);
        setLoading(false);
    }, [dataServices.length]);


    return (
        <motion.div
            className={styles.container}
            initial={{x: "5%", opacity: 0}}
            exit={{opacity: 0}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.5}}
        >
            <div className={styles.title}>
                <h1>Всі майстри</h1>
            </div>
            <div className={styles.filter}>
                <input
                    type="text"
                    name="filter"
                    placeholder="Пошук"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <NavLink to={"/admin-panel/add-master"}>+ Додати майстра</NavLink>
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
            {loading ? (
                <div className={"loader-box"}>
                    {" "}
                    <PuffLoader color="#21151F" size={200}/>
                </div>
            ) : data.length > 0 ? (
                data.map((item, index) => (
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
                            <li className={styles.name}>
                                {item.user.firstName} {item.user.lastName}
                            </li>
                            <li className={styles.service}>{item.category.title}</li>
                            <li className={styles.email}>{item.user.email}</li>
                            <li className={styles.address}>{item.user.address}</li>
                            <li className={styles.phone}>{item.user.phoneNumber}</li>
                            <li className={styles.empty}>
                                {
                                    <DropdownMenu
                                        deleteMethod={() => {
                                                const confirmDelete = confirm('Видалити майстра?')
                                                confirmDelete && deleteService(item.id)
                                            }}
                                        editMethod={() => handleCityClick(item.id)}
                                    />
                                }
                            </li>
                        </ul>
                    </motion.div>
                ))
            ) : (
                <p>Нічого не знайдено</p>
            )}
        </motion.div>
    );
}

export default AllMasters;
