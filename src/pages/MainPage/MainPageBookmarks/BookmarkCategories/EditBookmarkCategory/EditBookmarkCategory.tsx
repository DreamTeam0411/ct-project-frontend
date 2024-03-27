import {useForm} from "react-hook-form";
import { useRef, useState} from "react";
import {motion} from "framer-motion";
import styles from "../../BookmarkBanner/BookmarkBanner.module.css";
import useFetchAdminCategories from "../../../../../stores/AdminStore/fetch_admin_categories.tsx";
import {useNavigate} from "react-router-dom";


const EditBookmarkCategory = ({title, id, icon}) => {

    const navigate = useNavigate();
    const {editCategory, deleteCategory} = useFetchAdminCategories();
    const {register, handleSubmit, setValue, reset, } = useForm({
        defaultValues: {
            input: title,
            image: icon,
        },
    });

    const fileInputRef = useRef(null);
    const [message, setMessage] = useState("");
    const [showMessage, setShowMessage] = useState(false);
    const [selectedImage, setSelectedImage] = useState(icon);
    const [URLImage, setURLImage] = useState(`https://ct-project-images.s3.eu-central-1.amazonaws.com/category-photos/${selectedImage}`)


    const onSubmit = (data, event) => {
        event.preventDefault();
        console.log(data)
        if (typeof data.image === "string") {
            data.image = null
        }
        const updatedCategory = {
            title: data.input,
            icon: data.image,
            _method: "PATCH"
        };
        editCategory(id, updatedCategory);

        (document.querySelector('button[type="submit"]') as HTMLButtonElement).disabled = true;
        setMessage("Збережено");
        setShowMessage(true);
        setTimeout(() => {
            setShowMessage(false);
            setMessage("");

            navigate("/admin-panel/main-page/categories");
        }, 2000);

    };

    const handleImageChange = (e) => {
        console.log(e.target.files[0])

        setValue("image", e.target.files[0])
        setURLImage(URL.createObjectURL(e.target.files[0]))

    };

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    const handleReset = () => {
        setSelectedImage(icon)
        reset({
            input: title,
            image: icon,
        });
    };


    return (
        <motion.div
            className={styles.container}
            initial={{x: 10, opacity: 0}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0}}
            transition={{duration: 0.2, ease: "linear"}}
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.deleteButtonBlock}>
                    <button className={styles.deleteButton} onClick={(e) => {
                        e.preventDefault();
                        const assign = confirm("Видалити категорію?")
                        if (assign) {
                        deleteCategory(id);
                        navigate("/admin-panel/main-page/categories");
                        }
                        (document.querySelector('button[type="submit"]') as HTMLButtonElement).disabled = true;
                    }}
                    ><img src="/bin.svg" alt="delete"/></button>
                </div>

                <div className={styles.content}>

                    <div className={styles.forms}>
                        <h2>Редагувати Категорію</h2>
                        <div className={styles.inputsTitle}>
                            <label htmlFor="title">Заголовок</label>
                            <input
                                {...register("input")}
                                type="text"
                                name="input"
                            />

                        </div>
                        <div className={styles.buttons}>
                            <button type="button" onClick={handleReset}>
                                Відмінити
                            </button>
                            <button type="submit">Зберегти</button>
                        </div>
                    </div>
                    <div className={styles.photo}>
                        <h2>Фото</h2>
                        <input
                            type="file"
                            accept="image/jpeg"
                            onChange={handleImageChange}
                            ref={fileInputRef}
                            style={{display: "none"}}

                        />
                        <img
                            className={styles.image}
                            src={URLImage}

                            alt="Image"
                            onClick={handleImageClick}
                            style={{cursor: "pointer"}}
                        />
                    </div>


                </div>
                <input type="hidden" name='_method' value='PATCH'/>
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


export default EditBookmarkCategory;