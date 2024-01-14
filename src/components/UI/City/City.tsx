import styles from './City.module.css'
import {PropsWithChildren} from "react";
export const City = ({children}:PropsWithChildren) => {
	return (
		<div className={styles.container}>
			{children}
		</div>
	)
}