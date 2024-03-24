import {create} from "zustand";
import {persist} from "zustand/middleware";
import { ADMIN_SERVICES_} from "../ROUTES.tsx";
import axios from "axios";


interface RootServices {
    dataServices: Service[];
    fetchData: () => Promise<Service>;
    addService: (newService) => Promise<void>;
    deleteService: (id: number) => void
    editService: (id: number, updatedService: Service) => Promise<void>
}

export interface Service {
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
        address:string;
        phoneNumber:number;
        link:string;
    };
}

const useFetchAdminServices = create<RootServices>()(
    persist(
        (set): RootServices => ({
            dataServices: [
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
                        address:'',
                        phoneNumber: null,
                        link:'',

                    },
                },
            ],

            fetchData: async (): Promise<Service> => {
                const token = localStorage.getItem('token')
                const response = await axios.get(ADMIN_SERVICES_, {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                }).then(
                    (res) => res.data.data
                );
                set({dataServices: await response});

                return await response;
            },
            addService: async (newService: Service) => {
                const token = localStorage.getItem('token')
                const response = await axios.post(ADMIN_SERVICES_, newService,{
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                });

                if (response.status === 201) {
                    set((state) => ({
                        dataServices: [...state.dataServices, newService],
                    }));
                } else {
                    alert("Не удалось добавить мастера")
                    throw new Error("Не удалось добавить мастера");

                }
            },
            deleteService: async (id: number) => {
                const token = localStorage.getItem('token')
                const response = await axios.delete(`${ADMIN_SERVICES_}/${id}`, {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                });
                console.log(response.status)
                if (response.status === 200 || response.status === 422) {

                    set((state) => ({
                        dataServices: state.dataServices.filter(Service => Service.id !== id),
                    }));
                } else {
                    throw new Error("Не удалось удалить мастера");

                }
            },
            editService: async (id: number, updatedService: Service) => {
                const token = localStorage.getItem('token')
                const response = await axios.put(`${ADMIN_SERVICES_}/${id}`, updatedService, {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                });

                if (response.status === 200) {
                    set((state) => ({
                        dataServices: state.dataServices.map((Service) =>
                            Service.id === id ? updatedService : Service
                        ),
                    }));
                } else {
                    throw new Error("Не удалось обновить мастера");

                }
            },


        }),
        {
            name: "dataAdminServices",
        }
    )
);
export default useFetchAdminServices;
