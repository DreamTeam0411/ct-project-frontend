// auth.tsx

import axios from "axios";
import {create} from "zustand";
import {API} from "./ROUTES.tsx";

axios.defaults.baseURL = API;

const setAuthHeader = (token: string) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = "";
// };

const initialState = {
    loading: false,
    success: false,
    error: false,
    data: null,
    errorData: null,
};

export const useGetData = create((set) => {
    return {
        ...initialState,

        execute: async (email: string, password: string) => {
            set({...initialState, loading: true});
            try {
                const res = await axios.post("/login", {
                    email: email,
                    password: password,
                });

                res.data.roles.forEach((role) => {
                    if (role.id !== 1) {
                        alert("You are not an admin ");
                    }
                    const token = res.data.Bearer.accessToken;
                    console.log(token, res);
                    setAuthHeader(token);
                    localStorage.setItem("token", token);

                    set({
                        ...initialState,
                        success: true,
                        data: token,
                    });
                });
            } catch (err) {
                console.log("Error in data fetch:", err.message);
                alert(`Error in data fetch:${err.message}` );
                set({...initialState, error: true, errorData: err.message});
            }
        },
    };
});
