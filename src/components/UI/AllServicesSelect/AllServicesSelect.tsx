import styles from './AllServicesSelect.module.css'
import {useNavigate, useSearchParams} from "react-router-dom";
import useFetchCategories from "../../../stores/fetchCategories.tsx";


// const services = [
// 	{value: '', title: 'Всі сервіси', id: 0},
// 	{value: 'dogliad-za-nigtiami', title: 'Догляд за нігтями', id: 1},
// 	{value: 'makiiaz', title: 'Макіяж', id: 2},
// 	{value: 'farbuvannia-volossia', title: 'Фарбування та волосся', id: 3},
// 	{value: 'zinoca-strizka', title: 'Жіноча стрижка', id: 4},
// 	{value: 'colovica-strizka', title: 'Чоловіча стрижка', id: 5},
// 	{value: 'viyi-ta-brovi', title: 'Вії та брови', id: 6},
// 	{value: 'masaz', title: 'Масаж', id: 7},
// 	{value: 'tatuaz', title: 'Татуаж', id: 8},
// 	{value: 'vidalennia-volossia', title: 'Видалення волосся', id: 9},
// 	{value: 'kosmetologiia', title: 'Косметологія', id: 10}
// ];

export const AllServicesSelect = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const category = searchParams.get("category");
	const city = searchParams.get("city");
	const navigate = useNavigate();
	const dataCategories = useFetchCategories(state => state.data)

	const select = (value: string) => {
		setSearchParams({category: value})
		if(city!== null){ navigate(`/all-services?category=${value}&city=${city}`)
		} else {
			navigate(`/all-services?category=${value}`)
		}
		scroll(0,0)
	}


	return (
		<div className={styles.serviceListBlock}>
			<ul className={styles.servicesList}>

				{dataCategories.map(el => <li key={el.id} onClick={() => select(el.slug)}
											  className={(el.slug === category) ? styles.active : styles.listItem}>
					{el.title}
				</li>)}

			</ul>
		</div>

	);
};
