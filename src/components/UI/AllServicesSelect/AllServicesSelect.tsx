import styles from './AllServicesSelect.module.css'
import {useNavigate, useSearchParams} from "react-router-dom";


const services = [
	{value: '', title: 'Всі сервіси', id: 0},
	{value: 'dogliad-za-nigtiami', title: 'Догляд за нігтями', id: 1},
	{value: 'makiiaz', title: 'Макіяж', id: 2},
	{value: 'farbuvannia-volossia', title: 'Фарбування та волосся', id: 3},
	{value: 'zinoca-strizka', title: 'Жіноча стрижка', id: 4},
	{value: 'colovica-strizka', title: 'Чоловіча стрижка', id: 5},
	{value: 'viyi-ta-brovi', title: 'Вії та брови', id: 6},
	{value: 'masaz', title: 'Масаж', id: 7},
	{value: 'tatuaz', title: 'Татуаж', id: 8},
	{value: 'vidalennia-volossia', title: 'Видалення волосся', id: 9},
	{value: 'kosmetologiia', title: 'Косметологія', id: 10}
];
interface AllServicesSelectProps {
	setCategory:(value:string)=>void
}
export const AllServicesSelect = (props:AllServicesSelectProps) => {
	const [searchParams] = useSearchParams();
	const category = searchParams.get("category");
	const city = searchParams.get("city");

	const navigate = useNavigate();


	const select = (value: string) => {
		props.setCategory(value)
		navigate(`/all-services?category=${value}&city=${city}`);
	}


	return (
		<div className={styles.serviceListBlock}>
			<ul className={styles.servicesList}>

				{services.map(el => <li onClick={() => select(el.value)}
										className={(el.value === category) ? styles.active : styles.listItem}>
					{el.title}
				</li>)}

			</ul>
		</div>

	);
};
