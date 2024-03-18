import {useNavigate} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import {motion} from "framer-motion";
import styles from "../../BookmarkRecommendations/BookmarkAddRecommendation/BookmarkAddRecommendation.module.css";
import useFetchAdminCategories from "../../../../../stores/AdminStore/fetch_admin_categories.tsx";
import {useForm} from "react-hook-form";


const AddBookmarkCategory = () => {
    const navigate = useNavigate();
    const {addCategory} = useFetchAdminCategories();
    const {register, handleSubmit, setValue, reset, getValues} = useForm({
        defaultValues: {
            input: '',
            image: '',
        },
    });

    const fileInputRef = useRef(null);
    const [message, setMessage] = useState("");
    const [showMessage, setShowMessage] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');


    const onSubmit = (data) => {
        console.log(data)
        addCategory(data.input, getValues('image'));
        setMessage("Збережено");
        setShowMessage(true);
        setTimeout(() => {
            setShowMessage(false);
            setMessage("");
            navigate("/admin-panel/main-page/categories");
        }, 2000);

    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {

            setSelectedImage(reader.result as string);
            setValue("image", reader.result as string);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    const handleReset = () => {
        setSelectedImage('')
        reset({
            input: '',
            image: '',
        });
    };
    useEffect(() => {
        setValue("image", getValues("image"));
    }, [getValues("image"), handleImageChange, handleImageClick]);

    return (
        <motion.div
            className={styles.container}
            initial={{x: 10, opacity: 0}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0}}
            transition={{duration: 0.2, ease: "linear"}}
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.content}>
                    <div className={styles.forms}>
                        <h2>Редагувати Про нас</h2>
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
                            accept="image/*"
                            onChange={handleImageChange}
                            ref={fileInputRef}
                            style={{display: "none"}}
                        />
                        <img

                            className={styles.image}
                            src={selectedImage}
                            alt="Image"
                            onClick={handleImageClick}
                            style={{cursor: "pointer"}}
                        />
                    </div>
                </div>

            </form>
            {showMessage && <div className={styles.messageShowCategory}>{message}</div>}
        </motion.div>
    );
};

export default AddBookmarkCategory;