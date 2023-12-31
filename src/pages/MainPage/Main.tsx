import Header from "../../components/Layout/Header/Header.tsx";
import Promo from "./Promo/Promo.tsx";
import Recommendations from "../../components/Layout/Recomandations/Recommendations.tsx";
import AboutUs from "./AboutUs/AboutUs.tsx";
import SearchByCity from "../../components/Layout/SearchByCity/SearchByCity.tsx";
import Footer from "../../components/Layout/Footer/Footer.tsx";
import styles from './Main.module.css'
import {useEffect, useState} from "react";
import Loader from "../../components/UI/Loader/Loader..tsx";
import useFetchData from "../../stores/fetchData.tsx";


function MainPage() {
	const [isLoading, setIsLoading] = useState(false)
	const [isError, setIsError] = useState(false)
	const fetchData = useFetchData(state => state.fetchData)
	const dataState = useFetchData(state => state.data)
	
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


	if (isLoading) return <Loader/>
	if (Object.keys(dataState).length !== 0 && !isError)
		return (
			<div className={styles.app}>
				<Header/>
				<Promo/>
				<Recommendations/>
				<AboutUs/>
				<SearchByCity/>
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

export default MainPage
