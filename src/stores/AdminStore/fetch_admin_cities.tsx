import { create } from "zustand";
import { persist } from "zustand/middleware";
import { FetchDataAdmin } from "./fetch_admin_data.tsx";
import { ADMIN_CITIES } from "../ROUTES.tsx";

interface RootCities {
  dataCity: City[];
  fetchData: () => Promise<City>;
}

export interface City {
  country: {
    id: number;
    name: string;
  };
  createdAt: string;
  id: number;
  name: string;
  parentId: null;
  slug: string;
  updatedAt: string;
}

const useFetchAdminCities = create<RootCities>()(
  persist(
    (set): RootCities => ({
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
        console.log(await response);
        return await response;
      },
    }),
    {
      name: "dataAdminCities",
    }
  )
);
export default useFetchAdminCities;
