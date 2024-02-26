import create from "zustand";

export type State = {
  title: string;
  subtitle: string;
  contentSubtitle: string;
  content: string;
  photo: string;
  setTitle: (title: string) => void;
  setSubtitle: (subtitle: string) => void;
  setContentSubtitle: (contentSubtitle: string) => void;
  setContent: (content: string) => void;
  setPhoto: (photo: string) => void;
};

export const useBusinessStore = create<State>((set) => ({
  title: "Розкрийте свій талант на BeautyBook",
  subtitle:
    "Якщо ви є професійним б'юті-майстром і хочете розмістити своє оголошення на нашому сайті, ми вас вітаємо!",
  contentSubtitle: "Приєднуйтеся та отримайте унікальні переваги:",
  content:
    "Збільшіть потік клієнтів завдяки ефективному залученню.\n" +
    "Розміщуйте свої оголошення безкоштовно і з легкістю.\n" +
    "Отримуйте об'єктивного зворотного зв'язку від клієнтів.\n" +
    "Отримаєте свій кабінет для управління бізнесом (незабаром).",
  photo: "/forBusinessImage.png",
  setTitle: (title) => set({ title }),
  setSubtitle: (subtitle) => set({ subtitle }),
  setContentSubtitle: (contentSubtitle) => set({ contentSubtitle }),
  setContent: (content) => set({ content }),
  setPhoto: (photo) => set({ photo }),
}));
