import Header from "../../components/Layout/Header/Header.tsx";
import Promo from "../../components/Layout/Promo/Promo.tsx";
import Recommendations from "../../components/Layout/Recomandations/Recommendations.tsx";
import AboutUs from "../../components/Layout/AboutUs/AboutUs.tsx";
import SearchByCity from "../../components/Layout/SearchByCity/SearchByCity.tsx";
import Footer from "../../components/Layout/Footer/Footer.tsx";
import styles from "./Main.module.css";
import {useEffect, useState} from "react";
import useFetchData from "../../stores/fetchData.tsx";
import {SubCategories} from "../../components/Layout/SubCategories/SubCategories.tsx";
import {PuffLoader} from "react-spinners";
import {motion} from "framer-motion";

function MainPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const fetchData = useFetchData((state) => state.fetchData);
    const dataState = useFetchData((state) => state.data);

    useEffect(() => {
        try {
            setIsLoading(true);
            fetchData();
        } catch (error) {
            setIsError(true);
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    if (isLoading) return <PuffLoader color="#36d7b7"/>;
    if (Object.keys(dataState).length !== 0 && !isError)
        return (
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, transition: {duration: 0.1, ease: "linear"}}}
                transition={{duration: 0.5, ease: "linear"}}
                className={styles.app}
            >
                <div className={styles.header}>
                    <Header/>
                </div>
                <Promo/>
                <Recommendations/>
                <SubCategories/>
                <AboutUs/>
                <SearchByCity/>
                <div className={styles.footer}>
                    <Footer/>
                </div>
            </motion.div>
        );
    else {
        return (
            <motion.div
                initial={{y: 10, opacity: 0}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0}}
                transition={{duration: 0.5, ease: "linear"}}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                }}
            >
                <div style={{fontFamily: "Inter", margin: "30px", color: "grey"}}>
                    Завантаження
                </div>
                <div>
                    <PuffLoader color="#36d7b7"/>
                </div>
            </motion.div>
        );
    }
}

export default MainPage;
