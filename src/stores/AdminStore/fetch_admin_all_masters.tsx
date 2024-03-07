import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ADMIN_SERVICES} from "../ROUTES.tsx";
import axios from "axios";

const token = localStorage.getItem("token");
interface RootMasters {
  dataMasters: Master[];
  fetchData: () => Promise<Master>;
  addMaster: (newMaster: Master) => Promise<void>;
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
        const token = localStorage.getItem('token')
        const response = await axios.get(ADMIN_SERVICES, {
          headers: {
            Authorization: "Bearer " + token,
          },
        }).then(
          (res) => res.data.data
        );
        set({ dataMasters: await response });

        return await response;
      },
      addMaster: async (newMaster: Master) => {

        const response = await axios.post(ADMIN_SERVICES, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });

        if (response.status === 200) {
          set((state) => ({
            dataMasters: [...state.dataMasters, newMaster],
          }));
        } else {
          throw new Error("Не удалось добавить мастера");
        }
      },
    }),
    {
      name: "dataAdminMaters",
    }
  )
);
export default useFetchAdminMasters;
