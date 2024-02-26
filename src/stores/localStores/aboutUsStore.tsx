import create from "zustand";

type State = {
  item: {
    titleFirstLineText: string;
    titleSecondLineText: string;
    titleThirdLineText: string;
    descriptionFirstLineText: string;
    descriptionSecondLineText: string;
    descriptionThirdLineText: string;
    image: string;
  };
  updateItem: (key: keyof State["item"], value: string) => void;
};
export const useStoreAboutUs = create<State>((set) => ({
  item: {
    titleFirstLineText: "BeautyBook",
    titleSecondLineText: "- твій гід у світі",
    titleThirdLineText: "краси",
    descriptionFirstLineText:
      "Великий вибір послуг та професіоналів, зручний пошук - все це на\n" +
      "            нашому сайті.",
    descriptionSecondLineText: "Знайди ідеального майстра за кілька кліків.",
    descriptionThirdLineText:
      "Записуйся на процедури швидко та без зайвих зусиль.",
    image: "/About.jpg",
  },

  updateItem: (key, value) =>
    set((state) => ({
      item: {
        ...state.item,
        [key]: value,
      },
    })),
}));
