import styles from './AboutUs.module.css'
import useFetchData from "../../../stores/fetchData.tsx";
import {Button} from "../../../components/UI/buttons/Button/Button.tsx";

const AboutUs = () => {
	const dataState = useFetchData(state => state.data)
	return (

		<div className={styles.aboutUsBlock}>
			{dataState.aboutUsBlock.map((el, index:number) => (
				<div key={index} className={styles.block}>
					<div className={styles.aboutUsImage}>
						<img src={el.image} alt="icon"/>
					</div>
					<div className={styles.aboutUsDescription}>
						<div className={styles.descriptionBold}>{el.title}</div>
						<div className={styles.descriptionBold}>{el.description}</div>
						<div className={styles.description}>{el.description}</div>
						<div className={styles.description}>{el.description}</div>
						<div className={styles.button}>
							<Button children={'Детальніше'}/>
						</div>
					</div>
				</div>
			))}


		</div>
	)
}
export default AboutUs