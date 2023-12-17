import styles from  './SubCategoryUI.module.css'
import {PropsWithChildren} from "react";
import {Link} from "react-router-dom";

export const SubCategoryUI = ({children}:PropsWithChildren) => {
	return (
		<div className={styles.container}>
			<Link to={`/`}><div className={styles.subCategory}>{children}</div></Link>
		</div>
	)
}