import { create } from "zustand";
import { persist } from "zustand/middleware";
import { FetchDataAdmin } from "./fetch_admin_data.tsx";
import { ADMIN_SERVICES } from "../ROUTES.tsx";

interface RootMasters {
  dataMasters: Master[];
  fetchData: () => Promise<Master>;
}

export interface Master {
  category: {
    id: number;
    slug: string;
    title: string;
  };
  city: {
    id: number;
    name: string;
    slug: string;
  };
  createdAt: string;
  description: string;
  id: number;
  photo: null;
  price: number;
  title: string;
  updatedAt: string;
  user: {
    email: string;
    firstName: string;
    id: number;
    lastName: string;
  };
}

const useFetchAdminMasters = create<RootMasters>()(
  persist(
    (set): RootMasters => ({
      dataMasters: [
        {
          category: {
            id: null,
            slug: "",
            title: "",
          },
          city: {
            id: null,
            name: "",
            slug: "",
          },
          createdAt: "",
          description: "",
          id: null,
          photo: null,
          price: null,
          title: "",
          updatedAt: "",
          user: {
            email: "",
            firstName: "",
            id: null,
            lastName: "",
          },
        },
      ],

      fetchData: async (): Promise<Master> => {
        const response = FetchDataAdmin(ADMIN_SERVICES).then(
          (res) => res.data.data
        );
        set({ dataMasters: await response });
        console.log(await response);
        return await response;
      },
    }),
    {
      name: "dataAdminMaters",
    }
  )
);
export default useFetchAdminMasters;
