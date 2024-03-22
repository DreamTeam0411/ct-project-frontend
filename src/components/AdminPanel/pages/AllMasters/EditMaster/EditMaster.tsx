import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import styles from "./EditMater.module.css";
import {motion} from "framer-motion";
import useFetchAdminCategories from "../../../../../stores/AdminStore/fetch_admin_categories.tsx";
import useFetchAdminMasters from "../../../../../stores/AdminStore/fetch_admin_all_masters.tsx";
import {useNavigate} from "react-router-dom";

const EditMaster = ({data, id}) => {
    console.log(data.photo)
    const navigate = useNavigate();
    const {editMaster, deleteMaster} = useFetchAdminMasters();
    const {dataCategory} = useFetchAdminCategories();
    const {register, handleSubmit, reset} = useForm();
    const [image, setImage] = useState(data.photo);
    const [message, setMessage] = useState("");
    const [showMessage, setShowMessage] = useState(false);
    const [description, setDescription] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [phone, setPhone] = useState("");
    const [social, setSocial] = useState("");
    const [service, setService] = useState("");
    const [address, setAddress] = useState("");

    useEffect(() => {
        if (data) {
            setName(data.user.firstName || "");
            setSurname(data.user.lastName || "");
            setPhone(data.phone || "");
            setSocial(data.user.email || "");
            setService(data.service || "");
            setAddress(data.city.name || "");
            setDescription(data.description || "");
        }
    }, [data]);
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
        editMaster({...data}, image)
        setMessage("Збережено");
        setShowMessage(true);
        setTimeout(() => {
            setShowMessage(false);
            setMessage("");
            navigate("/admin-panel/all-masters");
        }, 2000);
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
            <h1>Змінити майстра</h1>
            <div className={styles.deleteButtonBlock}>
                <button className={styles.deleteButton} onClick={(e) => {
                    e.preventDefault();
                    const assign = confirm("Видалити майстра?")
                    if (assign) {
                        deleteMaster(id);
                        navigate("/admin-panel/all-masters");
                    }
                    (document.querySelector('button[type="submit"]') as HTMLButtonElement).disabled = true;
                }}
                ><img src="/bin.svg" alt="delete"/></button>
            </div>

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
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </div>
                        <div className={styles.inputsTitle}>
                            <label htmlFor="surname">Прізвище</label>
                            <input
                                {...register("surname")}
                                type="text"
                                name="surname"
                                placeholder="Введіть прізвище"
                                value={surname}
                                onChange={e => setSurname(e.target.value)}
                            />
                        </div>
                        <div className={styles.inputsTitle}>
                            <label htmlFor="phone">Номер телефону</label>
                            <input
                                {...register("phone")}
                                type="number"
                                name="phone"
                                placeholder="Введіть номер телефону"
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                            />
                        </div>
                        <div className={styles.inputsSubtitle}>
                            <label htmlFor="social">Посилання на соціальну мережу</label>
                            <input
                                {...register("social")}
                                type="text"
                                name="social"
                                placeholder="https://www.instagram.com/"
                                value={social}
                                onChange={e => setSocial(e.target.value)}
                            />
                        </div>
                        <div className={styles.inputsSubtitle}>
                            <label htmlFor="service">Назва послуги</label>
                            <select
                                {...register("service")}
                                className={styles.select}
                                name="service"
                                value={service}
                                onChange={e => setService(e.target.value)}
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
                            <label htmlFor="address">Адреса обслуговування</label>
                            <input
                                {...register("address")}
                                type="text"
                                name="address"
                                placeholder="вул. Макарова 18, м. Київ"
                                value={address}
                                onChange={e => setAddress(e.target.value)}
                            />
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
                                <img
                                    src={`https://ct-project-images.s3.eu-central-1.amazonaws.com/service-photos/${image}
`} alt="+ Додати зображення"/>
                            ) : (
                                <p className={styles.downloadImage}>+ Додати зображення</p>
                            )}
                            <input
                                id="fileInput"
                                type="file"
                                onChange={handleImageUpload}
                                style={{display: "none"}}
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

export default EditMaster;
