import styles from "./AllServicesSelect.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import useFetchCategories from "../../../stores/fetchCategories.tsx";
import { motion } from "framer-motion";

export const AllServicesSelect = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");
  const city = searchParams.get("city");
  const navigate = useNavigate();
  const dataCategories = useFetchCategories((state) => state.data);

  const select = (value: string) => {
    setSearchParams({ category: value });

    if (city !== null) {
      navigate(`/all-services?category=${value}&city=${city}`);
    } else {
      navigate(`/all-services?category=${value}`);
    }
    scroll(0, 0);
  };

  return (
    <div className={styles.serviceListBlock}>
      <ul className={styles.servicesList}>
        {dataCategories.map((el, index) => (
          <motion.li
            initial={{ y: 20, opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.1, ease: "linear" },
            }}
            transition={{
              duration: 0.5,
              ease: "linear",
              delay: index * 0.1,
            }}
            key={el.id}
            onClick={() => select(el.slug)}
            className={el.slug === category ? styles.active : styles.listItem}
          >
            {el.title}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};
