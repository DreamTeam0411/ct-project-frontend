import styles from './SearchByCity.module.css'
import {City} from "../../UI/City/City.tsx";

const SearchByCity = () => {
	return (<div className={styles.searchByCityBlock}>

			<div className={styles.title}>Обирайте по містах</div>

			<div className={styles.wrap}>
				<div className={styles.cities}>
					<City>Київ</City>
					<City>Харків</City>
					<City>Одеса</City>
					<City>Миколаїв </City>
					<City>Хмельницький</City>
					<City>Львів</City>
					<City>Тернопіль</City>
					<City>Рівне</City>
					<City>Дніпро</City>
					<City>Луцьк</City>
				</div>
			</div>
		</div>
	)
}
export default SearchByCity