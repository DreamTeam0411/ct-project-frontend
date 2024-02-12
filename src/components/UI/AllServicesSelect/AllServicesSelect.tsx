import styles from "./AllServicesSelect.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import useFetchCategories from "../../../stores/fetchCategories.tsx";

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
        {dataCategories.map((el) => (
          <li
            key={el.id}
            onClick={() => select(el.slug)}
            className={el.slug === category ? styles.active : styles.listItem}
          >
            {el.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
