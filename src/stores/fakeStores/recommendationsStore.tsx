import create from "zustand";

interface Item {
  id: number;
  image: string;
  serviceName: string;
  cardCategory: string;
  cardAddress: string;
  cardTel: string;
}

interface MyState {
  items: Item[];
  addItem: (item: Item) => void;
  updateItem: (id: number, updatedFields: Partial<Item>) => void;
  removeItem: (id: number) => void;
}
export const useStoreRecommendations = create<MyState>((set) => ({
  items: [
    {
      id: 1,
      image: "/hairdresser-4.jpg",
      serviceName: "Архіпова Єлизавета",
      cardCategory: "Майстер манікюру",
      cardAddress: "Політехнічна, 15, Львів",
      cardTel: "050-312-66-55",
    },
    {
      id: 2,
      image: "/hairdresser-1.jpg",
      serviceName: "Сващенко Ірина",
      cardCategory: "Косметолог",
      cardAddress: "Шевченківська, 15, Київ",
      cardTel: "073-658-86-77",
    },
    {
      id: 3,
      image: "/hairdresser-2.jpg",
      serviceName: "Волошина Дарина",
      cardCategory: "Перукар",
      cardAddress: "Героїв праці, 20, Харків",
      cardTel: "093-207-67-55",
    },
    {
      id: 4,
      image: "/hairdresser-3.jpg",
      serviceName: "Андрущевич Ігор",
      cardCategory: "Масажист",
      cardAddress: "Перемоги, 100, Дніпро",
      cardTel: "073-677-55-90",
    },
  ],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  updateItem: (id, updatedFields) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, ...updatedFields } : item
      ),
    })),
  removeItem: (id) =>
    set((state) => ({ items: state.items.filter((item) => item.id !== id) })),
}));
