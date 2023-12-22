import styles from './LoginPage.module.css'
import {Link} from "react-router-dom";
import {SubmitHandler, useForm} from "react-hook-form";
import {RegistrationForm} from "../RegistrationPage/RegistrationPageTypes.tsx";
import Header from "../../components/Layout/Header/Header.tsx";
import Footer from "../../components/Layout/Footer/Footer.tsx";


const LoginPage = () => {
	const {register, reset, handleSubmit, formState: {errors, isValid}} = useForm<RegistrationForm>({mode: "onChange"})
	const submit: SubmitHandler<RegistrationForm> = () => {


		reset()
		window.location.href = '/'

	}
	return (
		<div>
			<Header/>
		<div className={styles.loginForm}>
			<h2>Логін</h2>
		<form action="" className={styles.form} onSubmit={handleSubmit(submit)}>
			<label htmlFor="email">Логін</label>
			<div className={styles.error}>{errors?.email && <p>{errors?.email?.message}</p>}</div>
			<input type="email" placeholder='введіть електронну адресу' {...register('email', {
				required: "Обов'язкове для заповнення",
				pattern: {
					value: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
					message: "Невірний email"
				}
			})}/>
			<label htmlFor="password">Пароль</label>
			<div className={styles.error}>{errors?.password && <p>{errors?.password?.message}</p>}</div>
			<input type="password" placeholder='введіть пароль' {...register('password', {
				required: "Обов'язкове для заповнення",
				minLength: {
					value: 8,
					message: "Мінімум шість символів"
				},
				pattern: {
					value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/,
					message: "Нерпавильні символи паролю"
				}
			})}/>
			<div className={styles.formButton} ><button disabled={!isValid} >Увійти</button></div>

		</form>
			<div className={styles.links}>
				<div className={styles.noAcc}>Немає аккаунту?</div>
				<Link to={'/registration'}>Зареєструватись</Link>
			</div>
		</div>
			<Footer/>
		</div>


	)
}
export default LoginPage

