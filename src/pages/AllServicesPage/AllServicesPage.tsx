import styles from './AllServicesPage.module.css'
import Header from "../../components/Layout/Header/Header.tsx";
import {ServiceCard} from "./ServiceCard/ServiceCard.tsx";
import Footer from "../../components/Layout/Footer/Footer.tsx";
import {Link} from "react-router-dom";

export const AllServicesPage = () => {
	return (
		<div className={styles.container}>
			<Header/>
			<div className={styles.mainBlock}>
			<div className={styles.linksBlock}>
				<div className={styles.breadCrumb}><Link to={'/'}>Головна/Сервіси</Link></div>
				<div className={styles.serviceListBlock}>
					<ul className={styles.servicesList}>
						<li><a href="#">
							<div>Будівельні роботи</div>

						</a></li>
						<li><a href="#">
							<div>Прибирання</div>

						</a></li>
						<li><a href="#">
							<div>Краса і догляд</div>

						</a></li>
						<li><a href="#">
							<div>Краса і догляд</div>

						</a></li>
						<li><a href="#">
							<div>Краса і догляд</div>

						</a></li>
						<li><a href="#">
							<div>Краса і догляд</div>

						</a></li>
						<li><a href="#">
							<div>Краса і догляд</div>

						</a></li>
					</ul>
				</div>
			</div>

			<div className={styles.content}>

				<div className={styles.servicesBlock}>
					<div className={styles.contentHeadBlock}>
						<div className={styles.contentHead}>
							<div className={styles.allServices}>Всі сервіси (350)</div>

						</div>
						<div className={styles.select}>
							<label htmlFor="sorting">Сортувати за:</label>
							<select name="sort" id="sorting">
								<option value="">Рекомендовано</option>
								<option value="rating">Рейтинг</option>
								<option value="cost">Ціна</option>
								<option value="daytime">Частина доби</option>
							</select>
						</div>

					</div>
					<div className={styles.serviceCardList}>
						<ServiceCard/>
						<ServiceCard/>
						<ServiceCard/>
						<ServiceCard/>

					</div>

				</div>

			</div>
			</div>
			<Footer/>
		</div>
	)
}