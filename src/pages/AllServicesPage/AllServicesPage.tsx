import styles from './AllServicesPage.module.css'
import Header from "../../components/Layout/Header/Header.tsx";
import {ServiceCard} from "./ServceCard/ServceCard.tsx";
import {SubCategoryUI} from "../../components/UI/SubCategoryUI/SubCategoryUI.tsx";
import {SliderPrice} from "../../components/UI/SliderPrice/SliderPrice.tsx";
import {Button} from "../../components/UI/buttons/Button/Button.tsx";
import Footer from "../../components/Layout/Footer/Footer.tsx";
import {Link} from "react-router-dom";

export const AllServicesPage = () => {
	return (
		<div className={styles.container}>
			<Header/>
			<div className={styles.linksBlock}>
				<div className={styles.breadCrumb}><Link to={'/'}>Головна/Сервіси</Link></div>
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
				<div className={styles.filtersBlock}>
					<div className={styles.titleFilterBlock}>Фільтри</div>
					<div className={styles.searchCityBlock}>
						<div className={styles.searchCityTitle}>Місто</div>
						<input type="text" placeholder={'Де?'} className={styles.input}/>
					</div>
					<div className={styles.subCategoriesBlock}>
						<div className={styles.subCategoriesBlockTitle}>
							Підкатегорії
						</div>
						<div className={styles.subCategories}>
							<SubCategoryUI children={'фарбування'}/>
							<SubCategoryUI children={'СПА'}/>
							<SubCategoryUI children={'макіяж'}/>
							<SubCategoryUI children={'чоловіча стрижка'}/>
							<SubCategoryUI children={'борода'}/>
							<SubCategoryUI children={'педикюр'}/>
							<SubCategoryUI children={'манікюр'}/>
							<SubCategoryUI children={'татуаж'}/>
							<SubCategoryUI children={'вії та брови'}/>
							<SubCategoryUI children={'косметологія'}/>
							<SubCategoryUI children={'видалення волосся'}/>
							<SubCategoryUI children={'жіноча стрижка'}/>
							<SubCategoryUI children={'інші послуги'}/>

						</div>
					</div>
					<div className={styles.priceBlock}>
						<div className={styles.priceBlockTitle}>Ціна</div>
						<SliderPrice/>
					</div>
					<div className={styles.filterButton}><Button children={'Використати фільтри'}/></div>

				</div>
				<div className={styles.servicesBlock}>
					<div className={styles.contentHeadBlock}>
						<div className={styles.contentHead}>
							<div className={styles.allServices}>Всі сервіси (350)</div>
							<button>Ранок</button>
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
			<Footer/>
		</div>
	)
}