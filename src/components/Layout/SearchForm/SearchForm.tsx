import {MouseEvent, useState} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import styles from "./SearchForm.module.css";

interface SearchFormProps {
}

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
const cities = [
	{value: "", title: 'Всі міста', id: 0},
	{value: "ukrayina-kiyiv", title: 'Київ', id: 1},
	{value: "ukrayina-xarkiv", title: 'Харків', id: 2},
	{value: "ukrayina-odesa", title: 'Одеса', id: 3},
	{value: "ukrayina-mikolayiv", title: 'Миколаїв', id: 4},
	{value: "ukrayina-xmelnickii", title: 'Хмельницький', id: 5},
	{value: "ukrayina-lviv", title: 'Львів', id: 6},
	{value: "ukrayina-ternopil", title: 'Тернопіль', id: 7},
	{value: "ukrayina-rivne", title: 'Рівне', id: 8},
	{value: "ukrayina-dnipro", title: 'Дніпро', id: 9},
	{value: "ukrayina-luck", title: 'Луцьк', id: 10},
]

export const SearchForm: React.FC<SearchFormProps> = () => {
	const [searchParams] = useSearchParams();
	const category = searchParams.get("category");
	const city = searchParams.get("city");

	const [inputValue, setInputValue] = useState(category || "");
	const [inputCity, setInputCity] = useState(city || "");
	const navigate = useNavigate();

	const addTask = (evt: MouseEvent) => {
		if (inputValue || inputCity) {
			evt.preventDefault();
			console.log(inputValue);
			console.log(inputCity);

			navigate(`/all-services?category=${inputValue}&city=${inputCity}`);

		} else {
			evt.preventDefault();
			console.log("empty");
		}
	}

	return (
		<div className={styles.searchFormContainer}>
			<form>
				<div className={styles.searchForm}>
					<button
						className={styles.searchFormButton}
						onClick={(evt) => addTask(evt)}
					>
						<img src="/Magnifier.svg" alt=""/>
					</button>
					{/* <input
            type="text"
            name="services"
            value={inputValue}
            placeholder="Сервіс"
            className={styles.searchFormInput}
            onChange={(evt) => {
              setInputValue(evt.target.value);
            }}
            ></input> */}

					<select

						name="services"
						className={styles.searchFormCategorieBox}

						value={inputValue}
						onChange={(evt) => {
							setInputValue(evt.target.value);
						}}
					>
						<option
							disabled
							// selected||
							hidden
							// className={styles.searchFormSelectDisabled}
						>
							Локація
						</option>

						{services.map(el => <option key={el.id} value={el.value}>{el.title}</option>)}

					</select>

					<div className={styles.searchFormDivLine}></div>
					<div className={styles.searchFormSelect}>
						<select
							name="select"
							className={styles.searchFormSelectBox}
							value={inputCity}
							onChange={(evt) => {
								setInputCity(evt.target.value);
							}}
						>
							<option
								disabled
								selected
								hidden
								// className={styles.searchFormSelectDisabled}
							>
								Локація
							</option>
							{cities.map(el => <option key={el.id} value={el.value}>{el.title}</option>)}
						</select>
					</div>
				</div>
			</form>
		</div>
	);
};
