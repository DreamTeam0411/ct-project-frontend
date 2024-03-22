import {create} from "zustand";
import {persist} from "zustand/middleware";
import {FetchDataAdmin} from "./fetch_admin_data.tsx";
import {ADMIN_CATEGORIES} from "../ROUTES.tsx";
import axios from "axios";


interface RootCategories {
    dataCategory: Category[];
    fetchData: () => Promise<Category>;
    deleteCategory: (id: number) => void;
    editCategory: (id: number, updatedCategory) => void
    addCategory: (addCategoryStore) => void
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
        (set, get): RootCategories => ({
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
                set({dataCategory: await response});
                return await response;
            },
            addCategory: async (addCategoryStore): Promise<void> => {
                const newId = Math.max(...get().dataCategory.map((city) => city.id)) + 1;
                const newCategory: Category = {
                    createdAt: "",
                    createdBy: {
                        email: "",
                        firstName: "",
                        id: null,
                        lastName: "",
                    },
                    icon: addCategoryStore.icon,
                    id: newId,
                    parentId: null,
                    slug: "",
                    title: addCategoryStore.title,
                    updatedAt: "",
                    updatedBy: {
                        email: "",
                        firstName: "",
                        id: null,
                        lastName: "",
                    },
                };
                const token = localStorage.getItem('token')
                try {
                    const response = await axios.post('https://ct-project.pp.ua/api/v1/admin/categories', newCategory, {
                        headers: {
                            Authorization: "Bearer " + token,
                            "Content-Type": 'multipart/form-data'
                        }
                    });

                    if (response.status === 201) {
                        const updatedData: Category[] = [...get().dataCategory, response.data];
                        set({dataCategory: updatedData});
                        alert('Категорія додана')
                    }
                } catch (error) {
                    if (error.response.status === 400) {
                        alert("Категорія с таким ім'ям вже існує")
                    }
                    if (error.response.status === 422) {
                        alert("Зображення обов'язково має бути доданне")
                    }
                    console.log(error.response.status);

                }
            },
            deleteCategory: async (id: number): Promise<void> => {

                const token = localStorage.getItem('token')
                try {
                    const response = await axios.delete(`https://ct-project.pp.ua/api/v1/admin/categories/${id}`, {
                        headers: {Authorization: "Bearer " + token}
                    });
                    if (response.status === 204) {
                        set(state => ({dataCategory: state.dataCategory.filter(category => category.id !== id)}));
                        alert('Категорію видаленно')
                    }
                } catch (error) {
                    console.log(error)
                }


            },

            editCategory: async (id: number, updatedCategory): Promise<void> => {
                const token = localStorage.getItem('token')
                console.log(updatedCategory)
                try {
                    const response = await axios.post(`https://ct-project.pp.ua/api/v1/admin/categories/${id}`, updatedCategory, {
                        headers: {
                            Authorization: "Bearer " + token,
                            "Content-Type": 'multipart/form-data',
                        },

                    });

                    if (response.status === 200) {
                        set(state => ({
                            dataCategory: state.dataCategory.map(category => category.id === id ? response.data : category)
                        }));
                    }
                } catch (error) {
                    console.error(error);

                }

            }
        }),
        {
            name: "dataAdminCategories",
        }
    )
);
export default useFetchAdminCategories;
