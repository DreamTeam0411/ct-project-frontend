import { create } from "zustand";
import { persist } from "zustand/middleware";
import { FetchDataAdmin } from "./fetch_admin_data.tsx";
import { ADMIN_CATEGORIES } from "../ROUTES.tsx";

interface RootCategories {
  dataCategory: Category[];
  fetchData: () => Promise<Category>;
  deleteCategory: (id:number) => void;
  editCategory: (id: number, updatedCategory: Category) => void
  addCategory:(title:string, photo:string)=> void
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
  id: null | number;
  parentId: null;
  slug: string;
  title: string;
  updatedAt: string;
  updatedBy: {
    email: string;
    firstName: string;
    id: null | number;
    lastName: string;
  };
}


const useFetchAdminCategories = create<RootCategories>()(
  persist(
    (set,get): RootCategories => ({
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
      addCategory: (title: string, photo:string): void => {
        const newId = Math.max(...get().dataCategory.map((city) => city.id)) + 1;
        const newCategory: Category = {
          createdAt: "",
          createdBy: {
            email: "",
            firstName: "",
            id: null,
            lastName: "",
          },
          icon: photo,
          id: newId,
          parentId: null,
          slug: "",
          title: title,
          updatedAt: "",
          updatedBy: {
            email: "",
            firstName: "",
            id: null,
            lastName: "",
          },
        };
        const updatedData: Category[] = [...get().dataCategory, newCategory];
        set({ dataCategory: updatedData });
      },
      deleteCategory: (id: number): void => {
        set(state => ({ dataCategory: state.dataCategory.filter(category => category.id !== id),
        }));
      },

      editCategory: (id: number, updatedCategory: Category): void => {
        set(state => ({
          dataCategory: state.dataCategory.map(category => category.id === id ? updatedCategory : category)
        }));
      }
    }),
    {
      name: "dataAdminCategories",
    }
  )
);
export default useFetchAdminCategories;
