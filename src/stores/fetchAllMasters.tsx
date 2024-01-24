 import {create} from "zustand";
import {persist} from "zustand/middleware";
import axios from "axios";

export interface Root {
	data: DataAllMasters[]
	fetchData: (category:string | null, city:string | null) => Promise<DataAllMasters>

}

export interface DataAllMasters {
	id: number
	category: Category
	title: string
	description: string
	photo: null | string | undefined
	user: User
	price: number
	city: City
	createdAt: string

}

interface Category {
	title: string
	slug: string
}

interface User {
	id: number
	firstName: string
	lastName: string
	phoneNumber: string
	address: string
}

interface City {
	name: string
	slug: string
}

const useFetchDataAllMasters = create<Root>()(persist((set): Root => ({
		data: [{
			id: 0,

			category: {
				title: '',
				slug: ''
			},
			title: '',
			description: '',
			photo: null,
			user: {
				id: 0,
				firstName: '',
				lastName: '',
				phoneNumber: '',
				address: ''
			},
			price: 0,
			city: {
				name: '',
				slug: ''
			},
			createdAt: ''

		}],

		fetchData: async (category, city): Promise<DataAllMasters> => {

            let categoryLink = ''
			let cityLink = ''
			if(category !== null && city!==null) {
				categoryLink = `?category=${category}`
				cityLink = `&city=${city}`
			}
			if(category === null && city===null) {
				categoryLink = ``
				cityLink = ``
			}
			if (category === null && city !== null ) {
				cityLink = `?city=${city}`
			}
			if(city ===null && category !== null) {
				categoryLink = `?category=${category}`
			}
			console.log(categoryLink, cityLink)
			const url = `https://ct-project.pp.ua/api/v1/all-services/${categoryLink + cityLink}`

			const response = await axios.get(url)
			set({data: await response.data.data})
			console.log(response.data.data)
			return response.data.data
		},



	}), {
		name: "dataAllMasters"
	})
)
export default useFetchDataAllMasters