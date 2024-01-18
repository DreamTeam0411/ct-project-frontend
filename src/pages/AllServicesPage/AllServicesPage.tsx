import styles from './AllServicesPage.module.css'
import Header from "../../components/Layout/Header/Header.tsx";
import Footer from "../../components/Layout/Footer/Footer.tsx";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import Loader from "../../components/UI/Loader/Loader..tsx";
import useFetchDataAllMasters from "../../stores/fetchAllMasters.tsx";
import {ServiceCard} from "./ServiceCard/ServiceCard.tsx";


export const AllServicesPage = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [isError, setIsError] = useState(false)
	const fetchData = useFetchDataAllMasters(state => state.fetchData)
	const dataState = useFetchDataAllMasters(state => state.data)

	useEffect(() => {
		try {
			setIsLoading(true)
			fetchData()
		} catch (error) {
			setIsError(true)
			console.log(error)
		} finally {
			setIsLoading(false)
		}


	}, []);
	// console.log(dataState)

	if (isLoading) return <Loader/>
	if (Object.keys(dataState).length !== 0 && !isError)
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
									<div className={styles.allServices}>Всі сервіси ({dataState.length})</div>

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
								{dataState.map(data => <ServiceCard id={data.id} category={data.category} title={data.title} key={data.id}
								description={data.description} photo={data.photo} user={data.user} price={data.price} createdAt={data.createdAt}
								city={data.city}/>)}

							</div>

						</div>

					</div>
				</div>
				<Footer/>
			</div>
		)
	else {
		return (<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
			<div style={{fontFamily: 'Inter', margin: '30px', color: 'grey'}}>Завантаження

			</div>
			<div><Loader/></div>
		</div>)
	}
}