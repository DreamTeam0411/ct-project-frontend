import styles from "./ServicePage.module.css";
import Header from "../../components/Layout/Header/Header.tsx";
import Footer from "../../components/Layout/Footer/Footer.tsx";
import useFetchDataAllMasters from "../../stores/fetchAllMasters.tsx";
import { useParams } from "react-router-dom";
import { ServiceCardDescription } from "../AllServicesPage/ServiceCardDescription/ServiceCardDescription.tsx";
import { PuffLoader } from "react-spinners";
import { motion } from "framer-motion";

export const ServicePage = () => {
  const searchParams = useParams();
  const searchId: undefined | string | number = searchParams.serviceId;
  const dataState = useFetchDataAllMasters((state) => state.data);
  // console.log(searchParams.serviceId);

  if (dataState.length !== 0 && searchId !== undefined)
    return (<>
    <Header />
       <div className={styles.container}>
        <div className={styles.header}>
          
        </div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, transition: { duration: 0.1, ease: "linear" } }}
          transition={{ duration: 0.5, ease: "linear" }}
          className={styles.wrapper1}
        >
          {dataState.map(
            /* eslint-disable-next-line no-mixed-spaces-and-tabs */ (data) =>
              data.id === +searchId ? (
                <ServiceCardDescription
                  key={data.id}
                  description={data.description}
                  title={data.title}
                  city={data.city}
                  user={data.user}
                  category={data.category}
                  photo={data.photo}
                />
              ) : (
                ""
              )
          )}
        </motion.div>
        
      </div>
      <Footer />
    </>
   
    );
  else {
    <PuffLoader color="#36d7b7" size={200} />;
  }
};
