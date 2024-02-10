// auth.tsx

import axios from "axios";
import { create } from "zustand";

axios.defaults.baseURL = "https://ct-project.pp.ua/api/v1";

const setAuthHeader = (token) => {
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
      
      set({ ...initialState, loading: true });
      try {
        const res = await axios.post("/login", {
          email: email,
          password: password,
        });

           res.data.roles.forEach((role) => {
          if (role.id === 1) {
            const token =res.data.Bearer.accessToken
                       
            setAuthHeader(token);
            localStorage.setItem("token", token);
            set({
              ...initialState,
              success: true,
              data: token,
            });
          } else {
            alert("You are not an admin ");
          }
        });
      } catch (err) {
        console.error("Error in data fetch:", err);
        set({ ...initialState, error: true, errorData: err.message });
      }
    },
  };
});
