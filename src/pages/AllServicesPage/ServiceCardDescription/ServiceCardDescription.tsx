import styles from './ServiceCardDescription.module.css'
import {Category, City, User} from "../../../stores/fetchAllMasters.tsx";
import {BasicModalWindow} from "../../../components/UI/BasicModalWindow/BasicModalWindow.tsx";
import {AppointmentBlock} from "../../../components/Layout/AppointmentBlock/AppointmentBlock.tsx";
import {useState} from "react";
import { Link } from 'react-router-dom';

type PropsType = {
	description: string
	title: string
	user: User
	city: City
	category: Category
	photo: null | string | undefined

}
export const ServiceCardDescription = ({description,  user, category,  city}: PropsType) => {
	const [openModal, setOpenModal] = useState(false);

	const closeModal = () => {
		setOpenModal(false);
	};

	const openModalButton = () => {
		setOpenModal(true);
	};
	return (
		<div className={styles.wrapper}>
			<div className={styles.breadCrumbs}><Link to='/'>Головна/</Link><p>{category.title}</p></div>
			<div className={styles.container}>
				<div className={styles.imageBlock}>


				</div>
				<div>
					<div className={styles.mainPart}>

						<div className={styles.cardInformation}>

							<div className={styles.mainInformation}
							>
								<div className={styles.cardTitle}>
									<div className={styles.cardTitleInfo}>{user.firstName} {
										user.lastName}</div>

									<div className={styles.orderButton}>
										<button className={styles.button} onClick={openModalButton}>
											Записатись
										</button>
									</div>
								</div>

								<div className={styles.cardAddress}>{city.name}</div>
								<div className={styles.workTimeBlock}>
									<div className={styles.workTime}>Пн - Нд 10:00-18:00</div>
									<div className={styles.phoneNumber}>+{user.phoneNumber}</div>
								</div>
								<div className={styles.cardDescription}>{description}</div>
							</div>
							<div className={styles.social}>
								В соцмережах:
								<div className={styles.icon}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
									>
										<path
											d="M17.5109 2H6.48909C4.00983 2 2 4.00983 2 6.48909V17.5109C2 19.9902 4.00983 22 6.48909 22H17.5109C19.9902 22 22 19.9902 22 17.5109V6.48909C22 4.00983 19.9902 2 17.5109 2Z"
											fill="url(#paint0_linear_1188_2807)"
										/>
										<path
											d="M8.9281 5.46387H15.1629C15.3015 5.53314 15.5093 5.53314 15.6479 5.60242C16.2559 5.70095 16.8243 5.9671 17.2894 6.37095C17.7544 6.7748 18.0976 7.30035 18.2804 7.88853C18.3827 8.22748 18.4523 8.57545 18.4882 8.92767V15.024C18.3892 15.7966 18.1039 16.5336 17.6569 17.1715C17.2734 17.6158 16.7927 17.9657 16.252 18.194C15.7113 18.4223 15.1253 18.5228 14.5395 18.4878H9.34376C8.41653 18.5328 7.50486 18.2371 6.78054 17.6565C6.34009 17.2759 5.9925 16.7996 5.76437 16.2641C5.53623 15.7286 5.43359 15.148 5.4643 14.5667V9.71742C5.45286 9.3696 5.47606 9.0215 5.53358 8.67828C5.60353 7.96805 5.89555 7.29794 6.36814 6.76317C6.84072 6.2284 7.46983 5.85618 8.16607 5.69941L8.9281 5.46387ZM6.78054 12.0451V14.7469C6.75101 15.0909 6.79704 15.4373 6.9154 15.7617C7.03377 16.086 7.22162 16.3806 7.4658 16.6248C7.70997 16.869 8.00457 17.0568 8.32897 17.1752C8.65336 17.2936 8.99971 17.3396 9.34376 17.3101C11.1449 17.3793 12.9461 17.3793 14.7473 17.3101C16.3406 17.3101 17.2412 16.3402 17.3105 14.7469C17.3798 12.9457 17.3798 11.1445 17.3105 9.34333C17.3285 9.00199 17.2744 8.6607 17.152 8.34158C17.0295 8.02247 16.8413 7.73267 16.5996 7.49097C16.358 7.24928 16.0681 7.0611 15.749 6.93863C15.4299 6.81617 15.0886 6.76216 14.7473 6.78011C12.9461 6.71084 11.1449 6.71084 9.34376 6.78011C8.99971 6.75058 8.65336 6.7966 8.32897 6.91497C8.00457 7.03334 7.70997 7.22119 7.4658 7.46536C7.22162 7.70954 7.03377 8.00414 6.9154 8.32853C6.79704 8.65293 6.75101 8.99928 6.78054 9.34333V12.0451Z"
											fill="white"
										/>
										<path
											d="M8.67773 12.0727C8.67956 11.173 9.03779 10.3107 9.67399 9.67448C10.3102 9.03828 11.1725 8.68005 12.0723 8.67822C12.967 8.69595 13.8201 9.05927 14.4529 9.69207C15.0857 10.3249 15.4491 11.178 15.4668 12.0727C15.465 12.9725 15.1067 13.8348 14.4705 14.471C13.8343 15.1072 12.972 15.4654 12.0723 15.4673C11.1775 15.4496 10.3244 15.0862 9.69158 14.4534C9.05878 13.8206 8.69546 12.9675 8.67773 12.0727ZM12.0723 9.92519C11.6515 9.91835 11.2383 10.0373 10.8855 10.2668C10.5328 10.4963 10.2567 10.8259 10.0925 11.2134C9.92826 11.6009 9.8835 12.0285 9.96392 12.4416C10.0443 12.8547 10.2463 13.2343 10.5438 13.5319C10.8414 13.8295 11.2211 14.0314 11.6341 14.1118C12.0472 14.1922 12.4749 14.1475 12.8623 13.9833C13.2498 13.8191 13.5794 13.5429 13.8089 13.1902C14.0384 12.8375 14.1574 12.4242 14.1505 12.0035C14.1505 11.4523 13.9316 10.9237 13.5418 10.5339C13.1521 10.1442 12.6235 9.92519 12.0723 9.92519Z"
											fill="white"
										/>
										<path
											d="M14.7056 8.53982C14.7017 8.4296 14.7206 8.31977 14.761 8.21716C14.8014 8.11455 14.8625 8.02136 14.9404 7.94338C15.0184 7.8654 15.1116 7.8043 15.2142 7.7639C15.3168 7.72349 15.4267 7.70463 15.5369 7.7085C15.7526 7.72309 15.9556 7.81536 16.1085 7.96821C16.2613 8.12107 16.3536 8.32414 16.3682 8.53982C16.3682 8.76029 16.2806 8.97174 16.1247 9.12764C15.9688 9.28354 15.7574 9.37113 15.5369 9.37113C15.3164 9.37113 15.105 9.28354 14.9491 9.12764C14.7932 8.97174 14.7056 8.76029 14.7056 8.53982Z"
											fill="white"
										/>
										<defs>
											<linearGradient
												id="paint0_linear_1188_2807"
												x1="0.72532"
												y1="23.1084"
												x2="24.2792"
												y2="-0.0990648"
												gradientUnits="userSpaceOnUse"
											>
												<stop stop-color="#FED576"/>
												<stop offset="0.26" stop-color="#F47133"/>
												<stop offset="0.61" stop-color="#BC3081"/>
												<stop offset="1" stop-color="#4C63D2"/>
											</linearGradient>
										</defs>
									</svg>
								</div>
								<div className={styles.icon}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
									>
										<path
											d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
											fill="#1778F2"
										/>
										<path
											d="M12.8945 18V12.5258H14.6635L14.9288 10.3923H12.8945V9.0302C12.8945 8.41256 13.0597 7.99162 13.9124 7.99162H15V6.08403C14.4736 6.02618 13.9445 5.99816 13.4151 6.00009C11.847 6.00009 10.7735 6.99427 10.7735 8.82015V10.3923H9V12.5258H10.7735V18H12.8945Z"
											fill="#FDFDFD"
										/>
									</svg>
								</div>
								<div className={styles.icon}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
									>
										<path
											d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
											fill="#419FD9"
										/>
										<path
											d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
											fill="url(#paint0_linear_1188_2819)"
										/>
										<path
											d="M6.75621 11.8744C9.70899 10.6044 11.678 9.76705 12.6632 9.36246C15.476 8.20739 16.0606 8.00673 16.4415 8.00006C16.5253 7.99867 16.7127 8.01917 16.834 8.11637C16.9365 8.19847 16.9647 8.30938 16.9782 8.38719C16.9917 8.46504 17.0085 8.64234 16.9951 8.78086C16.8427 10.3621 16.1831 14.1993 15.8475 15.9703C15.7056 16.7197 15.426 16.971 15.1553 16.9955C14.5671 17.049 14.1205 16.6118 13.5508 16.2431C12.6593 15.6662 12.1557 15.307 11.2903 14.744C10.2903 14.0934 10.9386 13.7358 11.5085 13.1514C11.6576 12.9985 14.2493 10.6711 14.2995 10.4601C14.3057 10.4336 14.3116 10.3352 14.2523 10.2832C14.1931 10.2313 14.1057 10.249 14.0426 10.2632C13.9532 10.2832 12.5291 11.2125 9.77017 13.0512C9.36592 13.3252 8.99979 13.4587 8.67173 13.4517C8.31009 13.444 7.61442 13.2499 7.09725 13.0839C6.46293 12.8803 5.95877 12.7727 6.00266 12.427C6.02553 12.2469 6.2767 12.0627 6.75621 11.8744Z"
											fill="white"
										/>
										<defs>
											<linearGradient
												id="paint0_linear_1188_2819"
												x1="12"
												y1="2"
												x2="12"
												y2="21.8517"
												gradientUnits="userSpaceOnUse"
											>
												<stop stop-color="#2AABEE"/>
												<stop offset="1" stop-color="#229ED9"/>
											</linearGradient>
										</defs>
									</svg>
								</div>
							</div>
						</div>
					</div>
					<BasicModalWindow active={openModal} setActive={closeModal}>
						<AppointmentBlock tel={user.phoneNumber} setActive={closeModal}/>
					</BasicModalWindow>


				</div>
			</div>
		</div>
	)
}