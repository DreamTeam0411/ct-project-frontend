import { useNavigate } from "react-router-dom";

import styles from "./SubCategories.module.css";
import { CategoriesUI } from "../../UI/CategoriesUI/CategoriesUI.tsx";


export const SubCategories = () => {
  const navigate = useNavigate();

  const addTask = (content: string) => {
    console.log(content);

    navigate(`/services-all?category=${content}&city=`);
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
              onClick={() => addTask("makiiaz")}
            />
          </div>
          <div className={styles.categoriesBlock1Right}>
            <CategoriesUI
              path={"/CategorieUI-2-min.jpg"}
              content={"Догляд за нігтями"}
              onClick={() => addTask("dogliad-za-nigtiami")}
            />
            <CategoriesUI
              path={"/CategorieUI-3-min.jpg"}
              content={"Жіноча стрижка"}
              onClick={() => addTask("zinoca-strizka")}
            />
            <CategoriesUI
              path={"/CategorieUI-4-min.jpg"}
              content={"Вії та брови"}
              onClick={() => addTask("viyi-ta-brovi")}
            />
            <CategoriesUI
              path={"/CategorieUI-5-min.jpg"}
              content={"Татуаж"}
              onClick={() => addTask("tatuaz")}
            />
          </div>
        </div>
        <div className={styles.categoriesBlock2}>
          <CategoriesUI
            path={"/CategorieUI-6-min.jpg"}
            content={"Фарбування та зачіска"}
            onClick={() => addTask("farbuvannia-volossia")}
          />
          <CategoriesUI
            path={"/CategorieUI-7-min.jpg"}
            content={"Косметологія"}
            onClick={() => addTask("kosmetologiia")}
          />
        </div>
        <div className={styles.categoriesBlock3}>
          <CategoriesUI
            path={"/CategorieUI-8-min.jpg"}
            content={"Чоловіча стрижка"}
            onClick={() => addTask("colovica-strizka")}
          />
          <CategoriesUI path={"/CategorieUI-9-min.jpg"} content={"Масаж"}  onClick={() => addTask("masaz")}/>
          <CategoriesUI
            path={"/CategorieUI-10-min.jpg"}
            content={"Видалення волосся"}
            onClick={() => addTask("vidalennia-volossia")}
          />
        </div>
      </div>
    </div>
  );
};
