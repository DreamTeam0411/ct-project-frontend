import {MouseEvent, useEffect, useState} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import styles from "./SearchForm.module.css";
import useFetchDataAllMasters from "../../../stores/fetchAllMasters.tsx";
import useFetchCategories from "../../../stores/fetchCategories.tsx";
import useFetchDataCities from "../../../stores/fetcthCities.tsx";

interface SearchFormProps {

}


export const SearchForm: React.FC<SearchFormProps> = () => {

	const [searchParams] = useSearchParams();
	const category = searchParams.get("category");
	const city = searchParams.get("city");
	const [inputValue, setInputValue] = useState(category || "");
	const [inputCity, setInputCity] = useState(city || "");
	const navigate = useNavigate();

	const fetchData = useFetchDataAllMasters(state => state.fetchData)

	const fetchDataCities = useFetchDataCities(state => state.fetchData)
	const dataStateCities = useFetchDataCities(state => state.data)

	const fetchDataCategories = useFetchCategories(state => state.fetchData)
	const dataStateCategories = useFetchCategories(state => state.data)


	useEffect(() => {
		fetchDataCities();
		fetchDataCategories();
	}, []);

	useEffect(() => {
		try {
			fetchData(inputValue, inputCity)

		} catch (error) {
			console.log(error)
		}
	}, [inputCity, inputValue, category, city, setInputCity, setInputValue]);

	const addTask = (evt: MouseEvent) => {
		evt.preventDefault()
		navigate(`/all-services/?category=${inputValue}&city=${inputCity}`)
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
						value={inputValue}
						onChange={(evt) => {
							setInputValue(evt.target.value);
							navigate(`/all-services/?category=${inputValue}&city=${inputCity}`)
						}}
					>
						<option
							disabled
							hidden>
							Локація
						</option>

						{dataStateCategories.map(el => <option key={el.id} value={el.slug}>{el.title}</option>)}

					</select>

					<div className={styles.searchFormDivLine}></div>
					<div className={styles.searchFormSelect}>
						<select
							name="select"
							className={styles.searchFormSelectBox}
							value={inputCity}
							onChange={(evt) => {
								setInputCity(evt.target.value);
								navigate(`/all-services/?category=${inputValue}&city=${inputCity}`)
							}}
						>
							<option
								disabled
								selected
								hidden>
								Локація
							</option>
							{dataStateCities.map(el => <option key={el.id} value={el.slug}>{el.name}</option>)}
						</select>
					</div>
				</div>
			</form>
		</div>
	);
};
