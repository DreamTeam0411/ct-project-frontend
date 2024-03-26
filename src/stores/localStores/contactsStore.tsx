import create from "zustand";

interface State {
  phoneNumber: string;
  email: string;
  setPhoneNumber: (number: string) => void;
  setEmail: (email: string) => void;
  clear: () => void;
}
export const useStoreContacts = create<State>((set) => ({
  phoneNumber: "+38(063) 000-0000",
  email: "beautybook@gmail.com",
  setPhoneNumber: (number) => set({ phoneNumber: number }),
  setEmail: (email) => set({ email: email }),
  clear: () => set({ phoneNumber: "", email: "" }),
}));
