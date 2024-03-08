import { create } from "zustand";
import { persist } from "zustand/middleware";
import { FetchDataAdmin } from "./fetch_admin_data.tsx";
import { ADMIN_CITIES } from "../ROUTES.tsx";
import { deleteCityAdmin } from "./deleteCityAdmin.tsx";

interface RootCities {
  dataCity: City[];
  fetchData: () => Promise<City>;
  deleteCity: (id: number) => Promise<void>;
  addCity: (city: string) => void;
}

export interface City {
  country?: {
    id?: number;
    name?: string;
  };
  createdAt?: string;
  id?: number;
  name?: string;
  parentId?: null;
  slug?: string;
  updatedAt?: string;
}

const useFetchAdminCities = create<RootCities>()(
  persist(
    (set, get): RootCities => ({
      dataCity: [
        {
          country: {
            id: null,
            name: "",
          },
          createdAt: "",
          id: null,
          name: "",
          parentId: null,
          slug: "",
          updatedAt: "",
        },
      ],

      fetchData: async (): Promise<City> => {
          const response = FetchDataAdmin(ADMIN_CITIES).then(
          (res) => res.data.data
        );
        set({ dataCity: await response });

        return await response;
      },
      deleteCity: async (id: number): Promise<void> => {
        await deleteCityAdmin(id);
        const updatedData = get().dataCity.filter((city) => city.id !== id);
        set({ dataCity: updatedData });
      },
      addCity: (city: string): void => {
        const newId = Math.max(...get().dataCity.map((city) => city.id)) + 1;
        const updatedData = [...get().dataCity, { id: newId, name: city }];
        set({ dataCity: updatedData });
      },
    }),
    {
      name: "dataAdminCities",
    }
  )
);
export default useFetchAdminCities;
