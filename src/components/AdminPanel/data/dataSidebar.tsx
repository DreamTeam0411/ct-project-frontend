import { HiOutlineLightningBolt } from "react-icons/hi";
import { RiGroupLine, RiSuitcaseLine } from "react-icons/ri";
import { FiPhone } from "react-icons/fi";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { ReactNode } from "react";

type TypeSideBarItems = {
  title: string;
  path: string;
  icon: ReactNode;
};
type TypeBookmarkItems = {
  title: string;
  path: string;
};
export const sideBarItems: TypeSideBarItems[] = [
  {
    title: "Головна сторінка",
    path: "/admin-panel/main-page/banner",
    icon: <HiOutlineLightningBolt />,
  },
  {
    title: "Всі майстри",
    path: "/admin-panel/all-masters",
    icon: <RiGroupLine />,
  },
  { title: "Контакти", path: "/admin-panel/contacts", icon: <FiPhone /> },
  {
    title: "Для бізнесу",
    path: "/admin-panel/business",
    icon: <RiSuitcaseLine />,
  },
  {
    title: "Документи",
    path: "/admin-panel/documents",
    icon: <MdOutlineDocumentScanner />,
  },
];
export const BookmarkItems: TypeBookmarkItems[] = [
  {
    title: "Банер",
    path: "/admin-panel/main-page/banner",
  },
  {
    title: "Рекомендовано",
    path: "/admin-panel/main-page/recommendations",
  },
  { title: "Категорії", path: "/admin-panel/main-page/categories" },
  {
    title: "Міста",
    path: "/admin-panel/main-page/cities",
  },
  {
    title: "Про нас",
    path: "/admin-panel/main-page/about-us",
  },
];
