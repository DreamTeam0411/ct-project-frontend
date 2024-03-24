import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";

import useFetchAdminCategories from "../../../../../stores/AdminStore/fetch_admin_categories.tsx";
import styles from "./AddMaster.module.css";
import useFetchAdminMasters from "../../../../../stores/AdminStore/fetch_admin_all_masters.tsx";
import {motion} from "framer-motion";
import useFetchAdminCities from "../../../../../stores/AdminStore/fetch_admin_cities.tsx";

const AddMaster = () => {
    const {dataCategory, fetchData} = useFetchAdminCategories();
    const {dataCity, fetchDataCities} = useFetchAdminCities();
    const {addMaster} = useFetchAdminMasters();
    const {register, handleSubmit, reset} = useForm();
    const [image, setImage] = useState(null);
    const [message, setMessage] = useState("");
    const [showMessage, setShowMessage] = useState(false);
    const [description, setDescription] = useState("");

    useEffect(() => {
        fetchData();
        fetchDataCities();
    }, []);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImage(reader.result);
        };

        reader.readAsDataURL(file);
    };
    const handleDescriptionChange = (event) => {
        if (event.target.value.length <= 300) {
            setDescription(event.target.value);
        }
    };

    const onSubmit = (data, event) => {
        event.preventDefault();
        if (typeof data.image === "string" || data.image === '') {
            data.image = null
        }
        const addMasterStore = {
            categoryId: data.id,
            description:data.description,

            price:data.price,
            cityId: data.cityId,
            photo: data.image,
            _method: "PATCH"
        };

        addMaster(addMasterStore    );
        setMessage("Збережено");
        setShowMessage(true);
        setTimeout(() => {
            setShowMessage(false);
            setMessage("");
        }, 3000);
        reset();
    };

    return (
        <motion.div
            className={styles.container}
            initial={{x: "5%", opacity: 0}}
            exit={{opacity: 0}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.5}}
        >
            <h1>Додати майстра</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.content}>
                    <div className={styles.forms}>
                        <h2>Основні дані</h2>
                        <div className={styles.inputsTitle}>
                            <label htmlFor="name">Ім'я</label>
                            <input
                                {...register("name")}
                                type="text"
                                name="name"
                                placeholder="Введіть ім'я"
                            />
                        </div>
                        <div className={styles.inputsTitle}>
                            <label htmlFor="surname">Прізвище</label>
                            <input
                                {...register("surname")}
                                type="text"
                                name="surname"
                                placeholder="Введіть прізвище"
                            />
                        </div>
                        <div className={styles.inputsTitle}>
                            <label htmlFor="phone">Номер телефону</label>
                            <input
                                {...register("phone")}
                                type="number"
                                name="phone"
                                placeholder="Введіть номер телефону"
                            />
                        </div>
                        <div className={styles.inputsSubtitle}>
                            <label htmlFor="social">Посилання на соціальну мережу</label>
                            <input
                                {...register("social")}
                                type="text"
                                name="social"
                                placeholder="https://www.instagram.com/"
                            />
                        </div>
                        <div className={styles.inputsSubtitle}>
                            <label htmlFor="service">Назва послуги</label>
                            <select
                                {...register("service")}
                                className={styles.select}
                                name="service"

                            >
                                <option value="" hidden selected>
                                    Виберіть послугу
                                </option>
                                {dataCategory.map((el) => (
                                    <option key={el.id} value={el.id}>
                                        {el.title}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className={styles.inputsSubtitle}>
                            <label htmlFor="price">Ціна</label>
                            <input
                                {...register("price")}
                                type="number"
                                name="price"
                                placeholder="0.00"
                            />
                        </div>
                        <div className={styles.inputsSubtitle}>
                            <label htmlFor="address">Адреса обслуговування</label>
                            <select
                                {...register("address")}
                                className={styles.select}
                                name="address"

                            >
                                <option value="" hidden selected>
                                    Виберіть місто
                                </option>
                                {dataCity.map((el) => (
                                    <option key={el.id} value={el.country.id}>
                                        {el.name}
                                    </option>
                                ))}
                            </select>

                        </div>
                        <div className={styles.inputsSubtitle}>
                            <label htmlFor="description">Короткий опис</label>
                            <textarea
                                maxLength={300}
                                {...register("description")}
                                placeholder="Введіть текст контенту"
                                name="description"
                                value={description}
                                onChange={handleDescriptionChange}
                            ></textarea>
                            <p className={styles.p}>{description.length}/300</p>
                        </div>
                    </div>
                    <div className={styles.photo}>
                        <h2>Фото</h2>
                        <div
                            className={styles.photoBlock}
                            onClick={() => document.getElementById("fileInput").click()}
                        >
                            {image ? (
                                <img src={image} alt="Uploaded"/>
                            ) : (
                                <p className={styles.downloadImage}>+ Додати зображення</p>
                            )}
                            <input
                                id="fileInput"
                                accept='image/jpeg'
                                type="file"
                                alt='Image'
                                onChange={handleImageUpload}
                                style={{display: "none", cursor: 'pointer'}}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.buttons}>
                    <button type="button" onClick={() => reset()}>
                        Відмінити
                    </button>
                    <button type="submit">Зберегти</button>
                </div>
            </form>
            {showMessage && (
                <div
                    className={styles.message}
                    style={{transition: "opacity 1s", opacity: showMessage ? 1 : 0}}
                >
                    {message}
                </div>
            )}
        </motion.div>
    );
};

export default AddMaster;
