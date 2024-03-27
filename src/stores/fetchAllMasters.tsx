import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";
import { SERVICES } from "./ROUTES.tsx";

export interface Root {
  data: DataAllMasters[];
  fetchData: (
    category: string | null,
    city: string | null
  ) => Promise<DataAllMasters>;
}

export interface DataAllMasters {
  id: number;
  category: Category;
  title: string;
  description: string;
  photo: null | string | undefined;
  user: User;
  price: number;
  city: City;
  createdAt: string;
}

export interface Category {
  title: string;
  slug: string;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
}

export interface City {
  name: string;
  slug: string;
}

const useFetchDataAllMasters = create<Root>()(
  persist(
    (set): Root => ({
      data: [
        {
          id: 0,

          category: {
            title: "",
            slug: "",
          },
          title: "",
          description: "",
          photo: '',
          user: {
            id: 0,
            firstName: "",
            lastName: "",
            phoneNumber: "",
            address: "",
          },
          price: 0,
          city: {
            name: "",
            slug: "",
          },
          createdAt: "",
        },
      ],

      fetchData: async (category, city): Promise<DataAllMasters> => {
        let categoryLink = "";
        let cityLink = "";
        if (category && city) {
          categoryLink = `?category=${category}`;
          cityLink = `&city=${city}`;
        }
        if (!category && !city) {
          categoryLink = ``;
          cityLink = ``;
        }
        if (!category && city) {
          if (city === null) {
            cityLink = "";
          } else {
            cityLink = `?city=${city}`;
          }
        }
        if (!city && category) {
          categoryLink = `?category=${category}`;
        }
        // console.log(categoryLink, cityLink);
        const url = `${SERVICES}${categoryLink + cityLink}`;

        const response = await axios.get(url);
        set({ data: await response.data.data });
        // console.log(response.data.data);
        return response.data.data;
      },
    }),
    {
      name: "dataAllMasters",
    }
  )
);
export default useFetchDataAllMasters;
