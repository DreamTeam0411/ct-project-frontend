import styles from './ServceCard.module.css'
import {Button} from "../../../components/UI/buttons/Button/Button.tsx";
import {SubCategoryButton} from "../../../components/UI/SubCategoryUI/SubCategoryButton/SubCategoryButton.tsx";


export const ServiceCard = () => {
	return (

		<div className={styles.container}>
			<div className={styles.mainPart}>
				<div className={styles.cardImgBlock}>
					<div className={styles.cardImg}>

					</div>


				</div>
				<div className={styles.cardInformation}>
					<div className={styles.cardCategory}>{<SubCategoryButton children={'Манікюр'}/>}</div>
					<div className={styles.mainInformation}>
						<div className={styles.cardTitle}>Косяненко Ангеліна</div>
						<div className={styles.cardProfession}>Майстер манікюру</div>
						<div className={styles.cardAddress}>Політехнічна 15, Львів</div>
						<div className={styles.cardDescription}>Привіт усім! Мене звуть Наталя, я - досвідчений майстер
							манікюру та педикюру. запрошую вас - у затишний салон в самому центрі міста.
						</div>
					</div>
					<div className={styles.social}>
						<div className={styles.icon}><img src="../../../../public/instagram.svg" alt="instagram"/></div>
						<div className={styles.icon}><img src="../../../../public/facebook.svg" alt="facebook"/></div>
					</div>
				</div>
			</div>
			<div className={styles.orderButton}>
				<Button>Записатись</Button>
			</div>

		</div>

	)
}