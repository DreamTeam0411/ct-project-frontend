import styles from './AllServicesPage.module.css'
import Header from "../../components/Layout/Header/Header.tsx";
import {ServiceCard} from "./ServceCard/ServceCard.tsx";

export const AllServicesPage = () => {
	return (
		<div>
			<Header/>
			<div className={styles.content}>
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
	)
}