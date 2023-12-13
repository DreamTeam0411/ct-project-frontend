import styles from './AllServicesPage.module.css'
import Header from "../../components/Layout/Header/Header.tsx";
import {ServiceCard} from "./ServceCard/ServceCard.tsx";

export const AllServicesPage = () => {
	return (
		<div className={styles.container}>
			<Header/>
			<div className={styles.linksBlock}>
				<div className={styles.breadCrumb}>Головна/Сервіси</div>
				<div className={styles.serviceListBlock}>
					<ul className={styles.servicesList}>
						<li><a href="#">
							<div>Будівельні роботи</div>
							<div className={styles.numberService}>25</div>
						</a></li>
						<li><a href="#">
							<div>Прибирання</div>
							<div className={styles.numberService}>25</div>
						</a></li>
						<li><a href="#">
							<div>Краса і догляд</div>
							<div className={styles.numberService}>25</div>
						</a></li>
						<li><a href="#">
							<div>Краса і догляд</div>
							<div className={styles.numberService}>25</div>
						</a></li>
						<li><a href="#">
							<div>Краса і догляд</div>
							<div className={styles.numberService}>25</div>
						</a></li>
						<li><a href="#">
							<div>Краса і догляд</div>
							<div className={styles.numberService}>25</div>
						</a></li>
						<li><a href="#">
							<div>Краса і догляд</div>
							<div className={styles.numberService}>25</div>
						</a></li>
					</ul>
				</div>
			</div>

			<div className={styles.content}>
				<div className={styles.filtersBlock}></div>
				<div className={styles.servicesBlock}>
					<div className={styles.contentHeadBlock}>
						<div className={styles.contentHead}>
							<div className={styles.allServices}>Всі сервіси (350)</div>
							<button>Ранок</button>
						</div>
						<div className={styles.select}><label htmlFor="sorting">Сортувати за:</label><select name="sort" id="sorting">
							<option value="">Рейтинг</option>
							<option value="rating">Рейтинг</option>
							<option value="cost">Ціна</option>
							<option value="daytime">Частина доби</option>
							<option value=""></option>
							<option value=""></option>
						</select></div>

					</div>
					<div>
						<ServiceCard/>
						<ServiceCard/>
						<ServiceCard/>
						<ServiceCard/>
						<ServiceCard/>
						<ServiceCard/>
						<ServiceCard/>
						<ServiceCard/>
						<ServiceCard/>
						<ServiceCard/>
					</div>

				</div>

			</div>
		</div>
	)
}