import { useNavigate } from "react-router-dom";

import styles from "./SubCategories.module.css";
import { CategoriesUI } from "../../UI/CategoriesUI/CategoriesUI.tsx";

export const SubCategories = () => {
  const navigate = useNavigate();

  const addCategorie = (content: string) => {
    navigate(`/all-services?category=${content}`);
    scroll(0, 0);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>Обирайте по категоріях</div>
      <div className={styles.categories}>
        <div className={styles.categoriesBlock1}>
          <div className={styles.categoriesBlock1Left}>
            <CategoriesUI
              path={"/CategorieUI-1-min.jpg"}
              content={"Макіяж"}
              onClick={() => addCategorie("makiiaz")}
            />
          </div>
          <div className={styles.categoriesBlock1Right}>
            <div className={styles.categoriesBlock1Img}>
              <CategoriesUI
                path={"/CategorieUI-2-min.jpg"}
                content={"Догляд за нігтями"}
                onClick={() => addCategorie("dogliad-za-nigtiami")}
              />
            </div>
            <div className={styles.categoriesBlock1Img}>
              <CategoriesUI
                path={"/CategorieUI-3-min.jpg"}
                content={"Жіноча стрижка"}
                onClick={() => addCategorie("zinoca-strizka")}
              />
            </div>
            <div className={styles.categoriesBlock1Img}>
              <CategoriesUI
                path={"/CategorieUI-4-min.jpg"}
                content={"Вії та брови"}
                onClick={() => addCategorie("viyi-ta-brovi")}
              />
            </div>
            <div className={styles.categoriesBlock1Img}>
              <CategoriesUI
                path={"/CategorieUI-5-min.jpg"}
                content={"Татуаж"}
                onClick={() => addCategorie("tatuaz")}
              />
            </div>
          </div>
        </div>
        <div className={styles.categoriesBlock2}>
          <div className={styles.categoriesBlock2Img}>
            <CategoriesUI
              path={"/CategorieUI-6-min.jpg"}
              content={"Фарбування та зачіска"}
              onClick={() => addCategorie("farbuvannia-volossia")}
            />
          </div>
          <div className={styles.categoriesBlock2Img}>
            <CategoriesUI
              path={"/CategorieUI-7-min.jpg"}
              content={"Косметологія"}
              onClick={() => addCategorie("kosmetologiia")}
            />
          </div>
        </div>
        <div className={styles.categoriesBlock3}>
          <div className={styles.categoriesBlock3Img}>
            <CategoriesUI
              path={"/CategorieUI-8-min.jpg"}
              content={"Чоловіча стрижка"}
              onClick={() => addCategorie("colovica-strizka")}
            />
          </div>
          <div className={styles.categoriesBlock3Img}>
            <CategoriesUI
              path={"/CategorieUI-9-min.jpg"}
              content={"Масаж"}
              onClick={() => addCategorie("masaz")}
            />
          </div>
          <div className={styles.categoriesBlock3Img}>
            <CategoriesUI
              path={"/CategorieUI-10-min.jpg"}
              content={"Видалення волосся"}
              onClick={() => addCategorie("vidalennia-volossia")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
