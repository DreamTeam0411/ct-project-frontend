import styles from './Button.module.css'

import {PropsWithChildren} from "react";
export const Button = ({children}:PropsWithChildren) => {
	return (
		<div className={styles.button}>
			{children}
		</div>
	)
}