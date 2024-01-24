import {create} from "zustand";
import {persist} from "zustand/middleware";
import axios from "axios";

interface RootCities {
	data: City[]
	fetchData: () => Promise<City>
}
export interface City {
	id: number
	name: string
	slug: string
}
const useFetchDataCities = create<RootCities>()(persist((set): RootCities => ({
		data: [{
			id: 0,
			name: '',
			slug: ''
		}],

		fetchData: async (): Promise<City> => {
			const url = `https://ct-project.pp.ua/api/v1/cities`
			const response = await axios.get(url)
			set({data: await response.data.data})
			console.log(response.data.data)
			return response.data.data
		},

	}), {
		name: "dataCities"
	})
)
export default useFetchDataCities