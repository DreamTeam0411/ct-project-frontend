import styles from "./BookmarkAddRecommendation.module.css";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useStoreRecommendations} from "../../../../../stores/localStores/recommendationsStore.tsx";
import {motion} from "framer-motion";
import useFetchAdminServices from "../../../../../stores/AdminStore/fetch_admin_services.tsx";

const BookmarkAddRecommendation = () => {
    const navigate = useNavigate();
    const {dataServices, fetchData} = useFetchAdminServices();
    const {addItem} = useStoreRecommendations();
    const [recommendation, setRecommendation] = useState("");
    const [showMessage, setShowMessage] = useState(false);
    useEffect(() => {
        fetchData()
    }, []);
    const addRecommendationItem = (id: string | number, e) => {
        e.preventDefault();
        console.log(id);
        const master = dataServices.filter((item) => item.user.id == id);
        console.log(master);
        const items = master.map((master) => ({
            image: `https://ct-project-images.s3.eu-central-1.amazonaws.com/service-photos/${master.photo}
`,
            id: master.user.id,
            serviceName: master.user.firstName + ' ' + master.user.lastName,
            cardCategory: master.category.title,
            cardAddress: master.city.name,
            cardTel: master.user.phoneNumber,
            cardEmail:master.user.email
        }));
        console.log(items);
        addItem(items);
        setShowMessage(true);
        setTimeout(() => {
            setShowMessage(false);
            navigate("/admin-panel/main-page/recommendations");
        }, 1000);
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
                        <h2>Додати майстра</h2>
                        <div className={styles.inputsTitle}>
                            <label htmlFor="title">Майстри</label>
                            <select
                                className={styles.select}
                                name="title"

                                value={recommendation}
                                onChange={(event) => setRecommendation(event.target.value)}
                            >
                                <option value="" hidden selected>
                                    Виберіть майстра
                                </option>
                                {dataServices.map((el) => (
                                    <option key={el.user.id} value={el.user.id}>
                                        {el.user.firstName +" "+ el.user.lastName +" "+" ("+  el.category.title+") "}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className={styles.buttons}>
                    <button
                        type={"button"}
                        onClick={(e) => {
                            e.preventDefault();
                            setRecommendation("");
                        }}
                    >
                        Відмінити
                    </button>
                    <button onClick={(e) => addRecommendationItem(recommendation, e)}>
                        Зберегти
                    </button>
                </div>
            </form>
            {showMessage && <div className={styles.messageShow}>Збереженно</div>}
        </motion.div>
    );
};

export default BookmarkAddRecommendation;
