import styles from "./ServicePage.module.css";
import Header from "../../components/Layout/Header/Header.tsx";
import Footer from "../../components/Layout/Footer/Footer.tsx";
import useFetchDataAllMasters from "../../stores/fetchAllMasters.tsx";
import Loader from "../../components/UI/Loader/Loader..tsx";
import { useParams } from "react-router-dom";
import { ServiceCardDescription } from "../AllServicesPage/ServiceCardDescription/ServiceCardDescription.tsx";

export const ServicePage = () => {

	const searchParams = useParams();
	const searchId: undefined | string | number = searchParams.serviceId
	const dataState = useFetchDataAllMasters(state => state.data)
	console.log(searchParams.serviceId)

	if (dataState.length !== 0 && searchId !== undefined)
		return (
			<div className={styles.container}>
				<div className={styles.header}><Header/></div>


				<div className={styles.wrapper}>
					{dataState.map((data) => data.id === +searchId ? <ServiceCardDescription key={data.id}
																							 description={data.description}
																							 title={data.title}
																							 city={data.city}
																							 user={data.user}
																							 category={data.category}
																							 photo={data.photo}

					/> : '')}
				</div>
				<Footer/>
			</div>
		)
	else {
		<Loader/>
	}
}