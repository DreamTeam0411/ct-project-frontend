import styles from './ServceCard.module.css'
import {Button} from "../../../components/UI/buttons/Button/Button.tsx";

export const ServiceCard = () => {
	return (
		<div className={styles.container}>
			<div className={styles.cardImgBlock}>
				<div className={styles.cardImg}>
					<div className={styles.rating}>
						<div className={styles.cardStarsNumber}>
							<img src="../../../../public/star.svg" alt="star"/>
							5.0</div>
						<div className={styles.cardRatingNumber}>35 відгуків</div>
					</div>
				</div>
				<div className={styles.button}><Button children={"Вибрати і продовжити"}></Button></div>

			</div>
			<div className={styles.cardInformation}>
				<div className={styles.cardTitle}>Косяненко Ангеліна</div>
				<div className={styles.cardProfession}>Майстер манікюру</div>
				<div className={styles.cardAddress}>Політехнічна 15, Львів</div>
				<div className={styles.cardDescription}>Про бізнес. Lorem ipsum dolor sit amet consectetur. Viverra proin turpis ipsum nunc enim ut. At sit ullamcorper interdum tincidunt bibendum. Duis placerat semper orci mi facilisis. Enim nullam eget curabitur ipsum velit...</div>
				<div className={styles.social}>
					<div className={styles.icon}><img src="../../../../public/instagram.svg" alt="instagram"/></div>
					<div className={styles.icon}><img src="../../../../public/facebook.svg" alt="facebook"/></div>
				</div>
			</div>
		</div>
	)
}