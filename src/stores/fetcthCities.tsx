import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";
import { CITIES } from "./ROUTES.tsx";

interface RootCities {
  data: City[];
  fetchData: () => Promise<City>;
}
export interface City {
  id: number;
  name: string;
  slug: string;
}
const useFetchDataCities = create<RootCities>()(
  persist(
    (set): RootCities => ({
      data: [
        {
          id: 0,
          name: "",
          slug: "",
        },
      ],

      fetchData: async (): Promise<City> => {
        const response = await axios.get(CITIES);
        set({ data: await response.data.data });
        // console.log(response.data.data)
        return response.data.data;
      },
    }),
    {
      name: "dataCities",
    }
  )
);
export default useFetchDataCities;
