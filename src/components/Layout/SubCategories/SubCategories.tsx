import styles from './SubCategories.module.css'
import {CategoriesUI} from "../../UI/CategoriesUI/CategoriesUI.tsx";
import {CategoriesWideUI} from "../../UI/CategoriesUI/CategoriesWideUI.tsx";

export const SubCategories = () => {
	return (
		<div className={styles.subCategoriesBlock}>
			<div className={styles.title}>Обирайте по категоріях</div>
			<div className={styles.categories}>
			<CategoriesUI path={'/Rectangle 1.png'} content={'догляд за нігтями'}/>
			<CategoriesUI path={'/Rectangle 2.png'} content={'чоловіча стрижка'}/>
			<CategoriesUI path={'/Rectangle 3.png'} content = {'Жіноча стрижка'}/>
			<CategoriesUI path={'/Rectangle 4.png'} content = {'видалення волосся'}/>
			<CategoriesWideUI path={'/Rectangle 5.png'} content={'фарбування та зачіска'}/>
			<CategoriesWideUI path={'/Rectangle 6.png'} content={'косметологія'}/>
			<CategoriesUI path={'/Rectangle 7.png'} content={'вії та брови'}/>
			<CategoriesUI path={'/Rectangle 8.png'} content={'масаж'}/>
			<CategoriesUI path={'/Rectangle 9.png'} content={'татуаж'}/>
			<CategoriesUI path={'/Rectangle 10.png'} content={'макіяж'}/>
			</div>
		</div>
	)
}