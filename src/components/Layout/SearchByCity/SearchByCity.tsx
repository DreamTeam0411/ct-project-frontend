import {useNavigate} from "react-router-dom";

import styles from "./SearchByCity.module.css";
import {City} from "../../UI/City/City.tsx";

const SearchByCity = () => {


	const navigate = useNavigate();
	const addCity = (city: string) => {
		navigate(`/all-services?city=${city}`);
		scroll(0,0)
	};

	return (
		<div className={styles.searchByCityBlock}>
			<div className={styles.title}>Обирайте по містах</div>

			<div className={styles.wrap}>
				<div className={styles.cities}>

					<City onClick={() => addCity("ukrayina-kiyiv")}>Київ</City>
					<City onClick={() => addCity("ukrayina-xarkiv")}>Харків</City>
					<City onClick={() => addCity("ukrayina-odesa")}>Одеса</City>
					<City onClick={() => addCity("ukrayina-mikolayiv")}>Миколаїв </City>
					<City onClick={() => addCity("ukrayina-xmelnickii")}>Хмельницький</City>
					<City onClick={() => addCity("ukrayina-lviv")}>Львів</City>
					<City onClick={() => addCity("ukrayina-ternopil")}>Тернопіль</City>
					<City onClick={() => addCity("ukrayina-rivne")}>Рівне</City>
					<City onClick={() => addCity("ukrayina-dnipro")}>Дніпро</City>
					<City onClick={() => addCity("ukrayina-luck")}>Луцьк</City>
				</div>
			</div>
		</div>
	);
};
export default SearchByCity;
