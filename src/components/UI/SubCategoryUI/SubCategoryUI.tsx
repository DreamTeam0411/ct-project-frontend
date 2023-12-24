import styles from  './SubCategoryUI.module.css'
import {PropsWithChildren} from "react";


export const SubCategoryUI = ({children}:PropsWithChildren) => {
	return (
		<div className={styles.container}>
			<div className={styles.subCategory}>{children}</div>
		</div>
	)
}