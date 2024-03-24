import {create} from "zustand";
import {persist} from "zustand/middleware";
import {FetchDataAdmin} from "./fetch_admin_data.tsx";
import {ADMIN_CITIES} from "../ROUTES.tsx";

import axios from "axios";

interface RootCities {
    dataCity: City[];
    fetchDataCities: () => Promise<City>;
    deleteCity: (id: number) => Promise<void>;
    addCity: (city: string, countryId:number) => void;
    editCity: (id: number, newName: string, countryId:number) => void;
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

            fetchDataCities: async (): Promise<City> => {
                const response = FetchDataAdmin(ADMIN_CITIES).then(
                    (res) => res.data.data
                );
                set({dataCity: await response});

                return await response;
            },
            deleteCity: async (id: number): Promise<void> => {
                try {
                    const token = localStorage.getItem("token");
                    const response = await axios.delete(
                        `https://ct-project.pp.ua/api/v1/admin/cities/${id}`,
                        {
                            headers: { Authorization: "Bearer " + token },
                        }

                    );

                    if (response.status === 204) {
                        const updatedData = get().dataCity.filter((city) => city.id !== id);
                        set({dataCity: updatedData});
                        alert('Видалено')
                    }

                } catch (error) {
                    console.error(error);
                }

            },
            addCity: async (city: string, countryId: number ): Promise<void> => {
                const token = localStorage.getItem("token");

                const newId = Math.max(...get().dataCity.map((city) => city.id)) + 1;
                const updatedData = [...get().dataCity, {id: newId, name: city}];
                try {
                    await axios.post(`https://ct-project.pp.ua/api/v1/admin/cities`, {id: newId, name: city, countryId }, {
                        headers: {
                            Authorization: 'Bearer ' + token
                        }
                    });
                } catch (error) {
                    console.error('Server update failed', error);
                }
                set({dataCity: updatedData});
            },
            editCity:async (id: number, newName: string, countryId:number): Promise<void> => {
                const token = localStorage.getItem("token");
                console.log(token)
                try {
                    await axios.put(`https://ct-project.pp.ua/api/v1/admin/cities/${id}`, { id, name: newName, countryId }, {
                        headers: {
                            Authorization: 'Bearer ' + token
                        }
                    });

                    const updatedData = get().dataCity.map((city) =>
                        city.id === id ? {...city, name: newName} : city
                    );
                    set({dataCity: updatedData});
                } catch (error) {
                    console.error('Server update failed', error);
                }
            },
        }),
        {
            name: "dataAdminCities",
        }
    )
);
export default useFetchAdminCities;
