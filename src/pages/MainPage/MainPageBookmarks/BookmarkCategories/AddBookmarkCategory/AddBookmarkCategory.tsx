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
    const [URLImage, setURLImage] = useState(`https://ct-project-images.s3.eu-central-1.amazonaws.com/category-photos/${selectedImage}`)

    const onSubmit = (data, event) => {
        event.preventDefault();
        console.log(data)
        if (typeof data.image === "string" || data.image === '') {
            data.image = null
        }
        const addCategoryStore = {
            title: data.input,
            icon: data.image,
            _method: "PATCH"
        };

        addCategory(addCategoryStore);
        setMessage("Збережено");
        setShowMessage(true);
        setTimeout(() => {


            setShowMessage(false);
            setMessage("");
            navigate("/admin-panel/main-page/categories");
        }, 2000);
        (document.querySelector('button[type="submit"]') as HTMLButtonElement).disabled = true;
    };

    const handleImageChange = (e) => {
        if(e.target.files.length !== 0){
            console.log(e.target.files[0])
            setValue("image", e.target.files[0])
            setURLImage(URL.createObjectURL(e.target.files[0]))
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
                        <h2>Додати категорію</h2>
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

            </form>
            {showMessage && <div className={styles.messageShowCategory}>{message}</div>}
        </motion.div>
    );
};

export default AddBookmarkCategory;