import { create } from "zustand";
import axios from "axios";
import { persist } from "zustand/middleware";
import { HOMEPAGE } from "./ROUTES.tsx";

interface Root {
  data: Data;
  fetchData: () => Promise<Data>;
}

interface Data {
  logo: string;
  links: Links[];
  header: Header;
  categoriesBlock: CategoriesBlock;
  categoriesContent: CategoriesContent[];
  aboutUsBlock: AboutUsBlock[];
  footer: Footer;
  socialMedia: SocialMedia[];
}

interface Links {
  title: string;
  link: string;
}

interface Header {
  title: string;
  description: string;
}

interface CategoriesBlock {
  title: string;
  description: string;
}

interface CategoriesContent {
  title: string;
  icon: string;
  slug: string;
  subcategories: Subcategory[];
}

interface Subcategory {
  title: string;
  slug: string;
}

interface AboutUsBlock {
  title: string;
  description: string;
  image: string;
}

interface Footer {
  description: string;
  privacyPolicyLink: string;
  termsAndCondition: string;
}

interface SocialMedia {
  title: string;
  link: string;
  icon: string;
}

const useFetchData = create<Root>()(
  persist(
    (set): Root => ({
      data: {
        logo: "",
        links: [],
        header: { description: "", title: "" },
        categoriesBlock: { title: "", description: "" },
        categoriesContent: [],
        aboutUsBlock: [],
        footer: {
          description: "",
          privacyPolicyLink: "",
          termsAndCondition: "",
        },
        socialMedia: [],
      },
      fetchData: async (): Promise<Data> => {
        const response = await axios.get(HOMEPAGE);
        set({ data: await response.data.data });
        return response.data.data;
      },
    }),
    {
      name: "data",
    }
  )
);
export default useFetchData;
