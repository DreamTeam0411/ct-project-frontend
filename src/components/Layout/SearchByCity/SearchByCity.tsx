import City from "./Cityes/City.tsx";
import styles from './SearchByCity.module.css'

const SearchByCity = () => {
	return (<div className={styles.searchByCityBlock}>

				<div className={styles.title}>Обирайте по містах</div>


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
				<City>Сімферополь</City>
				<City>Полтава</City>
				<City>Чернігів </City>
				<City> Суми </City>
				<City>Харків</City>
				<City>Кропивницький </City>
				<City>Дніпро</City>
				<City>Миколаїв </City>
				<City>Харків</City>
				<City>Луганськ</City>
				<City>Донецьк</City>
				<City>Одеса</City>
				<City>Чернігів</City>

			</div>

		</div>
	)
}
export default SearchByCity