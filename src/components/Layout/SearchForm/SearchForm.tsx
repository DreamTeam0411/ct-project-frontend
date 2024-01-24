import {MouseEvent, useEffect, useState} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import styles from "./SearchForm.module.css";
import useFetchCategories from "../../../stores/fetchCategories.tsx";
import useFetchDataCities from "../../../stores/fetcthCities.tsx";

interface SearchFormProps {

}


export const SearchForm: React.FC<SearchFormProps> = () => {

	const [searchParams] = useSearchParams();
	const category = searchParams.get("category");
	const city = searchParams.get("city");

	const navigate = useNavigate();
	const fetchDataCities = useFetchDataCities(state => state.fetchData)
	const dataStateCities = useFetchDataCities(state => state.data)
	const fetchDataCategories = useFetchCategories(state => state.fetchData)
	const dataStateCategories = useFetchCategories(state => state.data)
	const [categoryState, setCategoryState] = useState(category)
	const [cityState, setCityState] = useState(city)


	useEffect(() => {
		fetchDataCities();
		fetchDataCategories();
	}, []);
	useEffect(() => {
		setCityState(city)
		setCategoryState(category)
	}, [city, category]);

	const addTask = (evt: MouseEvent) => {

		navigate(`/all-services?category=${categoryState}&city=${cityState}`)
		evt.preventDefault()
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
					<select
						name="services"
						className={styles.searchFormCategorieBox}
						value={categoryState || ''}
						onChange={(evt) => {
							setCategoryState(evt.target.value)
							if (city  && evt.target.value) {
								navigate(`/all-services?category=${evt.target.value}&city=${city}`)
							} else {
								navigate(`/all-services?category=${evt.target.value}`)
							}
                           if (!evt.target.value) {navigate(`/all-services?city=${city}`)
						}
							if (!city && !evt.target.value) {
								navigate(`/all-services`)
							}

						}}

					>
						<option
							disabled
							hidden>
							Сервіс
						</option>
						<option value=''>Всі сервіси</option>
						{dataStateCategories.map(el => <option key={el.id} value={el.slug}>{el.title}</option>)}

					</select>

					<div className={styles.searchFormDivLine}></div>
					<div className={styles.searchFormSelect}>
						<select
							name="select"
							className={styles.searchFormSelectBox}
							value={cityState || ''}
							onChange={(evt) => {
								setCityState(evt.target.value)
								if (category  && evt.target.value) {
									navigate(`/all-services?category=${category}&city=${evt.target.value}`)
								} else {
									navigate(`/all-services?city=${evt.target.value}`)
								}
								if (!evt.target.value) {
									navigate(`/all-services?category=${category}`)
								}
								if (!evt.target.value && !category) {
									navigate(`/all-services`)
								}


							}}
						>
							<option
								disabled
								selected
								hidden>
								Локація
							</option>
							<option value=''>Всі міста</option>
							{dataStateCities.map(el => <option key={el.id} value={el.slug}>{el.name}</option>)}
						</select>
					</div>
				</div>
			</form>
		</div>
	);
};
