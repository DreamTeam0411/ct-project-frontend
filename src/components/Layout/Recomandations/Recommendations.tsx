import Card from "./Card/Card.tsx";
import styles from "./Recommendations.module.css";

const Recommendations = () => {
	return (
		<div className={styles.recommendations}>
			<div className={styles.recommendationsTitle}>Рекомендовано</div>
			<div className={styles.cards}>
				<Card
					image="/hairdresser-4.jpg"
					serviceName={"Архіпова Єлизавета"}
					cardCategory={"Майстер манікюру"}
					cardAddress={"Політехнічна, 15, Львів"}
					cardTel={"050-312-66-55"}
				/>
				<Card
					image="/hairdresser-1.jpg"
					serviceName={"Сващенко Ірина"}
					cardCategory={"Косметолог"}
					cardAddress={"Шевченківська, 15, Київ"}
					cardTel={"073-658-86-77"}
				/>
				<Card
					image="/hairdresser-2.jpg"
					serviceName={"Волошина Дарина"}
					cardCategory={"Перукар"}
					cardAddress={"Героїв праці, 20, Харків"}
					cardTel={"093-207-67-55"}
				/>
				<Card
					image="/hairdresser-3.jpg"
					serviceName={"Андрущевич Ігор"}
					cardCategory={"Масажист"}
					cardAddress={"Перемоги, 100, Дніпро"}
					cardTel={"073-677-55-90"}
				/>
			</div>
		</div>
	);
};
export default Recommendations;
