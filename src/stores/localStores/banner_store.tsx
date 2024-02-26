import create from "zustand";

type State = {
  item: {
    titleFirstLineText: string;
    titleSecondLineText: string;

    image: string;
  };
  updateItem: (key: keyof State["item"], value: string) => void;
};
export const useStoreBanner = create<State>((set) => ({
  item: {
    titleFirstLineText:
      "Знаходьте\n " +
      "\n" +
      "найкращих\n " +
      "\n" +
      "фахівців та замовляйте\n " +
      "\n" +
      "послуги онлайн !",
    titleSecondLineText: "Записуйтеся на сеанс зручно та просто!",

    image: "/promo2-min.jpg",
  },

  updateItem: (key, value) =>
    set((state) => ({
      item: {
        ...state.item,
        [key]: value,
      },
    })),
}));
