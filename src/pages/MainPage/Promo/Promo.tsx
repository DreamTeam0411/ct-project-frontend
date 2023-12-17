import styles from "./Promo.module.css";
import useFetchData from "../../../stores/fetchData.tsx";


const Promo = () => {
	const dataState = useFetchData(state => state.data)
	return (
		<div className={styles.headerContent}>
			<div className={styles.welcomeContainer}>
				<div className={styles.welcome}>{dataState.header.title}</div>
				<div className={styles.contentWelcome}>{dataState.header.description}</div>
			</div>
			<div className={styles.contentContainer}>
				<div className={styles.content1}></div>
				<div className={styles.content2}></div>
				<div className={styles.content3}></div>
			</div>
			<form className={styles.searchContainer}>
				<div className={styles.servicesInput}>
					<input type="text" name='services'/>
					<label htmlFor="services">Сервіси</label></div>
				<div className={styles.cityInput}>
					<input type="text" name='city'/>
					<label htmlFor="city">Місто</label>
					<button>Пошук</button>
				</div>

			</form>
		</div>
	)

}
export default Promo