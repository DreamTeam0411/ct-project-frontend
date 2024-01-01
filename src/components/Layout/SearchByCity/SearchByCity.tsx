import styles from './SearchByCity.module.css'
import {City} from "../../UI/City/City.tsx";

const SearchByCity = () => {
	return (<div className={styles.searchByCityBlock}>

			<div className={styles.title}>Обирайте по містах</div>

			<div className={styles.wrap}>
				<div className={styles.cities}>
					<City>Київ</City>
					<City>Рівне</City>
					<City>Луцьк</City>
					<City>Львів</City>
					<City>Житомир</City>
					<City>Чернівці</City>
					<City>Херсон</City>
					<City>Івано-Франківськ</City>
					<City>Тернопіль</City>
					<City>Хмельницький</City>
					<City>Ужгород</City>
					<City>Вінниця</City>
					<City>Черкаси</City>
					<City>Полтава</City>
					<City>Чернігів </City>
					<City> Суми </City>
					<City>Харків</City>
					<City>Дніпро</City>
					<City>Миколаїв </City>
					<City>Харків</City>
					<City>Одеса</City>
					<City>Чернігів</City>

				</div>
			</div>
		</div>
	)
}
export default SearchByCity