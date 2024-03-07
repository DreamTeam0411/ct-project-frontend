import { create } from "zustand";
import { persist } from "zustand/middleware";
import { FetchDataAdmin } from "./fetch_admin_data.tsx";
import { ADMIN_CATEGORIES } from "../ROUTES.tsx";

interface RootCategories {
  dataCategory: Category[];
  fetchData: () => Promise<Category>;
}

export interface Category {
  createdAt: string;
  createdBy: {
    email: string;
    firstName: string;
    id: null;
    lastName: string;
  };
  icon: string;
  id: null;
  parentId: null;
  slug: string;
  title: string;
  updatedAt: string;
  updatedBy: {
    email: string;
    firstName: string;
    id: null;
    lastName: string;
  };
}
const token =localStorage.getItem("token")
console.log(token)
const useFetchAdminCategories = create<RootCategories>()(
  persist(
    (set): RootCategories => ({
      dataCategory: [
        {
          createdAt: "",
          createdBy: {
            email: "",
            firstName: "",
            id: null,
            lastName: "",
          },
          icon: "",
          id: null,
          parentId: null,
          slug: "",
          title: "",
          updatedAt: "",
          updatedBy: {
            email: "",
            firstName: "",
            id: null,
            lastName: "",
          },
        },
      ],

      fetchData: async (): Promise<Category> => {
        const response = FetchDataAdmin(ADMIN_CATEGORIES).then(

          (res) =>
            res.data.data


        );
        set({ dataCategory: await response });


        return await response;
      },
    }),
    {
      name: "dataAdminCategories",
    }
  )
);
export default useFetchAdminCategories;
