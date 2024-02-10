import {create} from "zustand";
import {persist} from "zustand/middleware";
import axios from "axios";
 interface RootCategories {
	data: Category[]
	fetchData: () => Promise<Category>
}
interface Category {
	id: number
	title: string
	slug: string
}
const useFetchCategories = create<RootCategories>()(persist((set): RootCategories => ({
		data: [{
			id: 0,
			title: '',
			slug: ''
			}],

		fetchData: async (): Promise<Category> => {
			const url = `https://ct-project.pp.ua/api/v1/categories`
			const response = await axios.get(url)
			set({data: await response.data.data})
			// console.log(response.data.data)
			return response.data.data
		},

	}), {
		name: "dataCategories"
	})
)
export default useFetchCategories