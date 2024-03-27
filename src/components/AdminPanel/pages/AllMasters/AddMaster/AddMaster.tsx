import  {useEffect, useRef, useState} from "react";
import {useForm} from "react-hook-form";

import useFetchAdminCategories from "../../../../../stores/AdminStore/fetch_admin_categories.tsx";
import styles from "./AddMaster.module.css";
import useFetchAdminMasters from "../../../../../stores/AdminStore/fetch_admin_all_masters.tsx";
import {motion} from "framer-motion";
import useFetchAdminCities from "../../../../../stores/AdminStore/fetch_admin_cities.tsx";
import {useNavigate} from "react-router-dom";


const AddMaster = () => {
    const {dataCategory, fetchData} = useFetchAdminCategories();
    const {dataCity, fetchDataCities} = useFetchAdminCities();
    const {addMaster} = useFetchAdminMasters();
    const navigate = useNavigate();
    const fileInputRef = useRef(null);
    const {register,setValue, handleSubmit, reset,formState: { errors }} = useForm<IFormData>({mode:"onChange"});
    const [image, setImage] = useState(null);
    const [message, setMessage] = useState("");
    const [showMessage, setShowMessage] = useState(false);
    const [description, setDescription] = useState("");
    const [URLImage, setURLImage] = useState(`https://ct-project-images.s3.eu-central-1.amazonaws.com/category-photos/${image}`)
    interface IFormData {
        categoryId: number,
        title:string,
        description:string,
        firstName:string,
        lastName:string,
        phoneNumber:number,
        link:string,
        address:string,
        price:number,
        cityId: number,
        photo:File
    }


    useEffect(() => {
        fetchData();
        fetchDataCities();
    }, []);

    const handleImageChange = (e) => {
        console.log(e.target.files[0])

        setValue("photo", e.target.files[0])
        setURLImage(URL.createObjectURL(e.target.files[0]))
        setImage(URLImage)
    };

    const handleImageClick = () => {
        fileInputRef.current.click();
    };
    const handleDescriptionChange = (event) => {
        if (event.target.value.length <= 300) {
            setDescription(event.target.value);
        }
    };

    const onSubmit = (data, event) => {
        event.preventDefault();
        console.log(URLImage)
        if (typeof image === "string" ) {
            setImage(null)
        }
        const addMasterStore = {
            categoryId: data.categoryId,
            title:data.title + data.firstName,
            description:data.description,
            firstName:data.firstName,
            lastName:data.lastName,
            phoneNumber:data.phoneNumber,
            link:data.link,
            address:data.address,
            price:data.price,
            cityId: data.cityId,
            photo: data.photo,
            // _method: "PATCH"
        };

        addMaster(addMasterStore);
        setMessage("Збережено");
        setShowMessage(true);
        setTimeout(() => {
            setShowMessage(false);
            setMessage("");
            navigate('/admin-panel/all-masters')
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
                            <label htmlFor="firstName">Ім'я</label>
                            <input
                                {...register("firstName", {
                                    required: "Це поле є обов'язковим",
                                    minLength: {
                                        value: 3,
                                        message: "Мінімум три символи",
                                    },
                                    pattern: {
                                        value: /^[а-яА-ЯёЁa-zA-Z]{2,20}$/,
                                        message: "Невірні символи",
                                    },
                                })}
                                type="text"
                                name="firstName"
                                placeholder="Введіть ім'я"
                            />
                            <div className={styles.error}>
                                {errors?.firstName && <p>{errors?.firstName?.message}</p>}
                            </div>
                        </div>
                        <div className={styles.inputsTitle}>
                            <label htmlFor="lastName">Прізвище</label>
                            <input
                                {...register("lastName", {
                                    required: "Це поле є обов'язковим",
                                    minLength: {
                                        value: 3,
                                        message: "Мінімум три символи",
                                    },
                                    pattern: {
                                        value: /^[а-яА-ЯёЁa-zA-Z]{2,20}$/,
                                        message: "Невірні символи",
                                    }
                                })}

                                type="text"
                                name="lastName"
                                placeholder="Введіть прізвище"
                            />
                            <div className={styles.error}>
                                {errors?.lastName && <p>{errors?.lastName?.message}</p>}
                            </div>
                        </div>
                        <div className={styles.inputsTitle}>
                            <label htmlFor="phoneNumber">Номер телефону</label>
                            <input
                                {...register("phoneNumber", {
                                    required: "Це поле є обов'язковим",
                                    pattern: {
                                        value: /^[0-9]+$/,
                                        message: "Тільки цифри",
                                    },
                                    minLength: {
                                        value: 10,
                                        message: "Мінімум десять символів",
                                    }
                                })}
                                type="number"
                                name="phoneNumber"
                                placeholder="Введіть номер телефону"
                            />
                            <div className={styles.error}>
                                {errors?.phoneNumber && <p>{errors?.phoneNumber?.message}</p>}
                            </div>
                        </div>
                        <div className={styles.inputsSubtitle}>
                            <label htmlFor="link">Посилання на соціальну мережу</label>
                            <input
                                {...register("link", {
                                    required: "Це поле є обов'язковим",
                                    minLength: {
                                        value: 3,
                                        message: "Мінімум три символи",
                                    },
                                    pattern: {
                                        value: /^[0-9a-zA-Z]{2,20}$/,
                                        message: "Невірні символи",
                                    },
                                })}
                                type="text"
                                name="link"
                                placeholder="https://www.instagram.com/"
                            />
                            <div className={styles.error}>
                                {errors?.link && <p>{errors?.link?.message}</p>}
                            </div>
                        </div>
                        <div className={styles.inputsSubtitle}>
                            <label htmlFor="categoryId">Назва послуги</label>
                            <select
                                {...register("categoryId", {required: "Виберіть категорію"})}
                                className={styles.select}
                                name="categoryId"

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
                            <div className={styles.error}>
                                {errors?.categoryId && <p>{errors?.categoryId?.message}</p>}
                            </div>
                        </div>
                        <div className={styles.inputsSubtitle}>
                            <label htmlFor="price">Ціна</label>
                            <input
                                {...register("price", {
                                    required: "Це поле є обов'язковим",
                                    minLength: {
                                        value: 3,
                                        message: "Мінімум один символ",
                                    },
                                    pattern: {
                                        value: /^[0-9]{1,20}$/,
                                        message: "Невірні символи",
                                    },
                                })}
                                type="number"
                                name="price"
                                placeholder="0.00"
                            />
                            <div className={styles.error}>
                                {errors?.price && <p>{errors?.price?.message}</p>}
                            </div>
                        </div>
                        <div className={styles.inputsSubtitle}>
                            <label htmlFor="cityId">Місто обслуговування</label>
                            <select
                                {...register("cityId", {required: 'Виберіть місто'})}
                                className={styles.select}
                                name="cityId"

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
                            <div className={styles.error}>
                                {errors?.cityId && <p>{errors?.cityId?.message}</p>}
                            </div>

                        </div>
                        <div className={styles.inputsSubtitle}>
                            <label htmlFor="address">Адресса</label>
                            <input
                                {...register("address", {
                                    required: "Це поле є обов'язковим",
                                    minLength: {
                                        value: 3,
                                        message: "Мінімум три символи",
                                    },
                                    pattern: {
                                        value: /^[а-яА-ЯёЁa-zA-Z]{2,20}$/,
                                        message: "Невірні символи",
                                    }
                                })}
                                type="text"
                                name="address"
                                placeholder=""
                            />
                            <div className={styles.error}>
                                {errors?.address && <p>{errors?.address?.message}</p>}
                            </div>
                        </div>
                        <div className={styles.inputsSubtitle}>
                            <label htmlFor="description">Короткий опис</label>
                            <textarea
                                maxLength={300}
                                {...register("description", {
                                    required: "Це поле є обов'язковим",
                                    minLength: {
                                        value: 3,
                                        message: "Мінімум два символи",
                                    },
                                    pattern: {
                                        value: /^[а-яА-ЯёЁa-zA-Z0-9]{2,300}$/,
                                        message: "Невірні символи",
                                    }
                                })}
                                placeholder="Введіть текст контенту"
                                name="description"
                                value={description}
                                onChange={handleDescriptionChange}
                            ></textarea>
                            <div className={styles.error}>
                                {errors?.description && <p>{errors?.description?.message}</p>}
                            </div>
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
                                <img src={URLImage} alt="Uploaded"
                                     onClick={handleImageClick}/>
                            ) : (
                                <p className={styles.downloadImage}>+ Додати зображення</p>
                            )}
                            <input
                                id="fileInput"
                                accept='image/jpeg'
                                type="file"
                                alt='Image'
                                onChange={handleImageChange}
                                style={{display: "none", cursor: 'pointer'}}
                            />
                            <div className={styles.error}>
                                {errors?.photo && <p>{errors?.photo?.message}</p>}
                            </div>
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
