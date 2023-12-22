import styles from './SubCategoryButton.module.css'
import {PropsWithChildren} from "react";

export const SubCategoryButton = ({children}: PropsWithChildren) => {
	return (
		<div className={styles.container}>
			<button>
				{children}
			</button>
		</div>
	)
}