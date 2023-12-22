import styles from './SuccessRegistrationPage.module.css'
import {Link} from "react-router-dom";
import Header from "../../components/Layout/Header/Header.tsx";
import Footer from "../../components/Layout/Footer/Footer.tsx";

export const SuccessRegistrationPage = () => {
	return (
		<div className={styles.wrapper}>
			<Header/>
			<div className={styles.container}>
				<h1>Дякуємо за реєстрацію</h1>
				<h3>Для завершення реєстрації прейдіть до своєї пошти та підтвердіть реєстрацію натиснувши на посилання</h3>
				<img src="/Сheckmark.svg" alt="check"/>
				<Link to='/'> ← На головну</Link>
			</div>
			<Footer/>
		</div>
	);
};