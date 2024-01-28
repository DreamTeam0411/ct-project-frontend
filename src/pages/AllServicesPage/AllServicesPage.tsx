import styles from './AllServicesPage.module.css'
import Header from "../../components/Layout/Header/Header.tsx";
import Footer from "../../components/Layout/Footer/Footer.tsx";
import {useEffect, useState} from "react";
import useFetchDataAllMasters from "../../stores/fetchAllMasters.tsx";
import {ServiceCard} from "./ServiceCard/ServiceCard.tsx";
import {AllServicesSelect} from "../../components/UI/AllServicesSelect/AllServicesSelect.tsx";
import {useSearchParams} from "react-router-dom";
import useFetchCategories from "../../stores/fetchCategories.tsx";


export const AllServicesPage = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [isError, setIsError] = useState(false)

	const fetchDataAllMasters = useFetchDataAllMasters(state => state.fetchData)
	const fetchDataCategories = useFetchCategories(state => state.fetchData)

	const dataState = useFetchDataAllMasters(state => state.data)

	const [searchParams] = useSearchParams();
	const category = searchParams.get("category");
	const city = searchParams.get("city");


	console.log(city, category)

	useEffect(() => {
		try {
			setIsLoading(true)
			fetchDataAllMasters(category, city)

		} catch (error) {
			setIsError(true)
			console.log(error)
		} finally {
			setIsLoading(false)
		}


	}, [city, category]);


	useEffect(() => {
		fetchDataCategories()
	}, []);


	if (dataState.length !== 0 && !isError && !isLoading) {
		return (
			<div className={styles.container}>
				<div className={styles.header}><Header/></div>

				<div className={styles.mainBlock}>
					<div className={styles.linksBlock}>
						<AllServicesSelect/>
					</div>

					<div className={styles.content}>

						<div className={styles.servicesBlock}>
							<div className={styles.contentHeadBlock}>
								<div className={styles.contentHead}>
									<div className={styles.allServices}>Вибрано ({dataState.length})</div>

								</div>
								{/*<div className={styles.select}>*/}
								{/*	<label htmlFor="sorting">Сортувати за:</label>*/}
								{/*	<select name="sort" id="sorting">*/}
								{/*		<option value="">Рекомендовано</option>*/}
								{/*		<option value="rating">Рейтинг</option>*/}
								{/*		<option value="cost">Ціна</option>*/}
								{/*		<option value="daytime">Частина доби</option>*/}
								{/*	</select>*/}
								{/*</div>*/}

							</div>
							<div className={styles.serviceCardList}>
								{
									dataState.map(data => <ServiceCard id={data.id} category={data.category} title={data.title} key={data.id} description={data.description} photo={data.photo} user={data.user} price={data.price} createdAt={data.createdAt} city={data.city}/>)}

							</div>

						</div>

					</div>
				</div>
				<div className={styles.footer}>
					<Footer/>
				</div>
			</div>
		)
	} else {


		return (
			<div className={styles.container}>
				<Header/>
				<div className={styles.mainBlock}>
					<div className={styles.linksBlock}>
						<AllServicesSelect/>
					</div>

					<div className={styles.content}>

						<div className={styles.servicesBlock}>
							<div className={styles.contentHeadBlock}>
								<div className={styles.contentHead}>
									<div className={styles.allServices}>Всі сервіси ({dataState.length})</div>

								</div>
								{/*<div className={styles.select}>*/}
								{/*	<label htmlFor="sorting">Сортувати за:</label>*/}
								{/*	<select name="sort" id="sorting">*/}
								{/*		<option value="">Рекомендовано</option>*/}
								{/*		<option value="rating">Рейтинг</option>*/}
								{/*		<option value="cost">Ціна</option>*/}
								{/*		<option value="daytime">Частина доби</option>*/}
								{/*	</select>*/}
								{/*</div>*/}

							</div>
							<div className={styles.serviceCardList}>
								<div className={styles.notFound}>Сервісів не знайдено :(</div>

							</div>

						</div>

					</div>
				</div>
				<div className={styles.footer}>
					<Footer/>
				</div>

			</div>
		)
	}
}